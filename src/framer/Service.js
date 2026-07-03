var __dai_window=typeof window!=="undefined"?window:undefined;var __dai_navigator=typeof __dai_window!=="undefined"?navigator:undefined;
var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// http-url:https://framerusercontent.com/modules/zTNRcOeIT7YJMJC0rd4R/qH1rcImh7SFtcSAZ2P6X/GridDetector.js
var GridDetector_exports = {};
__export(GridDetector_exports, {
  GridDetector: () => GridDetector,
  __FramerMetadata__: () => __FramerMetadata__
});
var MODULE_NAME, GridDetector, __FramerMetadata__;
var init_GridDetector = __esm({
  "http-url:https://framerusercontent.com/modules/zTNRcOeIT7YJMJC0rd4R/qH1rcImh7SFtcSAZ2P6X/GridDetector.js"() {
    MODULE_NAME = "GridDetector";
    GridDetector = class {
      /**
      * Analyze element layout to detect grid structure
      *
      * @description
      * Main entry point for grid detection. Analyzes element positioning patterns
      * to automatically detect grid layout with dimensions and confidence scoring.
      *
      * **Algorithm Steps:**
      * 1. Extract element geometries and filter invalid elements
      * 2. Detect unique row and column positions
      * 3. Calculate grid dimensions from position patterns
      * 4. Map elements to grid positions
      * 5. Validate grid completeness and return result
      *
      * @param elements - Elements to analyze for grid structure
      * @returns Complete grid detection result with confidence scoring
      */
      analyzeLayout(elements) {
        console.log(`\u{1F50D} [${MODULE_NAME}] Analyzing layout for ${elements.length} elements`);
        if (elements.length === 0) {
          console.warn(`\u{1F50D} [${MODULE_NAME}] No elements provided for grid detection`);
          return this.createEmptyResult();
        }
        if (elements.length === 1) {
          console.log(`\u{1F50D} [${MODULE_NAME}] Single element detected, creating 1x1 grid`);
          return this.createSingleElementResult(elements[0]);
        }
        const geometries = this.extractElementGeometries(elements);
        const validGeometries = geometries.filter((g) => g !== null);
        if (validGeometries.length !== elements.length) {
          console.warn(`\u{1F50D} [${MODULE_NAME}] Some elements have invalid geometries, filtering from ${elements.length} to ${validGeometries.length}`);
        }
        if (validGeometries.length === 0) {
          console.error(`\u{1F50D} [${MODULE_NAME}] No valid geometries found`);
          return this.createEmptyResult();
        }
        return this.detectGridFromGeometries(elements, validGeometries);
      }
      /**
      * Extract element geometries with error handling
      *
      * @description
      * Safely extracts bounding rectangles from elements with fallback handling
      * for elements that can't be measured (hidden, detached, etc.).
      *
      * @param elements - Elements to extract geometries from
      * @returns Array of element geometries (null for invalid elements)
      */
      extractElementGeometries(elements) {
        return elements.map((element, index) => {
          try {
            const rect = element.getBoundingClientRect();
            if (rect.width === 0 || rect.height === 0) {
              console.warn(`\u{1F50D} [${MODULE_NAME}] Element ${index} has zero dimensions, skipping`);
              return null;
            }
            return { left: rect.left, top: rect.top, right: rect.right, bottom: rect.bottom, width: rect.width, height: rect.height };
          } catch (error) {
            console.error(`\u{1F50D} [${MODULE_NAME}] Error getting geometry for element ${index}:`, error);
            return null;
          }
        });
      }
      /**
      * Detect grid structure from validated geometries
      *
      * @description
      * Core grid detection algorithm that analyzes positioning patterns
      * to determine grid dimensions and element positions.
      *
      * @param elements - Original element array
      * @param geometries - Validated element geometries
      * @returns Complete grid detection result
      */
      detectGridFromGeometries(elements, geometries) {
        const yPositions = this.extractUniquePositions(geometries.map((g) => g.top));
        const xPositions = this.extractUniquePositions(geometries.map((g) => g.left));
        const rows = yPositions.length;
        const columns = xPositions.length;
        console.log(`\u{1F50D} [${MODULE_NAME}] Detected grid dimensions: ${rows} rows x ${columns} columns`);
        console.log(`\u{1F50D} [${MODULE_NAME}] Y positions: [${yPositions.map((y) => Math.round(y)).join(", ")}]`);
        console.log(`\u{1F50D} [${MODULE_NAME}] X positions: [${xPositions.map((x) => Math.round(x)).join(", ")}]`);
        if (rows * columns !== geometries.length) {
          console.log(`\u{1F50D} [${MODULE_NAME}] Grid dimensions (${rows}x${columns}=${rows * columns}) don't match element count (${geometries.length}). Using precise detection.`);
          return this.detectGridPrecise(elements, geometries);
        }
        const gridElements = this.mapElementsToGrid(elements, geometries, xPositions, yPositions);
        const originPoint = { x: (columns - 1) / 2, y: (rows - 1) / 2 };
        console.log(`\u{1F50D} [${MODULE_NAME}] Grid origin point: (${originPoint.x.toFixed(1)}, ${originPoint.y.toFixed(1)})`);
        return { rows, columns, elements: gridElements, originPoint, maxDistance: 0 };
      }
      /**
      * Extract unique positions with tolerance for alignment
      *
      * @description
      * Groups similar positions together to handle minor alignment differences
      * and floating point precision issues.
      *
      * @param positions - Array of position values
      * @param tolerance - Alignment tolerance in pixels
      * @returns Sorted array of unique positions
      */
      extractUniquePositions(positions, tolerance = 2) {
        if (positions.length === 0)
          return [];
        const sortedPositions = [...positions].sort((a, b) => a - b);
        const uniquePositions = [sortedPositions[0]];
        for (let i = 1; i < sortedPositions.length; i++) {
          const current = sortedPositions[i];
          const last = uniquePositions[uniquePositions.length - 1];
          if (Math.abs(current - last) > tolerance) {
            uniquePositions.push(current);
          }
        }
        return uniquePositions;
      }
      /**
      * Map elements to their grid positions
      *
      * @description
      * Assigns each element to its position in the detected grid structure
      * by finding the closest matching row and column positions.
      *
      * @param elements - Original element array
      * @param geometries - Element geometries
      * @param xPositions - Detected column positions
      * @param yPositions - Detected row positions
      * @returns Array of positioned grid elements
      */
      mapElementsToGrid(elements, geometries, xPositions, yPositions) {
        const gridElements = [];
        elements.forEach((element, index) => {
          const geometry = geometries[index];
          if (geometry) {
            const rowIndex = this.findClosestPositionIndex(geometry.top, yPositions);
            const colIndex = this.findClosestPositionIndex(geometry.left, xPositions);
            gridElements.push({ element, position: { x: colIndex, y: rowIndex }, pixelPosition: { left: geometry.left, top: geometry.top, right: geometry.right, bottom: geometry.bottom, width: geometry.width, height: geometry.height, x: geometry.left, y: geometry.top }, distance: 0, normalizedDistance: 0, index });
            console.log(`\u{1F50D} [${MODULE_NAME}] Element ${index} mapped to grid position (${colIndex},${rowIndex})`);
          }
        });
        return gridElements;
      }
      /**
      * Find closest position index for element placement
      *
      * @description
      * Finds the index of the closest position in the unique positions array
      * for accurate grid position assignment.
      *
      * @param position - Position to find closest match for
      * @param positions - Array of unique positions
      * @returns Index of closest position
      */
      findClosestPositionIndex(position, positions) {
        let closestIndex = 0;
        let minDistance = Math.abs(position - positions[0]);
        for (let i = 1; i < positions.length; i++) {
          const distance = Math.abs(position - positions[i]);
          if (distance < minDistance) {
            minDistance = distance;
            closestIndex = i;
          }
        }
        return closestIndex;
      }
      /**
      * Precise grid detection for irregular layouts
      *
      * @description
      * Advanced detection algorithm for cases where simple row/column counting
      * doesn't match element count. Uses more sophisticated analysis.
      *
      * @param elements - Original element array
      * @param geometries - Element geometries
      * @returns Precise grid detection result
      */
      detectGridPrecise(elements, geometries) {
        console.log(`\u{1F50D} [${MODULE_NAME}] Using precise grid detection for irregular layout`);
        const rowGroups = this.groupElementsByRows(geometries);
        const columnGroups = this.groupElementsByColumns(geometries);
        const rowCount = rowGroups.length;
        const columnCount = columnGroups.length;
        console.log(`\u{1F50D} [${MODULE_NAME}] Precise detection: ${rowCount} rows, ${columnCount} columns`);
        const gridElements = this.createGridElementsFromGroups(elements, geometries, rowGroups, columnGroups);
        const originPoint = { x: (columnCount - 1) / 2, y: (rowCount - 1) / 2 };
        return { rows: rowCount, columns: columnCount, elements: gridElements, originPoint, maxDistance: 0 };
      }
      /**
      * Group elements by row positions
      *
      * @description
      * Groups elements that share similar Y coordinates into rows
      * with tolerance for alignment variations.
      *
      * @param geometries - Element geometries
      * @param tolerance - Grouping tolerance in pixels
      * @returns Array of row groups
      */
      groupElementsByRows(geometries, tolerance = 5) {
        const groups = [];
        const processed = /* @__PURE__ */ new Set();
        geometries.forEach((geometry, index) => {
          if (processed.has(index))
            return;
          const group = [index];
          processed.add(index);
          geometries.forEach((otherGeometry, otherIndex) => {
            if (otherIndex !== index && !processed.has(otherIndex)) {
              if (Math.abs(geometry.top - otherGeometry.top) <= tolerance) {
                group.push(otherIndex);
                processed.add(otherIndex);
              }
            }
          });
          groups.push(group);
        });
        return groups;
      }
      /**
      * Group elements by column positions
      *
      * @description
      * Groups elements that share similar X coordinates into columns
      * with tolerance for alignment variations.
      *
      * @param geometries - Element geometries
      * @param tolerance - Grouping tolerance in pixels
      * @returns Array of column groups
      */
      groupElementsByColumns(geometries, tolerance = 5) {
        const groups = [];
        const processed = /* @__PURE__ */ new Set();
        geometries.forEach((geometry, index) => {
          if (processed.has(index))
            return;
          const group = [index];
          processed.add(index);
          geometries.forEach((otherGeometry, otherIndex) => {
            if (otherIndex !== index && !processed.has(otherIndex)) {
              if (Math.abs(geometry.left - otherGeometry.left) <= tolerance) {
                group.push(otherIndex);
                processed.add(otherIndex);
              }
            }
          });
          groups.push(group);
        });
        return groups;
      }
      /**
      * Create grid elements from row/column groups
      *
      * @description
      * Maps elements to grid positions based on precise row and column groupings
      * for irregular grid layouts.
      *
      * @param elements - Original element array
      * @param geometries - Element geometries
      * @param rowGroups - Element indices grouped by rows
      * @param columnGroups - Element indices grouped by columns
      * @returns Array of positioned grid elements
      */
      createGridElementsFromGroups(elements, geometries, rowGroups, columnGroups) {
        const gridElements = [];
        elements.forEach((element, index) => {
          const geometry = geometries[index];
          if (!geometry)
            return;
          const rowIndex = rowGroups.findIndex((group) => group.includes(index));
          const colIndex = columnGroups.findIndex((group) => group.includes(index));
          if (rowIndex !== -1 && colIndex !== -1) {
            gridElements.push({ element, position: { x: colIndex, y: rowIndex }, pixelPosition: { left: geometry.left, top: geometry.top, right: geometry.right, bottom: geometry.bottom, width: geometry.width, height: geometry.height, x: geometry.left, y: geometry.top }, distance: 0, normalizedDistance: 0, index });
          }
        });
        return gridElements;
      }
      /**
      * Create empty result for edge cases
      *
      * @description
      * Returns a safe empty result when no valid grid can be detected.
      *
      * @returns Empty grid detection result
      */
      createEmptyResult() {
        return { rows: 0, columns: 0, elements: [], originPoint: { x: 0, y: 0 }, maxDistance: 0 };
      }
      /**
      * Create single element result
      *
      * @description
      * Creates a 1x1 grid result for single element scenarios.
      *
      * @param element - Single element to create grid for
      * @returns Single element grid result
      */
      createSingleElementResult(element) {
        const rect = element.getBoundingClientRect();
        const gridElement = { element, position: { x: 0, y: 0 }, pixelPosition: rect, distance: 0, normalizedDistance: 0, index: 0 };
        return { rows: 1, columns: 1, elements: [gridElement], originPoint: { x: 0, y: 0 }, maxDistance: 0 };
      }
    };
    __FramerMetadata__ = { "exports": { "GridDetector": { "type": "class", "annotations": { "framerContractVersion": "1" } }, "__FramerMetadata__": { "type": "variable" } } };
  }
});

// http-url:https://framerusercontent.com/modules/zVlRz4Ul0PRdIfgI2SHk/eZ067KMryLHfzIMSGZb9/DistanceCalculator.js
var DistanceCalculator_exports = {};
__export(DistanceCalculator_exports, {
  DistanceCalculator: () => DistanceCalculator,
  __FramerMetadata__: () => __FramerMetadata__2
});
var MODULE_NAME2, DistanceCalculator, __FramerMetadata__2;
var init_DistanceCalculator = __esm({
  "http-url:https://framerusercontent.com/modules/zVlRz4Ul0PRdIfgI2SHk/eZ067KMryLHfzIMSGZb9/DistanceCalculator.js"() {
    MODULE_NAME2 = "DistanceCalculator";
    DistanceCalculator = class {
      /**
      * Calculate distances from origin to all elements
      *
      * @description
      * Main entry point for distance calculations. Computes distances from a specified
      * origin point to all grid elements using the selected metric, with proper
      * normalization for stagger delay calculations.
      *
      * **Algorithm Steps:**
      * 1. Calculate grid bounds in pixel coordinates
      * 2. Resolve origin point to pixel coordinates
      * 3. Calculate distance for each element using selected metric
      * 4. Normalize distances to 0-1 range for delay calculations
      * 5. Return updated grid result with distance information
      *
      * @param gridResult - Grid detection result to calculate distances for
      * @param originPoint - Origin point in grid coordinates (0-based)
      * @param metric - Distance calculation metric to use
      * @returns Updated grid result with calculated distances
      */
      calculateGridDistances(gridResult, originPoint, metric = "euclidean") {
        const { elements } = gridResult;
        if (elements.length === 0) {
          console.warn(`\u{1F50D} [${MODULE_NAME2}] No elements to calculate distances for`);
          return gridResult;
        }
        console.log(`\u{1F50D} [${MODULE_NAME2}] Calculating distances for ${elements.length} elements using ${metric} metric`);
        const gridBounds = this.calculateGridBounds(elements);
        console.log(`\u{1F50D} [${MODULE_NAME2}] Grid bounds: left=${gridBounds.left}, right=${gridBounds.right}, top=${gridBounds.top}, bottom=${gridBounds.bottom}`);
        console.log(`\u{1F50D} [${MODULE_NAME2}] Grid dimensions: ${gridBounds.width}px x ${gridBounds.height}px`);
        const originPixel = this.resolveOriginPixelCoordinates(originPoint, gridResult, gridBounds);
        console.log(`\u{1F50D} [${MODULE_NAME2}] Origin grid (${originPoint.x}, ${originPoint.y}) mapped to pixel (${originPixel.x.toFixed(1)}, ${originPixel.y.toFixed(1)})`);
        const isEdgeOrigin = this.isEdgeOrigin(originPoint, gridResult);
        let maxDistance = 0;
        elements.forEach((element) => {
          const elementCenter = this.getElementCenter(element.element);
          const distance = this.calculateDistance(originPixel, elementCenter, metric, isEdgeOrigin, originPoint, gridBounds);
          element.distance = distance;
          maxDistance = Math.max(maxDistance, distance);
          console.log(`\u{1F50D} [${MODULE_NAME2}] Element at grid (${element.position.x}, ${element.position.y}), pixel (${elementCenter.x.toFixed(1)}, ${elementCenter.y.toFixed(1)}), distance: ${distance.toFixed(1)}`);
        });
        elements.forEach((element) => {
          element.normalizedDistance = maxDistance > 0 ? element.distance / maxDistance : 0;
          console.log(`\u{1F50D} [${MODULE_NAME2}] Element at (${element.position.x}, ${element.position.y}), normalized distance: ${element.normalizedDistance.toFixed(3)}`);
        });
        return { ...gridResult, elements, maxDistance };
      }
      /**
      * Calculate distance between two points using specified metric
      *
      * @description
      * Core distance calculation function supporting multiple metrics.
      * Includes special handling for edge origins and proper metric implementations.
      *
      * @param p1 - First point (origin)
      * @param p2 - Second point (element center)
      * @param metric - Distance metric to use
      * @param isEdgeOrigin - Whether origin is at grid edge
      * @param gridOrigin - Original grid coordinates (for edge detection)
      * @param gridBounds - Grid bounds (for edge calculations)
      * @returns Calculated distance
      */
      calculateDistance(p1, p2, metric = "euclidean", isEdgeOrigin = false, gridOrigin, gridBounds) {
        const dx = p2.x - p1.x;
        const dy = p2.y - p1.y;
        switch (metric) {
          case "euclidean":
            return Math.sqrt(dx * dx + dy * dy);
          case "manhattan":
            return Math.abs(dx) + Math.abs(dy);
          case "chebyshev":
          case "max":
            return Math.max(Math.abs(dx), Math.abs(dy));
          case "min":
            if (isEdgeOrigin && gridOrigin && gridBounds) {
              return this.calculateEdgeAwareMinDistance(p1, p2, gridOrigin, gridBounds);
            }
            return Math.min(Math.abs(dx), Math.abs(dy));
          default:
            console.warn(`\u{1F50D} [${MODULE_NAME2}] Unknown distance metric: ${metric}, falling back to euclidean`);
            return Math.sqrt(dx * dx + dy * dy);
        }
      }
      /**
      * Calculate edge-aware minimum distance for better edge origin handling
      *
      * @description
      * Special distance calculation for minimum metric when origin is at an edge.
      * Uses the primary dimension distance for more intuitive stagger patterns.
      *
      * @param originPixel - Origin point in pixels
      * @param elementPixel - Element center in pixels
      * @param gridOrigin - Grid coordinates of origin
      * @param gridBounds - Grid boundary information
      * @returns Edge-aware distance
      */
      calculateEdgeAwareMinDistance(originPixel, elementPixel, gridOrigin, gridBounds) {
        const isAtLeftEdge = gridOrigin.x === 0;
        const isAtRightEdge = Math.abs(originPixel.x - gridBounds.right) < 5;
        const isAtTopEdge = gridOrigin.y === 0;
        const isAtBottomEdge = Math.abs(originPixel.y - gridBounds.bottom) < 5;
        const isVerticalCenter = Math.abs(gridOrigin.y * 2 - (gridBounds.bottom - gridBounds.top)) < 5;
        const isHorizontalCenter = Math.abs(gridOrigin.x * 2 - (gridBounds.right - gridBounds.left)) < 5;
        if ((isAtLeftEdge || isAtRightEdge) && isVerticalCenter) {
          return Math.abs(elementPixel.x - originPixel.x);
        } else if ((isAtTopEdge || isAtBottomEdge) && isHorizontalCenter) {
          return Math.abs(elementPixel.y - originPixel.y);
        }
        const dx = Math.abs(elementPixel.x - originPixel.x);
        const dy = Math.abs(elementPixel.y - originPixel.y);
        return Math.min(dx, dy);
      }
      /**
      * Check if origin point is at a grid edge
      *
      * @description
      * Determines whether the origin point is positioned at any edge of the grid
      * for special distance calculation handling.
      *
      * @param originPoint - Origin point in grid coordinates
      * @param gridResult - Grid detection result
      * @returns True if origin is at any edge
      */
      isEdgeOrigin(originPoint, gridResult) {
        const isAtLeftEdge = originPoint.x === 0;
        const isAtRightEdge = originPoint.x === gridResult.columns - 1;
        const isAtTopEdge = originPoint.y === 0;
        const isAtBottomEdge = originPoint.y === gridResult.rows - 1;
        return isAtLeftEdge || isAtRightEdge || isAtTopEdge || isAtBottomEdge;
      }
      /**
      * Calculate element center coordinates
      *
      * @description
      * Gets the center point of an element for accurate distance calculations.
      * Uses the element's bounding rectangle to find the geometric center.
      *
      * @param element - Element to get center for
      * @returns Center coordinates in pixels
      */
      getElementCenter(element) {
        const rect = element.getBoundingClientRect();
        return { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
      }
      /**
      * Calculate grid bounds from elements
      *
      * @description
      * Determines the bounding rectangle that encompasses all grid elements
      * for accurate origin coordinate resolution.
      *
      * @param elements - Grid elements to analyze
      * @returns Grid boundary rectangle with dimensions
      */
      calculateGridBounds(elements) {
        if (elements.length === 0) {
          return { left: 0, right: 0, top: 0, bottom: 0, width: 0, height: 0 };
        }
        let minX = Infinity;
        let maxX = -Infinity;
        let minY = Infinity;
        let maxY = -Infinity;
        elements.forEach((element) => {
          const rect = element.pixelPosition;
          minX = Math.min(minX, rect.left);
          maxX = Math.max(maxX, rect.left + rect.width);
          minY = Math.min(minY, rect.top);
          maxY = Math.max(maxY, rect.top + rect.height);
        });
        return { left: minX, right: maxX, top: minY, bottom: maxY, width: maxX - minX, height: maxY - minY };
      }
      /**
      * Resolve origin point to pixel coordinates
      *
      * @description
      * Converts grid-based origin coordinates to precise pixel coordinates
      * for accurate distance calculations. Handles edge cases and interpolation.
      *
      * @param originPoint - Origin point in grid coordinates
      * @param gridResult - Grid detection result
      * @param gridBounds - Grid boundary information
      * @returns Origin point in pixel coordinates
      */
      resolveOriginPixelCoordinates(originPoint, gridResult, gridBounds) {
        const { columns, rows } = gridResult;
        let originPixelX;
        let originPixelY;
        if (originPoint.x === 0) {
          originPixelX = gridBounds.left;
        } else if (originPoint.x === columns - 1) {
          originPixelX = gridBounds.right;
        } else if (originPoint.x === (columns - 1) / 2) {
          originPixelX = gridBounds.left + gridBounds.width / 2;
        } else {
          const normalizedX = originPoint.x / Math.max(1, columns - 1);
          originPixelX = gridBounds.left + normalizedX * gridBounds.width;
        }
        if (originPoint.y === 0) {
          originPixelY = gridBounds.top;
        } else if (originPoint.y === rows - 1) {
          originPixelY = gridBounds.bottom;
        } else if (originPoint.y === (rows - 1) / 2) {
          originPixelY = gridBounds.top + gridBounds.height / 2;
        } else {
          const normalizedY = originPoint.y / Math.max(1, rows - 1);
          originPixelY = gridBounds.top + normalizedY * gridBounds.height;
        }
        return { x: originPixelX, y: originPixelY };
      }
      /**
      * Normalize distances to 0-1 range
      *
      * @description
      * Scales distance array to normalized 0-1 range for delay calculations.
      * Handles edge cases like identical distances or single elements.
      *
      * @param distances - Raw distance array
      * @returns Normalized distances (0-1)
      */
      normalizeDistances(distances) {
        if (distances.length === 0)
          return [];
        const minDistance = Math.min(...distances);
        const maxDistance = Math.max(...distances);
        const range = maxDistance - minDistance;
        if (range === 0) {
          return distances.map(() => 0);
        }
        return distances.map((distance) => (distance - minDistance) / range);
      }
      /**
      * Group elements by similar distances
      *
      * @description
      * Groups elements with similar distances for simultaneous animation.
      * Uses tolerance to handle floating point precision issues.
      *
      * @param elements - Elements with calculated distances
      * @param distances - Corresponding distance array
      * @param tolerance - Grouping tolerance for floating point issues
      * @returns Map of distance groups
      */
      groupByDistance(elements, distances, tolerance = 0.01) {
        const groups = /* @__PURE__ */ new Map();
        elements.forEach((element, index) => {
          const distance = distances[index];
          const roundedDistance = Math.round(distance * 1e3) / 1e3;
          if (!groups.has(roundedDistance)) {
            groups.set(roundedDistance, []);
          }
          groups.get(roundedDistance).push(element);
        });
        return groups;
      }
      /**
      * Calculate stagger delays for timed animations
      *
      * @description
      * 🚨 FIXED: Implements progressive delay accumulation instead of total time spreading.
      * Each delay group is separated by 'amount' seconds for proper stagger timing.
      *
      * 🚀 PHASE 1A: Enhanced with proper 2D grid stagger reversal support.
      * For reverse animations, "latest" elements (farthest from origin) start first.
      *
      * **Algorithm**:
      * 1. Group elements by distance (elements at same distance animate together)
      * 2. Sort distance groups by their distance value
      * 3. 🚀 NEW: For reverse mode, flip the timing so latest elements start first
      * 4. Apply incremental delay: each group starts 'amount' seconds after previous
      * 5. Apply distribution easing to group positions
      *
      * **Forward Mode**: delay = groupIndex * amount (closest → farthest)
      * **Reverse Mode**: delay = (maxGroupIndex - groupIndex) * amount (farthest → closest)
      *
      * @param gridResult - Grid result with calculated distances
      * @param amount - Delay increment between consecutive animation groups (in seconds)
      * @param distribution - Easing function for delay distribution
      * @param isReverseAnimation - 🚀 NEW: Whether this is a reverse animation (default: false)
      * @returns Grid stagger result with corrected timing information
      */
      calculateTimedStaggerDelays(gridResult, amount, distribution = "linear", isReverseAnimation = false) {
        const { elements } = gridResult;
        if (elements.length === 0) {
          console.warn(`\u{1F50D} [${MODULE_NAME2}] No elements to calculate delays for`);
          return { elements: [], delays: [], boundaries: [] };
        }
        console.log(`\u{1F50D} [${MODULE_NAME2}] \u{1F6A8} ENHANCED: Calculating progressive stagger delays for ${elements.length} elements with ${amount}s incremental delay, reverse=${isReverseAnimation}`);
        const tolerance = 1e-3;
        const distanceGroups = /* @__PURE__ */ new Map();
        elements.forEach((element) => {
          const roundedDistance = Math.round(element.normalizedDistance * 1e3) / 1e3;
          if (!distanceGroups.has(roundedDistance)) {
            distanceGroups.set(roundedDistance, []);
          }
          distanceGroups.get(roundedDistance).push(element);
        });
        const uniqueDistances = Array.from(distanceGroups.keys()).sort((a, b) => a - b);
        console.log(`\u{1F50D} [${MODULE_NAME2}] \u{1F6A8} ENHANCED: Found ${uniqueDistances.length} unique distance groups from ${elements.length} elements`);
        const maxGroupIndex = uniqueDistances.length - 1;
        const delays = elements.map((element) => {
          const roundedDistance = Math.round(element.normalizedDistance * 1e3) / 1e3;
          const groupIndex = uniqueDistances.indexOf(roundedDistance);
          let finalDelay;
          if (distribution === "linear" || distribution === "") {
            if (isReverseAnimation) {
              finalDelay = amount * (maxGroupIndex - groupIndex);
              console.log(`\u{1F504} [${MODULE_NAME2}] \u{1F680} REVERSE: Element at (${element.position.x}, ${element.position.y}), distance group: ${groupIndex + 1}/${uniqueDistances.length}, FLIPPED to position: ${maxGroupIndex - groupIndex + 1}/${uniqueDistances.length}, reverse delay: ${finalDelay.toFixed(3)}s`);
            } else {
              finalDelay = amount * groupIndex;
              console.log(`\u{1F50D} [${MODULE_NAME2}] \u{1F6A8} FORWARD: Element at (${element.position.x}, ${element.position.y}), distance group: ${groupIndex + 1}/${uniqueDistances.length}, progressive delay: ${finalDelay.toFixed(3)}s`);
            }
          } else {
            const normalizedPosition = groupIndex / Math.max(1, uniqueDistances.length - 1);
            if (isReverseAnimation) {
              const flippedPosition = 1 - normalizedPosition;
              finalDelay = amount * (maxGroupIndex - groupIndex);
              console.log(`\u{1F504} [${MODULE_NAME2}] \u{1F680} REVERSE: Element at (${element.position.x}, ${element.position.y}), normalized position: ${normalizedPosition.toFixed(3)} \u2192 flipped: ${flippedPosition.toFixed(3)}, reverse delay: ${finalDelay.toFixed(3)}s (${distribution} distribution)`);
            } else {
              finalDelay = amount * groupIndex;
              console.log(`\u{1F50D} [${MODULE_NAME2}] \u{1F6A8} FORWARD: Element at (${element.position.x}, ${element.position.y}), normalized position: ${normalizedPosition.toFixed(3)}, progressive delay: ${finalDelay.toFixed(3)}s (${distribution} distribution)`);
            }
          }
          return finalDelay;
        });
        const elementsSortedByDelay = [...elements].map((el, idx) => ({ ...el, delay: delays[idx] })).sort((a, b) => a.delay - b.delay);
        const modeLabel = isReverseAnimation ? "\u{1F504} REVERSE" : "\u25B6\uFE0F FORWARD";
        console.log(`\u{1F50D} [${MODULE_NAME2}] \u{1F680} ENHANCED: ${modeLabel} animation order:`);
        elementsSortedByDelay.forEach((el, idx) => {
          console.log(`${idx + 1}. Element at grid (${el.position.x}, ${el.position.y}), delay: ${el.delay.toFixed(3)}s, distance: ${el.normalizedDistance.toFixed(3)}`);
        });
        const delayGroups = /* @__PURE__ */ new Map();
        elementsSortedByDelay.forEach((el) => {
          const roundedDelay = Math.round(el.delay * 1e3) / 1e3;
          if (!delayGroups.has(roundedDelay)) {
            delayGroups.set(roundedDelay, []);
          }
          delayGroups.get(roundedDelay).push(el.index);
        });
        console.log(`\u{1F50D} [${MODULE_NAME2}] \u{1F680} ENHANCED: ${modeLabel} simultaneous animation groups:`);
        Array.from(delayGroups.entries()).sort(([a], [b]) => a - b).forEach(([delay, indices]) => {
          console.log(`Delay ${delay.toFixed(3)}s: Elements [${indices.join(", ")}]`);
        });
        if (isReverseAnimation) {
          console.log(`\u{1F504} [${MODULE_NAME2}] \u{1F680} REVERSE MODE: Latest elements (farthest from origin) start first!`);
          const firstElements = elementsSortedByDelay.slice(0, Math.min(3, elementsSortedByDelay.length));
          console.log(`\u{1F504} [${MODULE_NAME2}] First to animate (latest elements):`, firstElements.map((el) => `(${el.position.x},${el.position.y})`).join(", "));
        }
        return { elements, delays, boundaries: [] };
      }
    };
    __FramerMetadata__2 = { "exports": { "DistanceCalculator": { "type": "class", "annotations": { "framerContractVersion": "1" } }, "__FramerMetadata__": { "type": "variable" } } };
  }
});

// http-url:https://framerusercontent.com/modules/LzqwhCMBskA39jhufps6/Eym8plGkUbSZzVef26dO/OriginResolver.js
var OriginResolver_exports = {};
__export(OriginResolver_exports, {
  OriginResolver: () => OriginResolver,
  __FramerMetadata__: () => __FramerMetadata__3
});
var MODULE_NAME3, OriginResolver, __FramerMetadata__3;
var init_OriginResolver = __esm({
  "http-url:https://framerusercontent.com/modules/LzqwhCMBskA39jhufps6/Eym8plGkUbSZzVef26dO/OriginResolver.js"() {
    MODULE_NAME3 = "OriginResolver";
    OriginResolver = class {
      /**
      * Resolve origin coordinates for stagger calculations
      *
      * @description
      * Main entry point for origin resolution. Converts origin type string
      * to precise grid coordinates for distance calculations.
      *
      * **Algorithm Steps:**
      * 1. Validate input parameters and grid result
      * 2. Handle special cases (empty grid, single element)
      * 3. Calculate grid bounds and dimensions
      * 4. Resolve origin type to grid coordinates
      * 5. Validate and return final origin point
      *
      * @param gridResult - Grid detection result with positioned elements
      * @param originType - Type of origin point to resolve
      * @returns Precise origin coordinates in grid space
      */
      resolveOrigin(gridResult, originType) {
        console.log(`\u{1F50D} [${MODULE_NAME3}] Resolving origin "${originType}" for grid ${gridResult.rows}x${gridResult.columns}`);
        if (!gridResult || gridResult.elements.length === 0) {
          console.warn(`\u{1F50D} [${MODULE_NAME3}] Empty grid result, using default origin (0, 0)`);
          return { x: 0, y: 0 };
        }
        const { rows, columns, elements } = gridResult;
        if (elements.length === 1) {
          console.log(`\u{1F50D} [${MODULE_NAME3}] Single element grid, using element position`);
          return { x: 0, y: 0 };
        }
        const normalizedOrigin = this.normalizeOriginString(originType);
        console.log(`\u{1F50D} [${MODULE_NAME3}] Normalized origin: "${normalizedOrigin}"`);
        let result;
        switch (normalizedOrigin) {
          case "center":
            result = this.calculateCenterOrigin(rows, columns);
            console.log(`\u{1F50D} [${MODULE_NAME3}] CENTER origin resolved to (${result.x.toFixed(2)}, ${result.y.toFixed(2)})`);
            break;
          case "top-left":
            result = { x: 0, y: 0 };
            console.log(`\u{1F50D} [${MODULE_NAME3}] TOP_LEFT origin resolved to (${result.x}, ${result.y})`);
            break;
          case "top-center":
            result = { x: (columns - 1) / 2, y: 0 };
            console.log(`\u{1F50D} [${MODULE_NAME3}] TOP_CENTER origin resolved to (${result.x.toFixed(2)}, ${result.y})`);
            break;
          case "top-right":
            result = { x: columns - 1, y: 0 };
            console.log(`\u{1F50D} [${MODULE_NAME3}] TOP_RIGHT origin resolved to (${result.x}, ${result.y})`);
            break;
          case "center-left":
            result = { x: 0, y: (rows - 1) / 2 };
            console.log(`\u{1F50D} [${MODULE_NAME3}] CENTER_LEFT origin resolved to (${result.x}, ${result.y.toFixed(2)})`);
            break;
          case "center-right":
            result = { x: columns - 1, y: (rows - 1) / 2 };
            console.log(`\u{1F50D} [${MODULE_NAME3}] CENTER_RIGHT origin resolved to (${result.x}, ${result.y.toFixed(2)})`);
            break;
          case "bottom-left":
            result = { x: 0, y: rows - 1 };
            console.log(`\u{1F50D} [${MODULE_NAME3}] BOTTOM_LEFT origin resolved to (${result.x}, ${result.y})`);
            break;
          case "bottom-center":
            result = { x: (columns - 1) / 2, y: rows - 1 };
            console.log(`\u{1F50D} [${MODULE_NAME3}] BOTTOM_CENTER origin resolved to (${result.x.toFixed(2)}, ${result.y})`);
            break;
          case "bottom-right":
            result = { x: columns - 1, y: rows - 1 };
            console.log(`\u{1F50D} [${MODULE_NAME3}] BOTTOM_RIGHT origin resolved to (${result.x}, ${result.y})`);
            break;
          case "first":
            result = this.calculateFirstElementOrigin(elements);
            console.log(`\u{1F50D} [${MODULE_NAME3}] FIRST origin resolved to element at (${result.x}, ${result.y})`);
            break;
          case "last":
            result = this.calculateLastElementOrigin(elements, rows, columns);
            console.log(`\u{1F50D} [${MODULE_NAME3}] LAST origin resolved to element at (${result.x}, ${result.y})`);
            break;
          case "random":
            result = this.calculateRandomOrigin(elements, rows, columns);
            console.log(`\u{1F50D} [${MODULE_NAME3}] RANDOM origin resolved to (${result.x}, ${result.y})`);
            break;
          default:
            console.warn(`\u{1F50D} [${MODULE_NAME3}] Unknown origin type: "${normalizedOrigin}", falling back to center`);
            result = this.calculateCenterOrigin(rows, columns);
            break;
        }
        return this.validateOrigin(result, rows, columns);
      }
      /**
      * Normalize origin string to handle case variations
      *
      * @description
      * Converts various origin string formats to standardized lowercase format
      * for consistent processing.
      *
      * @param originType - Origin type string (any case)
      * @returns Normalized origin string
      */
      normalizeOriginString(originType) {
        if (typeof originType !== "string") {
          return "center";
        }
        return originType.toLowerCase().trim();
      }
      /**
      * Calculate center origin point
      *
      * @description
      * Calculates the geometric center of the grid for natural radial staggering.
      * Handles both even and odd grid dimensions properly.
      *
      * @param rows - Number of grid rows
      * @param columns - Number of grid columns
      * @returns Center coordinates
      */
      calculateCenterOrigin(rows, columns) {
        const centerX = (columns - 1) / 2;
        const centerY = (rows - 1) / 2;
        return { x: centerX, y: centerY };
      }
      /**
      * Calculate first element origin point
      *
      * @description
      * Uses the position of the first element in the grid as origin.
      * Provides consistent starting point for element-based staggering.
      *
      * @param elements - Grid elements array
      * @returns First element coordinates
      */
      calculateFirstElementOrigin(elements) {
        if (elements.length === 0) {
          return { x: 0, y: 0 };
        }
        const firstElement = elements[0];
        return { x: firstElement.position.x, y: firstElement.position.y };
      }
      /**
      * Calculate last element origin point
      *
      * @description
      * Uses the position of the last element in the grid as origin.
      * Falls back to bottom-right corner if no elements available.
      *
      * @param elements - Grid elements array
      * @param rows - Number of grid rows
      * @param columns - Number of grid columns
      * @returns Last element coordinates
      */
      calculateLastElementOrigin(elements, rows, columns) {
        if (elements.length === 0) {
          return { x: columns - 1, y: rows - 1 };
        }
        const lastElement = elements[elements.length - 1];
        return { x: lastElement.position.x, y: lastElement.position.y };
      }
      /**
      * Calculate random element origin point
      *
      * @description
      * Selects a random element position as origin for unpredictable stagger patterns.
      * Falls back to random coordinates if no elements available.
      *
      * @param elements - Grid elements array
      * @param rows - Number of grid rows
      * @param columns - Number of grid columns
      * @returns Random element coordinates
      */
      calculateRandomOrigin(elements, rows, columns) {
        if (elements.length === 0) {
          return { x: Math.floor(Math.random() * columns), y: Math.floor(Math.random() * rows) };
        }
        const randomIndex = Math.floor(Math.random() * elements.length);
        const randomElement = elements[randomIndex];
        console.log(`\u{1F50D} [${MODULE_NAME3}] Selected random element ${randomIndex} from ${elements.length} elements`);
        return { x: randomElement.position.x, y: randomElement.position.y };
      }
      /**
      * Calculate edge midpoint origins
      *
      * @description
      * Calculates midpoint coordinates for grid edges, useful for
      * linear stagger effects from edge centers.
      *
      * @param edge - Edge type (top, right, bottom, left)
      * @param rows - Number of grid rows
      * @param columns - Number of grid columns
      * @returns Edge midpoint coordinates
      */
      calculateEdgeOrigin(edge, rows, columns) {
        switch (edge.toLowerCase()) {
          case "top":
            return { x: (columns - 1) / 2, y: 0 };
          case "right":
            return { x: columns - 1, y: (rows - 1) / 2 };
          case "bottom":
            return { x: (columns - 1) / 2, y: rows - 1 };
          case "left":
            return { x: 0, y: (rows - 1) / 2 };
          default:
            console.warn(`\u{1F50D} [${MODULE_NAME3}] Unknown edge type: "${edge}", falling back to center`);
            return this.calculateCenterOrigin(rows, columns);
        }
      }
      /**
      * Validate origin coordinates
      *
      * @description
      * Ensures origin coordinates are within valid grid bounds.
      * Clamps values to grid boundaries and provides fallback handling.
      *
      * @param origin - Calculated origin coordinates
      * @param rows - Number of grid rows
      * @param columns - Number of grid columns
      * @returns Validated origin coordinates
      */
      validateOrigin(origin, rows, columns) {
        const clampedX = Math.max(0, Math.min(columns - 1, origin.x));
        const clampedY = Math.max(0, Math.min(rows - 1, origin.y));
        if (clampedX !== origin.x || clampedY !== origin.y) {
          console.warn(`\u{1F50D} [${MODULE_NAME3}] Origin coordinates (${origin.x}, ${origin.y}) clamped to (${clampedX}, ${clampedY}) to fit grid bounds`);
        }
        return { x: clampedX, y: clampedY };
      }
      /**
      * Find closest grid element to target element
      *
      * @description
      * Future feature: Finds the grid element closest to a target element
      * for pointer-based or element-relative origin calculations.
      *
      * @param targetElement - Target element to find closest grid element to
      * @param gridResult - Grid detection result
      * @returns Position of closest grid element
      */
      findClosestGridElementToTarget(targetElement, gridResult) {
        const { elements, rows, columns } = gridResult;
        if (!elements || elements.length === 0) {
          console.warn(`\u{1F50D} [${MODULE_NAME3}] No grid elements found, using default position`);
          return { x: 0, y: 0 };
        }
        if (!targetElement || !targetElement.getBoundingClientRect) {
          console.warn(`\u{1F50D} [${MODULE_NAME3}] Invalid target element, using center position`);
          return { x: (columns - 1) / 2, y: (rows - 1) / 2 };
        }
        try {
          const targetRect = targetElement.getBoundingClientRect();
          const targetCenterX = targetRect.left + targetRect.width / 2;
          const targetCenterY = targetRect.top + targetRect.height / 2;
          let closestElement = null;
          let closestDistance = Infinity;
          for (const element of elements) {
            const rect = element.pixelPosition;
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const dx = centerX - targetCenterX;
            const dy = centerY - targetCenterY;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < closestDistance) {
              closestDistance = distance;
              closestElement = element;
            }
          }
          if (closestElement) {
            console.log(`\u{1F50D} [${MODULE_NAME3}] Found closest grid element at (${closestElement.position.x}, ${closestElement.position.y}), distance=${closestDistance.toFixed(1)}px`);
            return { x: closestElement.position.x, y: closestElement.position.y };
          }
        } catch (error) {
          console.error(`\u{1F50D} [${MODULE_NAME3}] Error finding closest grid element: ${error}`);
        }
        console.warn(`\u{1F50D} [${MODULE_NAME3}] Could not find closest grid element, using center position`);
        return { x: (columns - 1) / 2, y: (rows - 1) / 2 };
      }
      /**
      * Convert mouse position to grid coordinates
      *
      * @description
      * Future feature: Converts mouse/pointer coordinates to grid space
      * for interactive origin selection.
      *
      * @param mouseEvent - Mouse event with position data
      * @param gridResult - Grid detection result
      * @returns Grid coordinates from mouse position
      */
      convertMousePositionToGridCoordinates(mouseEvent, gridResult) {
        const { elements, rows, columns } = gridResult;
        if (!elements || elements.length === 0 || !mouseEvent) {
          console.warn(`\u{1F50D} [${MODULE_NAME3}] No grid elements or mouse event, using center position`);
          return { x: (columns - 1) / 2, y: (rows - 1) / 2 };
        }
        try {
          const mouseX = mouseEvent.clientX;
          const mouseY = mouseEvent.clientY;
          if (mouseX === void 0 || mouseY === void 0) {
            console.warn(`\u{1F50D} [${MODULE_NAME3}] Invalid mouse position, using center position`);
            return { x: (columns - 1) / 2, y: (rows - 1) / 2 };
          }
          console.log(`\u{1F50D} [${MODULE_NAME3}] Mouse position: (${mouseX}, ${mouseY})`);
          const gridBounds = this.calculateGridBounds(elements);
          const relativeX = (mouseX - gridBounds.left) / gridBounds.width;
          const relativeY = (mouseY - gridBounds.top) / gridBounds.height;
          const gridX = Math.max(0, Math.min(columns - 1, relativeX * (columns - 1)));
          const gridY = Math.max(0, Math.min(rows - 1, relativeY * (rows - 1)));
          console.log(`\u{1F50D} [${MODULE_NAME3}] Mouse mapped to grid coordinates: (${gridX.toFixed(2)}, ${gridY.toFixed(2)})`);
          return { x: gridX, y: gridY };
        } catch (error) {
          console.error(`\u{1F50D} [${MODULE_NAME3}] Error converting mouse position: ${error}`);
          return { x: (columns - 1) / 2, y: (rows - 1) / 2 };
        }
      }
      /**
      * Calculate grid bounds from elements
      *
      * @description
      * Helper method to determine the bounding rectangle of all grid elements
      * for coordinate mapping calculations.
      *
      * @param elements - Grid elements to analyze
      * @returns Grid boundary information
      */
      calculateGridBounds(elements) {
        if (elements.length === 0) {
          return { left: 0, right: 0, top: 0, bottom: 0, width: 0, height: 0 };
        }
        let minX = Infinity;
        let maxX = -Infinity;
        let minY = Infinity;
        let maxY = -Infinity;
        elements.forEach((element) => {
          const rect = element.pixelPosition;
          minX = Math.min(minX, rect.left);
          maxX = Math.max(maxX, rect.left + rect.width);
          minY = Math.min(minY, rect.top);
          maxY = Math.max(maxY, rect.top + rect.height);
        });
        return { left: minX, right: maxX, top: minY, bottom: maxY, width: maxX - minX, height: maxY - minY };
      }
    };
    __FramerMetadata__3 = { "exports": { "OriginResolver": { "type": "class", "annotations": { "framerContractVersion": "1" } }, "__FramerMetadata__": { "type": "variable" } } };
  }
});

// http-url:https://framerusercontent.com/modules/hQvEBJ2sVgcSU2LBCP05/e5HVcYvdIVJhs3BYrEfc/RowStaggerCalculator.js
var RowStaggerCalculator_exports = {};
__export(RowStaggerCalculator_exports, {
  RowStaggerCalculator: () => RowStaggerCalculator,
  __FramerMetadata__: () => __FramerMetadata__4
});
var MODULE_NAME4, RowStaggerCalculator, __FramerMetadata__4;
var init_RowStaggerCalculator = __esm({
  "http-url:https://framerusercontent.com/modules/hQvEBJ2sVgcSU2LBCP05/e5HVcYvdIVJhs3BYrEfc/RowStaggerCalculator.js"() {
    MODULE_NAME4 = "RowStaggerCalculator";
    RowStaggerCalculator = class {
      /**
      * Calculate delays for row-based wave animations
      *
      * @description
      * Main entry point for row wave calculations. Groups elements by row,
      * determines row order based on direction, and applies progressive delays.
      *
      * **Algorithm Steps:**
      * 1. Group elements by row index
      * 2. Calculate row animation order based on direction
      * 3. Assign same delay to all elements in each row
      * 4. Apply progressive delays between rows
      *
      * @param gridResult - Grid detection result
      * @param direction - Row wave direction
      * @param staggerAmount - Delay between rows (in seconds)
      * @returns Stagger result with row-based timing
      */
      calculateRowWaveDelays(gridResult, direction, staggerAmount) {
        console.log(`\u{1F30A} [${MODULE_NAME4}] Calculating row wave delays: ${direction}, amount: ${staggerAmount}s`);
        const { elements, rows } = gridResult;
        if (elements.length === 0) {
          console.warn(`\u{1F6A7} [${MODULE_NAME4}] No elements to calculate delays for`);
          return { elements: [], delays: [], boundaries: [] };
        }
        if (rows === 0) {
          console.warn(`\u{1F6A7} [${MODULE_NAME4}] Invalid grid detected (0 rows)`);
          return { elements: [], delays: [], boundaries: [] };
        }
        const rowGroups = this.groupElementsByRow(elements);
        console.log(`\u{1F30A} [${MODULE_NAME4}] Grouped ${elements.length} elements into ${rowGroups.size} rows`);
        const rowOrder = this.calculateRowOrder(rows, direction);
        console.log(`\u{1F30A} [${MODULE_NAME4}] Row order for ${direction}: [${rowOrder.join(", ")}]`);
        const result = this.applyRowDelays(rowGroups, rowOrder, staggerAmount);
        console.log(`\u{1F30A} [${MODULE_NAME4}] Applied delays to ${result.elements.length} elements`);
        return result;
      }
      /**
      * Group elements by their row index
      *
      * @description
      * Organizes grid elements into Map grouped by row index.
      * Each row contains all elements at that vertical position.
      *
      * @param elements - Array of grid elements
      * @returns Map with row index as key, elements array as value
      */
      groupElementsByRow(elements) {
        const rowGroups = /* @__PURE__ */ new Map();
        elements.forEach((element) => {
          const rowIndex = element.position.y;
          if (!rowGroups.has(rowIndex)) {
            rowGroups.set(rowIndex, []);
          }
          rowGroups.get(rowIndex).push(element);
        });
        rowGroups.forEach((rowElements) => {
          rowElements.sort((a, b) => a.position.x - b.position.x);
        });
        return rowGroups;
      }
      /**
      * Calculate row animation order based on direction
      *
      * @description
      * Determines the sequence in which rows should animate based on the
      * specified wave direction. Handles special cases like center-out and edges-in.
      *
      * @param rows - Total number of rows in grid
      * @param direction - Row wave direction
      * @returns Array of row indices in animation order
      */
      calculateRowOrder(rows, direction) {
        switch (direction) {
          case "top-to-bottom":
            return Array.from({ length: rows }, (_, i) => i);
          case "bottom-to-top":
            return Array.from({ length: rows }, (_, i) => rows - 1 - i);
          case "center-out-rows":
            return this.calculateCenterOutRowOrder(rows);
          case "edges-in-rows":
            return this.calculateEdgesInRowOrder(rows);
          default:
            console.warn(`\u{1F6A7} [${MODULE_NAME4}] Unknown row direction: ${direction}, falling back to top-to-bottom`);
            return Array.from({ length: rows }, (_, i) => i);
        }
      }
      /**
      * Calculate center-out row order
      *
      * @description
      * Creates a row order that starts from the center row(s) and expands
      * outward to the top and bottom edges. Handles both odd and even row counts.
      *
      * **Algorithm:**
      * - Odd rows: Start with exact center, then alternate expanding out
      * - Even rows: Start with two center rows, then alternate expanding out
      *
      * @param rows - Total number of rows
      * @returns Row indices in center-out order
      */
      calculateCenterOutRowOrder(rows) {
        const order = [];
        const centerRow = Math.floor((rows - 1) / 2);
        if (rows % 2 === 1) {
          order.push(centerRow);
          for (let offset = 1; offset <= centerRow; offset++) {
            if (centerRow + offset < rows) {
              order.push(centerRow + offset);
            }
            if (centerRow - offset >= 0) {
              order.push(centerRow - offset);
            }
          }
        } else {
          const lowerCenter = Math.floor(rows / 2) - 1;
          const upperCenter = Math.floor(rows / 2);
          order.push(lowerCenter, upperCenter);
          for (let offset = 1; offset < rows / 2; offset++) {
            if (upperCenter + offset < rows) {
              order.push(upperCenter + offset);
            }
            if (lowerCenter - offset >= 0) {
              order.push(lowerCenter - offset);
            }
          }
        }
        return order;
      }
      /**
      * Calculate edges-in row order
      *
      * @description
      * Creates a row order that starts from the top and bottom edges
      * and converges toward the center. Creates a "pincer" wave effect.
      *
      * @param rows - Total number of rows
      * @returns Row indices in edges-in order
      */
      calculateEdgesInRowOrder(rows) {
        const order = [];
        let topIndex = 0;
        let bottomIndex = rows - 1;
        while (topIndex <= bottomIndex) {
          if (topIndex === bottomIndex) {
            order.push(topIndex);
            break;
          } else {
            order.push(topIndex, bottomIndex);
          }
          topIndex++;
          bottomIndex--;
        }
        return order;
      }
      /**
      * Apply calculated delays to row groups
      *
      * @description
      * Takes the row groups and order sequence, applies progressive delays
      * to create the final wave animation timing. For center-out and edges-in patterns,
      * elements at the same distance get simultaneous timing.
      *
      * @param rowGroups - Elements grouped by row
      * @param rowOrder - Sequence of row indices
      * @param staggerAmount - Delay between distance groups (in seconds)
      * @returns Complete stagger result with timing
      */
      applyRowDelays(rowGroups, rowOrder, staggerAmount) {
        const elements = [];
        const delays = [];
        const distanceGroups = this.groupRowsByDistance(rowOrder);
        distanceGroups.forEach((rowIndices, distanceIndex) => {
          const delay = distanceIndex * staggerAmount;
          rowIndices.forEach((rowIndex) => {
            const rowElements = rowGroups.get(rowIndex) || [];
            rowElements.forEach((element) => {
              elements.push(element);
              delays.push(delay);
            });
            console.log(`\u{1F30A} [${MODULE_NAME4}] Row ${rowIndex} (${rowElements.length} elements) \u2192 ${delay.toFixed(3)}s delay [distance group ${distanceIndex}]`);
          });
        });
        return { elements, delays, boundaries: [] };
      }
      /**
      * Group rows by their animation distance for simultaneous timing
      *
      * @description
      * For center-out and edges-in patterns, groups rows that should animate
      * simultaneously (at same distance from origin). For linear patterns,
      * each row gets its own group.
      *
      * @param rowOrder - Sequence of row indices
      * @returns Map of distance groups containing row indices
      */
      groupRowsByDistance(rowOrder) {
        const distanceGroups = /* @__PURE__ */ new Map();
        if (this.isSymmetricPattern(rowOrder)) {
          const distanceMap = this.calculateDistanceMap(rowOrder);
          distanceMap.forEach((distance, rowIndex) => {
            if (!distanceGroups.has(distance)) {
              distanceGroups.set(distance, []);
            }
            distanceGroups.get(distance).push(rowIndex);
          });
          console.log(`\u{1F30A} [${MODULE_NAME4}] Distance groups:`, Array.from(distanceGroups.entries()));
        } else {
          rowOrder.forEach((rowIndex, orderIndex) => {
            distanceGroups.set(orderIndex, [rowIndex]);
          });
        }
        return distanceGroups;
      }
      /**
      * Calculate distance map for rows based on pattern type
      *
      * @description
      * Calculates the animation distance for each row based on whether
      * it's center-out or edges-in pattern.
      *
      * @param rowOrder - Sequence of row indices
      * @returns Map of row index to distance value
      */
      calculateDistanceMap(rowOrder) {
        const distanceMap = /* @__PURE__ */ new Map();
        const totalRows = Math.max(...rowOrder) + 1;
        const isCenterOut = this.isCenterOutPattern(rowOrder, totalRows);
        if (isCenterOut) {
          const center = Math.floor((totalRows - 1) / 2);
          rowOrder.forEach((rowIndex) => {
            const distance = Math.abs(rowIndex - center);
            distanceMap.set(rowIndex, distance);
          });
          console.log(`\u{1F30A} [${MODULE_NAME4}] Center-out pattern, center=${center}`);
        } else {
          rowOrder.forEach((rowIndex) => {
            const distance = Math.min(rowIndex, totalRows - 1 - rowIndex);
            distanceMap.set(rowIndex, distance);
          });
          console.log(`\u{1F30A} [${MODULE_NAME4}] Edges-in pattern`);
        }
        return distanceMap;
      }
      /**
      * Check if the pattern is center-out (vs edges-in)
      *
      * @param rowOrder - Row order sequence
      * @param totalRows - Total number of rows
      * @returns True if center-out pattern
      */
      isCenterOutPattern(rowOrder, totalRows) {
        if (rowOrder.length === 0)
          return false;
        const center = Math.floor((totalRows - 1) / 2);
        const firstRow = rowOrder[0];
        return Math.abs(firstRow - center) <= 0.5;
      }
      /**
      * Check if row order represents a symmetric pattern (center-out or edges-in)
      *
      * @param rowOrder - Row order sequence
      * @returns True if pattern is symmetric
      */
      isSymmetricPattern(rowOrder) {
        if (rowOrder.length < 3)
          return false;
        const totalRows = Math.max(...rowOrder) + 1;
        const center = Math.floor((totalRows - 1) / 2);
        const firstRow = rowOrder[0];
        const isCenterOut = Math.abs(firstRow - center) <= 0.5;
        const isEdgesIn = firstRow === 0 || firstRow === totalRows - 1;
        return isCenterOut || isEdgesIn;
      }
    };
    __FramerMetadata__4 = { "exports": { "RowStaggerCalculator": { "type": "class", "annotations": { "framerContractVersion": "1" } }, "__FramerMetadata__": { "type": "variable" } } };
  }
});

// http-url:https://framerusercontent.com/modules/1r3UJ2LtINQKD15k5XPf/DPPiE14AxVocHDm18fsc/ColumnStaggerCalculator.js
var ColumnStaggerCalculator_exports = {};
__export(ColumnStaggerCalculator_exports, {
  ColumnStaggerCalculator: () => ColumnStaggerCalculator,
  __FramerMetadata__: () => __FramerMetadata__5
});
var MODULE_NAME5, ColumnStaggerCalculator, __FramerMetadata__5;
var init_ColumnStaggerCalculator = __esm({
  "http-url:https://framerusercontent.com/modules/1r3UJ2LtINQKD15k5XPf/DPPiE14AxVocHDm18fsc/ColumnStaggerCalculator.js"() {
    MODULE_NAME5 = "ColumnStaggerCalculator";
    ColumnStaggerCalculator = class {
      /**
      * Calculate delays for column-based wave animations
      *
      * @description
      * Main entry point for column wave calculations. Groups elements by column,
      * determines column order based on direction, and applies progressive delays.
      *
      * **Algorithm Steps:**
      * 1. Group elements by column index or tolerance-based pixel position
      * 2. Calculate column animation order based on direction
      * 3. Assign same delay to all elements in each column
      * 4. Apply progressive delays between columns
      *
      * **🆕 Enhanced for Phase 1B: Word-Based Grid Column Alignment**
      * - Uses tolerance-based grouping for text elements (words)
      * - Groups words by approximate x-position rather than exact alignment
      * - Fallback to exact column index grouping for perfect grids
      *
      * @param gridResult - Grid detection result
      * @param direction - Column wave direction
      * @param staggerAmount - Delay between columns (in seconds)
      * @param tolerance - Pixel tolerance for grouping similar x-positions (default: 10px)
      * @returns Stagger result with column-based timing
      */
      calculateColumnWaveDelays(gridResult, direction, staggerAmount, tolerance = 10) {
        console.log(`\u{1F30A} [${MODULE_NAME5}] Calculating column wave delays: ${direction}, amount: ${staggerAmount}s, tolerance: ${tolerance}px`);
        const { elements, columns } = gridResult;
        if (elements.length === 0) {
          console.warn(`\u{1F6A7} [${MODULE_NAME5}] No elements to calculate delays for`);
          return { elements: [], delays: [], boundaries: [] };
        }
        if (columns === 0) {
          console.warn(`\u{1F6A7} [${MODULE_NAME5}] Invalid grid detected (0 columns)`);
          return { elements: [], delays: [], boundaries: [] };
        }
        const columnGroups = this.groupElementsByColumnTolerance(elements, tolerance);
        console.log(`\u{1F30A} [${MODULE_NAME5}] Grouped ${elements.length} elements into ${columnGroups.size} tolerance-based columns`);
        const detectedColumns = columnGroups.size;
        const columnOrder = this.calculateColumnOrder(detectedColumns, direction);
        console.log(`\u{1F30A} [${MODULE_NAME5}] Column order for ${direction}: [${columnOrder.join(", ")}] (${detectedColumns} detected columns)`);
        const result = this.applyToleranceBasedColumnDelays(columnGroups, columnOrder, staggerAmount);
        console.log(`\u{1F30A} [${MODULE_NAME5}] Applied delays to ${result.elements.length} elements with tolerance-based grouping`);
        return result;
      }
      /**
      * Group elements by their column index
      *
      * @description
      * Organizes grid elements into Map grouped by column index.
      * Each column contains all elements at that horizontal position.
      *
      * @param elements - Array of grid elements
      * @returns Map with column index as key, elements array as value
      *
      * @deprecated Use groupElementsByColumnTolerance() for better text handling
      */
      groupElementsByColumn(elements) {
        const columnGroups = /* @__PURE__ */ new Map();
        elements.forEach((element) => {
          const columnIndex = element.position.x;
          if (!columnGroups.has(columnIndex)) {
            columnGroups.set(columnIndex, []);
          }
          columnGroups.get(columnIndex).push(element);
        });
        columnGroups.forEach((columnElements) => {
          columnElements.sort((a, b) => a.position.y - b.position.y);
        });
        return columnGroups;
      }
      /**
      * 🆕 Group elements by approximate x-position with tolerance
      *
      * @description
      * **Phase 1B Implementation: Word-Based Grid Column Alignment**
      *
      * Groups grid elements by their actual pixel x-position with tolerance,
      * rather than exact grid column indices. This solves the issue where
      * text elements (words) don't align perfectly in columns.
      *
      * **Algorithm:**
      * 1. Extract unique x-positions with tolerance grouping
      * 2. Assign each element to closest column group
      * 3. Sort elements within each column by y-position
      *
      * **Use Cases:**
      * - Text animations where words have slight horizontal offset
      * - Irregular layouts that don't align perfectly
      * - Any layout where visual columns matter more than grid indices
      *
      * @param elements - Array of grid elements
      * @param tolerance - Pixel tolerance for grouping (default: 10px)
      * @returns Map with column group index as key, elements array as value
      *
      * @since Phase 1B - Word-Based Grid Column Alignment
      */
      groupElementsByColumnTolerance(elements, tolerance = 10) {
        console.log(`\u{1F30A} [${MODULE_NAME5}] Grouping ${elements.length} elements by x-position with ${tolerance}px tolerance`);
        if (elements.length === 0) {
          return /* @__PURE__ */ new Map();
        }
        const xPositions = elements.map((el) => el.pixelPosition.left);
        const uniqueXPositions = this.extractUniqueXPositions(xPositions, tolerance);
        console.log(`\u{1F30A} [${MODULE_NAME5}] Detected ${uniqueXPositions.length} unique column positions: [${uniqueXPositions.map((x) => Math.round(x)).join(", ")}]`);
        const columnGroups = /* @__PURE__ */ new Map();
        for (let i = 0; i < uniqueXPositions.length; i++) {
          columnGroups.set(i, []);
        }
        elements.forEach((element) => {
          const elementX = element.pixelPosition.left;
          const closestColumnIndex = this.findClosestColumnIndex(elementX, uniqueXPositions);
          columnGroups.get(closestColumnIndex).push(element);
        });
        columnGroups.forEach((columnElements) => {
          columnElements.sort((a, b) => a.pixelPosition.top - b.pixelPosition.top);
        });
        columnGroups.forEach((columnElements, columnIndex) => {
          const avgX = Math.round(columnElements.reduce((sum, el) => sum + el.pixelPosition.left, 0) / columnElements.length);
          console.log(`\u{1F30A} [${MODULE_NAME5}] Column ${columnIndex}: ${columnElements.length} elements, avg x-position: ${avgX}px`);
        });
        return columnGroups;
      }
      /**
      * Extract unique x-positions with tolerance grouping
      *
      * @description
      * Groups similar x-positions together to handle minor alignment differences.
      * Based on the same algorithm used in GridDetector.extractUniquePositions().
      *
      * @param positions - Array of x-positions to group
      * @param tolerance - Pixel tolerance for grouping
      * @returns Array of unique x-positions (group representatives)
      */
      extractUniqueXPositions(positions, tolerance) {
        if (positions.length === 0)
          return [];
        const sortedPositions = [...positions].sort((a, b) => a - b);
        const uniquePositions = [sortedPositions[0]];
        for (let i = 1; i < sortedPositions.length; i++) {
          const current = sortedPositions[i];
          const last = uniquePositions[uniquePositions.length - 1];
          if (Math.abs(current - last) > tolerance) {
            uniquePositions.push(current);
          }
        }
        return uniquePositions;
      }
      /**
      * Find closest column index for element assignment
      *
      * @description
      * Finds the index of the closest unique x-position for accurate
      * column group assignment.
      *
      * @param elementX - Element's x-position
      * @param uniqueXPositions - Array of unique column x-positions
      * @returns Index of closest column group
      */
      findClosestColumnIndex(elementX, uniqueXPositions) {
        let closestIndex = 0;
        let minDistance = Math.abs(elementX - uniqueXPositions[0]);
        for (let i = 1; i < uniqueXPositions.length; i++) {
          const distance = Math.abs(elementX - uniqueXPositions[i]);
          if (distance < minDistance) {
            minDistance = distance;
            closestIndex = i;
          }
        }
        return closestIndex;
      }
      /**
      * Calculate column animation order based on direction
      *
      * @description
      * Determines the sequence in which columns should animate based on the
      * specified wave direction. Handles special cases like center-out and edges-in.
      *
      * @param columns - Total number of columns in grid
      * @param direction - Column wave direction
      * @returns Array of column indices in animation order
      */
      calculateColumnOrder(columns, direction) {
        switch (direction) {
          case "left-to-right":
            return Array.from({ length: columns }, (_, i) => i);
          case "right-to-left":
            return Array.from({ length: columns }, (_, i) => columns - 1 - i);
          case "center-out-columns":
            return this.calculateCenterOutColumnOrder(columns);
          case "edges-in-columns":
            return this.calculateEdgesInColumnOrder(columns);
          default:
            console.warn(`\u{1F6A7} [${MODULE_NAME5}] Unknown column direction: ${direction}, falling back to left-to-right`);
            return Array.from({ length: columns }, (_, i) => i);
        }
      }
      /**
      * Calculate center-out column order
      *
      * @description
      * Creates a column order that starts from the center column(s) and expands
      * outward to the left and right edges. Handles both odd and even column counts.
      *
      * **Algorithm:**
      * - Odd columns: Start with exact center, then alternate expanding out
      * - Even columns: Start with two center columns, then alternate expanding out
      *
      * @param columns - Total number of columns
      * @returns Column indices in center-out order
      */
      calculateCenterOutColumnOrder(columns) {
        const order = [];
        const centerColumn = Math.floor((columns - 1) / 2);
        if (columns % 2 === 1) {
          order.push(centerColumn);
          for (let offset = 1; offset <= centerColumn; offset++) {
            if (centerColumn + offset < columns) {
              order.push(centerColumn + offset);
            }
            if (centerColumn - offset >= 0) {
              order.push(centerColumn - offset);
            }
          }
        } else {
          const leftCenter = Math.floor(columns / 2) - 1;
          const rightCenter = Math.floor(columns / 2);
          order.push(leftCenter, rightCenter);
          for (let offset = 1; offset < columns / 2; offset++) {
            if (rightCenter + offset < columns) {
              order.push(rightCenter + offset);
            }
            if (leftCenter - offset >= 0) {
              order.push(leftCenter - offset);
            }
          }
        }
        return order;
      }
      /**
      * Calculate edges-in column order
      *
      * @description
      * Creates a column order that starts from the left and right edges
      * and converges toward the center. Creates a "pincer" wave effect.
      *
      * @param columns - Total number of columns
      * @returns Column indices in edges-in order
      */
      calculateEdgesInColumnOrder(columns) {
        const order = [];
        let leftIndex = 0;
        let rightIndex = columns - 1;
        while (leftIndex <= rightIndex) {
          if (leftIndex === rightIndex) {
            order.push(leftIndex);
            break;
          } else {
            order.push(leftIndex, rightIndex);
          }
          leftIndex++;
          rightIndex--;
        }
        return order;
      }
      /**
      * Apply calculated delays to column groups
      *
      * @description
      * Takes the column groups and order sequence, applies progressive delays
      * to create the final wave animation timing. For center-out and edges-in patterns,
      * elements at the same distance get simultaneous timing.
      *
      * @param columnGroups - Elements grouped by column
      * @param columnOrder - Sequence of column indices
      * @param staggerAmount - Delay between distance groups (in seconds)
      * @returns Complete stagger result with timing
      */
      applyColumnDelays(columnGroups, columnOrder, staggerAmount) {
        const elements = [];
        const delays = [];
        const distanceGroups = this.groupColumnsByDistance(columnOrder);
        distanceGroups.forEach((columnIndices, distanceIndex) => {
          const delay = distanceIndex * staggerAmount;
          columnIndices.forEach((columnIndex) => {
            const columnElements = columnGroups.get(columnIndex) || [];
            columnElements.forEach((element) => {
              elements.push(element);
              delays.push(delay);
            });
          });
        });
        return { elements, delays, boundaries: [] };
      }
      /**
      * 🆕 Apply calculated delays to tolerance-based column groups
      *
      * @description
      * **Phase 1B Implementation: Word-Based Grid Column Alignment**
      *
      * Takes the tolerance-based column groups and applies progressive delays
      * to create clean column wave animations. Works with dynamically detected
      * column count rather than fixed grid dimensions.
      *
      * **Key Features:**
      * - Handles variable column counts from tolerance-based detection
      * - Maintains proper wave timing even with irregular layouts
      * - Preserves simultaneous timing for elements in same visual column
      *
      * @param columnGroups - Elements grouped by tolerance-based columns
      * @param columnOrder - Sequence of column indices for animation
      * @param staggerAmount - Delay between distance groups (in seconds)
      * @returns Complete stagger result with timing
      *
      * @since Phase 1B - Word-Based Grid Column Alignment
      */
      applyToleranceBasedColumnDelays(columnGroups, columnOrder, staggerAmount) {
        console.log(`\u{1F30A} [${MODULE_NAME5}] Applying tolerance-based column delays to ${columnGroups.size} column groups`);
        const elements = [];
        const delays = [];
        const distanceGroups = this.groupColumnsByDistance(columnOrder);
        console.log(`\u{1F30A} [${MODULE_NAME5}] Created ${distanceGroups.size} distance groups for wave animation`);
        distanceGroups.forEach((columnIndices, distanceIndex) => {
          const delay = distanceIndex * staggerAmount;
          console.log(`\u{1F30A} [${MODULE_NAME5}] Distance group ${distanceIndex}: columns [${columnIndices.join(", ")}] with ${delay}s delay`);
          columnIndices.forEach((columnIndex) => {
            const columnElements = columnGroups.get(columnIndex) || [];
            columnElements.forEach((element) => {
              elements.push(element);
              delays.push(delay);
            });
            console.log(`\u{1F30A} [${MODULE_NAME5}] Column ${columnIndex} (${columnElements.length} elements) \u2192 ${delay.toFixed(3)}s delay [distance group ${distanceIndex}]`);
          });
        });
        return { elements, delays, boundaries: [] };
      }
      /**
      * Group columns by their animation distance for simultaneous timing
      *
      * @description
      * For center-out and edges-in patterns, groups columns that should animate
      * simultaneously (at same distance from origin). For linear patterns,
      * each column gets its own group.
      *
      * @param columnOrder - Sequence of column indices
      * @returns Map of distance groups containing column indices
      */
      groupColumnsByDistance(columnOrder) {
        const distanceGroups = /* @__PURE__ */ new Map();
        if (this.isSymmetricPattern(columnOrder)) {
          const distanceMap = this.calculateDistanceMap(columnOrder);
          distanceMap.forEach((distance, columnIndex) => {
            if (!distanceGroups.has(distance)) {
              distanceGroups.set(distance, []);
            }
            distanceGroups.get(distance).push(columnIndex);
          });
          console.log(`\u{1F30A} [${MODULE_NAME5}] Distance groups:`, Array.from(distanceGroups.entries()));
        } else {
          columnOrder.forEach((columnIndex, orderIndex) => {
            distanceGroups.set(orderIndex, [columnIndex]);
          });
        }
        return distanceGroups;
      }
      /**
      * Calculate distance map for columns based on pattern type
      *
      * @description
      * Calculates the animation distance for each column based on whether
      * it's center-out or edges-in pattern.
      *
      * @param columnOrder - Sequence of column indices
      * @returns Map of column index to distance value
      */
      calculateDistanceMap(columnOrder) {
        const distanceMap = /* @__PURE__ */ new Map();
        const totalColumns = Math.max(...columnOrder) + 1;
        const isCenterOut = this.isCenterOutPattern(columnOrder, totalColumns);
        if (isCenterOut) {
          const center = Math.floor((totalColumns - 1) / 2);
          columnOrder.forEach((columnIndex) => {
            const distance = Math.abs(columnIndex - center);
            distanceMap.set(columnIndex, distance);
          });
          console.log(`\u{1F30A} [${MODULE_NAME5}] Center-out pattern, center=${center}`);
        } else {
          columnOrder.forEach((columnIndex) => {
            const distance = Math.min(columnIndex, totalColumns - 1 - columnIndex);
            distanceMap.set(columnIndex, distance);
          });
          console.log(`\u{1F30A} [${MODULE_NAME5}] Edges-in pattern`);
        }
        return distanceMap;
      }
      /**
      * Check if the pattern is center-out (vs edges-in)
      *
      * @param columnOrder - Column order sequence
      * @param totalColumns - Total number of columns
      * @returns True if center-out pattern
      */
      isCenterOutPattern(columnOrder, totalColumns) {
        if (columnOrder.length === 0)
          return false;
        const center = Math.floor((totalColumns - 1) / 2);
        const firstColumn = columnOrder[0];
        return Math.abs(firstColumn - center) <= 0.5;
      }
      /**
      * Check if column order represents a symmetric pattern (center-out or edges-in)
      *
      * @param columnOrder - Column order sequence
      * @returns True if pattern is symmetric
      */
      isSymmetricPattern(columnOrder) {
        if (columnOrder.length < 3)
          return false;
        const totalColumns = Math.max(...columnOrder) + 1;
        const center = Math.floor((totalColumns - 1) / 2);
        const firstColumn = columnOrder[0];
        const isCenterOut = Math.abs(firstColumn - center) <= 0.5;
        const isEdgesIn = firstColumn === 0 || firstColumn === totalColumns - 1;
        return isCenterOut || isEdgesIn;
      }
    };
    __FramerMetadata__5 = { "exports": { "ColumnStaggerCalculator": { "type": "class", "annotations": { "framerContractVersion": "1" } }, "__FramerMetadata__": { "type": "variable" } } };
  }
});

// http-url:https://framerusercontent.com/modules/mURrrG6SzQI3UiiEoH2d/9v2ozrCHJxeDc76rNuln/p9ZXoH3vk.js
import { jsx as _jsx2, jsxs as _jsxs } from "react/jsx-runtime";
import { addFonts, ComponentViewportProvider, cx, getFonts, getFontsFromSharedStyle, RichText, SmartComponentScopedContainer, useComponentViewport, useLocaleInfo, useVariantState, withCSS } from "./_framer-runtime.js";
import { LayoutGroup, motion, MotionConfigContext } from "framer-motion";
import * as React from "react";
import { useRef as useRef4 } from "react";

// http-url:https://framerusercontent.com/modules/B6f4pN4w5zhqxeRfgbGm/c8MNyXjoOWbjoHb7O9ot/FAME.js
import { jsx as _jsx } from "react/jsx-runtime";
import { useRef as useRef3, useEffect as useEffect3, useLayoutEffect } from "react";
import { addPropertyControls, ControlType as ControlType9 } from "./_framer-runtime.js";

// http-url:https://framerusercontent.com/modules/4VhV010ft7E3V47h4kQU/FYH8SbwiGtSqz9uh8Nlp/AnimationSlots.js
import { ControlType as ControlType8 } from "./_framer-runtime.js";

// http-url:https://framerusercontent.com/modules/vgZVs1at9zSqLL8eb94e/2B9eFI7zGbtTYN0IQmAR/index.js
var ElementScope;
(function(ElementScope2) {
  ElementScope2["SELF"] = "self";
  ElementScope2["PARENT"] = "parent";
  ElementScope2["CHILDREN"] = "children";
  ElementScope2["SIBLINGS"] = "siblings";
  ElementScope2["DOCUMENT"] = "document";
})(ElementScope || (ElementScope = {}));
var ScopeDepth;
(function(ScopeDepth2) {
  ScopeDepth2["DIRECT"] = "direct";
  ScopeDepth2["DEEP"] = "deep";
})(ScopeDepth || (ScopeDepth = {}));
var CriteriaType;
(function(CriteriaType2) {
  CriteriaType2["FRAMER_NAME"] = "framerName";
  CriteriaType2["HTML_TAG"] = "htmlTag";
  CriteriaType2["CSS_SELECTOR"] = "cssSelector";
  CriteriaType2["ELEMENT_ID"] = "elementId";
})(CriteriaType || (CriteriaType = {}));
var SelectionMode;
(function(SelectionMode2) {
  SelectionMode2["FIRST"] = "first";
  SelectionMode2["LAST"] = "last";
  SelectionMode2["ALL"] = "all";
  SelectionMode2["RANDOM"] = "random";
})(SelectionMode || (SelectionMode = {}));
var SelectionCriteria_Legacy;
(function(SelectionCriteria_Legacy2) {
  SelectionCriteria_Legacy2["ID"] = "id";
  SelectionCriteria_Legacy2["DATA_FRAMER_NAME"] = "data-framer-name";
  SelectionCriteria_Legacy2["CSS_SELECTOR"] = "cssSelector";
  SelectionCriteria_Legacy2["TAG"] = "tag";
})(SelectionCriteria_Legacy || (SelectionCriteria_Legacy = {}));
var EventType;
(function(EventType2) {
  EventType2["SCROLL"] = "scroll";
  EventType2["CLICK"] = "click";
  EventType2["MOUSE_OVER"] = "mouseover";
  EventType2["MOUSE_OUT"] = "mouseout";
  EventType2["MOUSE_ENTER"] = "mouseenter";
  EventType2["MOUSE_LEAVE"] = "mouseleave";
  EventType2["POINTER_DOWN"] = "pointerdown";
  EventType2["POINTER_UP"] = "pointerup";
  EventType2["LOAD"] = "load";
  EventType2["FOCUS"] = "focus";
  EventType2["BLUR"] = "blur";
  EventType2["KEYDOWN"] = "keydown";
  EventType2["KEYUP"] = "keyup";
  EventType2["MOUSEDOWN"] = "mousedown";
  EventType2["MOUSEUP"] = "mouseup";
  EventType2["TOUCHSTART"] = "touchstart";
  EventType2["TOUCHEND"] = "touchend";
  EventType2["SUBMIT"] = "submit";
  EventType2["SCROLL_DIRECTION_CHANGE"] = "scrollDirectionChange";
})(EventType || (EventType = {}));
var ReverseMode;
(function(ReverseMode2) {
  ReverseMode2["EASING_PRESERVATION"] = "easingPreservation";
  ReverseMode2["TIME_REVERSAL"] = "timeReversal";
})(ReverseMode || (ReverseMode = {}));
var AnimationMode;
(function(AnimationMode2) {
  AnimationMode2["TIMED"] = "timed";
  AnimationMode2["SCRUBBED"] = "scrubbed";
})(AnimationMode || (AnimationMode = {}));
var AnimationBehavior;
(function(AnimationBehavior2) {
  AnimationBehavior2["PLAY_FORWARD"] = "playForward";
  AnimationBehavior2["PLAY_BACKWARD"] = "playBackward";
  AnimationBehavior2["TOGGLE"] = "toggle";
  AnimationBehavior2["PLAY_FORWARD_AND_RESET"] = "playForwardAndReset";
  AnimationBehavior2["PLAY_BACKWARD_AND_RESET"] = "playBackwardAndReset";
  AnimationBehavior2["PLAY_FORWARD_AND_REVERSE"] = "playForwardAndReverse";
  AnimationBehavior2["PLAY_BACKWARD_AND_REVERSE"] = "playBackwardAndReverse";
  AnimationBehavior2["START_PING_PONG"] = "startPingPong";
  AnimationBehavior2["STOP_PING_PONG"] = "stopPingPong";
  AnimationBehavior2["START_LOOP"] = "startLoop";
  AnimationBehavior2["STOP_LOOP"] = "stopLoop";
  AnimationBehavior2["DELAYED_TRIGGER"] = "delayedTrigger";
  AnimationBehavior2["PLAY_ONCE"] = "playOnce";
  AnimationBehavior2["REPEAT"] = "repeat";
  AnimationBehavior2["LOOP"] = "loop";
})(AnimationBehavior || (AnimationBehavior = {}));
var StaggerMode;
(function(StaggerMode2) {
  StaggerMode2["TIMED"] = "timed";
  StaggerMode2["SCRUBBED"] = "scrubbed";
})(StaggerMode || (StaggerMode = {}));
var StaggerDirection;
(function(StaggerDirection2) {
  StaggerDirection2["NORMAL"] = "normal";
  StaggerDirection2["REVERSE"] = "reverse";
  StaggerDirection2["CENTER_OUT"] = "centerOut";
  StaggerDirection2["EDGES_IN"] = "edgesIn";
  StaggerDirection2["RANDOM"] = "random";
})(StaggerDirection || (StaggerDirection = {}));
var GridDirection;
(function(GridDirection2) {
  GridDirection2["ROW_FIRST"] = "rowFirst";
  GridDirection2["COLUMN_FIRST"] = "columnFirst";
  GridDirection2["DIAGONAL"] = "diagonal";
})(GridDirection || (GridDirection = {}));
var AnimationStatus;
(function(AnimationStatus2) {
  AnimationStatus2["IDLE"] = "idle";
  AnimationStatus2["RUNNING"] = "running";
  AnimationStatus2["PAUSED"] = "paused";
  AnimationStatus2["COMPLETED"] = "completed";
})(AnimationStatus || (AnimationStatus = {}));
var AnimationDirection;
(function(AnimationDirection2) {
  AnimationDirection2["FORWARD"] = "forward";
  AnimationDirection2["BACKWARD"] = "backward";
})(AnimationDirection || (AnimationDirection = {}));
var PropertyType;
(function(PropertyType2) {
  PropertyType2["NUMBER"] = "number";
  PropertyType2["STRING"] = "string";
  PropertyType2["BOOLEAN"] = "boolean";
  PropertyType2["COLOR"] = "color";
  PropertyType2["ENUM"] = "enum";
})(PropertyType || (PropertyType = {}));
var PropertyCategory;
(function(PropertyCategory2) {
  PropertyCategory2["TRANSFORM"] = "transform";
  PropertyCategory2["LAYOUT"] = "layout";
  PropertyCategory2["APPEARANCE"] = "appearance";
  PropertyCategory2["EFFECTS"] = "effects";
  PropertyCategory2["TYPOGRAPHY"] = "typography";
})(PropertyCategory || (PropertyCategory = {}));
var DebugLogLevel;
(function(DebugLogLevel2) {
  DebugLogLevel2["MINIMAL"] = "minimal";
  DebugLogLevel2["NORMAL"] = "normal";
  DebugLogLevel2["VERBOSE"] = "verbose";
  DebugLogLevel2["EXTREME"] = "extreme";
})(DebugLogLevel || (DebugLogLevel = {}));
var DebugPhase;
(function(DebugPhase2) {
  DebugPhase2["INITIALIZATION"] = "initialization";
  DebugPhase2["PROPERTY_PROCESSING"] = "property_processing";
  DebugPhase2["ELEMENT_FINDING"] = "element_finding";
  DebugPhase2["ANIMATION_SETUP"] = "animation_setup";
  DebugPhase2["ANIMATION_EXECUTION"] = "animation_execution";
  DebugPhase2["STATE_UPDATE"] = "state_update";
  DebugPhase2["CLEANUP"] = "cleanup";
})(DebugPhase || (DebugPhase = {}));
var InterruptBehavior;
(function(InterruptBehavior2) {
  InterruptBehavior2["IMMEDIATE"] = "immediate";
  InterruptBehavior2["BLOCK"] = "block";
  InterruptBehavior2["QUEUE_LATEST"] = "queueLatest";
})(InterruptBehavior || (InterruptBehavior = {}));
var TextSplitType;
(function(TextSplitType2) {
  TextSplitType2["CHARACTERS"] = "characters";
  TextSplitType2["WORDS"] = "words";
  TextSplitType2["LINES"] = "lines";
})(TextSplitType || (TextSplitType = {}));
var TextCanvasFallback;
(function(TextCanvasFallback2) {
  TextCanvasFallback2["ANIMATE_CONTAINER"] = "animateContainer";
  TextCanvasFallback2["SKIP_WITH_WARNING"] = "skipWithWarning";
  TextCanvasFallback2["SIMPLIFIED_SPLIT"] = "simplifiedSplit";
})(TextCanvasFallback || (TextCanvasFallback = {}));
var TextEffectType;
(function(TextEffectType2) {
  TextEffectType2["TEXT_SCRAMBLE"] = "textScramble";
  TextEffectType2["TYPEWRITER"] = "typewriter";
  TextEffectType2["REVEAL"] = "reveal";
  TextEffectType2["GLITCH"] = "glitch";
})(TextEffectType || (TextEffectType = {}));

// http-url:https://framerusercontent.com/modules/Hw2lXA2U0KyHGrsatVWI/PMKFEIS5qhnFwrHq75ZK/PropertyRegistry.js
import { ControlType as ControlType2 } from "./_framer-runtime.js";

// http-url:https://framerusercontent.com/modules/ErRCcyGGAfBihXHTOucU/wllKOWgfI1De7BLMLuvS/EasingFunctions.js
function cubicBezier(p1x, p1y, p2x, p2y) {
  return function(t) {
    if (t <= 0)
      return 0;
    if (t >= 1)
      return 1;
    let start = 0;
    let end = 1;
    let mid = t;
    for (let i = 0; i < 10; i++) {
      const x = 3 * (1 - mid) * (1 - mid) * mid * p1x + 3 * (1 - mid) * mid * mid * p2x + mid * mid * mid;
      if (Math.abs(x - t) < 1e-3)
        break;
      if (x < t) {
        start = mid;
      } else {
        end = mid;
      }
      mid = (start + end) / 2;
    }
    return 3 * (1 - mid) * (1 - mid) * mid * p1y + 3 * (1 - mid) * mid * mid * p2y + mid * mid * mid;
  };
}
var EasingFunctions = {
  // ✅ Basic easings (working)
  linear: (t) => t,
  in: (t) => t * t,
  out: (t) => t * (2 - t),
  inout: (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
  // ✅ Cubic functions (working)
  cubic: (t) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,
  "cubic.in": (t) => t * t * t,
  "cubic.out": (t) => 1 - Math.pow(1 - t, 3),
  "cubic.inout": (t) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,
  // ✅ Expo functions (working)
  expo: (t) => t === 0 ? 0 : t === 1 ? 1 : t < 0.5 ? Math.pow(2, 20 * t - 10) / 2 : (2 - Math.pow(2, -20 * t + 10)) / 2,
  "expo.in": (t) => t === 0 ? 0 : Math.pow(2, 10 * (t - 1)),
  "expo.out": (t) => t === 1 ? 1 : 1 - Math.pow(2, -10 * t),
  "expo.inout": (t) => t === 0 ? 0 : t === 1 ? 1 : t < 0.5 ? Math.pow(2, 20 * t - 10) / 2 : (2 - Math.pow(2, -20 * t + 10)) / 2,
  // 🆕 NEW: Smooth easings - premium quality curves
  "smooth.out": cubicBezier(0.16, 1, 0.3, 1),
  "smooth.in": cubicBezier(1, 0.16, 1, 0.3),
  // 🆕 NEW: Advanced easings - unique motion curves
  pause: cubicBezier(0.14, 1, 0.86, 0),
  "out.n.in": cubicBezier(0.18, 1.32, 0.84, -0.22),
  "dramatic.out.n.in": cubicBezier(0.17, 1.51, 0.85, -0.42),
  // 🆕 NEW: Back easings - elastic back motion
  "back.out": cubicBezier(0.1, 1.55, 0.52, 1),
  "back.in": cubicBezier(0.52, 0, 0.9, -0.45),
  // ✅ Spring functions (working) - exact copy from src-refactored
  "spring.in": (t, config) => {
    return 1 - originalElasticOut(1 - t, config);
  },
  "spring.out": (t, config) => {
    return originalElasticOut(t, config);
  },
  spring: (t, config) => {
    return originalElasticOut(t, config);
  }
};
function originalElasticOut(t, config) {
  if (t <= 0)
    return 0;
  if (t >= 1)
    return 1;
  const rawAmplitude = config?.amplitude ?? 1;
  const scaleFactor = 0.5;
  const effectiveAmplitude = 1 + (rawAmplitude - 1) * scaleFactor;
  const period = config?.period ?? 0.3;
  const s = period / (Math.PI * 2) * Math.asin(1 / effectiveAmplitude);
  return effectiveAmplitude * Math.pow(2, -10 * t) * Math.sin((t - s) * (Math.PI * 2) / period) + 1;
}
function applyEasing(progress, easingType, springConfig) {
  if (progress <= 0)
    return 0;
  if (progress >= 1)
    return 1;
  if (easingType.startsWith("spring")) {
    if (easingType === "spring.in") {
      return EasingFunctions["spring.in"](progress, springConfig);
    } else {
      return EasingFunctions["spring.out"](progress, springConfig);
    }
  }
  try {
    const easingFn = EasingFunctions[easingType];
    if (!easingFn) {
      console.warn(`\u{1F3AF} [EasingFunctions] Easing function "${easingType}" not found. Falling back to linear.`);
      return progress;
    }
    if (typeof easingFn === "function") {
      return easingFn(progress);
    }
    return progress;
  } catch (error) {
    console.error(`\u{1F3AF} [EasingFunctions] Error in easing function "${easingType}":`, error);
    return progress;
  }
}
var EASING_OPTIONS = ["linear", "in", "out", "inout", "cubic", "cubic.in", "cubic.out", "cubic.inout", "expo", "expo.in", "expo.out", "expo.inout", "smooth.out", "smooth.in", "pause", "out.n.in", "dramatic.out.n.in", "back.out", "back.in", "spring", "spring.in", "spring.out"];
var DEFAULT_EASING = "cubic.inout";

// http-url:https://framerusercontent.com/modules/zdZ25vIBFeh6WBYbJeEU/BII8VU1mvyhiYN7a6840/DistributedPropertyControls.js
import { ControlType } from "./_framer-runtime.js";
var PATTERN_TYPE_OPTIONS = ["comma-separated", "linear-range"];
var PATTERN_TYPE_TITLES = ["Comma-Separated Values", "Linear Range"];
var LINEAR_PROGRESSION_OPTIONS = ["linear", "linear-reverse", "bell-curve", "roof", "reverse-roof", "ramp-up", "ramp-down", "ease-in-out", "steps", "random", "cubic-in-out", "bounce", "elastic", "exponential"];
var LINEAR_PROGRESSION_TITLES = ["Linear (Min \u2192 Max)", "Linear Reverse (Max \u2192 Min)", "Bell Curve (Smooth Peak)", "Roof (Sharp Peak)", "Reverse Roof (Sharp Valley)", "Ramp Up (Slow \u2192 Fast)", "Ramp Down (Fast \u2192 Slow)", "Ease In-Out (S-Curve)", "Steps (Discrete)", "Random (Varied Distribution)", "Cubic In-Out (Strong S-Curve)", "Bounce (Oscillating)", "Elastic (Overshoot Wave)", "Exponential (Dramatic)"];
function extractDistributedPropertyConfig(props, propertyName, direction) {
  const isDistributedEnabled = props[`useDistributed${propertyName}Values`] === true;
  if (!isDistributedEnabled) {
    return null;
  }
  const configObject = props[`distributed${propertyName}${direction}`];
  if (!configObject) {
    console.warn(`[DistributedPropertyControls] No configuration found for distributed${propertyName}${direction}`);
    return null;
  }
  const patternType = configObject.pattern || "comma-separated";
  let pattern;
  switch (patternType) {
    case "comma-separated":
      pattern = { type: "comma-separated", values: configObject.values || "" };
      break;
    case "linear-range":
      const linearRange = configObject.linearRange || {};
      pattern = { type: "linear-range", linearRange: { minValue: linearRange.minValue || "0px", maxValue: linearRange.maxValue || "100px", progression: linearRange.progression || "linear" } };
      break;
    default:
      console.warn(`[DistributedPropertyControls] Unknown pattern type: ${patternType}`);
      return null;
  }
  return { enabled: true, pattern };
}
function createDistributedPropertyArrayControls() {
  return { distributedFromConfig: { type: ControlType.Object, title: "From", hidden: (props) => !props.useDistributedValues, controls: { pattern: { type: ControlType.Enum, title: "Pattern", options: [...PATTERN_TYPE_OPTIONS], optionTitles: [...PATTERN_TYPE_TITLES], defaultValue: "comma-separated", description: "How to generate different starting values" }, values: { type: ControlType.String, title: "Values (Comma-Separated)", placeholder: "0px, 50px, 100px", defaultValue: "", hidden: (props) => props.pattern !== "comma-separated", description: "Pattern for starting values (repeats if values are less than targets)", displayTextArea: false }, minValue: { type: ControlType.String, title: "First", placeholder: "0px", defaultValue: "0px", hidden: (props) => props.pattern !== "linear-range", description: "Starting value of the range" }, maxValue: { type: ControlType.String, title: "Last", placeholder: "100px", defaultValue: "100px", hidden: (props) => props.pattern !== "linear-range", description: "Ending value of the range" }, progression: { type: ControlType.Enum, title: "Progression", options: [...LINEAR_PROGRESSION_OPTIONS], optionTitles: [...LINEAR_PROGRESSION_TITLES], defaultValue: "linear", hidden: (props) => props.pattern !== "linear-range", description: "How values progress across elements" } } }, distributedToConfig: { type: ControlType.Object, title: "To", hidden: (props) => !props.useDistributedValues, controls: { pattern: { type: ControlType.Enum, title: "Pattern Type", options: [...PATTERN_TYPE_OPTIONS], optionTitles: [...PATTERN_TYPE_TITLES], defaultValue: "comma-separated", description: "How to generate different ending values" }, values: { type: ControlType.String, title: "Values (Comma-Separated)", placeholder: "0px, 50px, 100px", defaultValue: "", hidden: (props) => props.pattern !== "comma-separated", description: "Ending values that cycle through elements", displayTextArea: false }, minValue: { type: ControlType.String, title: "First", placeholder: "100px", defaultValue: "100px", hidden: (props) => props.pattern !== "linear-range", description: "Starting value of the range" }, maxValue: { type: ControlType.String, title: "Last", placeholder: "500px", defaultValue: "500px", hidden: (props) => props.pattern !== "linear-range", description: "Ending value of the range" }, progression: { type: ControlType.Enum, title: "Progression", options: [...LINEAR_PROGRESSION_OPTIONS], optionTitles: [...LINEAR_PROGRESSION_TITLES], defaultValue: "linear", hidden: (props) => props.pattern !== "linear-range", description: "How values progress across elements" } } } };
}

// http-url:https://framerusercontent.com/modules/Hw2lXA2U0KyHGrsatVWI/PMKFEIS5qhnFwrHq75ZK/PropertyRegistry.js
var ClickBehavior;
(function(ClickBehavior2) {
  ClickBehavior2["TOGGLE"] = "toggle";
  ClickBehavior2["INCREMENTAL"] = "incremental";
  ClickBehavior2["PLAY_ONCE"] = "playOnce";
})(ClickBehavior || (ClickBehavior = {}));
var ANIMATABLE_PROPERTIES = [
  // A
  { name: "alignItems", title: "Align Items", defaultFrom: "stretch", defaultTo: "center", controlType: "enum", options: ["stretch", "flex-start", "flex-end", "center", "baseline"] },
  // B
  { name: "backdropFilter", title: "Backdrop Filter", defaultFrom: "none", defaultTo: "blur(5px)", controlType: "string" },
  { name: "backfaceVisibility", title: "Backface Visibility", defaultFrom: "visible", defaultTo: "hidden", controlType: "enum", options: ["visible", "hidden"] },
  { name: "backgroundColor", title: "Background Color", defaultFrom: "#ffffff", defaultTo: "#f0f0f0", controlType: "color" },
  { name: "backgroundImage", title: "Background Image", defaultFrom: "none", defaultTo: "url('')", controlType: "string" },
  { name: "backgroundPosition", title: "Background Position", defaultFrom: "0% 0%", defaultTo: "50% 50%", controlType: "string" },
  { name: "backgroundSize", title: "Background Size", defaultFrom: "auto", defaultTo: "cover", controlType: "enum", options: ["auto", "cover", "contain", "100% 100%"] },
  { name: "borderColor", title: "Border Color", defaultFrom: "#000000", defaultTo: "#666666", controlType: "color" },
  { name: "borderRadius", title: "Border Radius", defaultFrom: "0px", defaultTo: "8px" },
  { name: "borderWidth", title: "Border Width", defaultFrom: "0px", defaultTo: "2px" },
  { name: "bottom", title: "Bottom", defaultFrom: "0px", defaultTo: "100px" },
  { name: "boxShadow", title: "Box Shadow", defaultFrom: "none", defaultTo: "0px 4px 8px rgba(0,0,0,0.2)", controlType: "string" },
  // C
  { name: "color", title: "Text Color", defaultFrom: "#000000", defaultTo: "#666666", controlType: "color" },
  { name: "columnGap", title: "Column Gap", defaultFrom: "0px", defaultTo: "20px" },
  { name: "clipPath", title: "Clip Path", defaultFrom: "inset(0% 0% 0% 0%)", defaultTo: "inset(10% 10% 10% 10%)", controlType: "string" },
  // D
  { name: "display", title: "Display", defaultFrom: "block", defaultTo: "flex", controlType: "enum", options: ["block", "flex", "grid", "inline", "inline-block", "none"] },
  // F
  { name: "filter", title: "Filter", defaultFrom: "none", defaultTo: "blur(5px)", controlType: "string" },
  { name: "flexDirection", title: "Flex Direction", defaultFrom: "row", defaultTo: "column", controlType: "enum", options: ["row", "row-reverse", "column", "column-reverse"] },
  { name: "fontSize", title: "Font Size", defaultFrom: "16px", defaultTo: "24px" },
  // G
  { name: "gap", title: "Gap", defaultFrom: "0px", defaultTo: "20px" },
  { name: "gradientBackground", title: "Gradient Background", defaultFrom: "linear-gradient(0deg, #ff0000 0%, #0000ff 100%)", defaultTo: "linear-gradient(90deg, #00ff00 0%, #ffff00 100%)", controlType: "string" },
  // H
  { name: "height", title: "Height", defaultFrom: "100px", defaultTo: "200px" },
  // J
  { name: "justifyContent", title: "Justify Content", defaultFrom: "flex-start", defaultTo: "center", controlType: "enum", options: ["flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly"] },
  // L
  { name: "left", title: "Left", defaultFrom: "0px", defaultTo: "100px" },
  { name: "letterSpacing", title: "Letter Spacing", defaultFrom: "0px", defaultTo: "2px" },
  { name: "lineHeight", title: "Line Height", defaultFrom: "1", defaultTo: "1.5" },
  // M
  { name: "margin", title: "Margin", defaultFrom: "0px", defaultTo: "16px" },
  { name: "maxHeight", title: "Max Height", defaultFrom: "none", defaultTo: "300px" },
  { name: "maxWidth", title: "Max Width", defaultFrom: "none", defaultTo: "300px" },
  { name: "minHeight", title: "Min Height", defaultFrom: "0px", defaultTo: "100px" },
  { name: "minWidth", title: "Min Width", defaultFrom: "0px", defaultTo: "100px" },
  // O
  { name: "opacity", title: "Opacity", defaultFrom: 0, defaultTo: 1, step: 0.1, min: 0, max: 1 },
  // P
  { name: "padding", title: "Padding", defaultFrom: "0px", defaultTo: "16px" },
  { name: "perspective", title: "Perspective", defaultFrom: "1000px", defaultTo: "500px" },
  { name: "perspectiveOrigin", title: "Perspective Origin", defaultFrom: "50% 50%", defaultTo: "center center", controlType: "string" },
  { name: "pointerEvents", title: "Pointer Events", defaultFrom: "auto", defaultTo: "none", controlType: "enum", options: ["auto", "none", "visiblePainted", "visibleFill", "visibleStroke", "visible", "painted", "fill", "stroke", "all", "inherit"] },
  { name: "position", title: "Position", defaultFrom: "static", defaultTo: "absolute", controlType: "enum", options: ["static", "relative", "absolute", "fixed", "sticky"] },
  // R
  { name: "right", title: "Right", defaultFrom: "0px", defaultTo: "100px" },
  { name: "rotate", title: "Rotate", defaultFrom: "0deg", defaultTo: "90deg" },
  { name: "rotateX", title: "Rotate X", defaultFrom: "0deg", defaultTo: "45deg" },
  { name: "rotateY", title: "Rotate Y", defaultFrom: "0deg", defaultTo: "45deg" },
  { name: "rotateZ", title: "Rotate Z", defaultFrom: "0deg", defaultTo: "45deg" },
  { name: "rowGap", title: "Row Gap", defaultFrom: "0px", defaultTo: "20px" },
  // S
  { name: "scale", title: "Scale", defaultFrom: 1, defaultTo: 1.2, step: 0.1, min: 0.1, max: 5 },
  { name: "scaleX", title: "Scale X", defaultFrom: 1, defaultTo: 1.2, step: 0.1, min: 0.1, max: 5 },
  { name: "scaleY", title: "Scale Y", defaultFrom: 1, defaultTo: 1.2, step: 0.1, min: 0.1, max: 5 },
  { name: "scaleZ", title: "Scale Z", defaultFrom: 1, defaultTo: 1.2, step: 0.1, min: 0.1, max: 5 },
  { name: "skewX", title: "Skew X", defaultFrom: "0deg", defaultTo: "15deg" },
  { name: "skewY", title: "Skew Y", defaultFrom: "0deg", defaultTo: "15deg" },
  // T
  { name: "textAlign", title: "Text Align", defaultFrom: "left", defaultTo: "center", controlType: "enum", options: ["left", "center", "right", "justify"] },
  { name: "textShadow", title: "Text Shadow", defaultFrom: "none", defaultTo: "1px 1px 2px rgba(0,0,0,0.5)", controlType: "string" },
  { name: "top", title: "Top", defaultFrom: "0px", defaultTo: "100px" },
  { name: "transformStyle", title: "Transform Style", defaultFrom: "flat", defaultTo: "preserve-3d", controlType: "enum", options: ["flat", "preserve-3d"] },
  { name: "translateX", title: "Translate X", defaultFrom: "0px", defaultTo: "100px" },
  { name: "translateY", title: "Translate Y", defaultFrom: "0px", defaultTo: "0px" },
  { name: "translateZ", title: "Translate Z", defaultFrom: "0px", defaultTo: "50px" },
  { name: "textBackgroundImage", title: "Text Background Image", defaultFrom: "linear-gradient(0deg, #ff0000 0%, #0000ff 100%)", defaultTo: "linear-gradient(90deg, #00ff00 0%, #ffff00 100%)", controlType: "string" },
  // W
  { name: "width", title: "Width", defaultFrom: "100px", defaultTo: "200px" },
  // Z
  { name: "zIndex", title: "Z-Index", defaultFrom: 0, defaultTo: 1, step: 1, min: -9999, max: 9999 }
];
function validateCSSProperty(propertyName, value) {
  if (!value || value.trim() === "") {
    return { isValid: false, error: `Empty value for property '${propertyName}'` };
  }
  if (value.includes("kajdsfb0a8s0") || /[^a-zA-Z0-9\s\-_.#%(),/]+/.test(value)) {
    return { isValid: false, error: `Invalid CSS value '${value}' for property '${propertyName}'` };
  }
  if (propertyName === "opacity") {
    const numValue = parseFloat(value);
    if (isNaN(numValue) || numValue < 0 || numValue > 1) {
      return { isValid: false, error: `Opacity value '${value}' must be between 0 and 1` };
    }
  }
  if (propertyName.includes("Color") && !value.startsWith("#") && !value.startsWith("rgb") && !value.startsWith("hsl")) {
    return { isValid: false, error: `Color value '${value}' should start with #, rgb(), or hsl()` };
  }
  return { isValid: true };
}

// http-url:https://framerusercontent.com/modules/OiKOK4YnjJF9xfzRaXRW/yeaFrdyC6a95RqdnhpR3/ElementSelectionControls.js
import { ControlType as ControlType3 } from "./_framer-runtime.js";

// http-url:https://framerusercontent.com/modules/5cNPiMAXJrlFJ0unjM9d/kqAvboXXsyepffbUidV7/HelperFunctions.js
function hasScrollScrubbedAnimation(props) {
  return props.animationParadigm === "scroll-based";
}
function isTimeBased(props) {
  return props.animationParadigm !== "scroll-based";
}
function isScrollBased(props) {
  return props.animationParadigm === "scroll-based";
}
function shouldShowRegularStagger(props) {
  return props.staggerEnabled && isTimeBased(props);
}
function shouldShowScrollStagger(props) {
  return props.staggerEnabled && isScrollBased(props);
}

// http-url:https://framerusercontent.com/modules/OiKOK4YnjJF9xfzRaXRW/yeaFrdyC6a95RqdnhpR3/ElementSelectionControls.js
function createTriggerElementControls() {
  return { triggers: { type: ControlType3.Array, title: "Triggers", hidden: (props) => !isTimeBased(props), control: { type: ControlType3.Object, title: "Trigger", controls: {
    event: { type: ControlType3.Enum, title: "Event", description: (props) => isLoadEvent(props) ? "Load events fire when the page finishes loading (no trigger element needed)" : "Event that triggers the animation", options: [
      EventType.CLICK,
      EventType.SCROLL,
      EventType.MOUSE_OVER,
      EventType.MOUSE_OUT,
      EventType.MOUSE_ENTER,
      EventType.MOUSE_LEAVE,
      EventType.POINTER_DOWN,
      EventType.POINTER_UP,
      EventType.LOAD,
      // 🚀 NEW: Enhanced JavaScript Events (Phase 1)
      EventType.FOCUS,
      EventType.BLUR,
      EventType.KEYDOWN,
      EventType.KEYUP,
      EventType.MOUSEDOWN,
      EventType.MOUSEUP,
      EventType.TOUCHSTART,
      EventType.TOUCHEND,
      EventType.SUBMIT,
      EventType.SCROLL_DIRECTION_CHANGE
    ], optionTitles: [
      "Click",
      "Scroll",
      "Mouse Over",
      "Mouse Out",
      "Mouse Enter",
      "Mouse Leave",
      "Pointer Down",
      "Pointer Up",
      "Load",
      // 🚀 NEW: Enhanced JavaScript Events (Phase 1)
      "Focus",
      "Blur",
      "Key Down",
      "Key Up",
      "Mouse Down",
      "Mouse Up",
      "Touch Start",
      "Touch End",
      "Submit",
      "Scroll Direction Change"
    ], defaultValue: EventType.CLICK },
    behavior: { type: ControlType3.Enum, title: "Behavior", options: [
      // 🎯 PHASE 1 - BASIC BEHAVIORS (IMPLEMENTED)
      AnimationBehavior.PLAY_FORWARD,
      AnimationBehavior.PLAY_BACKWARD,
      AnimationBehavior.TOGGLE,
      // 🚀 PHASE 2 - RESET BEHAVIORS (PLANNED)
      AnimationBehavior.PLAY_FORWARD_AND_RESET,
      AnimationBehavior.PLAY_BACKWARD_AND_RESET,
      // 🔄 PHASE 3 - REVERSE BEHAVIORS (NEW)
      AnimationBehavior.PLAY_FORWARD_AND_REVERSE,
      AnimationBehavior.PLAY_BACKWARD_AND_REVERSE,
      // 🔄 PHASE 4 - LOOP BEHAVIORS (NEW)
      AnimationBehavior.START_LOOP,
      AnimationBehavior.STOP_LOOP,
      // 🔄 PHASE 3 - PING PONG BEHAVIORS (PLANNED)
      AnimationBehavior.START_PING_PONG,
      // 🎯 PHASE 5 - CONDITIONAL BEHAVIORS (NEW)
      AnimationBehavior.DELAYED_TRIGGER
    ], optionTitles: [
      // Phase 1
      "Play Forward",
      "Play Backward",
      "Toggle",
      // Phase 2
      "Play Forward & Reset",
      "Play Backward & Reset",
      // Phase 3 - Reverse
      "Play Forward & Reverse",
      "Play Backward & Reverse",
      // Phase 4 - Loop
      "Start Loop",
      "Stop Loop",
      // Phase 3 - Ping Pong
      "Start Ping Pong",
      // Phase 5 - Conditional
      "Delayed Trigger"
    ], defaultValue: AnimationBehavior.PLAY_FORWARD },
    // 🎯 NEW: Override State Feature - Advanced behavior control
    overrideState: {
      type: ControlType3.Boolean,
      title: "Override State",
      description: "When at target, jump to opposite state before playing (e.g., Play Backward at 0% \u2192 jump to 100% \u2192 animate to 0%)",
      defaultValue: false,
      // Only show for directional behaviors (not Toggle, which handles this automatically)
      hidden: (props) => props.behavior === AnimationBehavior.TOGGLE || props.behavior === AnimationBehavior.START_PING_PONG
    },
    // 🎭 NEW: Reverse Mode Options - Animation direction behavior for reversals
    reverseMode: {
      type: ControlType3.Enum,
      title: "Reverse Mode",
      description: "How reverse animations should behave: Easing Preservation (modern UI) or Time Reversal (physics simulation)",
      options: [ReverseMode.EASING_PRESERVATION, ReverseMode.TIME_REVERSAL],
      optionTitles: ["Easing Preservation (Default)", "Time Reversal (Legacy)"],
      defaultValue: ReverseMode.EASING_PRESERVATION,
      // Only show for reverse behaviors
      hidden: (props) => props.behavior !== AnimationBehavior.PLAY_BACKWARD && props.behavior !== AnimationBehavior.PLAY_FORWARD_AND_REVERSE && props.behavior !== AnimationBehavior.PLAY_BACKWARD_AND_REVERSE && props.behavior !== AnimationBehavior.TOGGLE
    },
    // 🔄 NEW: Loop configuration controls (only shown when behavior is START_LOOP)
    loopConfig: { type: ControlType3.Object, title: "Loop", hidden: (props) => props.behavior !== AnimationBehavior.START_LOOP, controls: { iterations: { type: ControlType3.Number, title: "Count", description: "Number of times to repeat (999 for infinite)", defaultValue: 3, min: 1, max: 999, step: 1, displayStepper: true }, behavior: { type: ControlType3.Enum, title: "Behavior", description: "What behavior to repeat in each loop", options: [AnimationBehavior.PLAY_FORWARD, AnimationBehavior.PLAY_BACKWARD, AnimationBehavior.TOGGLE], optionTitles: ["Play Forward", "Play Backward", "Toggle"], defaultValue: AnimationBehavior.PLAY_FORWARD }, delay: { type: ControlType3.Number, title: "Loop Delay", description: "Delay between loop iterations in seconds", defaultValue: 0.5, min: 0, max: 10, step: 0.1, unit: "s", displayStepper: true } } },
    // 🔄 NEW: Ping-pong configuration controls (only shown when behavior is START_PING_PONG)
    pingPongConfig: { type: ControlType3.Object, title: "Ping Pong", description: "Configure ping-pong behavior settings", hidden: (props) => props.behavior !== AnimationBehavior.START_PING_PONG, controls: { cycles: { type: ControlType3.Number, title: "Cycles", description: "Number of ping-pong cycles (999 for infinite)", defaultValue: 3, min: 1, max: 999, step: 1, displayStepper: true }, reverseMode: { type: ControlType3.Enum, title: "Reverse", description: "How reverse motion should behave", options: [ReverseMode.EASING_PRESERVATION, ReverseMode.TIME_REVERSAL], optionTitles: ["Easing Preservation", "Time Reversal"], defaultValue: ReverseMode.EASING_PRESERVATION }, delay: { type: ControlType3.Number, title: "Delay", description: "Delay between ping-pong cycles in seconds", defaultValue: 0.5, min: 0, max: 10, step: 0.1, unit: "s", displayStepper: true } } },
    // 🎯 NEW: Delayed trigger configuration controls (only shown when behavior is DELAYED_TRIGGER)
    delayedTriggerConfig: { type: ControlType3.Object, title: "Delayed Trigger", description: "Configure delayed trigger behavior with simple skip count or advanced patterns", hidden: (props) => props.behavior !== AnimationBehavior.DELAYED_TRIGGER, controls: { mode: { type: ControlType3.Enum, title: "Mode", description: "Simple skip count or advanced pattern mode", options: ["simple", "pattern"], optionTitles: ["Simple Skip Count", "Advanced Pattern"], defaultValue: "simple" }, skipCount: { type: ControlType3.Number, title: "Skip Count", description: "Number of triggers to skip before executing (0 = execute on 1st, 3 = execute on 4th)", defaultValue: 3, min: 0, max: 20, step: 1, displayStepper: true, hidden: (props) => props.mode === "pattern" }, pattern: { type: ControlType3.String, title: "Pattern", description: "Pattern like '0,0,1,0,1' where 0=ignore, 1=execute (repeats)", placeholder: "e.g., 0,0,1,0,1", defaultValue: "0,0,1", hidden: (props) => props.mode !== "pattern" }, behavior: { type: ControlType3.Enum, title: "Behavior", description: "Behavior to execute when trigger should fire", options: [AnimationBehavior.PLAY_FORWARD, AnimationBehavior.PLAY_BACKWARD, AnimationBehavior.TOGGLE, AnimationBehavior.PLAY_FORWARD_AND_REVERSE, AnimationBehavior.PLAY_BACKWARD_AND_REVERSE], optionTitles: ["Play Forward", "Play Backward", "Toggle", "Play Forward & Reverse", "Play Backward & Reverse"], defaultValue: AnimationBehavior.PLAY_FORWARD } } },
    // 🎯 NEW: Scroll-specific threshold controls (only shown when event is scroll)
    scrollThresholds: { type: ControlType3.Object, title: "Settings", description: "Configure one-shot scroll trigger thresholds", hidden: (props) => props.event !== EventType.SCROLL, controls: { elementStart: { type: ControlType3.Number, title: "Element Trigger Point", description: "Point on element that triggers animation (0% = top, 100% = bottom)", defaultValue: 0, min: 0, max: 100, step: 5, unit: "%", displayStepper: true }, viewportThreshold: { type: ControlType3.Number, title: "Viewport Threshold", description: "Viewport position when trigger fires (0% = top, 100% = bottom)", defaultValue: 80, min: 0, max: 100, step: 5, unit: "%", displayStepper: true }, thresholdCrossedBackward: { type: ControlType3.Enum, title: "Reverse Behavior", description: "What happens when scrolling back above threshold", options: ["none", "reverse", "reset", "complete"], optionTitles: ["Do Nothing (Remove Listener)", "Reverse Animation", "Reset to Start", "Jump to End"], defaultValue: "none" } } },
    targetElement: { ...createElementSelectionControls("Trigger Element"), hidden: (props) => isLoadEvent(props) }
  } } } };
}
function isLoadEvent(props) {
  return props.event === EventType.LOAD;
}
function createAnimatedElementControls() {
  return { animatedElements: { type: ControlType3.Array, title: "Targets", control: { type: ControlType3.Object, title: "Animation Target", controls: {
    // Base element selection (now includes individual trigger option)
    ...createElementSelectionControls("Animation Target").controls,
    // 🎨 FEATURE 2B: Text Processing Controls (Phase 2.1) - Line Masking System
    textProcessingEnabled: { type: ControlType3.Boolean, title: "Text split", description: "Split text into characters/words/lines" },
    textProcessingConfig: { type: ControlType3.Object, title: "Settings", hidden: (props) => !props.textProcessingEnabled, description: "Text split settings", controls: {
      animateBy: { type: ControlType3.Enum, title: "Animate by", description: "How to split the text for animation", options: ["characters", "words", "lines"], optionTitles: ["Characters", "Words", "Lines"], defaultValue: "characters" },
      maskLines: { type: ControlType3.Boolean, title: "Mask", description: "Mask lines", defaultValue: false },
      // Canvas mode configuration (simplified)
      canvasMode: { type: ControlType3.Object, title: "Canvas Mode Settings", controls: { enableInCanvas: { type: ControlType3.Boolean, title: "Enable in Canvas", description: "Allow text processing in Framer Canvas mode", defaultValue: true }, fallbackBehavior: { type: ControlType3.Enum, title: "Canvas Fallback", description: "What to do when Canvas mode limits are hit", options: [TextCanvasFallback.ANIMATE_CONTAINER, TextCanvasFallback.SKIP_WITH_WARNING, TextCanvasFallback.SIMPLIFIED_SPLIT], optionTitles: ["Animate Container Element", "Skip Animation (Show Warning)", "Use Simplified Splitting"], defaultValue: TextCanvasFallback.ANIMATE_CONTAINER, hidden: (props) => !props.enableInCanvas }, maxTextLength: { type: ControlType3.Number, title: "Max Text Length", description: "Maximum characters to process in Canvas mode", min: 50, max: 1e3, step: 50, defaultValue: 500, displayStepper: true, hidden: (props) => !props.enableInCanvas } } }
    } }
  } } } };
}
function createElementSelectionControls(title) {
  return { type: ControlType3.Object, title, controls: {
    // NEW: Scope selection with improved UX labels including individual trigger support
    scope: { type: ControlType3.Enum, title: "Search In", description: "Where to search for elements to animate", options: [ElementScope.SELF, ElementScope.PARENT, ElementScope.CHILDREN, ElementScope.SIBLINGS, ElementScope.DOCUMENT], optionTitles: ["Self (Element with FAME in it)", "Parent (Direct parent of Self)", "Child Elements", "Sibling Elements", "Entire Document"], defaultValue: ElementScope.SELF },
    // 🚀 NEW: Depth selection for CHILDREN and SIBLINGS
    depth: { type: ControlType3.Enum, title: "Depth", description: "How deep to search within the scope", options: [ScopeDepth.DIRECT, ScopeDepth.DEEP], optionTitles: ["Direct Only (Immediate)", "Deep (All Nested)"], defaultValue: ScopeDepth.DIRECT, hidden: (props) => props.scope !== ElementScope.CHILDREN && props.scope !== ElementScope.SIBLINGS },
    // Individual criteria fields (Framer-friendly approach)
    criteriaType1: { type: ControlType3.Enum, title: "Type 1", options: ["none", CriteriaType.FRAMER_NAME, CriteriaType.HTML_TAG, CriteriaType.CSS_SELECTOR, CriteriaType.ELEMENT_ID], optionTitles: ["No Filter", "Framer Name", "HTML Tag", "CSS Selector", "Element ID"], defaultValue: "none", hidden: (props) => props.scope === ElementScope.SELF || props.scope === ElementScope.PARENT },
    criteriaValue1: { type: ControlType3.String, title: "Value 1", placeholder: "Enter filter value...", defaultValue: "", hidden: (props) => props.criteriaType1 === "none" || props.scope === ElementScope.SELF || props.scope === ElementScope.PARENT },
    criteriaType2: { type: ControlType3.Enum, title: "Type 2", options: ["none", CriteriaType.FRAMER_NAME, CriteriaType.HTML_TAG, CriteriaType.CSS_SELECTOR, CriteriaType.ELEMENT_ID], optionTitles: ["No Filter", "Framer Name", "HTML Tag", "CSS Selector", "Element ID"], defaultValue: "none", hidden: (props) => props.scope === ElementScope.SELF || props.scope === ElementScope.PARENT },
    criteriaValue2: { type: ControlType3.String, title: "Value 2", placeholder: "Enter filter value...", defaultValue: "", hidden: (props) => props.criteriaType2 === "none" || props.scope === ElementScope.SELF || props.scope === ElementScope.PARENT },
    criteriaType3: { type: ControlType3.Enum, title: "Type 3", options: ["none", CriteriaType.FRAMER_NAME, CriteriaType.HTML_TAG, CriteriaType.CSS_SELECTOR, CriteriaType.ELEMENT_ID], optionTitles: ["No Filter", "Framer Name", "HTML Tag", "CSS Selector", "Element ID"], defaultValue: "none", hidden: (props) => props.scope === ElementScope.SELF || props.scope === ElementScope.PARENT },
    criteriaValue3: { type: ControlType3.String, title: "Value 3", placeholder: "Enter filter value...", defaultValue: "", hidden: (props) => props.criteriaType3 === "none" || props.scope === ElementScope.SELF || props.scope === ElementScope.PARENT }
  } };
}

// http-url:https://framerusercontent.com/modules/irLiwLLTu4YYD8ZExrwg/FfoCCo2tUh25oJno6CwZ/ScrollConfigurationControls.js
import { ControlType as ControlType4 } from "./_framer-runtime.js";
function createScrollConfiguration() {
  return { scrollScrubbedConfig: { type: ControlType4.Object, title: "Scroll", hidden: (props) => !hasScrollScrubbedAnimation(props), controls: {
    // Scroll trigger element selection (reuses existing element selection system)
    triggerElement: { type: ControlType4.Object, title: "Trigger", controls: {
      // NEW: Scope selection with improved UX labels
      scope: { type: ControlType4.Enum, title: "Trigger", description: "Where to search for the trigger element", options: [ElementScope.SELF, ElementScope.PARENT, ElementScope.CHILDREN, ElementScope.SIBLINGS, ElementScope.DOCUMENT], optionTitles: ["Self (Element with FAME in it)", "Parent (Direct parent of Self)", "Child Elements", "Sibling Elements", "Entire Document"], defaultValue: ElementScope.SELF },
      // 🚀 NEW: Depth selection for CHILDREN and SIBLINGS
      depth: { type: ControlType4.Enum, title: "Depth", description: "How deep to search within the scope", options: [ScopeDepth.DIRECT, ScopeDepth.DEEP], optionTitles: ["Direct Only (Immediate)", "Deep (All Nested)"], defaultValue: ScopeDepth.DIRECT, hidden: (props) => props.scope !== ElementScope.CHILDREN && props.scope !== ElementScope.SIBLINGS },
      // Individual criteria fields (Framer-friendly approach)
      criteriaType1: { type: ControlType4.Enum, title: "Filter", options: ["none", CriteriaType.FRAMER_NAME, CriteriaType.HTML_TAG, CriteriaType.CSS_SELECTOR, CriteriaType.ELEMENT_ID], optionTitles: ["No Filter", "Framer Name", "HTML Tag", "CSS Selector", "Element ID"], defaultValue: "none", hidden: (props) => props.scope === ElementScope.SELF || props.scope === ElementScope.PARENT },
      criteriaValue1: { type: ControlType4.String, title: "Value", placeholder: "Enter filter value...", defaultValue: "", hidden: (props) => props.criteriaType1 === "none" || props.scope === ElementScope.SELF || props.scope === ElementScope.PARENT }
    } },
    // Animation boundaries configuration
    boundaries: { type: ControlType4.Object, title: "Boundaries", description: "Define when animation starts and ends", controls: {
      // Animation start boundary
      start: { type: ControlType4.Object, title: "Start", description: "When animation begins (0% progress)", controls: { element: { type: ControlType4.Number, title: "Element", description: "Position on trigger element (0% = top, 100% = bottom)", defaultValue: 0, min: 0, max: 100, step: 1, unit: "%", displayStepper: true }, viewport: { type: ControlType4.Number, title: "Viewport", description: "Position in viewport (0% = top, 100% = bottom)", defaultValue: 100, min: 0, max: 100, step: 1, unit: "%", displayStepper: true } } },
      // Animation end boundary
      end: { type: ControlType4.Object, title: "End", description: "When animation completes (100% progress)", controls: { element: { type: ControlType4.Number, title: "Element", description: "Position on trigger element (0% = top, 100% = bottom)", defaultValue: 100, min: 0, max: 100, step: 1, unit: "%", displayStepper: true }, viewport: { type: ControlType4.Number, title: "Viewport", description: "Position in viewport (0% = top, 100% = bottom)", defaultValue: 0, min: 0, max: 100, step: 1, unit: "%", displayStepper: true } } }
    } }
  } } };
}

// http-url:https://framerusercontent.com/modules/NzhAEkojD2GPInsmKFmk/Px9ATRQBnJtLbS2FxRsS/StaggerControls.js
import { ControlType as ControlType5 } from "./_framer-runtime.js";
function createRegularStaggerControls() {
  return {
    // 🎯 SIMPLE STAGGER: Basic toggle and configuration only
    staggerEnabled: { type: ControlType5.Boolean, title: "Stagger", defaultValue: false },
    staggerConfig: { type: ControlType5.Object, title: "Stagger opt", description: "Stagger settings", controls: {
      delay: { type: ControlType5.Number, title: "Delay", defaultValue: 0.1, min: 0, max: 2, step: 0.05, unit: "s", description: "Time between each element's animation start" },
      // 🎯 NEW: Stagger strategy selection (linear vs grid)
      strategy: { type: ControlType5.Enum, title: "Strategy", options: ["linear", "grid"], optionTitles: ["Linear (1D)", "Grid (2D)"], defaultValue: "linear", displaySegmentedControl: true, segmentedControlDirection: "vertical" },
      // 🚀 LINEAR STAGGER: Enhanced order configuration
      orderMode: { type: ControlType5.Enum, title: "Playback", options: ["simple", "directional"], optionTitles: ["Same Order", "Different"], description: "Order for forward and backward animations", defaultValue: "simple", displaySegmentedControl: true, segmentedControlDirection: "vertical", hidden: (props) => props.strategy === "grid" },
      // Simple mode: Same order for both directions
      simpleOrder: { type: ControlType5.Enum, title: "Order", options: ["first-to-last", "last-to-first", "center-out", "edges-in", "random"], optionTitles: ["First to Last", "Last to First", "Center Outward", "Edges Inward", "Random"], defaultValue: "first-to-last", displaySegmentedControl: true, segmentedControlDirection: "vertical", hidden: (props) => props.orderMode !== "simple" || props.strategy === "grid" },
      // Directional mode: Different orders for forward vs backward
      forwardOrder: { type: ControlType5.Enum, title: "Forward", options: ["first-to-last", "last-to-first", "center-out", "edges-in", "random"], optionTitles: ["First \u203A Last", "Last \u203A First", "Center \u203A Out", "Edges \u203A In", "Random"], defaultValue: "first-to-last", displaySegmentedControl: true, segmentedControlDirection: "vertical", hidden: (props) => props.orderMode !== "directional" || props.strategy === "grid" },
      backwardOrder: { type: ControlType5.Enum, title: "Backward", options: ["first-to-last", "last-to-first", "center-out", "edges-in", "random"], optionTitles: ["First \u203A Last", "Last \u203A First", "Center \u203A Out", "Edges \u203A In", "Random"], defaultValue: "last-to-first", displaySegmentedControl: true, segmentedControlDirection: "vertical", hidden: (props) => props.orderMode !== "directional" || props.strategy === "grid" },
      // 🌐 GRID STAGGER: Grid-specific configuration
      // 🆕 NEW: Grid Mode Selector (appears when strategy = "grid")
      gridMode: { type: ControlType5.Enum, title: "Grid Mode", options: ["point-based", "row-based", "column-based"], optionTitles: ["From Point", "Row Waves", "Column Waves"], defaultValue: "point-based", displaySegmentedControl: true, segmentedControlDirection: "vertical", hidden: (props) => props.strategy !== "grid" },
      // ✅ EXISTING: gridOrigin - now conditional on point-based mode
      gridOrigin: { type: ControlType5.Enum, title: "Origin", options: ["center", "top-left", "top-center", "top-right", "center-left", "center-right", "bottom-left", "bottom-center", "bottom-right", "random"], optionTitles: ["Center", "Top Left", "Top Center", "Top Right", "Center Left", "Center Right", "Bottom Left", "Bottom Center", "Bottom Right", "Random"], defaultValue: "center", displaySegmentedControl: true, segmentedControlDirection: "vertical", hidden: (props) => props.strategy !== "grid" || props.gridMode !== "point-based" },
      // 🆕 NEW: Row-based wave direction
      gridRowDirection: { type: ControlType5.Enum, title: "Row", options: ["top-to-bottom", "bottom-to-top", "center-out-rows", "edges-in-rows"], optionTitles: ["Top \u2192 Bottom", "Bottom \u2192 Top", "Center \u2192 Edges", "Edges \u2192 Center"], defaultValue: "top-to-bottom", displaySegmentedControl: true, segmentedControlDirection: "vertical", hidden: (props) => props.strategy !== "grid" || props.gridMode !== "row-based" },
      // 🆕 NEW: Column-based wave direction
      gridColumnDirection: { type: ControlType5.Enum, title: "Column", options: ["left-to-right", "right-to-left", "center-out-columns", "edges-in-columns"], optionTitles: ["Left \u2192 Right", "Right \u2192 Left", "Center \u2192 Edges", "Edges \u2192 Center"], defaultValue: "left-to-right", displaySegmentedControl: true, segmentedControlDirection: "vertical", hidden: (props) => props.strategy !== "grid" || props.gridMode !== "column-based" },
      gridDistanceMetric: { type: ControlType5.Enum, title: "Distance", options: ["euclidean", "manhattan", "chebyshev"], optionTitles: ["Direct (Euclidean)", "City Blocks (Manhattan)", "Chessboard (Chebyshev)"], defaultValue: "euclidean", displaySegmentedControl: true, segmentedControlDirection: "vertical", hidden: (props) => props.strategy !== "grid" },
      // 🚀 NEW: Grid Reverse Mode - Choose reverse behavior for grid staggering
      gridReverseMode: { type: ControlType5.Enum, title: "Reverse", options: ["same-origin", "latest-elements"], optionTitles: ["Same Origin", "Latest Elements"], defaultValue: "latest-elements", displaySegmentedControl: true, segmentedControlDirection: "vertical", hidden: (props) => props.strategy !== "grid" },
      gridAutoDetect: { type: ControlType5.Boolean, title: "Auto-Detect", defaultValue: true, displaySegmentedControl: true, segmentedControlDirection: "vertical", hidden: (props) => props.strategy !== "grid" },
      gridRows: { type: ControlType5.Number, title: "Rows", defaultValue: 3, min: 1, max: 20, step: 1, displayStepper: true, segmentedControlDirection: "vertical", hidden: (props) => props.strategy !== "grid" || props.gridAutoDetect },
      gridColumns: { type: ControlType5.Number, title: "Columns", defaultValue: 3, min: 1, max: 20, step: 1, displayStepper: true, segmentedControlDirection: "vertical", hidden: (props) => props.strategy !== "grid" || props.gridAutoDetect }
    }, hidden: (props) => !shouldShowRegularStagger(props) }
  };
}
function createScrollStaggerControls() {
  return {
    // 🌊 SCROLL STAGGER: Enhanced hybrid stagger system for scroll-based animations
    scrollStaggerConfig: { type: ControlType5.Object, title: "Settings", description: "Stagger opt", hidden: (props) => !shouldShowScrollStagger(props), controls: {
      // 🚀 SCROLL-SPECIFIC: Mode selection (scrubbed vs threshold)
      mode: { type: ControlType5.Enum, title: "Mode", options: ["scrubbed", "threshold"], optionTitles: ["Scrubbed stagger", "Threshold Stagger"], defaultValue: "scrubbed", displaySegmentedControl: true, segmentedControlDirection: "vertical", description: "Threshold = Timed animations distributed over the scroll distance" },
      // 🚀 SCROLL-SPECIFIC: Scrub window for overlapping animations
      scrubWindow: { type: ControlType5.Number, title: "Duration %", min: 10, max: 100, step: 5, defaultValue: 50, unit: "%", displayStepper: true, hidden: (props) => props.mode !== "scrubbed" },
      // 🔥 SHARED STRATEGY: Linear vs Grid selection
      strategy: { type: ControlType5.Enum, title: "Strategy", options: ["linear", "grid"], optionTitles: ["Linear (1D)", "Grid (2D)"], defaultValue: "linear", displaySegmentedControl: true, segmentedControlDirection: "vertical" },
      // 🚀 SHARED LINEAR: Element order (no forward/backward for scroll)
      order: { type: ControlType5.Enum, title: "Order", options: ["first-to-last", "last-to-first", "center-out", "edges-in", "random"], optionTitles: ["First to Last", "Last to First", "Center Outward", "Edges Inward", "Random"], defaultValue: "first-to-last", displaySegmentedControl: true, segmentedControlDirection: "vertical", hidden: (props) => props.strategy === "grid" },
      // 🌐 SHARED GRID: Grid mode selector
      gridMode: { type: ControlType5.Enum, title: "Mode", options: ["point-based", "row-based", "column-based"], optionTitles: ["From Point", "Row Waves", "Column Waves"], defaultValue: "point-based", displaySegmentedControl: true, segmentedControlDirection: "vertical", hidden: (props) => props.strategy !== "grid" },
      // 🌐 SHARED GRID: Grid origin (point-based mode)
      gridOrigin: { type: ControlType5.Enum, title: "Origin", options: ["center", "top-left", "top-center", "top-right", "center-left", "center-right", "bottom-left", "bottom-center", "bottom-right", "random"], optionTitles: ["Center", "Top Left", "Top Center", "Top Right", "Center Left", "Center Right", "Bottom Left", "Bottom Center", "Bottom Right", "Random"], defaultValue: "center", displaySegmentedControl: true, segmentedControlDirection: "vertical", hidden: (props) => props.strategy !== "grid" || props.gridMode !== "point-based" },
      // 🌐 SHARED GRID: Row direction (row-based mode)
      gridRowDirection: { type: ControlType5.Enum, title: "Row", options: ["top-to-bottom", "bottom-to-top", "center-out-rows", "edges-in-rows"], optionTitles: ["Top \u2192 Bottom", "Bottom \u2192 Top", "Center \u2192 Edges", "Edges \u2192 Center"], defaultValue: "top-to-bottom", displaySegmentedControl: true, segmentedControlDirection: "vertical", hidden: (props) => props.strategy !== "grid" || props.gridMode !== "row-based" },
      // 🌐 SHARED GRID: Column direction (column-based mode)
      gridColumnDirection: { type: ControlType5.Enum, title: "Column", options: ["left-to-right", "right-to-left", "center-out-columns", "edges-in-columns"], optionTitles: ["Left \u2192 Right", "Right \u2192 Left", "Center \u2192 Edges", "Edges \u2192 Center"], defaultValue: "left-to-right", displaySegmentedControl: true, segmentedControlDirection: "vertical", hidden: (props) => props.strategy !== "grid" || props.gridMode !== "column-based" },
      // 🌐 SHARED GRID: Distance calculation metric
      gridDistanceMetric: { type: ControlType5.Enum, title: "Distance", options: ["euclidean", "manhattan", "chebyshev"], optionTitles: ["Direct (Euclidean)", "City Blocks (Manhattan)", "Chessboard (Chebyshev)"], defaultValue: "euclidean", displaySegmentedControl: true, segmentedControlDirection: "vertical", hidden: (props) => props.strategy !== "grid" },
      // 🌐 SHARED GRID: Reverse behavior
      gridReverseMode: { type: ControlType5.Enum, title: "Reverse", options: ["same-origin", "latest-elements"], optionTitles: ["Same Origin", "Latest Elements"], defaultValue: "latest-elements", displaySegmentedControl: true, segmentedControlDirection: "vertical", hidden: (props) => props.strategy !== "grid" },
      // 🌐 SHARED GRID: Auto-detection toggle
      gridAutoDetect: { type: ControlType5.Boolean, title: "Auto-Detect", defaultValue: true, displaySegmentedControl: true, segmentedControlDirection: "vertical", hidden: (props) => props.strategy !== "grid" },
      // 🌐 SHARED GRID: Manual dimensions
      gridRows: { type: ControlType5.Number, title: "Rows", defaultValue: 3, min: 1, max: 20, step: 1, displayStepper: true, segmentedControlDirection: "vertical", hidden: (props) => props.strategy !== "grid" || props.gridAutoDetect },
      gridColumns: { type: ControlType5.Number, title: "Columns", defaultValue: 3, min: 1, max: 20, step: 1, displayStepper: true, segmentedControlDirection: "vertical", hidden: (props) => props.strategy !== "grid" || props.gridAutoDetect }
    } }
  };
}
function createInterruptBehaviorControls() {
  return {
    // 🚨 NEW: Interrupt behavior controls
    interruptBehavior: { type: ControlType5.Enum, title: "On Interrupt", options: [InterruptBehavior.IMMEDIATE, InterruptBehavior.BLOCK, InterruptBehavior.QUEUE_LATEST], optionTitles: ["Start Immediately", "Wait Until Complete", "Queue Latest Intent"], defaultValue: InterruptBehavior.IMMEDIATE, hidden: (props) => isScrollBased(props) }
  };
}

// http-url:https://framerusercontent.com/modules/3DDfIamNsjBpJMh9pskZ/jxtoI3FihmmtREX1Kymb/AnimationModeControls.js
import { ControlType as ControlType6 } from "./_framer-runtime.js";
function createAnimationParadigmControls() {
  return { animationParadigm: { type: ControlType6.Enum, title: "Mode", options: ["time-based", "scroll-based"], optionTitles: ["Time Based", "Scroll (scrubbed)"], defaultValue: "time-based", displaySegmentedControl: true, segmentedControlDirection: "vertical" } };
}

// http-url:https://framerusercontent.com/modules/UrDBzbVw0TzianJ6cF5N/WIwB6qSGeF0WEyUnjiT6/PropertySelectionControls.js
import { ControlType as ControlType7 } from "./_framer-runtime.js";
function createGlobalTimelineControls() {
  return {
    // Master toggle for global timeline behavior
    globalTimelineEnabled: { type: ControlType7.Boolean, title: "Timeline", defaultValue: false, enabledTitle: "Global", disabledTitle: "No Global" },
    // Global timeline configuration (only shown when enabled)
    globalTimelineConfig: { type: ControlType7.Object, title: "T - Settings", description: "Global timeline settings", hidden: (props) => !props.globalTimelineEnabled, controls: {
      duration: { type: ControlType7.Number, title: "Default Duration (s)", description: "Default duration for all properties", min: 0.01, max: 10, step: 0.1, defaultValue: 0.6, displayStepper: true },
      delay: { type: ControlType7.Number, title: "Global Delay (s)", description: "Base delay added to all property delays", min: 0, max: 10, step: 0.1, defaultValue: 0, displayStepper: true },
      easing: { type: ControlType7.Enum, title: "Default Easing", description: "Default easing function for all properties", options: EASING_OPTIONS, optionTitles: ["Linear", "Ease In", "Ease Out", "Ease In-Out", "Cubic", "Cubic In", "Cubic Out", "Cubic In-Out", "Expo", "Expo In", "Expo Out", "Expo In-Out", "Smooth Out", "Smooth In", "Pause", "Out-N-In", "Dramatic Out-N-In", "Back Out", "Back In", "Spring", "Spring In", "Spring Out"], defaultValue: DEFAULT_EASING },
      // Spring configuration for global timeline (when spring easing is selected)
      springConfig: { type: ControlType7.Object, title: "Global Spring Settings", hidden: (props) => !props.easing?.toLowerCase().includes("spring"), controls: { amplitude: { type: ControlType7.Number, title: "Amplitude", defaultValue: 1, min: 1, max: 5, step: 0.1 }, period: { type: ControlType7.Number, title: "Period", defaultValue: 0.3, min: 0.1, max: 2, step: 0.1 } } }
    } }
  };
}

// http-url:https://framerusercontent.com/modules/4VhV010ft7E3V47h4kQU/FYH8SbwiGtSqz9uh8Nlp/AnimationSlots.js
function createPropertyConfigurationArray() {
  return { animateProperties: { type: ControlType8.Array, title: "Properties", maxCount: 15, control: { type: ControlType8.Object, title: "Property", controls: {
    // Property selection dropdown
    property: { type: ControlType8.Enum, title: "Property", options: ANIMATABLE_PROPERTIES.map((prop) => prop.name), optionTitles: ANIMATABLE_PROPERTIES.map((prop) => prop.title), defaultValue: "translateX" },
    // Property-specific controls that adapt based on selection
    ...createAdaptivePropertyControls()
  } } } };
}
function createAdaptivePropertyControls() {
  return {
    // From value - simple mode (hidden when distributed)
    from: { type: ControlType8.String, title: "From", placeholder: "e.g. 0px, 20vh, 0deg", defaultValue: "", hidden: (props) => props.useDistributedValues === true },
    // To value - simple mode (hidden when distributed)
    to: { type: ControlType8.String, title: "To", placeholder: "e.g., 100px, #ABABAB, 1", defaultValue: "", hidden: (props) => props.useDistributedValues === true },
    // 📊 DISTRIBUTED PROPERTIES: Main toggle
    useDistributedValues: { type: ControlType8.Boolean, title: "Distributed", description: "Distribute different values across multiple elements", defaultValue: false },
    // 📊 DISTRIBUTED PROPERTY CONTROLS: Using modular function from DistributedPropertyControls.ts
    ...createDistributedPropertyArrayControls(),
    // Global settings toggle
    useGlobalSettings: { type: ControlType8.Boolean, title: "Timeline", description: "Use global timeline settings for duration and delay", defaultValue: true },
    // Timing controls
    easing: { type: ControlType8.Enum, title: "Easing", options: EASING_OPTIONS, optionTitles: ["Linear", "Ease In", "Ease Out", "Ease In-Out", "Cubic", "Cubic In", "Cubic Out", "Cubic In-Out", "Expo", "Expo In", "Expo Out", "Expo In-Out", "Smooth Out", "Smooth In", "Pause", "Out-N-In", "Dramatic Out-N-In", "Back Out", "Back In", "Spring", "Spring In", "Spring Out"], defaultValue: DEFAULT_EASING, hidden: (props) => props.useGlobalSettings === true },
    // Spring configuration
    springConfig: { type: ControlType8.Object, title: "Spring", controls: { amplitude: { type: ControlType8.Number, title: "Amplitude", defaultValue: 1, min: 1, max: 5, step: 0.1 }, period: { type: ControlType8.Number, title: "Period", defaultValue: 0.3, min: 0.1, max: 2, step: 0.1 } }, hidden: (props) => !props.easing?.toLowerCase().includes("spring") },
    // Duration override
    duration: { type: ControlType8.Number, title: "Duration", min: 0.01, max: 10, step: 0.1, defaultValue: 0.6, displayStepper: true, hidden: (props) => props.useGlobalSettings === true },
    // Delay override
    delay: { type: ControlType8.Number, title: "Delay", min: 0, max: 10, step: 0.1, defaultValue: 0, displayStepper: true, hidden: (props) => props.useGlobalSettings === true }
  };
}
function generatePropertyControls() {
  console.log("\u{1F3AF} [NEW APPROACH] Using efficient property configuration array...");
  const propertyConfig = createPropertyConfigurationArray();
  return propertyConfig;
}
function CreateAnimationSlotsObject() {
  return { animationSlots: { type: ControlType8.Array, title: "Animations", defaultValue: [{
    id: "default-animation",
    triggerEvent: EventType.CLICK,
    triggerBehavior: AnimationBehavior.PLAY_ONCE,
    triggers: [{ event: EventType.CLICK, behavior: AnimationBehavior.PLAY_FORWARD, overrideState: false, targetElement: { scope: ElementScope.SELF, criteriaType1: "none", criteriaValue1: "", criteriaType2: "none", criteriaValue2: "", criteriaType3: "none", criteriaValue3: "" } }],
    // 🎯 TOP-LEVEL ANIMATION PARADIGM: Fundamental choice between time-based and scroll-based
    //...topLevelAnimationParadigm,
    animatedElements: [{ scope: ElementScope.SELF, criteriaType1: "none", criteriaValue1: "", criteriaType2: "none", criteriaValue2: "", criteriaType3: "none", criteriaValue3: "" }],
    animationMode: AnimationMode.TIMED,
    activeProperties: ["translateX"],
    // 🌐 PHASE 4.2: Global timeline default values
    globalTimelineEnabled: false,
    globalTimelineConfig: { duration: 0.6, delay: 0, easing: "ease", springConfig: { amplitude: 1, period: 0.3 } },
    // 🚨 NEW: Interrupt behavior default
    interruptBehavior: InterruptBehavior.IMMEDIATE,
    translateX: { from: "0px", to: "100px", unit: "px", useGlobalSettings: true }
  }], control: { type: ControlType8.Object, title: "Animation", controls: {
    // Animation slot ID (auto-generated or user-defined)
    id: { type: ControlType8.String, title: "Animation ID", defaultValue: "", placeholder: "Auto-generated if empty" },
    // Trigger configuration (simplified approach)
    //...triggerControls,
    // ✅ PHASE 5 - STEP 2: Replace animation paradigm with modular function
    ...createAnimationParadigmControls(),
    // ✅ PHASE 2 - STEP 2: Replace triggers array with modular function
    ...createTriggerElementControls(),
    // ✅ PHASE 2 - STEP 3: Replace animated elements with modular function
    ...createAnimatedElementControls(),
    // ✅ PHASE 3 - STEP 2: Replace scroll configuration with modular function
    ...createScrollConfiguration(),
    // ✅ PHASE 5 - STEP 3: Replace global timeline controls with modular function
    ...createGlobalTimelineControls(),
    // ✅ PHASE 4 - STEP 2: Replace regular stagger controls with modular function
    ...createRegularStaggerControls(),
    // ✅ PHASE 4 - STEP 3: Replace scroll stagger controls with modular function
    ...createScrollStaggerControls(),
    // ✅ PHASE 4 - STEP 4: Replace interrupt behavior controls with modular function
    ...createInterruptBehaviorControls(),
    // ✅ SCROLL CONFIGURATION: Implemented dual-mode scroll system (timed + scrubbed)
    // 🎯 NEW APPROACH: Replace old property system with efficient array
    // OLD: activeProperties + 2,500+ hidden property controls
    // NEW: animateProperties array with only needed controls
    ...generatePropertyControls()
  } } } };
}

// http-url:https://framerusercontent.com/modules/H3c7LnurEJKx9rSbhQha/7ItbdRxMiyt8ajEZKMX1/AdvancedInterpolators.js
function parseGradient(gradientString) {
  const trimmed = gradientString.trim();
  const typeMatch = trimmed.match(/^(linear-gradient|radial-gradient|conic-gradient)\s*\(/);
  if (!typeMatch) {
    throw new Error(`Invalid gradient format: ${gradientString}`);
  }
  const gradientType = typeMatch[1];
  const content = trimmed.slice(gradientType.length + 1, -1);
  let position = "";
  let colorStopsString = content;
  if (gradientType === "radial-gradient") {
    const positionMatch = content.match(/(circle at\s+)?([-+]?[0-9.]+[a-z%]+\s+[-+]?[0-9.]+[a-z%]+)/i);
    if (positionMatch) {
      const positionCoords = positionMatch[2] || "50% 50%";
      const fullPositionPart = `circle at ${positionCoords}`;
      const positionEndIndex = content.indexOf(fullPositionPart) + fullPositionPart.length;
      let colorStopsStart = positionEndIndex;
      while (colorStopsStart < content.length && (content[colorStopsStart] === "," || content[colorStopsStart] === " ")) {
        colorStopsStart++;
      }
      colorStopsString = content.substring(colorStopsStart);
      position = fullPositionPart;
    }
  } else if (gradientType === "linear-gradient") {
    const directionMatch = content.match(/^([-+]?[0-9.]+deg|to\s+(?:top|bottom|left|right)(?:\s+(?:left|right|top|bottom))?)?(?:,\s*)?(.*)$/i);
    if (directionMatch && directionMatch[1]) {
      position = directionMatch[1];
      colorStopsString = directionMatch[2] || content;
    }
  } else if (gradientType === "conic-gradient") {
    const conicMatch = content.match(/^(?:from\s+[-+]?[0-9.]+deg)?\s*(?:at\s+[-+]?[0-9.]+[a-z%]+\s+[-+]?[0-9.]+[a-z%]+)?(?:,\s*)?(.*)$/i);
    if (conicMatch) {
      const fromAtPart = content.substring(0, content.length - conicMatch[1].length).replace(/,\s*$/, "").trim();
      if (fromAtPart) {
        position = fromAtPart;
      }
      colorStopsString = conicMatch[1] || content;
    }
  }
  const colorStops = [];
  const colorStopRegex = /(rgba\([^)]+\)|rgb\([^)]+\)|#[0-9a-f]{3,8})\s+([-+]?[0-9.]+(?:vh|px|%|em|rem))/gi;
  let match;
  while ((match = colorStopRegex.exec(colorStopsString)) !== null) {
    colorStops.push({ color: match[1], position: match[2] });
  }
  if (colorStops.length === 0) {
    const simpleColorRegex = /((?:rgba?\([^)]+\)|hsla?\([^)]+\)|#[0-9a-f]{3,8}|\b(?:red|blue|green|yellow|black|white|transparent|orange|purple|pink|gray|grey)\b))/gi;
    const colorMatches = colorStopsString.match(simpleColorRegex);
    const colors = colorMatches ? Array.from(colorMatches) : [];
    colors.forEach((color, index) => {
      const position2 = colors.length === 1 ? "50%" : `${index / (colors.length - 1) * 100}%`;
      colorStops.push({ color: color.trim(), position: position2 });
    });
  }
  return { type: gradientType, position: position || void 0, colorStops, originalString: gradientString };
}
function parseRgbColor(rgb) {
  const rgbaMatch = rgb.match(/rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([0-9.]+)\s*\)/i);
  if (rgbaMatch) {
    return { r: parseInt(rgbaMatch[1], 10), g: parseInt(rgbaMatch[2], 10), b: parseInt(rgbaMatch[3], 10), a: parseFloat(rgbaMatch[4]) };
  }
  const rgbMatch = rgb.match(/rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/i);
  if (rgbMatch) {
    return { r: parseInt(rgbMatch[1], 10), g: parseInt(rgbMatch[2], 10), b: parseInt(rgbMatch[3], 10), a: 1 };
  }
  return { r: 0, g: 0, b: 0, a: 1 };
}
function hexToRgb(hex) {
  hex = hex.replace(/^#/, "");
  let r, g, b;
  if (hex.length === 3) {
    r = parseInt(hex.charAt(0) + hex.charAt(0), 16);
    g = parseInt(hex.charAt(1) + hex.charAt(1), 16);
    b = parseInt(hex.charAt(2) + hex.charAt(2), 16);
  } else {
    r = parseInt(hex.substring(0, 2), 16);
    g = parseInt(hex.substring(2, 4), 16);
    b = parseInt(hex.substring(4, 6), 16);
  }
  return { r, g, b };
}
function interpolateRgbColors(color1, color2, factor) {
  let c1, c2;
  if (color1.startsWith("rgb")) {
    c1 = parseRgbColor(color1);
  } else {
    c1 = { ...hexToRgb(color1.replace("#", "")), a: 1 };
  }
  if (color2.startsWith("rgb")) {
    c2 = parseRgbColor(color2);
  } else {
    c2 = { ...hexToRgb(color2.replace("#", "")), a: 1 };
  }
  const r = Math.round(c1.r + (c2.r - c1.r) * factor);
  const g = Math.round(c1.g + (c2.g - c1.g) * factor);
  const b = Math.round(c1.b + (c2.b - c1.b) * factor);
  const a = parseFloat((c1.a + (c2.a - c1.a) * factor).toFixed(2));
  return a < 1 ? `rgba(${r}, ${g}, ${b}, ${a})` : `rgb(${r}, ${g}, ${b})`;
}
function interpolatePosition(pos1, pos2, progress) {
  const components1 = pos1.match(/([-+]?[0-9.]+[a-z%]+)/g) || [];
  const components2 = pos2.match(/([-+]?[0-9.]+[a-z%]+)/g) || [];
  if (components1.length !== components2.length) {
    return progress > 0.5 ? pos2 : pos1;
  }
  const result = components1.map((comp, index) => {
    const val1Match = comp.match(/([-+]?[0-9.]+)([a-z%]+)/);
    const val2Match = components2[index].match(/([-+]?[0-9.]+)([a-z%]+)/);
    if (val1Match && val2Match && val1Match[2] === val2Match[2]) {
      const val1 = parseFloat(val1Match[1]);
      const val2 = parseFloat(val2Match[1]);
      const unit = val1Match[2];
      const interpolatedVal = val1 + (val2 - val1) * progress;
      return `${interpolatedVal}${unit}`;
    }
    return progress > 0.5 ? components2[index] : comp;
  }).join(" ");
  return result;
}
function interpolatePositionValue(pos1, pos2, progress) {
  const value1Match = pos1.match(/([-+]?[0-9.]+)([a-z%]+)/);
  const value2Match = pos2.match(/([-+]?[0-9.]+)([a-z%]+)/);
  if (value1Match && value2Match && value1Match[2] === value2Match[2]) {
    const val1 = parseFloat(value1Match[1]);
    const val2 = parseFloat(value2Match[1]);
    const unit = value1Match[2];
    const interpolatedVal = val1 + (val2 - val1) * progress;
    return `${interpolatedVal}${unit}`;
  }
  return progress > 0.5 ? pos2 : pos1;
}
function interpolateGradient(gradient1, gradient2, progress) {
  if (progress <= 0)
    return gradient1;
  if (progress >= 1)
    return gradient2;
  try {
    const parsed1 = parseGradient(gradient1);
    const parsed2 = parseGradient(gradient2);
    if (parsed1.colorStops.length === 0 || parsed2.colorStops.length === 0) {
      console.warn("Failed to parse gradient structure:", parsed1.colorStops.length, parsed2.colorStops.length);
      return progress < 0.5 ? gradient1 : gradient2;
    }
    if (parsed1.type !== parsed2.type) {
      console.warn("Gradient types differ, using step interpolation");
      return progress < 0.5 ? gradient1 : gradient2;
    }
    let interpolatedPosition = "";
    if (parsed1.position && parsed2.position) {
      if (parsed1.type === "linear-gradient") {
        interpolatedPosition = interpolateLinearDirection(parsed1.position, parsed2.position, progress);
      } else if (parsed1.type === "radial-gradient") {
        interpolatedPosition = interpolateRadialPosition(parsed1.position, parsed2.position, progress);
      } else if (parsed1.type === "conic-gradient") {
        interpolatedPosition = interpolateConicPosition(parsed1.position, parsed2.position, progress);
      }
    } else {
      interpolatedPosition = parsed1.position || parsed2.position || "";
    }
    let result = `${parsed1.type}(`;
    if (interpolatedPosition) {
      result += interpolatedPosition + ", ";
    }
    const stopCount = Math.max(parsed1.colorStops.length, parsed2.colorStops.length);
    const interpolatedStops = [];
    for (let i = 0; i < stopCount; i++) {
      const stop1 = i < parsed1.colorStops.length ? parsed1.colorStops[i] : parsed1.colorStops[parsed1.colorStops.length - 1];
      const stop2 = i < parsed2.colorStops.length ? parsed2.colorStops[i] : parsed2.colorStops[parsed2.colorStops.length - 1];
      const interpolatedColor = interpolateRgbColors(stop1.color, stop2.color, progress);
      const interpolatedPos = interpolatePositionValue(stop1.position, stop2.position, progress);
      interpolatedStops.push(`${interpolatedColor} ${interpolatedPos}`);
    }
    result += interpolatedStops.join(", ");
    result += ")";
    return result;
  } catch (error) {
    console.warn("Enhanced gradient interpolation failed:", error);
    return progress < 0.5 ? gradient1 : gradient2;
  }
}
function interpolateLinearDirection(from, to, progress) {
  const fromAngle = parseAngle(from);
  const toAngle = parseAngle(to);
  if (fromAngle !== null && toAngle !== null) {
    const interpolatedAngle = fromAngle + (toAngle - fromAngle) * progress;
    return `${interpolatedAngle}deg`;
  }
  return progress < 0.5 ? from : to;
}
function interpolateRadialPosition(from, to, progress) {
  return interpolatePosition(from, to, progress);
}
function interpolateConicPosition(from, to, progress) {
  return progress < 0.5 ? from : to;
}
function parseAngle(direction) {
  const angleMatch = direction.match(/([-+]?[0-9]*\.?[0-9]+)deg/);
  if (angleMatch) {
    return parseFloat(angleMatch[1]);
  }
  const keywordAngles = { "to top": 0, "to right": 90, "to bottom": 180, "to left": 270, "to top right": 45, "to bottom right": 135, "to bottom left": 225, "to top left": 315 };
  return keywordAngles[direction.toLowerCase()] ?? null;
}
function parseClipPath(clipPath) {
  const trimmed = clipPath.trim();
  const insetMatch = trimmed.match(/inset\s*\(\s*([^)]+)\s*\)/);
  if (insetMatch) {
    const values = insetMatch[1].split(/\s+/).map((v) => v.trim());
    return { type: "inset", values, originalString: clipPath };
  }
  const polygonMatch = trimmed.match(/polygon\s*\(\s*([^)]+)\s*\)/);
  if (polygonMatch) {
    const values = polygonMatch[1].split(",").map((v) => v.trim());
    return { type: "polygon", values, originalString: clipPath };
  }
  const circleMatch = trimmed.match(/circle\s*\(\s*([^)]+)\s*\)/);
  if (circleMatch) {
    const values = circleMatch[1].split(/\s+/).map((v) => v.trim());
    return { type: "circle", values, originalString: clipPath };
  }
  const ellipseMatch = trimmed.match(/ellipse\s*\(\s*([^)]+)\s*\)/);
  if (ellipseMatch) {
    const values = ellipseMatch[1].split(/\s+/).map((v) => v.trim());
    return { type: "ellipse", values, originalString: clipPath };
  }
  throw new Error(`Unsupported clip path format: ${clipPath}`);
}
function interpolateClipPath(from, to, progress) {
  if (progress <= 0)
    return from;
  if (progress >= 1)
    return to;
  try {
    const fromParsed = parseClipPath(from);
    const toParsed = parseClipPath(to);
    if (fromParsed.type !== toParsed.type) {
      console.warn("Clip path types differ, using step interpolation");
      return progress < 0.5 ? from : to;
    }
    if (fromParsed.values.length !== toParsed.values.length) {
      console.warn("Clip path value counts differ, using step interpolation");
      return progress < 0.5 ? from : to;
    }
    const interpolatedValues = fromParsed.values.map((fromValue, index) => {
      const toValue = toParsed.values[index];
      return interpolateClipPathValue(fromValue, toValue, progress);
    });
    if (fromParsed.type === "inset") {
      return `inset(${interpolatedValues.join(" ")})`;
    } else if (fromParsed.type === "polygon") {
      return `polygon(${interpolatedValues.join(", ")})`;
    } else if (fromParsed.type === "circle") {
      return `circle(${interpolatedValues.join(" ")})`;
    } else if (fromParsed.type === "ellipse") {
      return `ellipse(${interpolatedValues.join(" ")})`;
    }
    return progress < 0.5 ? from : to;
  } catch (error) {
    console.warn("Clip path interpolation failed:", error);
    return progress < 0.5 ? from : to;
  }
}
function interpolateClipPathValue(from, to, progress) {
  const fromMatch = from.match(/([-+]?[0-9]*\.?[0-9]+)([a-z%]*)/);
  const toMatch = to.match(/([-+]?[0-9]*\.?[0-9]+)([a-z%]*)/);
  if (fromMatch && toMatch && fromMatch[2] === toMatch[2]) {
    const fromValue = parseFloat(fromMatch[1]);
    const toValue = parseFloat(toMatch[1]);
    const unit = fromMatch[2];
    const interpolatedValue = fromValue + (toValue - fromValue) * progress;
    return `${interpolatedValue}${unit}`;
  }
  return progress < 0.5 ? from : to;
}
function applyTextBackgroundImage(element, backgroundImage) {
  element.style.color = "transparent";
  element.style.backgroundImage = backgroundImage;
  element.style.webkitBackgroundClip = "text";
  element.style.backgroundClip = "text";
  element.style.display = "inline-block";
  element.style.backgroundSize = "cover";
  element.style.backgroundPosition = "center";
}
function findTextElement(element) {
  if (element.getAttribute("data-framer-component-type") === "Text") {
    return element;
  }
  if (element.childNodes && element.childNodes.length === 1 && element.childNodes[0].nodeType === Node.TEXT_NODE && element.childNodes[0].textContent?.trim()) {
    return element;
  }
  const framerTextElements = element.querySelectorAll('[data-framer-component-type="Text"]');
  if (framerTextElements.length > 0) {
    return framerTextElements[0];
  }
  const textTags = ["p", "h1", "h2", "h3", "h4", "h5", "h6", "span"];
  for (const tag of textTags) {
    const elements = element.getElementsByTagName(tag);
    if (elements.length > 0) {
      return elements[0];
    }
  }
  for (let i = 0; i < element.children.length; i++) {
    const child = element.children[i];
    const textElement = findTextElement(child);
    if (textElement) {
      return textElement;
    }
  }
  return null;
}
function interpolateBackgroundPosition(from, to, progress) {
  if (progress <= 0)
    return from;
  if (progress >= 1)
    return to;
  try {
    const fromParts = parseBackgroundPosition(from);
    const toParts = parseBackgroundPosition(to);
    if (fromParts && toParts && fromParts.length === toParts.length) {
      const interpolatedParts = fromParts.map((fromPart, index) => {
        const toPart = toParts[index];
        return interpolatePositionComponent(fromPart, toPart, progress);
      });
      return interpolatedParts.join(" ");
    }
    return progress < 0.5 ? from : to;
  } catch (error) {
    console.warn("Background position interpolation failed:", error);
    return progress < 0.5 ? from : to;
  }
}
function interpolateBackgroundSize(from, to, progress) {
  if (progress <= 0)
    return from;
  if (progress >= 1)
    return to;
  try {
    const fromParts = parseBackgroundSize(from);
    const toParts = parseBackgroundSize(to);
    if (fromParts && toParts && fromParts.isNumeric && toParts.isNumeric) {
      const interpolatedX = interpolatePositionValue(fromParts.x, toParts.x, progress);
      const interpolatedY = fromParts.y && toParts.y ? interpolatePositionValue(fromParts.y, toParts.y, progress) : fromParts.y || toParts.y || interpolatedX;
      return fromParts.y || toParts.y ? `${interpolatedX} ${interpolatedY}` : interpolatedX;
    }
    return progress < 0.5 ? from : to;
  } catch (error) {
    console.warn("Background size interpolation failed:", error);
    return progress < 0.5 ? from : to;
  }
}
function interpolateComplexCSSValue(from, to, progress) {
  if (progress <= 0)
    return from;
  if (progress >= 1)
    return to;
  try {
    if ((from.includes("px") || from.includes("%")) && (to.includes("px") || to.includes("%"))) {
      return interpolateCSSShadow(from, to, progress);
    }
    if (from.includes("blur(") || from.includes("brightness(") || to.includes("blur(") || to.includes("brightness(")) {
      return interpolateCSSFilter(from, to, progress);
    }
    return progress < 0.5 ? from : to;
  } catch (error) {
    console.warn("Complex CSS value interpolation failed:", error);
    return progress < 0.5 ? from : to;
  }
}
function parseBackgroundPosition(position) {
  const trimmed = position.trim();
  const keywordMap = { top: "50% 0%", bottom: "50% 100%", left: "0% 50%", right: "100% 50%", center: "50% 50%", "top left": "0% 0%", "top right": "100% 0%", "bottom left": "0% 100%", "bottom right": "100% 100%", "left top": "0% 0%", "right top": "100% 0%", "left bottom": "0% 100%", "right bottom": "100% 100%" };
  if (keywordMap[trimmed]) {
    return keywordMap[trimmed].split(" ");
  }
  const parts = trimmed.split(/\s+/);
  if (parts.length >= 1 && parts.length <= 2) {
    if (parts.length === 1) {
      parts.push("50%");
    }
    return parts;
  }
  return null;
}
function parseBackgroundSize(size) {
  const trimmed = size.trim();
  if (trimmed === "auto" || trimmed === "cover" || trimmed === "contain") {
    return { x: trimmed, isNumeric: false };
  }
  const parts = trimmed.split(/\s+/);
  if (parts.length === 1) {
    const isNumeric = hasNumericValue(parts[0]);
    return { x: parts[0], isNumeric };
  } else if (parts.length === 2) {
    const isNumeric = hasNumericValue(parts[0]) && hasNumericValue(parts[1]);
    return { x: parts[0], y: parts[1], isNumeric };
  }
  return null;
}
function hasNumericValue(value) {
  return /^\d+(\.\d+)?(px|%|em|rem|vw|vh)$/.test(value.trim());
}
function interpolatePositionComponent(from, to, progress) {
  return interpolatePositionValue(from, to, progress);
}
function interpolateCSSShadow(from, to, progress) {
  const fromNumbers = extractNumbers(from);
  const toNumbers = extractNumbers(to);
  if (fromNumbers.length === toNumbers.length && fromNumbers.length > 0) {
    let result = from;
    for (let i = 0; i < fromNumbers.length; i++) {
      const interpolatedValue = fromNumbers[i] + (toNumbers[i] - fromNumbers[i]) * progress;
      result = result.replace(fromNumbers[i].toString(), interpolatedValue.toString());
    }
    return result;
  }
  return progress < 0.5 ? from : to;
}
function interpolateCSSFilter(from, to, progress) {
  if (from.includes("blur(") && to.includes("blur(")) {
    const fromBlur = extractFilterValue(from, "blur");
    const toBlur = extractFilterValue(to, "blur");
    if (fromBlur !== null && toBlur !== null) {
      const interpolatedBlur = fromBlur + (toBlur - fromBlur) * progress;
      return `blur(${interpolatedBlur}px)`;
    }
  }
  if (from.includes("brightness(") && to.includes("brightness(")) {
    const fromBrightness = extractFilterValue(from, "brightness");
    const toBrightness = extractFilterValue(to, "brightness");
    if (fromBrightness !== null && toBrightness !== null) {
      const interpolatedBrightness = fromBrightness + (toBrightness - fromBrightness) * progress;
      return `brightness(${interpolatedBrightness})`;
    }
  }
  return progress < 0.5 ? from : to;
}
function extractNumbers(str) {
  const matches = str.match(/-?\d+\.?\d*/g);
  return matches ? matches.map(parseFloat) : [];
}
function extractFilterValue(str, functionName) {
  const regex = new RegExp(`${functionName}\\((\\d+(?:\\.\\d+)?)(?:px)?\\)`);
  const match = str.match(regex);
  return match ? parseFloat(match[1]) : null;
}
function isValidBackgroundPosition(value) {
  if (!value || typeof value !== "string")
    return false;
  const trimmed = value.trim();
  const validKeywords = ["top", "bottom", "left", "right", "center", "top left", "top right", "bottom left", "bottom right", "left top", "right top", "left bottom", "right bottom"];
  if (validKeywords.includes(trimmed))
    return true;
  const parts = trimmed.split(/\s+/);
  if (parts.length >= 1 && parts.length <= 2) {
    return parts.every((part) => /^-?\d+(\.\d+)?(px|%|em|rem|vw|vh)$/.test(part) || ["top", "bottom", "left", "right", "center"].includes(part));
  }
  return false;
}
function isValidBackgroundSize(value) {
  if (!value || typeof value !== "string")
    return false;
  const trimmed = value.trim();
  if (["auto", "cover", "contain"].includes(trimmed))
    return true;
  const parts = trimmed.split(/\s+/);
  if (parts.length >= 1 && parts.length <= 2) {
    return parts.every((part) => /^\d+(\.\d+)?(px|%|em|rem|vw|vh)$/.test(part) || part === "auto");
  }
  return false;
}

// http-url:https://framerusercontent.com/modules/yAAXskqUhsycQPob6sAj/CzGoA9rz69G2aNQlzokt/PropertyTimeline.js
var numberInterpolator = { propertyType: "number", valueAtTime(keyframes, time, springConfig) {
  if (keyframes.length === 0)
    return 0;
  if (keyframes.length === 1)
    return keyframes[0].value;
  const { before, after } = findSurroundingKeyframes(keyframes, time);
  if (!before)
    return after.value;
  if (!after)
    return before.value;
  if (before === after)
    return before.value;
  const timeProgress = (time - before.time) / (after.time - before.time);
  const easedProgress = applyEasing(timeProgress, after.easing || "linear", springConfig);
  const beforeValue = Number(before.value);
  const afterValue = Number(after.value);
  return beforeValue + (afterValue - beforeValue) * easedProgress;
}, validateKeyframes(keyframes) {
  const errors = [];
  for (const keyframe of keyframes) {
    if (typeof keyframe.value !== "number" && isNaN(Number(keyframe.value))) {
      errors.push(`Invalid numeric value: ${keyframe.value} at time ${keyframe.time}`);
    }
  }
  return { valid: errors.length === 0, errors };
} };
var numberWithUnitInterpolator = { propertyType: "numberWithUnit", valueAtTime(keyframes, time, springConfig) {
  if (keyframes.length === 0)
    return "0px";
  if (keyframes.length === 1)
    return keyframes[0].value;
  const { before, after } = findSurroundingKeyframes(keyframes, time);
  if (!before)
    return after.value;
  if (!after)
    return before.value;
  if (before === after)
    return before.value;
  const beforeParsed = parseNumberWithUnit(String(before.value));
  const afterParsed = parseNumberWithUnit(String(after.value));
  const isFromCalc = String(before.value).includes("calc(");
  const isToCalc = String(after.value).includes("calc(");
  const isCrossUnit = beforeParsed.unit !== afterParsed.unit;
  if (isCrossUnit || isFromCalc || isToCalc) {
    const timeProgress2 = (time - before.time) / (after.time - before.time);
    const easedProgress2 = applyEasing(timeProgress2, after.easing || "linear", springConfig);
    return `__CROSS_UNIT_INTERPOLATION__:${before.value}:${after.value}:${easedProgress2}`;
  }
  const timeProgress = (time - before.time) / (after.time - before.time);
  const easedProgress = applyEasing(timeProgress, after.easing || "linear", springConfig);
  const interpolatedValue = beforeParsed.value + (afterParsed.value - beforeParsed.value) * easedProgress;
  return `${interpolatedValue}${beforeParsed.unit}`;
}, validateKeyframes(keyframes) {
  const errors = [];
  const warnings = [];
  for (const keyframe of keyframes) {
    const valueStr = String(keyframe.value);
    if (valueStr.includes("calc(") || valueStr.includes("var(")) {
      continue;
    }
    const parsed = parseNumberWithUnit(valueStr);
    if (isNaN(parsed.value)) {
      errors.push(`Invalid number with unit: ${keyframe.value} at time ${keyframe.time}`);
      continue;
    }
  }
  const units = keyframes.map((kf) => parseNumberWithUnit(String(kf.value)).unit).filter((u) => u);
  const uniqueUnits = Array.from(new Set(units));
  if (uniqueUnits.length > 1) {
    console.log(`\u{1F680} [PropertyTimeline] Cross-unit animation detected: ${uniqueUnits.join(" \u2192 ")} - using advanced interpolation`);
  }
  return { valid: errors.length === 0, errors };
} };
var opacityInterpolator = { propertyType: "number", valueAtTime(keyframes, time, springConfig) {
  const rawValue = numberInterpolator.valueAtTime(keyframes, time, springConfig);
  const numericValue = Number(rawValue);
  return Math.max(0, Math.min(1, numericValue));
}, validateKeyframes(keyframes) {
  const errors = [];
  for (const keyframe of keyframes) {
    const value = Number(keyframe.value);
    if (isNaN(value)) {
      errors.push(`Invalid opacity value: ${keyframe.value} at time ${keyframe.time}`);
    } else if (value < 0 || value > 1) {
      errors.push(`Opacity out of range [0,1]: ${keyframe.value} at time ${keyframe.time}`);
    }
  }
  return { valid: errors.length === 0, errors };
} };
var colorInterpolator = { propertyType: "color", valueAtTime(keyframes, time, springConfig) {
  if (keyframes.length === 0)
    return "#000000";
  if (keyframes.length === 1)
    return keyframes[0].value;
  const { before, after } = findSurroundingKeyframes(keyframes, time);
  if (!before)
    return after.value;
  if (!after)
    return before.value;
  if (before === after)
    return before.value;
  const timeProgress = (time - before.time) / (after.time - before.time);
  const easedProgress = applyEasing(timeProgress, after.easing || "linear", springConfig);
  const fromColor = String(before.value);
  const toColor = String(after.value);
  const fromRGB = parseColor(fromColor);
  const toRGB = parseColor(toColor);
  if (fromRGB && toRGB) {
    const interpolatedR = Math.round(fromRGB.r + (toRGB.r - fromRGB.r) * easedProgress);
    const interpolatedG = Math.round(fromRGB.g + (toRGB.g - fromRGB.g) * easedProgress);
    const interpolatedB = Math.round(fromRGB.b + (toRGB.b - fromRGB.b) * easedProgress);
    if (fromRGB.a !== void 0 && toRGB.a !== void 0) {
      const interpolatedA = fromRGB.a + (toRGB.a - fromRGB.a) * easedProgress;
      return `rgba(${interpolatedR}, ${interpolatedG}, ${interpolatedB}, ${interpolatedA})`;
    }
    return `rgb(${interpolatedR}, ${interpolatedG}, ${interpolatedB})`;
  }
  return easedProgress < 0.5 ? before.value : after.value;
} };
function parseColor(color) {
  const trimmed = color.trim();
  if (trimmed.startsWith("#")) {
    const hex = trimmed.substring(1);
    let r, g, b;
    if (hex.length === 3) {
      r = parseInt(hex[0] + hex[0], 16);
      g = parseInt(hex[1] + hex[1], 16);
      b = parseInt(hex[2] + hex[2], 16);
    } else if (hex.length === 6) {
      r = parseInt(hex.substring(0, 2), 16);
      g = parseInt(hex.substring(2, 4), 16);
      b = parseInt(hex.substring(4, 6), 16);
    } else {
      return null;
    }
    return { r, g, b };
  }
  const rgbMatch = trimmed.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*([\d.]+))?\s*\)/);
  if (rgbMatch) {
    const r = parseInt(rgbMatch[1], 10);
    const g = parseInt(rgbMatch[2], 10);
    const b = parseInt(rgbMatch[3], 10);
    const a = rgbMatch[4] ? parseFloat(rgbMatch[4]) : void 0;
    return { r, g, b, a };
  }
  return null;
}
var defaultInterpolator = { propertyType: "string", valueAtTime(keyframes, time, springConfig) {
  if (keyframes.length === 0)
    return "";
  if (keyframes.length === 1)
    return keyframes[0].value;
  const { before, after } = findSurroundingKeyframes(keyframes, time);
  if (!before)
    return after.value;
  if (!after)
    return before.value;
  const progress = (time - before.time) / (after.time - before.time);
  return progress < 0.5 ? before.value : after.value;
} };
var gradientInterpolator = { propertyType: "string", valueAtTime(keyframes, time, springConfig) {
  if (keyframes.length === 0)
    return "linear-gradient(0deg, #000 0%, #fff 100%)";
  if (keyframes.length === 1)
    return keyframes[0].value;
  const { before, after } = findSurroundingKeyframes(keyframes, time);
  if (!before)
    return after.value;
  if (!after)
    return before.value;
  if (before === after)
    return before.value;
  const timeProgress = (time - before.time) / (after.time - before.time);
  const easedProgress = applyEasing(timeProgress, after.easing || "linear", springConfig);
  return interpolateGradient(String(before.value), String(after.value), easedProgress);
}, validateKeyframes(keyframes) {
  const errors = [];
  for (const keyframe of keyframes) {
    const value = String(keyframe.value);
    if (!value.includes("gradient(")) {
      errors.push(`Invalid gradient value: ${value} at time ${keyframe.time}`);
    }
  }
  return { valid: errors.length === 0, errors };
} };
var clipPathInterpolator = { propertyType: "string", valueAtTime(keyframes, time, springConfig) {
  if (keyframes.length === 0)
    return "inset(0% 0% 0% 0%)";
  if (keyframes.length === 1)
    return keyframes[0].value;
  const { before, after } = findSurroundingKeyframes(keyframes, time);
  if (!before)
    return after.value;
  if (!after)
    return before.value;
  if (before === after)
    return before.value;
  const timeProgress = (time - before.time) / (after.time - before.time);
  const easedProgress = applyEasing(timeProgress, after.easing || "linear", springConfig);
  return interpolateClipPath(String(before.value), String(after.value), easedProgress);
}, validateKeyframes(keyframes) {
  const errors = [];
  for (const keyframe of keyframes) {
    const value = String(keyframe.value);
    const validClipPaths = ["inset(", "polygon(", "circle(", "ellipse("];
    const isValid = validClipPaths.some((type) => value.includes(type));
    if (!isValid) {
      errors.push(`Invalid clip path value: ${value} at time ${keyframe.time}`);
    }
  }
  return { valid: errors.length === 0, errors };
} };
var textBackgroundImageInterpolator = { propertyType: "string", valueAtTime(keyframes, time, springConfig) {
  if (keyframes.length === 0)
    return "linear-gradient(0deg, #000 0%, #fff 100%)";
  if (keyframes.length === 1)
    return keyframes[0].value;
  const { before, after } = findSurroundingKeyframes(keyframes, time);
  if (!before)
    return after.value;
  if (!after)
    return before.value;
  if (before === after)
    return before.value;
  const timeProgress = (time - before.time) / (after.time - before.time);
  const easedProgress = applyEasing(timeProgress, after.easing || "linear", springConfig);
  return interpolateGradient(String(before.value), String(after.value), easedProgress);
}, validateKeyframes(keyframes) {
  const errors = [];
  for (const keyframe of keyframes) {
    const value = String(keyframe.value);
    if (!value.includes("gradient(") && !value.includes("url(") && !value.startsWith("#")) {
      errors.push(`Invalid text background image value: ${value} at time ${keyframe.time}`);
    }
  }
  return { valid: errors.length === 0, errors };
} };
var backgroundPositionInterpolator = { propertyType: "string", valueAtTime(keyframes, time, springConfig) {
  if (keyframes.length === 0)
    return "0% 0%";
  if (keyframes.length === 1)
    return keyframes[0].value;
  const { before, after } = findSurroundingKeyframes(keyframes, time);
  if (!before)
    return after.value;
  if (!after)
    return before.value;
  if (before === after)
    return before.value;
  const timeProgress = (time - before.time) / (after.time - before.time);
  const easedProgress = applyEasing(timeProgress, after.easing || "linear", springConfig);
  return interpolateBackgroundPosition(String(before.value), String(after.value), easedProgress);
}, validateKeyframes(keyframes) {
  const errors = [];
  for (const keyframe of keyframes) {
    const value = String(keyframe.value);
    if (!isValidBackgroundPosition(value)) {
      errors.push(`Invalid background position value: ${value} at time ${keyframe.time}`);
    }
  }
  return { valid: errors.length === 0, errors };
} };
var backgroundSizeInterpolator = { propertyType: "string", valueAtTime(keyframes, time, springConfig) {
  if (keyframes.length === 0)
    return "auto";
  if (keyframes.length === 1)
    return keyframes[0].value;
  const { before, after } = findSurroundingKeyframes(keyframes, time);
  if (!before)
    return after.value;
  if (!after)
    return before.value;
  if (before === after)
    return before.value;
  const timeProgress = (time - before.time) / (after.time - before.time);
  const easedProgress = applyEasing(timeProgress, after.easing || "linear", springConfig);
  return interpolateBackgroundSize(String(before.value), String(after.value), easedProgress);
}, validateKeyframes(keyframes) {
  const errors = [];
  for (const keyframe of keyframes) {
    const value = String(keyframe.value);
    if (!isValidBackgroundSize(value)) {
      errors.push(`Invalid background size value: ${value} at time ${keyframe.time}`);
    }
  }
  return { valid: errors.length === 0, errors };
} };
var enhancedStringInterpolator = { propertyType: "string", valueAtTime(keyframes, time, springConfig) {
  if (keyframes.length === 0)
    return "none";
  if (keyframes.length === 1)
    return keyframes[0].value;
  const { before, after } = findSurroundingKeyframes(keyframes, time);
  if (!before)
    return after.value;
  if (!after)
    return before.value;
  if (before === after)
    return before.value;
  const timeProgress = (time - before.time) / (after.time - before.time);
  const easedProgress = applyEasing(timeProgress, after.easing || "linear", springConfig);
  return interpolateComplexCSSValue(String(before.value), String(after.value), easedProgress);
} };
function getInterpolatorForProperty(propertyName) {
  if (propertyName.includes("translate") || propertyName.includes("width") || propertyName.includes("height") || propertyName.includes("margin") || propertyName.includes("padding") || propertyName.includes("Gap") || // gap, columnGap, rowGap
  propertyName === "gap" || propertyName === "columnGap" || propertyName === "rowGap" || propertyName.includes("border") && (propertyName.includes("width") || propertyName.includes("radius")) || propertyName === "borderRadius" || propertyName === "borderWidth" || propertyName.includes("rotate") || propertyName.includes("skew") || propertyName === "fontSize" || propertyName === "lineHeight" || propertyName === "letterSpacing" || propertyName === "perspective" || propertyName === "top" || propertyName === "left" || propertyName === "right" || propertyName === "bottom") {
    return numberWithUnitInterpolator;
  }
  if (propertyName === "opacity") {
    return opacityInterpolator;
  }
  if (propertyName.includes("scale") || propertyName === "zIndex" || propertyName === "order" || propertyName === "fontWeight") {
    return numberInterpolator;
  }
  if (propertyName.includes("color") || propertyName.includes("Color") || propertyName === "backgroundColor" || propertyName === "borderColor" || propertyName === "color") {
    return colorInterpolator;
  }
  if (propertyName === "gradientBackground" || propertyName === "backgroundImage" && propertyName.includes("gradient")) {
    return gradientInterpolator;
  }
  if (propertyName === "clipPath") {
    return clipPathInterpolator;
  }
  if (propertyName === "textBackgroundImage") {
    return textBackgroundImageInterpolator;
  }
  if (propertyName === "backgroundPosition") {
    return backgroundPositionInterpolator;
  }
  if (propertyName === "backgroundSize") {
    return backgroundSizeInterpolator;
  }
  if (propertyName === "boxShadow" || propertyName === "textShadow" || propertyName === "filter" || propertyName === "backdropFilter") {
    return enhancedStringInterpolator;
  }
  if (propertyName === "pointerEvents" || propertyName === "transformStyle" || propertyName === "backfaceVisibility" || propertyName === "display" || propertyName === "flexDirection" || propertyName === "justifyContent" || propertyName === "alignItems" || propertyName === "textAlign" || propertyName === "position") {
    return defaultInterpolator;
  }
  if (propertyName === "perspectiveOrigin" || propertyName === "backgroundImage") {
    return defaultInterpolator;
  }
  return defaultInterpolator;
}
function findSurroundingKeyframes(keyframes, time) {
  if (keyframes.length === 0) {
    return { before: null, after: null };
  }
  if (keyframes.length === 1) {
    return { before: keyframes[0], after: keyframes[0] };
  }
  if (time <= keyframes[0].time) {
    return { before: null, after: keyframes[0] };
  }
  if (time >= keyframes[keyframes.length - 1].time) {
    return { before: keyframes[keyframes.length - 1], after: null };
  }
  for (let i = 0; i < keyframes.length - 1; i++) {
    const current = keyframes[i];
    const next = keyframes[i + 1];
    if (time >= current.time && time <= next.time) {
      return { before: current, after: next };
    }
  }
  return { before: keyframes[0], after: keyframes[keyframes.length - 1] };
}
function parseNumberWithUnit(value) {
  const match = value.toString().match(/^(-?\d*\.?\d+)(.*)$/);
  if (!match) {
    return { value: 0, unit: "" };
  }
  return { value: parseFloat(match[1]), unit: match[2] || "" };
}
function sortKeyframesByTime(keyframes) {
  keyframes.sort((a, b) => a.time - b.time);
}
function deduplicateKeyframes(keyframes) {
  if (keyframes.length <= 1)
    return keyframes;
  const result = [];
  let lastTime = -Infinity;
  for (const keyframe of keyframes) {
    if (keyframe.time !== lastTime) {
      result.push(keyframe);
      lastTime = keyframe.time;
    } else {
      result[result.length - 1] = keyframe;
    }
  }
  return result;
}

// http-url:https://framerusercontent.com/modules/7PxcfoIW0V80kE5e6hpJ/J9XQyufSD7BYe2Oq65xG/MasterTimeline.js
var MasterTimelineBuilder = class {
  /**
  * Build master timeline from animation properties
  * @param properties - Array of animation properties (can have duplicates)
  * @param globalSettings - Optional global timeline configuration
  * @returns Master timeline with coordinated property timelines
  */
  buildMasterTimeline(properties, globalSettings) {
    console.log("\u{1F3AC} [MasterTimelineBuilder] Building master timeline from properties:", { propertyCount: properties.length, globalSettingsEnabled: globalSettings?.enabled || false });
    const propertiesByType = this.groupPropertiesByType(properties);
    const propertyTimelines = [];
    let maxDuration = 0;
    propertiesByType.forEach((instances, propertyType) => {
      console.log(`\u{1F3AC} [MasterTimelineBuilder] Building timeline for ${propertyType} (${instances.length} instances)`);
      const propertyTimeline = this.buildPropertyTimeline(propertyType, instances, globalSettings);
      propertyTimelines.push(propertyTimeline);
      maxDuration = Math.max(maxDuration, propertyTimeline.totalDuration);
    });
    const masterTimeline = { propertyTimelines, totalDuration: maxDuration, globalSettings, metadata: { originalInstanceCount: properties.length, propertyTypes: Array.from(propertiesByType.keys()), hasGlobalSettings: globalSettings?.enabled || false, createdAt: Date.now() } };
    console.log("\u{1F3AC} [MasterTimelineBuilder] Master timeline built:", { propertyTimelineCount: propertyTimelines.length, totalDuration: maxDuration, propertyTypes: masterTimeline.metadata?.propertyTypes });
    return masterTimeline;
  }
  /**
  * Group animation properties by property type
  * @param properties - Array of animation properties
  * @returns Map of property type to array of instances
  */
  groupPropertiesByType(properties) {
    const groups = /* @__PURE__ */ new Map();
    properties.forEach((property) => {
      const propertyType = this.extractPropertyType(property.property, property.instanceId);
      if (!groups.has(propertyType)) {
        groups.set(propertyType, []);
      }
      groups.get(propertyType).push(property);
    });
    return groups;
  }
  /**
  * Extract base property type from property name or instance ID
  * @param property - Property name
  * @param instanceId - Instance ID (may have suffix)
  * @returns Base property type
  */
  extractPropertyType(property, instanceId) {
    const source = instanceId || property;
    const match = source.match(/^(.+?)(_\d+)?$/);
    return match ? match[1] : source;
  }
  /**
  * Build property timeline from property instances
  * @param propertyType - Base property type (e.g., "translateX")
  * @param instances - Array of property instances
  * @param globalSettings - Optional global timeline configuration
  * @returns Property timeline with keyframes
  */
  buildPropertyTimeline(propertyType, instances, globalSettings) {
    const keyframes = [];
    instances.forEach((instance, index) => {
      const { startTime, endTime, fromValue, toValue } = this.calculateInstanceTiming(instance, globalSettings);
      keyframes.push({ time: startTime, value: fromValue, easing: "linear", metadata: { sourceInstanceId: instance.instanceId || instance.property } });
      keyframes.push({ time: endTime, value: toValue, easing: instance.easing || "ease", metadata: { sourceInstanceId: instance.instanceId || instance.property } });
    });
    const optimizedKeyframes = this.optimizeKeyframes(keyframes);
    const totalDuration = Math.max(...optimizedKeyframes.map((k) => k.time), 0);
    const interpolator = this.getInterpolatorForProperty(propertyType);
    const unit = instances[0]?.unit || this.inferUnit(propertyType);
    const springConfig = this.extractSpringConfig(instances, globalSettings);
    const distributedFromValues = instances[0]?.distributedFromValues;
    const distributedToValues = instances[0]?.distributedToValues;
    return { property: propertyType, keyframes: optimizedKeyframes, totalDuration, interpolator, unit, springConfig, distributedFromValues, distributedToValues, metadata: { instanceCount: instances.length, earliestTime: Math.min(...optimizedKeyframes.map((k) => k.time)), latestTime: Math.max(...optimizedKeyframes.map((k) => k.time)) } };
  }
  /**
  * Calculate timing for a property instance
  * @param instance - Property instance
  * @param globalSettings - Optional global settings
  * @returns Timing information
  */
  calculateInstanceTiming(instance, globalSettings) {
    const useGlobalSettings = globalSettings?.enabled && this.shouldUseGlobalSettings(instance);
    let duration = instance.duration || 1;
    let delay = instance.delay || 0;
    if (useGlobalSettings && globalSettings) {
      if (globalSettings.duration !== void 0) {
        duration = globalSettings.duration;
      }
      if (globalSettings.delay !== void 0) {
        delay += globalSettings.delay;
      }
    }
    const startTime = delay;
    const endTime = delay + duration;
    return { startTime, endTime, fromValue: instance.from, toValue: instance.to };
  }
  /**
  * Check if instance should use global settings
  * @param instance - Property instance
  * @returns Whether to use global settings
  */
  shouldUseGlobalSettings(instance) {
    return true;
  }
  /**
  * Optimize keyframes by sorting, deduplicating, and removing redundant points
  * @param keyframes - Raw keyframes
  * @returns Optimized keyframes
  */
  optimizeKeyframes(keyframes) {
    sortKeyframesByTime(keyframes);
    const deduplicated = deduplicateKeyframes(keyframes);
    return deduplicated;
  }
  /**
  * Get interpolator for property type
  * @param propertyType - Property type
  * @returns Appropriate interpolator
  */
  getInterpolatorForProperty(propertyType) {
    return getInterpolatorForProperty(propertyType);
  }
  /**
  * Infer unit for property type
  * @param propertyType - Property type
  * @returns Inferred unit
  */
  inferUnit(propertyType) {
    if (propertyType.includes("translate") || propertyType.includes("width") || propertyType.includes("height")) {
      return "px";
    }
    if (propertyType.includes("rotate")) {
      return "deg";
    }
    if (propertyType === "opacity" || propertyType.includes("scale")) {
      return "";
    }
    return "";
  }
  /**
  * Extract spring configuration from property instances
  * @param instances - Property instances
  * @param globalSettings - Optional global settings
  * @returns Spring configuration to use for this property timeline
  */
  extractSpringConfig(instances, globalSettings) {
    for (const instance of instances) {
      if (instance.springConfig) {
        return instance.springConfig;
      }
    }
    if (globalSettings?.enabled && globalSettings.springConfig) {
      return globalSettings.springConfig;
    }
    return void 0;
  }
};
function getMasterTimelineValuesAtTime(masterTimeline, time) {
  const values = /* @__PURE__ */ new Map();
  masterTimeline.propertyTimelines.forEach((propertyTimeline) => {
    const value = propertyTimeline.interpolator.valueAtTime(
      propertyTimeline.keyframes,
      time,
      propertyTimeline.springConfig
      // Pass spring config from timeline
    );
    values.set(propertyTimeline.property, value);
  });
  return values;
}
function getMasterTimelineValuesAtTimeForElement(masterTimeline, time, elementIndex) {
  const values = /* @__PURE__ */ new Map();
  masterTimeline.propertyTimelines.forEach((propertyTimeline) => {
    const hasDistributedValues = propertyTimeline.distributedFromValues || propertyTimeline.distributedToValues;
    if (hasDistributedValues) {
      const elementSpecificKeyframes = propertyTimeline.keyframes.map((keyframe) => {
        let elementSpecificValue = keyframe.value;
        const keyframeTimes = propertyTimeline.keyframes.map((k) => k.time);
        const minTime = Math.min(...keyframeTimes);
        const maxTime = Math.max(...keyframeTimes);
        if (Math.abs(keyframe.time - minTime) < 1e-3) {
          if (propertyTimeline.distributedFromValues && propertyTimeline.distributedFromValues[elementIndex] !== void 0) {
            elementSpecificValue = propertyTimeline.distributedFromValues[elementIndex];
          }
        } else if (Math.abs(keyframe.time - maxTime) < 1e-3) {
          if (propertyTimeline.distributedToValues && propertyTimeline.distributedToValues[elementIndex] !== void 0) {
            elementSpecificValue = propertyTimeline.distributedToValues[elementIndex];
          }
        }
        return { ...keyframe, value: elementSpecificValue };
      });
      const value = propertyTimeline.interpolator.valueAtTime(elementSpecificKeyframes, time, propertyTimeline.springConfig);
      values.set(propertyTimeline.property, value);
    } else {
      const value = propertyTimeline.interpolator.valueAtTime(propertyTimeline.keyframes, time, propertyTimeline.springConfig);
      values.set(propertyTimeline.property, value);
    }
  });
  return values;
}
function getMasterTimelineInitialValues(masterTimeline) {
  return getMasterTimelineValuesAtTime(masterTimeline, 0);
}

// http-url:https://framerusercontent.com/modules/ZvXAD9ZcVW6HBsIYT4cl/z7ovBDE8FR5ou2b25H2Z/TransformUtils.js
function combineTransforms(existingTransform, newProperty, value) {
  const transforms = /* @__PURE__ */ new Map();
  if (existingTransform && existingTransform !== "none") {
    if (existingTransform.includes("matrix3d(") || existingTransform.includes("matrix(")) {
      console.log(`\u{1F527} [TransformUtils] Detected matrix transform from computed styles: ${existingTransform}`);
      transforms.set("__matrix__", existingTransform);
    } else {
      const regex = /(\w+)\(([^)]+)\)/g;
      let match;
      while ((match = regex.exec(existingTransform)) !== null) {
        transforms.set(match[1], match[2]);
      }
    }
  }
  transforms.set(newProperty, value);
  const transformParts = [];
  if (transforms.has("__matrix__")) {
    const matrixValue = transforms.get("__matrix__");
    if (matrixValue) {
      transformParts.push(matrixValue);
    }
    transforms.delete("__matrix__");
  }
  const transformOrder = ["translateX", "translateY", "translateZ", "scaleX", "scaleY", "scaleZ", "scale", "rotateX", "rotateY", "rotateZ", "rotate", "skewX", "skewY"];
  transformOrder.forEach((prop) => {
    if (transforms.has(prop)) {
      const val = transforms.get(prop);
      if (val !== void 0) {
        transformParts.push(`${prop}(${val})`);
      }
    }
  });
  transforms.forEach((val, prop) => {
    if (!transformOrder.includes(prop) && prop !== "__matrix__") {
      transformParts.push(`${prop}(${val})`);
    }
  });
  const result = transformParts.join(" ");
  return result;
}
function applyTransform(element, property, value) {
  try {
    const computedStyle = __dai_window.getComputedStyle(element);
    const computedTransform = computedStyle.transform || "none";
    const inlineTransform = element.style.transform || "";
    const existingTransform = inlineTransform || (computedTransform !== "none" ? computedTransform : "");
    const combinedTransform = combineTransforms(existingTransform, property, value);
    element.style.setProperty("transform", combinedTransform, "important");
  } catch (error) {
    console.error(`[TransformUtils] Error applying transform ${property}(${value}):`, error);
    try {
      element.style.setProperty("transform", `${property}(${value})`, "important");
      console.warn(`[TransformUtils] Fallback: Applied ${property}(${value}) directly with !important`);
    } catch (fallbackError) {
      console.error(`[TransformUtils] Fallback also failed:`, fallbackError);
    }
  }
}

// http-url:https://framerusercontent.com/modules/VC8D2pVQz3U5oqOUQkMM/aNyls8Onl0A1dqvDpmTO/types.js
var CSSUnit;
(function(CSSUnit2) {
  CSSUnit2["PX"] = "px";
  CSSUnit2["PT"] = "pt";
  CSSUnit2["PC"] = "pc";
  CSSUnit2["IN"] = "in";
  CSSUnit2["CM"] = "cm";
  CSSUnit2["MM"] = "mm";
  CSSUnit2["PERCENT"] = "%";
  CSSUnit2["EM"] = "em";
  CSSUnit2["REM"] = "rem";
  CSSUnit2["VH"] = "vh";
  CSSUnit2["VW"] = "vw";
  CSSUnit2["VMIN"] = "vmin";
  CSSUnit2["VMAX"] = "vmax";
  CSSUnit2["DEG"] = "deg";
  CSSUnit2["RAD"] = "rad";
  CSSUnit2["TURN"] = "turn";
  CSSUnit2["S"] = "s";
  CSSUnit2["MS"] = "ms";
})(CSSUnit || (CSSUnit = {}));
var UnitCategory;
(function(UnitCategory2) {
  UnitCategory2["ABSOLUTE"] = "absolute";
  UnitCategory2["RELATIVE"] = "relative";
  UnitCategory2["VIEWPORT"] = "viewport";
  UnitCategory2["ANGULAR"] = "angular";
  UnitCategory2["TIME"] = "time";
  UnitCategory2["UNKNOWN"] = "unknown";
})(UnitCategory || (UnitCategory = {}));
function getUnitCategory(unit) {
  const absoluteUnits = ["px", "pt", "pc", "in", "cm", "mm"];
  const relativeUnits = ["%", "em", "rem"];
  const viewportUnits = ["vh", "vw", "vmin", "vmax"];
  const angularUnits = ["deg", "rad", "turn"];
  const timeUnits = ["s", "ms"];
  if (absoluteUnits.includes(unit))
    return "absolute";
  if (relativeUnits.includes(unit))
    return "relative";
  if (viewportUnits.includes(unit))
    return "viewport";
  if (angularUnits.includes(unit))
    return "angular";
  if (timeUnits.includes(unit))
    return "time";
  return "unknown";
}

// http-url:https://framerusercontent.com/modules/iKutU3ruZJoqsmQvdb6H/q6ok7fxbN0is9GiRhzt7/CSSExpressionParser.js
function parseCSSValue(value) {
  if (!value || typeof value !== "string") {
    return null;
  }
  const trimmedValue = value.trim();
  if (trimmedValue.startsWith("calc(")) {
    return parseCalcExpression(trimmedValue);
  }
  if (trimmedValue.startsWith("var(")) {
    return parseVariableExpression(trimmedValue);
  }
  return parseSimpleValue(trimmedValue);
}
function parseCalcExpression(value) {
  const expression = value.slice(5, -1).trim();
  if (!expression) {
    return null;
  }
  try {
    const parsed = parseCalcTokens(expression);
    return { type: "calc", value: expression, unit: "", originalValue: value, expression: parsed, category: UnitCategory.UNKNOWN, isValid: true };
  } catch (error) {
    console.warn("Failed to parse calc() expression:", value, error);
    return { type: "calc", value: expression, unit: "", originalValue: value, category: UnitCategory.UNKNOWN, isValid: false };
  }
}
function parseCalcTokens(expression) {
  const operators = ["+", "-", "*", "/"];
  for (const operator of operators) {
    const parts = expression.split(operator).map((p) => p.trim());
    if (parts.length === 2) {
      const left = parseSimpleValue(parts[0]);
      const right = parseSimpleValue(parts[1]);
      if (left && right) {
        return { operator: operator.trim(), operands: [left, right] };
      }
    }
  }
  return { operator: "+", operands: [parseSimpleValue(expression) || { type: "simple", value: expression, unit: "", originalValue: expression, category: UnitCategory.UNKNOWN, isValid: false }] };
}
function parseVariableExpression(value) {
  const match = value.match(/^var\(\s*(--[^,\s]+)(?:\s*,\s*(.+))?\s*\)$/);
  if (!match) {
    return null;
  }
  const variableName = match[1];
  const fallbackValue = match[2];
  return { type: "var", value: variableName, unit: "", originalValue: value, variableName, fallback: fallbackValue ? parseCSSValue(fallbackValue) : void 0, category: UnitCategory.UNKNOWN, isValid: true };
}
function parseSimpleValue(value) {
  if (!value) {
    return null;
  }
  const match = value.match(/^([-+]?[0-9]*\.?[0-9]+)(.*)$/);
  if (!match) {
    if (/^(auto|inherit|initial|unset|none)$/.test(value)) {
      return { type: "simple", value, unit: "", originalValue: value, category: UnitCategory.UNKNOWN, isValid: true };
    }
    return null;
  }
  const numericValue = parseFloat(match[1]);
  const unit = match[2].trim();
  if (isNaN(numericValue)) {
    return null;
  }
  return { type: "simple", value: numericValue, unit: unit || "", originalValue: value, category: getUnitCategory(unit), isValid: true };
}

// http-url:https://framerusercontent.com/modules/C7sb6KQK1HOSvVrTfiIm/lVOO1TqI1PpKKyF1krxT/UnitConverter.js
function convertToPixels(value, context) {
  if (!value || !context) {
    return 0;
  }
  if (value.trim().startsWith("calc(")) {
    return evaluateCalcExpression(value, context);
  }
  const parsed = parseCSSValue(value);
  if (!parsed || parsed.type !== "simple" || typeof parsed.value !== "number") {
    return 0;
  }
  const numericValue = parsed.value;
  const unit = parsed.unit;
  return convertUnitToPixels(numericValue, unit, context);
}
function convertUnitToPixels(value, unit, context) {
  switch (unit) {
    case "px":
      return value;
    case "pt":
      return value * 1.333333;
    case "pc":
      return value * 16;
    case "in":
      return value * 96;
    case "cm":
      return value * 37.795276;
    case "mm":
      return value * 3.779528;
    case "vw":
      return value / 100 * context.viewportWidth;
    case "vh":
      return value / 100 * context.viewportHeight;
    case "vmin":
      return value / 100 * Math.min(context.viewportWidth, context.viewportHeight);
    case "vmax":
      return value / 100 * Math.max(context.viewportWidth, context.viewportHeight);
    case "%":
      return convertPercentageToPixels(value, context);
    case "em":
      return value * (context.elementFontSize || 16);
    case "rem":
      return value * (context.rootFontSize || 16);
    case "deg":
      return value;
    case "rad":
      return value * (180 / Math.PI);
    case "turn":
      return value * 360;
    case "":
      return value;
    default:
      console.warn(`Unknown unit: ${unit}, treating as pixels`);
      return value;
  }
}
function convertPercentageToPixels(value, context) {
  if (context.parentWidth) {
    return value / 100 * context.parentWidth;
  } else if (context.elementWidth) {
    return value / 100 * context.elementWidth;
  } else {
    return value / 100 * context.viewportWidth;
  }
}
function evaluateCalcExpression(expression, context) {
  const innerExpression = expression.slice(5, -1).trim();
  try {
    return evaluateExpression(innerExpression, context);
  } catch (error) {
    console.warn("Failed to evaluate calc() expression:", expression, error);
    return 0;
  }
}
function evaluateExpression(expression, context) {
  const operators = ["+", "-", "*", "/"];
  for (const operator of operators) {
    const operatorIndex = findOperatorIndex(expression, operator);
    if (operatorIndex !== -1) {
      const left = expression.slice(0, operatorIndex).trim();
      const right = expression.slice(operatorIndex + 1).trim();
      const leftValue = parseOperand(left, context);
      const rightValue = parseOperand(right, context);
      switch (operator) {
        case "+":
          return leftValue + rightValue;
        case "-":
          return leftValue - rightValue;
        case "*":
          return leftValue * rightValue;
        case "/":
          return rightValue !== 0 ? leftValue / rightValue : 0;
      }
    }
  }
  return parseOperand(expression, context);
}
function findOperatorIndex(expression, operator) {
  let parenthesesCount = 0;
  for (let i = 0; i < expression.length; i++) {
    const char = expression[i];
    if (char === "(") {
      parenthesesCount++;
    } else if (char === ")") {
      parenthesesCount--;
    } else if (char === operator && parenthesesCount === 0) {
      return i;
    }
  }
  return -1;
}
function parseOperand(operand, context) {
  if (operand.startsWith("calc(")) {
    return evaluateCalcExpression(operand, context);
  }
  if (operand.startsWith("(") && operand.endsWith(")")) {
    return evaluateExpression(operand.slice(1, -1), context);
  }
  return convertToPixels(operand, context);
}

// http-url:https://framerusercontent.com/modules/x5qeg5kCyUbcOVDNaZn5/A2iVDa2iBFFmBrY0GVMx/CalcExpressionInterpolator.js
function parseCalcTerms(expression) {
  console.log("[CALC_DEBUG] Parsing calc expression:", expression);
  const inner = expression.replace(/^calc\((.*)\)$/, "$1").trim();
  console.log("[CALC_DEBUG] Stripped inner expression:", inner);
  const parts = [];
  let currentPart = "";
  let i = 0;
  while (i < inner.length) {
    const char = inner[i];
    if ((char === "+" || char === "-") && currentPart.trim() !== "") {
      if (currentPart.trim()) {
        parts.push(currentPart.trim());
      }
      parts.push(char);
      currentPart = "";
    } else {
      currentPart += char;
    }
    i++;
  }
  if (currentPart.trim()) {
    parts.push(currentPart.trim());
  }
  console.log("[CALC_DEBUG] Split terms:", parts);
  const result = [];
  let currentOperation = "+";
  for (let i2 = 0; i2 < parts.length; i2++) {
    const part = parts[i2];
    if (part === "+" || part === "-") {
      currentOperation = part;
      console.log("[CALC_DEBUG] Found operator:", currentOperation);
      continue;
    }
    const match = part.match(/^(-?\d*\.?\d+)(.*)$/);
    if (match) {
      let coefficient = parseFloat(match[1]);
      const unit = match[2] || "px";
      if (currentOperation === "-") {
        coefficient = -coefficient;
      }
      const parsedTerm = { coefficient, unit, operation: i2 < parts.length - 1 ? currentOperation : void 0 };
      console.log("[CALC_DEBUG] Parsed term:", parsedTerm);
      result.push(parsedTerm);
      currentOperation = "+";
    }
  }
  console.log("[CALC_DEBUG] Final parsed terms:", result);
  return result;
}
function interpolateCalc(fromValue, toValue, progress, element, property) {
  console.log("[CALC_DEBUG] Starting calc interpolation:", { fromValue, toValue, progress, property, elementDimensions: { width: element.offsetWidth, height: element.offsetHeight } });
  if (fromValue.endsWith("%") && toValue.includes("calc(") && toValue.includes("%")) {
    const fromPercent = parseFloat(fromValue);
    const calcMatch = toValue.match(/calc\(([-\d.]+)%\s*([+-])\s*([\d.]+)px\)/);
    if (calcMatch) {
      const [, toPercent, operator, pixels] = calcMatch;
      const toPercentNum = parseFloat(toPercent);
      const pixelsNum = parseFloat(pixels);
      const interpolatedPercent = fromPercent + (toPercentNum - fromPercent) * progress;
      const interpolatedPixels = 0 + pixelsNum * progress;
      if (interpolatedPixels === 0) {
        return `${interpolatedPercent}%`;
      }
      return `calc(${interpolatedPercent}% ${operator} ${interpolatedPixels}px)`;
    }
  }
  if (!fromValue.includes("calc(") && !toValue.includes("calc(")) {
    console.log("[CALC_DEBUG] Both values are non-calc, using simple interpolation");
    const fromPixels = convertToPixels(fromValue, { element });
    const toPixels = convertToPixels(toValue, { element });
    const result2 = `${fromPixels + (toPixels - fromPixels) * progress}px`;
    console.log("[CALC_DEBUG] Simple interpolation result:", result2);
    return result2;
  }
  const normalizeValue = (value) => {
    if (!value.includes("calc(")) {
      if (value.endsWith("%")) {
        return value;
      }
      const parsed = parseCSSValue(value);
      if (parsed && parsed.type === "simple") {
        const normalized = `calc(${parsed.value}${parsed.unit})`;
        console.log("[CALC_DEBUG] Normalized value:", { original: value, normalized });
        return normalized;
      }
    }
    return value;
  };
  const fromCalc = normalizeValue(fromValue);
  const toCalc = normalizeValue(toValue);
  console.log("[CALC_DEBUG] Normalized expressions:", { fromCalc, toCalc });
  const fromTerms = parseCalcTerms(fromCalc);
  const toTerms = parseCalcTerms(toCalc);
  console.log("[CALC_DEBUG] Parsed terms:", { fromTerms, toTerms });
  const interpolatedTerms = [];
  const maxTerms = Math.max(fromTerms.length, toTerms.length);
  for (let i = 0; i < maxTerms; i++) {
    const fromTerm = fromTerms[i] || { coefficient: 0, unit: toTerms[i].unit };
    const toTerm = toTerms[i] || { coefficient: 0, unit: fromTerms[i].unit };
    console.log("[CALC_DEBUG] Interpolating terms:", { index: i, fromTerm, toTerm, progress });
    if (fromTerm.unit === toTerm.unit) {
      const interpolatedTerm = { coefficient: fromTerm.coefficient + (toTerm.coefficient - fromTerm.coefficient) * progress, unit: fromTerm.unit, operation: i < maxTerms - 1 ? "+" : void 0 };
      console.log("[CALC_DEBUG] Interpolated matching units:", interpolatedTerm);
      interpolatedTerms.push(interpolatedTerm);
    } else {
      const fromWeighted = { coefficient: fromTerm.coefficient * (1 - progress), unit: fromTerm.unit, operation: "+" };
      const toWeighted = { coefficient: toTerm.coefficient * progress, unit: toTerm.unit, operation: i < maxTerms - 1 ? "+" : void 0 };
      console.log("[CALC_DEBUG] Interpolated mismatched units:", { fromWeighted, toWeighted });
      if (fromWeighted.coefficient !== 0) {
        interpolatedTerms.push(fromWeighted);
      }
      if (toWeighted.coefficient !== 0) {
        interpolatedTerms.push(toWeighted);
      }
    }
  }
  if (interpolatedTerms.length === 0) {
    return "0";
  } else if (interpolatedTerms.length === 1 && !interpolatedTerms[0].operation) {
    const term = interpolatedTerms[0];
    return `${term.coefficient}${term.unit}`;
  }
  const calcString = interpolatedTerms.map((term, i) => {
    if (i === 0) {
      return `${term.coefficient}${term.unit}`;
    } else {
      const sign = term.coefficient >= 0 ? " + " : " - ";
      const absCoeff = Math.abs(term.coefficient);
      return `${sign}${absCoeff}${term.unit}`;
    }
  }).join("");
  const result = interpolatedTerms.length > 1 ? `calc(${calcString})` : calcString;
  console.log("[CALC_DEBUG] Final interpolated expression:", result);
  return result;
}

// http-url:https://framerusercontent.com/modules/Av1rp1ynVOQTXRFMp9oo/Se3aIeESs74E1cxvFLMk/PerformantUnitCache.js
function _define_property(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var PerformantUnitCache = class {
  /**
  * High-performance unit conversion with caching
  */
  convertToPixels(value, element, property) {
    if (typeof value === "number")
      return value;
    const cacheKey = `${value}|${element.tagName}|${property}`;
    const cached = this.conversionCache.get(cacheKey);
    if (cached && cached.element === element && Date.now() - cached.timestamp < this.maxCacheAge) {
      return cached.result;
    }
    const result = this.calculatePixels(value, element, property);
    this.conversionCache.set(cacheKey, { value, element, property, result, timestamp: Date.now() });
    return result;
  }
  /**
  * Actual pixel calculation (optimized)
  */
  calculatePixels(value, element, property) {
    if (value.includes("calc(")) {
      return this.evaluateCalcExpression(value, element, property);
    }
    const match = value.match(/^(-?\d*\.?\d+)(.*)$/);
    if (!match)
      return 0;
    const numericValue = parseFloat(match[1]);
    const unit = match[2];
    switch (unit) {
      case "px":
      case "":
        return numericValue;
      case "%":
        return this.convertPercentage(numericValue, element, property);
      case "vw":
        return numericValue / 100 * this.getViewportWidth();
      case "vh":
        return numericValue / 100 * this.getViewportHeight();
      case "vmin":
        return numericValue / 100 * Math.min(this.getViewportWidth(), this.getViewportHeight());
      case "vmax":
        return numericValue / 100 * Math.max(this.getViewportWidth(), this.getViewportHeight());
      case "em":
        return numericValue * this.getFontSize(element);
      case "rem":
        return numericValue * this.getRootFontSize();
      default:
        console.warn(`[PerformantUnitCache] Unsupported unit: ${unit}`);
        return numericValue;
    }
  }
  /**
  * Convert percentage with cached element dimensions
  */
  convertPercentage(percentage, element, property) {
    const cached = this.getCachedElement(element);
    if (property === "translateX" || property === "x") {
      return percentage / 100 * cached.rect.width;
    } else if (property === "translateY" || property === "y") {
      return percentage / 100 * cached.rect.height;
    }
    if (property === "width" || property.includes("width") || property.includes("left") || property.includes("right") || property.includes("X")) {
      return percentage / 100 * cached.parentRect.width;
    } else if (property === "height" || property.includes("height") || property.includes("top") || property.includes("bottom") || property.includes("Y")) {
      return percentage / 100 * cached.parentRect.height;
    }
    return percentage;
  }
  /**
     * Get cached element dimensions
     */
  getCachedElement(element) {
    const existing = this.elementCache.get(element);
    if (existing && Date.now() - existing.timestamp < this.maxCacheAge) {
      return existing;
    }
    const rect = element.getBoundingClientRect();
    const parentRect = element.parentElement?.getBoundingClientRect() || { width: this.getViewportWidth(), height: this.getViewportHeight() };
    const computedStyle = __dai_window.getComputedStyle(element);
    const cached = { rect, parentRect, computedStyle, timestamp: Date.now() };
    this.elementCache.set(element, cached);
    return cached;
  }
  /**
  * Get cached viewport width
  */
  getViewportWidth() {
    if (!this.viewportCache || Date.now() - this.viewportCache.timestamp >= this.maxCacheAge) {
      this.updateViewportCache();
    }
    return this.viewportCache.width;
  }
  /**
  * Get cached viewport height
  */
  getViewportHeight() {
    if (!this.viewportCache || Date.now() - this.viewportCache.timestamp >= this.maxCacheAge) {
      this.updateViewportCache();
    }
    return this.viewportCache.height;
  }
  /**
  * Update viewport cache
  */
  updateViewportCache() {
    if (typeof __dai_window !== "undefined") {
      this.viewportCache = { width: __dai_window.innerWidth, height: __dai_window.innerHeight, timestamp: Date.now() };
    } else {
      this.viewportCache = { width: 1920, height: 1080, timestamp: Date.now() };
    }
  }
  /**
  * Get element font size with caching
  */
  getFontSize(element) {
    const cached = this.getCachedElement(element);
    return parseFloat(cached.computedStyle.fontSize) || 16;
  }
  /**
  * Get root font size with caching
  */
  getRootFontSize() {
    if (typeof __dai_window !== "undefined" && typeof document !== "undefined") {
      return parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
    } else {
      return 16;
    }
  }
  /**
    * Evaluate calc() expressions with element context
    */
  evaluateCalcExpression(expression, element, property) {
    try {
      const tempElement = document.createElement("div");
      tempElement.style.position = "absolute";
      tempElement.style.visibility = "hidden";
      tempElement.style.pointerEvents = "none";
      tempElement.style[property] = expression;
      element.parentElement?.appendChild(tempElement);
      const computedValue = __dai_window.getComputedStyle(tempElement)[property];
      const pixels = parseFloat(computedValue) || 0;
      tempElement.remove();
      return pixels;
    } catch (error) {
      console.warn(`[PerformantUnitCache] calc() evaluation failed:`, error);
      return 0;
    }
  }
  /**
  * Clean up old cache entries
  */
  cleanupOldEntries() {
  }
  /**
      * Invalidate viewport cache on resize
      */
  invalidateViewportCache() {
    this.viewportCache = null;
    this.elementCache.clear();
    this.conversionCache.clear();
  }
  /**
  * Get cache statistics
  */
  getStats() {
    return { conversionCacheSize: this.conversionCache.size, elementCacheSize: this.elementCache.size, currentTime: Date.now(), viewportCacheAge: this.viewportCache ? Date.now() - this.viewportCache.timestamp : -1 };
  }
  constructor() {
    _define_property(this, "elementCache", /* @__PURE__ */ new Map());
    _define_property(this, "viewportCache", null);
    _define_property(this, "conversionCache", /* @__PURE__ */ new Map());
    _define_property(
      this,
      "maxCacheAge",
      2e3
      // 2 seconds instead of frames
    );
    if (typeof __dai_window !== "undefined") {
      __dai_window.addEventListener("resize", () => this.invalidateViewportCache(), { passive: true });
      console.log("[PerformantUnitCache] Simplified cache initialized");
    } else {
      console.warn("[PerformantUnitCache] Browser environment not detected - caching disabled");
    }
  }
};
var performantUnitCache = new PerformantUnitCache();

// http-url:https://framerusercontent.com/modules/QGCDZ88ZUlvBp5RKd5YD/xZ568IxueMxzfLqXQKym/SimpleUnitConverter.js
function convertToPixels2(value, element, property) {
  return performantUnitCache.convertToPixels(value, element, property);
}
function interpolateToPixels(fromValue, toValue, progress, element, property) {
  console.log("[CALC_DEBUG] SimpleUnitConverter interpolating:", { fromValue, toValue, progress, property });
  const fromPixels = convertToPixels2(fromValue, element, property);
  const toPixels = convertToPixels2(toValue, element, property);
  console.log("[CALC_DEBUG] Converted to pixels:", { fromPixels, toPixels });
  const result = fromPixels + (toPixels - fromPixels) * progress;
  console.log("[CALC_DEBUG] Interpolation result:", result);
  return result;
}

// http-url:https://framerusercontent.com/modules/jltDPuJVFQiUsOo9QuWj/W6ZkTDipJxPc42dPeiWU/PropertyInterpolator.js
function interpolateProperty(fromValue, toValue, progress, property, element) {
  if (progress === 0)
    return fromValue;
  if (progress === 1)
    return toValue;
  const fromStr = String(fromValue);
  const toStr = String(toValue);
  if (element && property && isAdvancedCSSValue(fromStr, toStr)) {
    try {
      const result = interpolateToPixels(fromStr, toStr, progress, element, property);
      return `${result}px`;
    } catch (error) {
      console.warn("Cross-unit interpolation failed, using fallback:", error);
    }
  }
  if (property === "color" || property === "background-color" || property === "border-color") {
    return interpolateColor(fromStr, toStr, progress);
  }
  if (typeof fromValue === "string" && typeof toValue === "string") {
    if (hasUnits(fromStr) && hasUnits(toStr)) {
      return interpolateWithUnits(fromStr, toStr, progress);
    }
  }
  return interpolateNumeric(fromValue, toValue, progress);
}
function isAdvancedCSSValue(fromValue, toValue) {
  if (fromValue.includes("calc(") || toValue.includes("calc(")) {
    return true;
  }
  if (fromValue.includes("var(") || toValue.includes("var(")) {
    return true;
  }
  const fromUnit = extractUnit(fromValue);
  const toUnit = extractUnit(toValue);
  if (fromUnit && toUnit && fromUnit !== toUnit) {
    return true;
  }
  if (fromUnit && !toUnit || !fromUnit && toUnit) {
    return true;
  }
  return false;
}
function extractUnit(value) {
  const match = value.match(/(px|%|em|rem|vh|vw|vmin|vmax|pt|pc|in|cm|mm|deg|rad|turn|s|ms)$/i);
  return match ? match[1] : null;
}
function interpolateNumeric(fromValue, toValue, progress) {
  if (typeof fromValue === "number" && typeof toValue === "number") {
    return fromValue + (toValue - fromValue) * progress;
  }
  const fromNum = parseFloat(String(fromValue)) || 0;
  const toNum = parseFloat(String(toValue)) || 0;
  return fromNum + (toNum - fromNum) * progress;
}
function interpolateColor(fromColor, toColor, progress) {
  if (fromColor.startsWith("#") && toColor.startsWith("#")) {
    return interpolateHexColors(fromColor, toColor, progress);
  }
  if (progress < 0.5) {
    return fromColor;
  } else {
    return toColor;
  }
}
function interpolateHexColors(fromHex, toHex, progress) {
  const from = fromHex.replace("#", "");
  const to = toHex.replace("#", "");
  const fromFull = from.length === 3 ? from.split("").map((c) => c + c).join("") : from;
  const toFull = to.length === 3 ? to.split("").map((c) => c + c).join("") : to;
  const fromR = parseInt(fromFull.slice(0, 2), 16);
  const fromG = parseInt(fromFull.slice(2, 4), 16);
  const fromB = parseInt(fromFull.slice(4, 6), 16);
  const toR = parseInt(toFull.slice(0, 2), 16);
  const toG = parseInt(toFull.slice(2, 4), 16);
  const toB = parseInt(toFull.slice(4, 6), 16);
  const r = Math.round(fromR + (toR - fromR) * progress);
  const g = Math.round(fromG + (toG - fromG) * progress);
  const b = Math.round(fromB + (toB - fromB) * progress);
  const toHexString = (val) => Math.max(0, Math.min(255, val)).toString(16).padStart(2, "0");
  return `#${toHexString(r)}${toHexString(g)}${toHexString(b)}`;
}
function interpolateWithUnits(fromValue, toValue, progress) {
  const fromMatch = fromValue.match(/^([-+]?[0-9]*\.?[0-9]+)(.*)$/);
  const toMatch = toValue.match(/^([-+]?[0-9]*\.?[0-9]+)(.*)$/);
  if (!fromMatch || !toMatch) {
    return progress < 0.5 ? fromValue : toValue;
  }
  const fromNum = parseFloat(fromMatch[1]);
  const toNum = parseFloat(toMatch[1]);
  const fromUnit = fromMatch[2];
  const toUnit = toMatch[2];
  const unit = fromUnit === toUnit ? fromUnit : progress < 0.5 ? fromUnit : toUnit;
  if (fromUnit !== toUnit) {
    return progress < 0.5 ? fromValue : toValue;
  }
  const interpolatedValue = fromNum + (toNum - fromNum) * progress;
  return `${interpolatedValue}${unit}`;
}
function hasUnits(value) {
  const unitPattern = /(px|%|em|rem|vh|vw|vmin|vmax|pt|pc|in|cm|mm|deg|rad|turn|s|ms)$/i;
  return unitPattern.test(value.trim());
}

// http-url:https://framerusercontent.com/modules/hjSX8HhLRJnsSCajp6Au/AkZYNLLdplw0ZLum0FKu/StyleApplicator.js
function camelToKebabCase(property) {
  return property.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
function applyProperty(element, property, value, unit) {
  let valueStr = String(value);
  let finalValue = valueStr;
  if (property === "textBackgroundImage") {
    const textElement = findTextElement(element);
    if (textElement) {
      applyTextBackgroundImage(textElement, valueStr);
      console.log(`\u{1F3A8} [StyleApplicator] Applied textBackgroundImage to text element: ${valueStr}`);
    } else {
      console.warn(`\u{1F3A8} [StyleApplicator] No text element found for textBackgroundImage, applying to container as fallback`);
      element.style.backgroundImage = valueStr;
    }
    return;
  }
  if (property === "gradientBackground") {
    element.style.backgroundImage = valueStr;
    console.log(`\u{1F3A8} [StyleApplicator] Applied gradientBackground: ${valueStr}`);
    return;
  }
  if (property === "clipPath") {
    element.style.clipPath = valueStr;
    console.log(`\u{1F3A8} [StyleApplicator] Applied clipPath: ${valueStr}`);
    return;
  }
  if (valueStr.startsWith("__CROSS_UNIT_INTERPOLATION__:")) {
    console.log("[CALC_DEBUG] Detected cross-unit marker:", valueStr);
    console.log("[CALC_DEBUG] \u26A0\uFE0F  Processing cross-unit interpolation - this should NOT affect behavior decisions!");
    try {
      const parts = valueStr.split(":");
      if (parts.length === 4) {
        const [, fromValue, toValue, progress] = parts;
        const progressNum = parseFloat(progress);
        console.log("[CALC_DEBUG] Parsed marker:", { fromValue, toValue, progress: progressNum, property, originalValue: value, originalValueStr: valueStr });
        console.log('[CALC_DEBUG] \u2757 CHECKING VALUES - UI shows "0%" to "calc(-100% + 170px)" but we got:', { fromValue, toValue, doesFromMatch: fromValue === "0%", doesToMatch: toValue === "calc(-100% + 170px)", actualFrom: fromValue, actualTo: toValue });
        const hasCalcExpressions = fromValue.includes("calc(") || toValue.includes("calc(");
        console.log("[CALC_DEBUG] Decision factors:", { hasCalcExpressions, fromValue, toValue, willUseCalcInterpolation: hasCalcExpressions });
        if (hasCalcExpressions) {
          console.log("[CALC_DEBUG] Using calc interpolation for calc expressions");
          try {
            const interpolatedValue = interpolateCalc(fromValue, toValue, progressNum, element, property);
            console.log("[CALC_DEBUG] \u2705 Calc interpolation result:", interpolatedValue);
            finalValue = interpolatedValue;
          } catch (calcError) {
            console.error("[CALC_DEBUG] \u274C Calc interpolation failed:", calcError);
            finalValue = valueStr;
          }
        } else {
          console.log("[CALC_DEBUG] \u{1F680} Using SIMPLE direct cross-unit interpolation (like same-unit logic)");
          console.log("[CALC_DEBUG] Direct interpolation inputs:", { fromValue, toValue, progressNum });
          try {
            console.log("[CALC_DEBUG] \u{1F50D} About to convert values to pixels:", { fromValue, toValue, element: { tagName: element.tagName, className: element.className, isConnected: element.isConnected, offsetWidth: element.offsetWidth, offsetHeight: element.offsetHeight }, property, viewport: { innerWidth: __dai_window.innerWidth, innerHeight: __dai_window.innerHeight } });
            const fromPixels = convertToPixels2(fromValue, element, property);
            console.log("[CALC_DEBUG] \u{1F50D} From value conversion result:", { input: fromValue, output: fromPixels, isNaN: isNaN(fromPixels) });
            const toPixels = convertToPixels2(toValue, element, property);
            console.log("[CALC_DEBUG] \u{1F50D} To value conversion result:", { input: toValue, output: toPixels, isNaN: isNaN(toPixels) });
            if (!isNaN(fromPixels) && !isNaN(toPixels)) {
              const interpolatedPixels = fromPixels + (toPixels - fromPixels) * progressNum;
              console.log("[CALC_DEBUG] \u{1F50D} Interpolation calculation:", { fromPixels, toPixels, progressNum, difference: toPixels - fromPixels, result: interpolatedPixels });
              const rounded = Math.round(interpolatedPixels * 1e3) / 1e3;
              finalValue = `${rounded}px`;
              console.log("[CALC_DEBUG] \u2705 Direct cross-unit result:", finalValue);
            } else {
              console.error("[CALC_DEBUG] \u274C Conversion to pixels failed - using fallback");
              finalValue = valueStr;
            }
          } catch (directError) {
            console.error("[CALC_DEBUG] \u274C Direct interpolation failed:", directError);
            finalValue = valueStr;
          }
        }
      } else {
        console.error("[CALC_DEBUG] \u274C Invalid cross-unit marker format");
        finalValue = valueStr;
      }
    } catch (error) {
      console.error("[CALC_DEBUG] Failed to resolve cross-unit interpolation:", error);
      console.error("[CALC_DEBUG] \u274C This error might be affecting animation behavior!");
      finalValue = valueStr;
    }
  } else if (valueStr.includes("calc(")) {
    finalValue = valueStr;
  } else if (valueStr.endsWith("%")) {
    if (isTransformProperty(property)) {
      finalValue = valueStr;
    } else {
      finalValue = valueStr;
    }
  } else if (!isNaN(Number(valueStr)) && unit) {
    finalValue = `${valueStr}${unit}`;
  }
  if (isTransformProperty(property)) {
    applyTransform(element, property, finalValue);
    if (element.classList.contains("fame-text-line") || element.classList.contains("fame-text-word") || element.classList.contains("fame-text-char")) {
      const currentTransform = element.style.transform;
      if (currentTransform) {
        element.style.setProperty("transform", currentTransform, "important");
      }
    }
  } else {
    const cssPropertyName = camelToKebabCase(property);
    if (element.classList.contains("fame-text-line") || element.classList.contains("fame-text-word") || element.classList.contains("fame-text-char")) {
      element.style.setProperty(cssPropertyName, finalValue, "important");
    } else {
      element.style.setProperty(cssPropertyName, finalValue);
    }
  }
}
function isTransformProperty(property) {
  return ["translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skewX", "skewY"].includes(property);
}
function enableGPUAcceleration(element) {
  element.style.willChange = "transform, opacity";
  if (!element.style.transform || !element.style.transform.includes("translate3d")) {
    const currentTransform = element.style.transform || "";
    element.style.transform = currentTransform ? `${currentTransform} translate3d(0, 0, 0)` : "translate3d(0, 0, 0)";
  }
}
function cleanupStyles(element) {
  element.style.willChange = "";
  element.style.transform = "";
  const stylesToClean = ["opacity", "translateX", "translateY", "scale", "rotate"];
  stylesToClean.forEach((prop) => {
    element.style.removeProperty(prop);
  });
}

// http-url:https://framerusercontent.com/modules/vGBCwOQ3C69Z76huGB9P/pE0eqx2rTqjfvQqQKbbf/MasterTimelinePlayer.js
function _define_property2(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var MasterTimelinePlayer = class {
  //=======================================
  //        PRIMARY PLAYBACK METHODS
  //=======================================
  /**
       * Play timeline forward from specified progress to end
       * @param masterTimeline - Master timeline to play
       * @param element - Element to animate
       * @param fromProgress - Starting progress (0-1), defaults to 0
       * @param progressCallback - Optional progress callback
       * @returns Promise that resolves when animation completes
       */
  async playForward(masterTimeline, element, fromProgress = 0, progressCallback) {
    const startTime = fromProgress * masterTimeline.totalDuration;
    const endTime = masterTimeline.totalDuration;
    return this.playToPosition(masterTimeline, element, startTime, endTime, progressCallback);
  }
  /**
  * Play timeline backward from specified progress to start
  * @param masterTimeline - Master timeline to play
  * @param element - Element to animate
  * @param fromProgress - Starting progress (0-1), defaults to 1
  * @param progressCallback - Optional progress callback
  * @returns Promise that resolves when animation completes
  */
  async playBackward(masterTimeline, element, fromProgress = 1, progressCallback) {
    const startTime = fromProgress * masterTimeline.totalDuration;
    const endTime = 0;
    return this.playToPosition(masterTimeline, element, startTime, endTime, progressCallback);
  }
  /**
  * Seek to specific progress position instantly
  * @param masterTimeline - Master timeline
  * @param element - Element to update
  * @param progress - Progress position (0-1)
  */
  seekToProgress(masterTimeline, element, progress) {
    const clampedProgress = Math.max(0, Math.min(progress, 1));
    const time = clampedProgress * masterTimeline.totalDuration;
    this.stopPlayback(element);
    this.applyTimelineAtTime(masterTimeline, element, time);
  }
  /**
  * Seek to specific time position instantly (legacy method)
  * @param masterTimeline - Master timeline
  * @param element - Element to update
  * @param time - Time position in seconds
  */
  seekTo(masterTimeline, element, time) {
    const progress = masterTimeline.totalDuration > 0 ? time / masterTimeline.totalDuration : 0;
    this.seekToProgress(masterTimeline, element, progress);
  }
  /**
  * Reset timeline to specified progress position
  * @param masterTimeline - Master timeline
  * @param element - Element to reset
  * @param resetProgress - Progress to reset to (0.0 for start, 1.0 for end)
  */
  reset(masterTimeline, element, resetProgress = 0) {
    this.seekToProgress(masterTimeline, element, resetProgress);
  }
  /**
  * Toggle timeline direction based on specified current progress
  * @param masterTimeline - Master timeline
  * @param element - Element to animate
  * @param currentProgress - Current progress (0-1)
  * @param progressCallback - Optional progress callback
  * @returns Promise that resolves when animation completes
  */
  async toggle(masterTimeline, element, currentProgress, progressCallback) {
    if (currentProgress < 0.5) {
      return this.playForward(masterTimeline, element, currentProgress, progressCallback);
    } else {
      return this.playBackward(masterTimeline, element, currentProgress, progressCallback);
    }
  }
  //=======================================
  //        BEHAVIOR-BASED METHODS
  //=======================================
  /**
       * Execute an animation behavior with a master timeline
       * @param behavior - Animation behavior to execute
       * @param masterTimeline - Master timeline to use
       * @param element - Element to animate
       * @param currentProgress - Current progress (0-1) from external state source
       * @param progressCallback - Optional progress callback
       * @param reverseMode - Reverse mode for reverse behaviors
       * @returns Promise that resolves with the final expected progress after behavior completion
       */
  async executeBehavior(behavior, masterTimeline, element, currentProgress, progressCallback, reverseMode = ReverseMode.EASING_PRESERVATION) {
    switch (behavior) {
      case AnimationBehavior.TOGGLE:
        if (currentProgress < 0.5) {
          await this.playForward(masterTimeline, element, currentProgress, progressCallback);
          return 1;
        } else {
          if (reverseMode === ReverseMode.EASING_PRESERVATION) {
            const transformedTimeline = this.transformTimelineForEasingPreservation(masterTimeline);
            const invertedProgressCallback = progressCallback ? (progress) => {
              const invertedProgress = 1 - progress;
              progressCallback(invertedProgress);
            } : void 0;
            await this.playToPosition(transformedTimeline, element, 0, transformedTimeline.totalDuration, invertedProgressCallback);
            return 0;
          } else {
            await this.playBackward(masterTimeline, element, currentProgress, progressCallback);
            return 0;
          }
        }
      case AnimationBehavior.PLAY_FORWARD:
        await this.playForward(masterTimeline, element, currentProgress, progressCallback);
        return 1;
      case AnimationBehavior.PLAY_BACKWARD:
        if (reverseMode === ReverseMode.EASING_PRESERVATION) {
          const transformedTimeline = this.transformTimelineForEasingPreservation(masterTimeline);
          const invertedProgressCallback = progressCallback ? (progress) => {
            const invertedProgress = 1 - progress;
            progressCallback(invertedProgress);
          } : void 0;
          await this.playToPosition(transformedTimeline, element, 0, transformedTimeline.totalDuration, invertedProgressCallback);
          return 0;
        } else {
          await this.playBackward(masterTimeline, element, currentProgress, progressCallback);
          return 0;
        }
      case AnimationBehavior.PLAY_FORWARD_AND_RESET:
        await this.playForward(masterTimeline, element, currentProgress, progressCallback);
        this.reset(masterTimeline, element, 0);
        return 0;
      case AnimationBehavior.PLAY_BACKWARD_AND_RESET:
        if (reverseMode === ReverseMode.EASING_PRESERVATION) {
          const transformedTimeline = this.transformTimelineForEasingPreservation(masterTimeline);
          const invertedProgressCallback = progressCallback ? (progress) => {
            const invertedProgress = 1 - progress;
            progressCallback(invertedProgress);
          } : void 0;
          await this.playToPosition(transformedTimeline, element, 0, transformedTimeline.totalDuration, invertedProgressCallback);
        } else {
          await this.playBackward(masterTimeline, element, currentProgress, progressCallback);
        }
        this.reset(masterTimeline, element, 1);
        return 1;
      case AnimationBehavior.PLAY_BACKWARD_AND_REVERSE:
        if (reverseMode === ReverseMode.EASING_PRESERVATION) {
          const transformedTimeline = this.transformTimelineForEasingPreservation(masterTimeline);
          const invertedProgressCallback = progressCallback ? (progress) => {
            const invertedProgress = 1 - progress;
            progressCallback(invertedProgress);
          } : void 0;
          await this.playToPosition(transformedTimeline, element, 0, transformedTimeline.totalDuration, invertedProgressCallback);
        } else {
          await this.playBackward(masterTimeline, element, currentProgress, progressCallback);
        }
        await this.playForward(masterTimeline, element, 0, progressCallback);
        return 1;
      case AnimationBehavior.PLAY_FORWARD_AND_REVERSE:
        await this.playForward(masterTimeline, element, currentProgress, progressCallback);
        if (reverseMode === ReverseMode.EASING_PRESERVATION) {
          const transformedTimeline = this.transformTimelineForEasingPreservation(masterTimeline);
          const invertedProgressCallback = progressCallback ? (progress) => {
            const invertedProgress = 1 - progress;
            progressCallback(invertedProgress);
          } : void 0;
          await this.playToPosition(transformedTimeline, element, 0, transformedTimeline.totalDuration, invertedProgressCallback);
        } else {
          await this.playToPosition(masterTimeline, element, masterTimeline.totalDuration, 0, progressCallback);
        }
        return 0;
      case AnimationBehavior.START_LOOP:
        console.log(`\u{1F504} [MasterTimelinePlayer] START_LOOP: Executing first iteration`);
        await this.playForward(masterTimeline, element, currentProgress, progressCallback);
        return 1;
      case AnimationBehavior.STOP_LOOP:
        console.log(`\u{1F504} [MasterTimelinePlayer] STOP_LOOP: Staying at current position`);
        return currentProgress;
      case AnimationBehavior.START_PING_PONG:
        console.log(`\u{1F504} [MasterTimelinePlayer] START_PING_PONG: Executing forward \u2192 reverse cycle`);
        await this.playForward(masterTimeline, element, currentProgress, progressCallback);
        if (reverseMode === ReverseMode.EASING_PRESERVATION) {
          const transformedTimeline = this.transformTimelineForEasingPreservation(masterTimeline);
          const invertedProgressCallback = progressCallback ? (progress) => {
            const invertedProgress = 1 - progress;
            progressCallback(invertedProgress);
          } : void 0;
          await this.playToPosition(transformedTimeline, element, 0, transformedTimeline.totalDuration, invertedProgressCallback);
        } else {
          await this.playToPosition(masterTimeline, element, masterTimeline.totalDuration, 0, progressCallback);
        }
        return 0;
      case AnimationBehavior.STOP_PING_PONG:
        console.log(`\u{1F504} [MasterTimelinePlayer] STOP_PING_PONG: Staying at current position`);
        return currentProgress;
      case AnimationBehavior.DELAYED_TRIGGER:
        console.log(`\u{1F3AF} [MasterTimelinePlayer] DELAYED_TRIGGER: Executing as PLAY_FORWARD (fallback)`);
        await this.playForward(masterTimeline, element, currentProgress, progressCallback);
        return 1;
      default:
        console.warn(`\u{1F3AC} [MasterTimelinePlayer] Unknown behavior: ${behavior}`);
        return currentProgress;
    }
  }
  //=======================================
  //        CORE ANIMATION ENGINE
  //=======================================
  /**
       * Play timeline from one position to another
       * @param masterTimeline - Master timeline
       * @param element - Element to animate
       * @param fromTime - Start time in seconds
       * @param toTime - End time in seconds
       * @param progressCallback - Optional progress callback
       * @returns Promise that resolves when animation completes
       */
  async playToPosition(masterTimeline, element, fromTime, toTime, progressCallback) {
    if (Math.abs(fromTime - toTime) < 1e-3) {
      return Promise.resolve();
    }
    this.stopPlayback(element);
    const distance = Math.abs(toTime - fromTime);
    const direction = toTime > fromTime ? "forward" : "backward";
    const duration = distance * 1e3;
    const playbackId = `${++this.timelineCounter}-${Date.now()}`;
    const playbackState = { currentTime: fromTime, direction, isPlaying: true, startTime: performance.now(), duration, element, progressCallback };
    this.applyTimelineAtTime(masterTimeline, element, fromTime);
    this.activeTimelines.set(this.getElementKey(element), playbackState);
    return new Promise((resolve) => {
      const animate = (currentTime) => {
        if (Math.random() < 0.02) {
        }
        if (!playbackState.isPlaying) {
          resolve();
          return;
        }
        const elapsed = currentTime - playbackState.startTime;
        const rawProgress = elapsed / duration;
        const clampedProgress = Math.min(rawProgress, 1);
        const timelinePosition = fromTime + (toTime - fromTime) * clampedProgress;
        this.applyTimelineAtTime(masterTimeline, element, timelinePosition);
        if (progressCallback) {
          const overallProgress = timelinePosition / masterTimeline.totalDuration;
          progressCallback(overallProgress);
        }
        if (clampedProgress >= 1) {
          if (progressCallback) {
            const finalProgress = toTime / masterTimeline.totalDuration;
            progressCallback(finalProgress);
          }
          playbackState.isPlaying = false;
          this.activeTimelines.delete(this.getElementKey(element));
          resolve();
          return;
        }
        playbackState.animationId = requestAnimationFrame(animate);
      };
      playbackState.animationId = requestAnimationFrame(animate);
    });
  }
  /**
  * Apply timeline values at specific time
  * @param masterTimeline - Master timeline
  * @param element - Element to animate
  * @param time - Time position in seconds
  */
  applyTimelineAtTime(masterTimeline, element, time) {
    const propertyValues = getMasterTimelineValuesAtTime(masterTimeline, time);
    if (Math.random() < 0.1) {
    }
    for (const [propertyName, value] of propertyValues.entries()) {
      try {
        applyProperty(element, propertyName, value);
        if (Math.random() < 0.05) {
        }
      } catch (error) {
        console.error(`\u{1F50D} [PROPERTY-APPLICATION-DEBUG] \u274C Failed to apply property ${propertyName}: ${value}`, error);
      }
    }
  }
  //=======================================
  //        STATE MANAGEMENT
  //=======================================
  /**
       * Stop any active playback for element
       * @param element - Element to stop
       */
  stopPlayback(element) {
    const key = this.getElementKey(element);
    const playbackState = this.activeTimelines.get(key);
    if (playbackState) {
      playbackState.isPlaying = false;
      if (playbackState.animationId) {
        cancelAnimationFrame(playbackState.animationId);
      }
      this.activeTimelines.delete(key);
    }
  }
  /**
     * Generate unique key for element
     * @param element - HTML element
     * @returns Unique key string
     */
  getElementKey(element) {
    if (!element.dataset.fameTimelineKey) {
      element.dataset.fameTimelineKey = `timeline-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    }
    return element.dataset.fameTimelineKey;
  }
  //=======================================
  //        REVERSE MODE UTILITIES
  //=======================================
  /**
       * Convert reverse behavior to equivalent forward behavior for easing preservation
       * @param behavior - Original reverse behavior
       * @returns Equivalent forward behavior
       */
  convertReverseToForwardBehavior(behavior) {
    switch (behavior) {
      case AnimationBehavior.PLAY_BACKWARD:
        return AnimationBehavior.PLAY_FORWARD;
      case AnimationBehavior.PLAY_BACKWARD_AND_RESET:
        return AnimationBehavior.PLAY_FORWARD_AND_RESET;
      case AnimationBehavior.PLAY_BACKWARD_AND_REVERSE:
        return AnimationBehavior.PLAY_FORWARD_AND_REVERSE;
      default:
        return behavior;
    }
  }
  /**
  * Transform master timeline for easing preservation mode
  * Swaps keyframe values while preserving easing and timing
  * @param originalTimeline - Original master timeline
  * @returns Transformed timeline with swapped values
  */
  transformTimelineForEasingPreservation(originalTimeline) {
    const transformedTimeline = { ...originalTimeline, propertyTimelines: originalTimeline.propertyTimelines.map((propertyTimeline) => ({ ...propertyTimeline, keyframes: propertyTimeline.keyframes.map((keyframe) => {
      const lastKeyframe = propertyTimeline.keyframes[propertyTimeline.keyframes.length - 1];
      const firstKeyframe = propertyTimeline.keyframes[0];
      let newValue = keyframe.value;
      if (keyframe === firstKeyframe) {
        newValue = lastKeyframe.value;
      } else if (keyframe === lastKeyframe) {
        newValue = firstKeyframe.value;
      }
      return { ...keyframe, value: newValue };
    }) })) };
    return transformedTimeline;
  }
  /**
  * Check if timeline is currently playing for element
  * @param element - Element to check
  * @returns Whether timeline is playing
  */
  isPlaying(element) {
    const key = this.getElementKey(element);
    const playbackState = this.activeTimelines.get(key);
    return playbackState?.isPlaying || false;
  }
  /**
  * Stop animation for a specific element
  * @param element - Element to stop animation for
  */
  stopElement(element) {
    this.stopPlayback(element);
  }
  /**
  * Stop all active playback
  */
  stopAll() {
    this.activeTimelines.forEach((playbackState) => {
      playbackState.isPlaying = false;
      if (playbackState.animationId) {
        cancelAnimationFrame(playbackState.animationId);
      }
    });
    this.activeTimelines.clear();
  }
  /**
  * Cleanup player resources
  */
  cleanup() {
    this.stopAll();
  }
  constructor() {
    _define_property2(this, "activeTimelines", /* @__PURE__ */ new Map());
    _define_property2(this, "timelineCounter", 0);
    console.log("\u{1F3AC} [MasterTimelinePlayer] Initialized");
  }
};

// http-url:https://framerusercontent.com/modules/HeBmw3VNDY0zhzIywqNs/YmEDtRGv9KW0woIIWi4S/Logger.js
var logger = { debug: (context, message, ...args) => {
  console.debug(`[DEBUG] [${context}] ${message}`, ...args);
}, info: (context, message, ...args) => {
  console.info(`[INFO] [${context}] ${message}`, ...args);
}, warn: (context, message, ...args) => {
  console.warn(`[WARN] [${context}] ${message}`, ...args);
}, error: (context, message, ...args) => {
  console.error(`[ERROR] [${context}] ${message}`, ...args);
} };

// http-url:https://framerusercontent.com/modules/YsYx0rATsK56umpeHMdh/5ZyN1thjvK4mY1QLqQO3/EnvironmentDetector.js
function _define_property3(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var FramerEnvironment;
(function(FramerEnvironment2) {
  FramerEnvironment2["CANVAS"] = "canvas";
  FramerEnvironment2["PREVIEW"] = "preview";
  FramerEnvironment2["PRODUCTION"] = "production";
})(FramerEnvironment || (FramerEnvironment = {}));
var EnvironmentDetector = class {
  /**
  * Detect the current Framer environment
  */
  static detect() {
    if (this.environment) {
      return this.environment;
    }
    try {
      if (typeof __dai_window !== "undefined" && __dai_window["Framer"]) {
        const framer = __dai_window["Framer"];
        if (framer.RenderTarget && typeof framer.RenderTarget.current === "function") {
          const target = framer.RenderTarget.current();
          if (target === framer.RenderTarget.canvas) {
            this.environment = "canvas";
          } else if (target === framer.RenderTarget.preview) {
            this.environment = "preview";
          } else {
            this.environment = "production";
          }
          logger.debug("EnvironmentDetector", `Detected Framer environment: ${this.environment}`);
          return this.environment;
        }
        return "production";
      }
      if (typeof __dai_window !== "undefined") {
        const href = __dai_window.location.href;
        if (href.includes("framercanvas")) {
          this.environment = "canvas";
        } else if (href.includes("framerpreview")) {
          this.environment = "preview";
        } else {
          this.environment = "production";
        }
        logger.debug("EnvironmentDetector", `Detected Framer environment via fallback: ${this.environment}`);
        return this.environment;
      }
      this.environment = "production";
      return this.environment;
    } catch (error) {
      logger.warn("EnvironmentDetector", "Error detecting environment, defaulting to PRODUCTION", error);
      this.environment = "production";
      return this.environment;
    }
  }
  /**
  * Check if current environment is Framer Canvas
  */
  static isCanvas() {
    return this.detect() === "canvas";
  }
  /**
  * Check if current environment is Framer Preview
  */
  static isPreview() {
    return this.detect() === "preview";
  }
  /**
  * Check if current environment is Production (published site)
  */
  static isProduction() {
    return this.detect() === "production";
  }
  /**
  * Should initial animation values be applied?
  * In Canvas mode, we don't want to apply FROM values
  */
  static shouldApplyInitialAnimation() {
    return this.detect() !== "canvas";
  }
  /**
  * Should we run animations in this environment?
  * In Canvas mode, we don't want animations to run
  */
  static shouldRunAnimations() {
    return this.detect() !== "canvas";
  }
  /**
  * Force environment (for testing)
  */
  static forceEnvironment(env) {
    this.environment = env;
    logger.debug("EnvironmentDetector", `Environment forced to: ${env}`);
  }
  /**
  * Reset cached environment
  */
  static reset() {
    this.environment = null;
  }
};
_define_property3(EnvironmentDetector, "environment", null);

// http-url:https://framerusercontent.com/modules/TSwl8uEYLQKC2MbVQgbD/AFDrpNPs5NPmSW23bXZ9/ElementFinder.js
function findElementAtLevel(element, level, debug = false) {
  let current = element;
  for (let i = 0; i < level; i++) {
    if (!current.parentElement) {
      if (debug) {
        console.warn(`[ElementFinder] Can't go up ${level} levels, reached root at level ${i}`);
      }
      return null;
    }
    current = current.parentElement;
  }
  if (debug) {
    console.debug(`[ElementFinder] Element found at level ${level}: ${current.tagName}${current.className ? ' class="' + current.className + '"' : ""}`);
  }
  return current;
}
function getAllDescendantsLimited(element, maxDepth, debug = false) {
  const result = [];
  function collectDescendants(parent, currentDepth) {
    if (currentDepth > maxDepth) {
      return;
    }
    const children = Array.from(parent.children).filter((child) => child instanceof HTMLElement);
    for (const child of children) {
      const isDirectParentOfFAME = child.children.length === 1 && child.children[0].hasAttribute("data-fame-animator");
      const isFAMEComponent = child.hasAttribute("data-fame-animator");
      if (!isDirectParentOfFAME && !isFAMEComponent) {
        result.push(child);
        collectDescendants(child, currentDepth + 1);
      } else if (debug) {
        console.debug(`[ElementFinder] \u{1F6AB} Excluding FAME element at depth ${currentDepth}: ${child.tagName}`);
      }
    }
  }
  collectDescendants(element, 0);
  if (debug) {
    console.debug(`[ElementFinder] \u2705 Limited depth search (max: ${maxDepth}) found ${result.length} descendants`);
  }
  return result;
}
function getChildren(element) {
  const allChildren = Array.from(element.children).filter((child) => child instanceof HTMLElement);
  const filteredChildren = allChildren.filter(isValidAnimationTarget);
  return filteredChildren;
}
function getSiblings(element) {
  if (!element.parentElement) {
    return [];
  }
  const allSiblings = Array.from(element.parentElement.children).filter((child) => child instanceof HTMLElement && child !== element);
  const filteredSiblings = allSiblings.filter(isValidAnimationTarget);
  return filteredSiblings;
}
function getSearchRoot(scope, parentElement, debug = false) {
  switch (scope) {
    case ElementScope.SELF:
      const selfElement = findElementAtLevel(parentElement, 2, debug);
      if (selfElement) {
        if (debug) {
          console.debug(`[ElementFinder] \u{1F3AF} ${scope} scope: Using element at level 2 as search root`);
        }
        return selfElement;
      }
      const fallbackElement = findElementAtLevel(parentElement, 1, debug);
      if (debug) {
        console.warn(`[ElementFinder] \u26A0\uFE0F ${scope} scope: Level 2 not found, falling back to level 1`);
      }
      return fallbackElement || parentElement;
    case ElementScope.PARENT:
      const parentElement3 = findElementAtLevel(parentElement, 3, debug);
      if (parentElement3) {
        if (debug) {
          console.debug(`[ElementFinder] \u{1F3AF} PARENT scope: Using element at level 3 as search root`);
        }
        return parentElement3;
      }
      if (debug) {
        console.warn(`[ElementFinder] \u26A0\uFE0F PARENT scope: Level 3 not found, falling back to direct parent`);
      }
      return parentElement.parentElement || parentElement;
    case ElementScope.CHILDREN:
      const childrenRoot = findElementAtLevel(parentElement, 2, debug);
      if (childrenRoot) {
        if (debug) {
          console.debug(`[ElementFinder] \u{1F3AF} CHILDREN scope: Using element at level 2 as search root`);
        }
        return childrenRoot;
      }
      if (debug) {
        console.warn(`[ElementFinder] \u26A0\uFE0F CHILDREN scope: Level 2 not found, falling back to parent element`);
      }
      return parentElement;
    case ElementScope.SIBLINGS:
      const siblingsElement = findElementAtLevel(parentElement, 2, debug);
      if (siblingsElement && siblingsElement.parentElement) {
        if (debug) {
          console.debug(`[ElementFinder] \u{1F3AF} SIBLINGS scope: Using parent of level 2 element as search root`);
        }
        return siblingsElement.parentElement;
      }
      if (debug) {
        console.warn(`[ElementFinder] \u26A0\uFE0F SIBLINGS scope: Level 2 not found, falling back to parent element`);
      }
      return parentElement;
    case ElementScope.DOCUMENT:
      if (debug) {
        console.debug(`[ElementFinder] \u{1F3AF} DOCUMENT scope: Using document as search root`);
      }
      return document;
    default:
      console.warn(`[ElementFinder] \u26A0\uFE0F Unknown scope: ${scope}, falling back to parent element`);
      return parentElement;
  }
}
function applyMultiCriteria(elements, criteria, debug = false) {
  if (!criteria || criteria.length === 0) {
    if (debug) {
      console.debug(`[ElementFinder] \u{1F3AF} No criteria specified, returning all ${elements.length} elements`);
    }
    return elements;
  }
  console.log(`\u{1F6A8} [ElementFinder] PRODUCTION DEBUG: Applying criteria to elements`, { criteriaCount: criteria.length, elementCount: elements.length, criteria: criteria.map((c, index) => ({ index: index + 1, type: c.type, value: c.value })) });
  if (debug) {
    console.debug(`[ElementFinder] \u{1F3AF} Applying ${criteria.length} criteria with AND logic to ${elements.length} elements`);
  }
  let filteredElements = elements;
  for (const criterion of criteria) {
    const beforeCount = filteredElements.length;
    filteredElements = filteredElements.filter((element) => {
      return applySingleCriteria(element, criterion, debug);
    });
    if (debug) {
      console.debug(`[ElementFinder] \u{1F50D} Criteria ${criterion.type}="${criterion.value}": ${beforeCount} \u2192 ${filteredElements.length} elements`);
    }
    if (filteredElements.length === 0) {
      if (debug) {
        console.debug(`[ElementFinder] \u274C No elements match criteria ${criterion.type}="${criterion.value}", stopping filter chain`);
      }
      break;
    }
  }
  if (debug) {
    console.debug(`[ElementFinder] \u2705 Multi-criteria filtering result: ${filteredElements.length} elements match ALL criteria`);
  }
  return filteredElements;
}
function applySingleCriteria(element, criteria, debug = false) {
  const forceLog = true;
  switch (criteria.type) {
    case "framerName":
      const framerName = element.getAttribute("data-framer-name");
      const matchesFramerName = framerName === criteria.value;
      if (forceLog) {
        console.log(`\u{1F6A8} [ElementFinder] FRAMER_NAME criteria check:`, { criteriaValue: criteria.value, elementFramerName: framerName, elementTag: element.tagName, elementClasses: element.className, elementId: element.id || "no-id", matches: matchesFramerName, reason: !framerName ? "no data-framer-name attribute" : framerName !== criteria.value ? `name mismatch: got "${framerName}", expected "${criteria.value}"` : "perfect match" });
      }
      if (debug && matchesFramerName) {
        console.debug(`[ElementFinder] \u2705 Element matches FRAMER_NAME "${criteria.value}": ${element.tagName}`);
      }
      return matchesFramerName;
    case "htmlTag":
      const matchesTag = element.tagName.toLowerCase() === criteria.value.toLowerCase();
      if (forceLog) {
        console.log(`\u{1F6A8} [ElementFinder] HTML_TAG criteria check:`, { criteriaValue: criteria.value, elementTag: element.tagName, elementClasses: element.className, elementId: element.id || "no-id", matches: matchesTag, reason: !matchesTag ? `tag mismatch: got "${element.tagName}", expected "${criteria.value}"` : "perfect match" });
      }
      if (debug) {
        if (matchesTag) {
          console.debug(`[ElementFinder] \u2705 Element matches HTML_TAG "${criteria.value}": ${element.tagName}`);
        } else {
          console.debug(`[ElementFinder] \u274C Element does NOT match HTML_TAG "${criteria.value}": got ${element.tagName} (expected ${criteria.value})`);
        }
      }
      return matchesTag;
    case "cssSelector":
      try {
        const matchesSelector = element.matches(criteria.value);
        if (forceLog) {
          console.log(`\u{1F6A8} [ElementFinder] CSS_SELECTOR criteria check:`, { criteriaValue: criteria.value, elementTag: element.tagName, elementClasses: element.className, elementId: element.id || "no-id", matches: matchesSelector, reason: !matchesSelector ? `selector doesn't match element` : "selector matches" });
        }
        if (debug && matchesSelector) {
          console.debug(`[ElementFinder] \u2705 Element matches CSS_SELECTOR "${criteria.value}": ${element.tagName}`);
        }
        return matchesSelector;
      } catch (error) {
        console.warn(`[ElementFinder] \u274C Invalid CSS selector "${criteria.value}":`, error);
        return false;
      }
    case "elementId":
      const matchesId = element.id === criteria.value;
      if (forceLog) {
        console.log(`\u{1F6A8} [ElementFinder] ELEMENT_ID criteria check:`, { criteriaValue: criteria.value, elementId: element.id || "no-id", elementTag: element.tagName, elementClasses: element.className, matches: matchesId, reason: !element.id ? "element has no ID" : element.id !== criteria.value ? `ID mismatch: got "${element.id}", expected "${criteria.value}"` : "perfect match" });
      }
      if (debug && matchesId) {
        console.debug(`[ElementFinder] \u2705 Element matches ELEMENT_ID "${criteria.value}": ${element.tagName}`);
      }
      return matchesId;
    default:
      console.warn(`[ElementFinder] \u274C Unknown criteria type: ${criteria.type}`);
      return false;
  }
}
function findElementsWithMultiCriteria(selection, parentElement, debug = false) {
  console.log(`\u{1F6A8} [ElementFinder] PRODUCTION DEBUG: Multi-criteria selection started`, { scope: selection.scope, criteriaCount: selection.criteria?.length || 0, parentElement: parentElement ? "present" : "null", parentTagName: parentElement?.tagName, parentId: parentElement?.getAttribute("data-fame-element-id") || parentElement?.id || "no-id" });
  if (debug) {
    console.debug(`[ElementFinder] \u{1F3AF} Multi-criteria selection: scope=${selection.scope}, criteria=${selection.criteria?.length || 0}`);
  }
  const searchRoot = getSearchRoot(selection.scope, parentElement, debug);
  console.log(`\u{1F6A8} [ElementFinder] PRODUCTION DEBUG: Search root determined`, { searchRoot: searchRoot ? searchRoot instanceof Document ? "document" : "element" : "null", searchRootTagName: searchRoot instanceof HTMLElement ? searchRoot.tagName : "N/A", searchRootId: searchRoot instanceof HTMLElement ? searchRoot.getAttribute("data-fame-element-id") || searchRoot.id || "no-id" : "N/A" });
  let candidateElements = [];
  console.log(`\u{1F6A8} [ElementFinder] PRODUCTION DEBUG: Getting candidate elements for scope: ${selection.scope}`);
  switch (selection.scope) {
    case ElementScope.SELF:
      if (searchRoot instanceof HTMLElement) {
        candidateElements = [searchRoot];
        console.log(`\u{1F6A8} [ElementFinder] ${selection.scope} scope: Found 1 candidate element (search root itself)`);
      } else {
        console.log(`\u{1F6A8} [ElementFinder] ${selection.scope} scope: Search root is not HTMLElement, no candidates`);
      }
      break;
    case ElementScope.PARENT:
      if (searchRoot instanceof HTMLElement) {
        candidateElements = [searchRoot];
        console.log(`\u{1F6A8} [ElementFinder] PARENT scope: Found 1 candidate element (search root itself)`);
      } else {
        console.log(`\u{1F6A8} [ElementFinder] PARENT scope: Search root is not HTMLElement, no candidates`);
      }
      break;
    case ElementScope.CHILDREN:
      if (searchRoot instanceof HTMLElement) {
        const depth = selection.depth || ScopeDepth.DIRECT;
        console.log(`\u{1F6A8} [ElementFinder] CHILDREN scope: Getting children with depth ${depth}`, { searchRootChildren: searchRoot.children.length, searchRootChildNodes: searchRoot.childNodes.length });
        candidateElements = getChildrenWithDepth(searchRoot, depth, debug);
        console.log(`\u{1F6A8} [ElementFinder] CHILDREN scope: getChildrenWithDepth returned ${candidateElements.length} elements`);
        if (debug) {
          console.debug(`[ElementFinder] \u{1F50D} CHILDREN scope with ${depth} depth: found ${candidateElements.length} candidates`);
        }
      } else {
        console.log(`\u{1F6A8} [ElementFinder] CHILDREN scope: Search root is not HTMLElement, no candidates`);
      }
      break;
    case ElementScope.SIBLINGS:
      const siblingsRoot = findElementAtLevel(parentElement, 2, debug);
      if (siblingsRoot) {
        const depth = selection.depth || ScopeDepth.DIRECT;
        candidateElements = getSiblingsWithDepth(siblingsRoot, depth, debug);
        if (debug) {
          console.debug(`[ElementFinder] \u{1F50D} SIBLINGS scope with ${depth} depth: found ${candidateElements.length} candidates`);
        }
      }
      break;
    case ElementScope.DOCUMENT:
      const isCanvasModeDoc = EnvironmentDetector.isCanvas();
      if (isCanvasModeDoc) {
        if (debug) {
          console.debug(`[ElementFinder] \u26A0\uFE0F Canvas mode: Skipping DOCUMENT scope to avoid Canvas internals`);
        }
        candidateElements = [];
      } else {
        candidateElements = Array.from(document.querySelectorAll("*"));
      }
      break;
  }
  console.log(`\u{1F6A8} [ElementFinder] PRODUCTION DEBUG: Candidate elements found: ${candidateElements.length}`);
  if (debug) {
    console.debug(`[ElementFinder] \u{1F50D} Found ${candidateElements.length} candidate elements in scope ${selection.scope}`);
  }
  console.log("[ATOMIC_SEARCH] ElementFinder: scope=", selection.scope, "criteria=", selection.criteria, "candidateElements=", candidateElements.map((el) => ({ tag: el.tagName, id: el.id, class: el.className, text: el.textContent?.slice(0, 30), parent: el.parentElement?.tagName })));
  let filteredElements;
  if (selection.scope === ElementScope.SELF || selection.scope === ElementScope.PARENT) {
    console.log("[ATOMIC_SEARCH] ElementFinder: scope=", selection.scope, "criteria=", selection.criteria, "filteredElements=", candidateElements.map((el) => ({ tag: el.tagName, id: el.id, class: el.className, text: el.textContent?.slice(0, 30), parent: el.parentElement?.tagName })));
    filteredElements = candidateElements;
  } else {
    console.log("[ATOMIC_SEARCH] ElementFinder: scope=", selection.scope, "criteria=", selection.criteria, `applying ${selection.criteria?.length || 0} criteria to ${candidateElements.length} candidates`);
    filteredElements = applyMultiCriteria(candidateElements, selection.criteria || [], debug);
    console.log("[ATOMIC_SEARCH] ElementFinder: scope=", selection.scope, "criteria=", selection.criteria, "filteredElements=", filteredElements.map((el) => ({ tag: el.tagName, id: el.id, class: el.className, text: el.textContent?.slice(0, 30), parent: el.parentElement?.tagName })));
    if (filteredElements.length === 0 && (selection.depth === void 0 || selection.depth === ScopeDepth.DIRECT) && (selection.scope === ElementScope.CHILDREN || selection.scope === ElementScope.SIBLINGS)) {
      console.log(`\u{1F6A8} [ElementFinder] Fallback activated \u2013 no matches with DIRECT depth, retrying with DEEP depth`);
      let deepCandidates = [];
      if (selection.scope === ElementScope.CHILDREN) {
        if (searchRoot instanceof HTMLElement) {
          deepCandidates = getChildrenWithDepth(searchRoot, ScopeDepth.DEEP, debug);
        }
      } else if (selection.scope === ElementScope.SIBLINGS) {
        const fallbackSiblingRoot = parentElement.parentElement ?? parentElement;
        deepCandidates = getSiblingsWithDepth(fallbackSiblingRoot, ScopeDepth.DEEP, debug);
      }
      console.log(`\u{1F6A8} [ElementFinder] Fallback deep candidates: ${deepCandidates.length}`);
      filteredElements = applyMultiCriteria(deepCandidates, selection.criteria || [], debug);
      console.log(`\u{1F6A8} [ElementFinder] Fallback DEEP filtering result: ${filteredElements.length} elements`);
    }
  }
  console.log(`\u{1F6A8} [ElementFinder] PRODUCTION DEBUG: Final result: ${filteredElements.length} elements to return`);
  return filteredElements;
}
function findTriggerElementsWithCriteria(parentElement, selection, debug = false) {
  if (debug) {
    console.debug(`[ElementFinder] \u{1F3AF} Finding trigger elements with multi-criteria: scope=${selection.scope}, criteria=${selection.criteria?.length || 0}`);
  }
  const result = findElementsWithMultiCriteria(selection, parentElement, debug);
  if (debug) {
    if (result.length > 0) {
      console.debug(`[ElementFinder] \u2705 Found ${result.length} trigger elements:`, result.map((el) => `${el.tagName}${el.className ? ' class="' + el.className + '"' : ""}`));
    } else {
      console.warn(`[ElementFinder] \u274C No trigger elements found with specified criteria`);
    }
  }
  return result;
}
function findAnimatedElementsWithCriteria(parentElement, selection, debug = false) {
  const forceDebug = true;
  console.log(`\u{1F6A8} [ElementFinder] PRODUCTION DEBUG: Finding animated elements`, { parentElement: parentElement ? "present" : "null", parentId: parentElement?.getAttribute("data-fame-element-id") || parentElement?.id || "no-id", parentTagName: parentElement?.tagName, parentClassName: parentElement?.className, scope: selection.scope, criteriaCount: selection.criteria?.length || 0, selection });
  if (forceDebug) {
    console.debug(`[ElementFinder] \u{1F3AF} Finding animated elements with multi-criteria: scope=${selection.scope}, criteria=${selection.criteria?.length || 0}`);
  }
  const result = findElementsWithMultiCriteria(selection, parentElement, forceDebug);
  if (debug) {
    if (result.length > 0) {
      console.debug(`[ElementFinder] \u2705 Found ${result.length} animated elements:`, result.map((el) => `${el.tagName}${el.className ? ' class="' + el.className + '"' : ""}`));
    } else {
      console.warn(`[ElementFinder] \u274C No animated elements found with specified criteria`);
    }
  }
  return result;
}
function getChildrenWithDepth(element, depth = ScopeDepth.DIRECT, debug = false) {
  if (depth === ScopeDepth.DIRECT) {
    if (debug) {
      console.debug(`[ElementFinder] \u{1F50D} Getting DIRECT children of ${element.tagName}`);
    }
    return getChildren(element);
  } else {
    if (debug) {
      console.debug(`[ElementFinder] \u{1F50D} Getting DEEP descendants of ${element.tagName}`);
    }
    const isCanvasMode = EnvironmentDetector.isCanvas();
    if (isCanvasMode) {
      if (debug) {
        console.debug(`[ElementFinder] \u26A0\uFE0F Canvas mode detected: Using safer limited depth search instead of full querySelectorAll`);
      }
      const limitedDescendants = getAllDescendantsLimited(element, 3, debug);
      return limitedDescendants;
    }
    const allDescendants = Array.from(element.querySelectorAll("*")).filter((child) => child instanceof HTMLElement);
    const filteredDescendants = allDescendants.filter(isValidAnimationTarget);
    if (debug) {
      console.debug(`[ElementFinder] \u2705 Found ${filteredDescendants.length} DEEP descendants (filtered from ${allDescendants.length} total)`);
      const availableTags = filteredDescendants.map((el) => el.tagName.toLowerCase()).filter((tag, index, arr) => arr.indexOf(tag) === index).sort();
      console.debug(`[ElementFinder] \u{1F3F7}\uFE0F Available HTML tags after filtering: [${availableTags.join(", ")}]`);
      filteredDescendants.forEach((el, index) => {
        console.debug(`[ElementFinder] \u{1F4C4} Element ${index + 1}: ${el.tagName}${el.className ? ' class="' + el.className + '"' : ""}${el.textContent ? ' text="' + el.textContent.slice(0, 30) + '..."' : ""}`);
      });
    }
    return filteredDescendants;
  }
}
function getSiblingsWithDepth(element, depth = ScopeDepth.DIRECT, debug = false) {
  if (depth === ScopeDepth.DIRECT) {
    if (debug) {
      console.debug(`[ElementFinder] \u{1F50D} Getting DIRECT siblings of ${element.tagName}`);
    }
    return getSiblings(element);
  } else {
    if (debug) {
      console.debug(`[ElementFinder] \u{1F50D} Getting DEEP siblings + descendants of ${element.tagName}`);
    }
    const directSiblings = getSiblings(element);
    let allSiblingsAndDescendants = [...directSiblings];
    directSiblings.forEach((sibling) => {
      const siblingDescendants = getChildrenWithDepth(sibling, ScopeDepth.DEEP, debug);
      allSiblingsAndDescendants.push(...siblingDescendants);
    });
    if (debug) {
      console.debug(`[ElementFinder] \u2705 Found ${allSiblingsAndDescendants.length} DEEP siblings + descendants (${directSiblings.length} direct siblings)`);
    }
    return allSiblingsAndDescendants;
  }
}
function isValidAnimationTarget(element) {
  const isFAMEComponent = element.hasAttribute("data-fame-animator");
  const isDirectParentOfFAME = element.children.length === 1 && element.children[0].hasAttribute("data-fame-animator");
  const textContent = element.textContent?.trim() || "";
  const isDebugText = textContent === "Debug" || textContent === "N/A" || textContent.includes("Debug\nN/A") || textContent.match(/^Debug\s*N\/A$/);
  const hasDebugStyling = element.style.fontSize === "10px" || element.style.color === "white" || element.className.includes("debug") || element.hasAttribute("data-debug");
  const rect = element.getBoundingClientRect();
  const isSmallOverlay = rect.width <= 64 && rect.height <= 64 && (element.style.position === "absolute" || element.style.position === "fixed");
  const shouldExclude = isFAMEComponent || isDirectParentOfFAME || isDebugText || hasDebugStyling || isSmallOverlay;
  if (shouldExclude) {
    console.debug(`[ElementFinder] \u{1F6AB} Excluding element:`, { tag: element.tagName, className: element.className, textContent: textContent.slice(0, 50), reason: isFAMEComponent ? "FAME component" : isDirectParentOfFAME ? "Parent of FAME component" : isDebugText ? "Debug text content" : hasDebugStyling ? "Debug styling" : isSmallOverlay ? "Small overlay" : "Unknown" });
  }
  return !shouldExclude;
}

// http-url:https://framerusercontent.com/modules/lri37KdYiZ8rmLYL6qsu/3m5lz1hcEtUTlWpd705g/BehaviorDecisionEngine.js
var BehaviorDecisionEngine = class {
  /**
  * Decide what the animation should do based on behavior and current state
  *
  * This is the main entry point for behavior decisions.
  * Combines state reading + behavior logic + decision making.
  *
  * @param currentState - Current animation state (or null for initial state)
  * @param behavior - Desired behavior (toggle, forward, etc.)
  * @param overrideState - Whether to override state when at target
  * @returns Decision object with target progress and direction
  */
  decideBehavior(currentState, behavior, overrideState = false) {
    if (!currentState) {
      return this.decideForInitialState(behavior);
    }
    switch (behavior) {
      case AnimationBehavior.PLAY_FORWARD:
        return this.decidePlayForward(currentState, overrideState);
      case AnimationBehavior.PLAY_BACKWARD:
        return this.decidePlayBackward(currentState, overrideState);
      case AnimationBehavior.TOGGLE:
        return this.decideToggle(currentState);
      case AnimationBehavior.PLAY_FORWARD_AND_RESET:
        return this.decidePlayForwardAndReset(currentState, overrideState);
      case AnimationBehavior.PLAY_BACKWARD_AND_RESET:
        return this.decidePlayBackwardAndReset(currentState, overrideState);
      case AnimationBehavior.PLAY_FORWARD_AND_REVERSE:
        return this.decidePlayForwardAndReverse(currentState, overrideState);
      case AnimationBehavior.PLAY_BACKWARD_AND_REVERSE:
        return this.decidePlayBackwardAndReverse(currentState, overrideState);
      case AnimationBehavior.DELAYED_TRIGGER:
        return this.decideDelayedTrigger(currentState);
      case AnimationBehavior.PLAY_ONCE:
        console.warn(`\u{1F3AF} [BehaviorDecisionEngine] PLAY_ONCE is deprecated, use PLAY_FORWARD`);
        return this.decidePlayForward(currentState, overrideState);
      case AnimationBehavior.REPEAT:
        console.warn(`\u{1F3AF} [BehaviorDecisionEngine] REPEAT is deprecated, will be mapped to PLAY_FORWARD_AND_RESET when implemented`);
        return this.decidePlayForward(currentState, overrideState);
      case AnimationBehavior.LOOP:
        console.warn(`\u{1F3AF} [BehaviorDecisionEngine] LOOP is deprecated, will be mapped to START_PING_PONG when implemented`);
        return this.decideToggle(currentState);
      default:
        console.warn(`\u{1F3AF} [BehaviorDecisionEngine] Unknown behavior: ${behavior}, defaulting to PLAY_FORWARD`);
        return this.decidePlayForward(currentState, overrideState);
    }
  }
  /**
  * Compute toggle behavior - returns target progress and direction
  * @param currentState - Current animation state
  * @returns Toggle behavior result
  */
  computeToggleBehavior(currentState) {
    const currentProgress = currentState.progress;
    const currentTarget = currentState.targetProgress;
    const newTarget = currentTarget >= 0.5 ? 0 : 1;
    const direction = currentProgress < newTarget ? AnimationDirection.FORWARD : AnimationDirection.BACKWARD;
    return { targetProgress: newTarget, direction };
  }
  // ========================================
  // PRIVATE DECISION METHODS
  // ========================================
  /**
       * Create initial decision for first animation trigger
       * Updated for target-based architecture
       */
  decideForInitialState(behavior) {
    let targetProgress;
    let direction;
    let shouldResetAfterCompletion = false;
    let overrideStartProgress;
    switch (behavior) {
      case AnimationBehavior.PLAY_FORWARD:
      case AnimationBehavior.TOGGLE:
        targetProgress = 1;
        direction = AnimationDirection.FORWARD;
        break;
      case AnimationBehavior.PLAY_BACKWARD:
        targetProgress = 0;
        direction = AnimationDirection.BACKWARD;
        break;
      case AnimationBehavior.PLAY_FORWARD_AND_RESET:
        targetProgress = 1;
        direction = AnimationDirection.FORWARD;
        shouldResetAfterCompletion = true;
        overrideStartProgress = 0;
        break;
      case AnimationBehavior.PLAY_BACKWARD_AND_RESET:
        targetProgress = 0;
        direction = AnimationDirection.BACKWARD;
        shouldResetAfterCompletion = true;
        overrideStartProgress = 1;
        break;
      default:
        targetProgress = 1;
        direction = AnimationDirection.FORWARD;
        break;
    }
    return { targetProgress, direction, shouldResetAfterCompletion, isLoopIteration: behavior === AnimationBehavior.LOOP, overrideStartProgress };
  }
  /**
  * Handle PLAY_FORWARD behavior
  */
  decidePlayForward(currentState, overrideState) {
    const currentProgress = currentState.progress;
    const targetProgress = 1;
    if (overrideState && currentProgress > 0) {
      return { targetProgress, direction: AnimationDirection.FORWARD, shouldResetAfterCompletion: false, isLoopIteration: false, overrideStartProgress: 0 };
    }
    if (currentProgress === targetProgress && !overrideState) {
      return { targetProgress: currentProgress, direction: AnimationDirection.FORWARD, shouldResetAfterCompletion: false, isLoopIteration: false };
    }
    const effectiveStartProgress = overrideState ? 0 : currentProgress;
    const direction = effectiveStartProgress < targetProgress ? AnimationDirection.FORWARD : AnimationDirection.BACKWARD;
    return { targetProgress, direction, shouldResetAfterCompletion: false, isLoopIteration: false };
  }
  /**
  * Handle PLAY_BACKWARD behavior
  */
  decidePlayBackward(currentState, overrideState) {
    const currentProgress = currentState.progress;
    const targetProgress = 0;
    if (overrideState && currentProgress < 1) {
      return { targetProgress, direction: AnimationDirection.BACKWARD, shouldResetAfterCompletion: false, isLoopIteration: false, overrideStartProgress: 1 };
    }
    if (currentProgress === targetProgress && !overrideState) {
      return { targetProgress: currentProgress, direction: AnimationDirection.BACKWARD, shouldResetAfterCompletion: false, isLoopIteration: false };
    }
    const effectiveStartProgress = overrideState ? 1 : currentProgress;
    const direction = effectiveStartProgress > targetProgress ? AnimationDirection.BACKWARD : AnimationDirection.FORWARD;
    return { targetProgress, direction, shouldResetAfterCompletion: false, isLoopIteration: false };
  }
  /**
  * Handle TOGGLE behavior - intention-based reversal
  */
  decideToggle(currentState) {
    const toggleResult = this.computeToggleBehavior(currentState);
    return { targetProgress: toggleResult.targetProgress, direction: toggleResult.direction, shouldResetAfterCompletion: false, isLoopIteration: false };
  }
  /**
  * Handle PLAY_FORWARD_AND_RESET behavior
  */
  decidePlayForwardAndReset(currentState, overrideState = false) {
    const currentProgress = currentState.progress;
    const targetProgress = 1;
    const overrideStartProgress = 0;
    if (currentProgress === targetProgress && !overrideState) {
      return { targetProgress: currentProgress, direction: AnimationDirection.FORWARD, shouldResetAfterCompletion: true, isLoopIteration: false };
    }
    return { targetProgress, direction: AnimationDirection.FORWARD, shouldResetAfterCompletion: true, isLoopIteration: false, overrideStartProgress };
  }
  /**
  * Handle PLAY_BACKWARD_AND_RESET behavior
  */
  decidePlayBackwardAndReset(currentState, overrideState = false) {
    const currentProgress = currentState.progress;
    const targetProgress = 0;
    const overrideStartProgress = 1;
    if (currentProgress === targetProgress && !overrideState) {
      return { targetProgress: currentProgress, direction: AnimationDirection.BACKWARD, shouldResetAfterCompletion: true, isLoopIteration: false };
    }
    return { targetProgress, direction: AnimationDirection.BACKWARD, shouldResetAfterCompletion: true, isLoopIteration: false, overrideStartProgress };
  }
  /**
  * Handle PLAY_FORWARD_AND_REVERSE behavior
  */
  decidePlayForwardAndReverse(currentState, overrideState = false) {
    const currentProgress = currentState.progress;
    return { targetProgress: 1, direction: AnimationDirection.FORWARD, shouldResetAfterCompletion: false, isLoopIteration: true, overrideStartProgress: overrideState ? 0 : void 0 };
  }
  /**
  * Handle PLAY_BACKWARD_AND_REVERSE behavior
  */
  decidePlayBackwardAndReverse(currentState, overrideState = false) {
    const currentProgress = currentState.progress;
    return { targetProgress: 0, direction: AnimationDirection.BACKWARD, shouldResetAfterCompletion: false, isLoopIteration: true, overrideStartProgress: overrideState ? 1 : void 0 };
  }
  /**
  * Handle DELAYED_TRIGGER behavior
  * Counts triggers and executes behavior after skip count is reached
  */
  decideDelayedTrigger(currentState) {
    return this.decidePlayForward(currentState, false);
  }
  constructor() {
  }
};

// http-url:https://framerusercontent.com/modules/sydajWcrFwg5osAahgWL/d0wOsFwJmovxCp3hSlDo/AnimationStateStore.js
function _define_property4(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var AnimationStateStore = class {
  // ========================================
  // SERIALIZATION METHODS
  // ========================================
  /**
       * Serialize animation states for persistence
       * @param states - Map of states to serialize
       * @returns Serializable state object
       */
  serializeStates(states) {
    const serialized = {};
    for (const [slotId, state] of states) {
      serialized[slotId] = { progress: state.progress, targetProgress: state.targetProgress, status: state.status, elementId: state.elementId, lastUpdated: state.lastUpdated };
    }
    console.log(`\u{1F4BE} [AnimationStateStore] Serialized ${Object.keys(serialized).length} slot states`);
    return serialized;
  }
  /**
  * Deserialize states from serialized data
  * @param serializedStates - Previously serialized state data
  * @returns Map of restored states
  */
  deserializeStates(serializedStates) {
    const restoredStates = /* @__PURE__ */ new Map();
    console.log(`\u{1F504} [AnimationStateStore] Restoring ${Object.keys(serializedStates).length} slot states`);
    for (const [slotId, stateData] of Object.entries(serializedStates)) {
      try {
        const restoredState = { progress: stateData.progress || 0, targetProgress: stateData.targetProgress || 0, status: stateData.status || AnimationStatus.IDLE, direction: stateData.direction || AnimationDirection.FORWARD, elementId: stateData.elementId || `restored-${slotId}`, slotId, lastUpdated: performance.now() };
        restoredStates.set(slotId, restoredState);
        console.log(`\u{1F504} [AnimationStateStore] Restored slot ${slotId}:`, { progress: restoredState.progress, targetProgress: restoredState.targetProgress, status: restoredState.status });
      } catch (error) {
        console.warn(`\u{1F504} [AnimationStateStore] Failed to restore slot ${slotId}:`, error);
      }
    }
    return restoredStates;
  }
  // ========================================
  // CLEANUP MANAGEMENT METHODS
  // ========================================
  /**
       * Register animation cleanup function for interruption support
       * @param slotId - Slot identifier
       * @param cleanup - Cleanup function to register
       */
  registerAnimationCleanup(slotId, cleanup2) {
    if (!this.activeAnimationCleanups.has(slotId)) {
      this.activeAnimationCleanups.set(slotId, []);
    }
    this.activeAnimationCleanups.get(slotId).push(cleanup2);
  }
  /**
  * Cancel all active animations for a slot (interruption support)
  * @param slotId - Slot to cancel animations for
  */
  cancelActiveAnimations(slotId) {
    const cleanups = this.activeAnimationCleanups.get(slotId);
    if (cleanups && cleanups.length > 0) {
      console.log(`\u{1F3AF} [AnimationStateStore] Cancelling ${cleanups.length} active animations for slot: ${slotId}`);
      cleanups.forEach((cleanup2) => {
        try {
          cleanup2();
        } catch (error) {
          console.error(`\u{1F3AF} [AnimationStateStore] Error cancelling animation for ${slotId}:`, error);
        }
      });
      this.activeAnimationCleanups.set(slotId, []);
    }
  }
  /**
    * Cleanup animations for a specific slot
    * @param slotId - Slot to cleanup
    */
  cleanupSlot(slotId) {
    this.cancelActiveAnimations(slotId);
    this.activeAnimationCleanups.delete(slotId);
  }
  /**
  * Cleanup all animations and state
  */
  cleanupAll() {
    for (const [slotId] of this.activeAnimationCleanups) {
      this.cancelActiveAnimations(slotId);
    }
    this.activeAnimationCleanups.clear();
  }
  // ========================================
  // DEBUG METHODS
  // ========================================
  /**
       * Get debug information about current states
       * @param states - Current state map
       * @returns Debug object with state summary
       */
  getDebugInfo(states) {
    const stateArray = Array.from(states.values());
    const activeSlots = stateArray.filter((state) => state.status === AnimationStatus.RUNNING).length;
    return { totalSlots: stateArray.length, activeSlots, states: stateArray };
  }
  /**
  * Check if any animations are currently running
  * @param states - Current state map
  * @returns True if any slot is in RUNNING status
  */
  hasRunningAnimations(states) {
    for (const [, state] of states) {
      if (state.status === AnimationStatus.RUNNING) {
        return true;
      }
    }
    return false;
  }
  /**
  * Get running animation count
  * @param states - Current state map
  * @returns Number of slots currently running
  */
  getRunningAnimationCount(states) {
    let count = 0;
    for (const [, state] of states) {
      if (state.status === AnimationStatus.RUNNING) {
        count++;
      }
    }
    return count;
  }
  constructor() {
    _define_property4(this, "activeAnimationCleanups", /* @__PURE__ */ new Map());
    this.activeAnimationCleanups = /* @__PURE__ */ new Map();
  }
};

// http-url:https://framerusercontent.com/modules/p0Bs79fPjCgchOLxXGTn/5Kus0vl7sMXbZ925iggh/AnimationStateManager.js
function _define_property5(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var AnimationStateManager = class {
  // ========================================
  // CORE STATE MANAGEMENT METHODS
  // ========================================
  /**
       * Get current animation state for a slot
       * @param slotId - Animation slot identifier
       * @returns Current animation state or null if not found
       */
  getState(slotId) {
    return this.slotStates.get(slotId) || null;
  }
  /**
  * Get current animation state for a slot (with elementId fallback for compatibility)
  * @param elementId - Element identifier (for backward compatibility)
  * @param slotId - Animation slot identifier
  * @returns Current animation state or null if not found
  */
  getStateByElement(elementId, slotId) {
    if (slotId) {
      return this.getState(slotId);
    }
    for (const [, state] of this.slotStates) {
      if (state.elementId === elementId) {
        return state;
      }
    }
    return null;
  }
  /**
  * Update animation progress (triggers derived calculations)
  * @param slotId - Slot to update
  * @param progress - New progress value (0.0 to 1.0)
  * @param status - New animation status
  */
  updateProgress(slotId, progress, status = AnimationStatus.RUNNING) {
    const currentState = this.slotStates.get(slotId);
    if (!currentState) {
      console.warn(`\u{1F3AF} [AnimationStateManager] Cannot update progress for unknown slot: ${slotId}`);
      return;
    }
    const updatedState = { ...currentState, progress: Math.max(0, progress), status, lastUpdated: performance.now() };
    this.slotStates.set(slotId, updatedState);
    if (status === AnimationStatus.COMPLETED) {
      const listeners = this.completionListeners.get(slotId);
      if (listeners) {
        listeners.forEach((listener) => listener());
        this.completionListeners.delete(slotId);
      }
    }
  }
  /**
  * Update target progress immediately when trigger fires (Target-based architecture)
  * This is the core of the target-based state system - update intent immediately
  * @param slotId - Slot to update
  * @param targetProgress - New target progress (0.0 or 1.0)
  */
  updateTarget(slotId, targetProgress) {
    const currentState = this.slotStates.get(slotId);
    if (currentState) {
      currentState.targetProgress = targetProgress;
      currentState.lastUpdated = performance.now();
    }
  }
  /**
  * Synchronize target with current progress at completion
  * This fixes state mismatches where animations complete but target remains stale
  * @param slotId - Slot to synchronize
  */
  syncTargetWithProgress(slotId) {
    const currentState = this.slotStates.get(slotId);
    if (currentState) {
      currentState.targetProgress = currentState.progress;
      currentState.lastUpdated = performance.now();
      if (Math.abs(currentState.targetProgress - currentState.progress) > 0.01) {
        console.log(`\u{1F527} [AnimationStateManager] Synced target with progress for ${slotId}: ${currentState.progress.toFixed(3)}`);
      }
    }
  }
  /**
  * Initialize state for a new animation slot
  * @param slotId - Animation slot identifier
  * @param elementId - Element identifier for debugging
  * @param initialProgress - Starting progress (default: 0.0)
  * @param initialTarget - Starting target progress (default: 0.0)
  */
  initializeState(slotId, elementId, initialProgress = 0, initialTarget = 0) {
    const newState = { progress: initialProgress, targetProgress: initialTarget, status: AnimationStatus.IDLE, direction: AnimationDirection.FORWARD, elementId, slotId, lastUpdated: performance.now() };
    this.slotStates.set(slotId, newState);
    console.log(`\u{1F3AF} [AnimationStateManager] Initialized slot ${slotId} for element ${elementId} (progress: ${initialProgress}, target: ${initialTarget})`);
  }
  // ========================================
  // BEHAVIOR DECISION DELEGATION
  // ========================================
  /**
       * Decide what the animation should do based on behavior and current state
       * Delegates to BehaviorDecisionEngine for clean separation of concerns
       *
       * @param slotId - Animation slot identifier
       * @param behavior - Desired behavior (toggle, forward, etc.)
       * @param overrideState - Whether to override state when at target
       * @returns Decision object with target progress and direction
       */
  decideBehavior(slotId, behavior, overrideState = false) {
    const currentState = this.getState(slotId);
    return this.behaviorEngine.decideBehavior(currentState, behavior, overrideState);
  }
  /**
  * Compute toggle behavior - delegation to engine
  * @param slotId - Animation slot identifier
  * @returns Toggle behavior result
  */
  computeToggleBehavior(slotId) {
    const currentState = this.getState(slotId);
    if (!currentState) {
      return { targetProgress: 1, direction: AnimationDirection.FORWARD };
    }
    return this.behaviorEngine.computeToggleBehavior(currentState);
  }
  // ========================================
  // STATE QUERY METHODS
  // ========================================
  /**
       * Check if animation is at start position
       * @param slotId - Slot to check
       * @returns True if at start (progress <= 0.01)
       */
  isAtStart(slotId) {
    const state = this.getState(slotId);
    return state ? state.progress <= 0.01 : true;
  }
  /**
  * Check if animation is at end position
  * @param slotId - Slot to check
  * @returns True if at end (progress >= 0.99)
  */
  isAtEnd(slotId) {
    const state = this.getState(slotId);
    return state ? state.progress >= 0.99 : false;
  }
  /**
  * Get list of slots with active animations
  * @returns Array of slot IDs with RUNNING status
  */
  getActiveSlots() {
    const activeSlots = [];
    for (const [slotId, state] of this.slotStates) {
      if (state.status === AnimationStatus.RUNNING) {
        activeSlots.push(slotId);
      }
    }
    return activeSlots;
  }
  /**
  * Get all slot IDs for state management operations
  * @returns Array of all slot IDs currently tracked
  */
  getAllSlotIds() {
    return Array.from(this.slotStates.keys());
  }
  /**
  * Get all slot states (for external queries)
  * @returns Map of all current slot states
  */
  getAllStates() {
    return new Map(this.slotStates);
  }
  /**
  * Reset slot state to initial values
  * @param slotId - Slot to reset
  */
  resetSlotState(slotId) {
    const currentState = this.slotStates.get(slotId);
    if (currentState) {
      this.stateStore.cancelActiveAnimations(slotId);
      const resetState = { ...currentState, progress: 0, targetProgress: 0, status: AnimationStatus.IDLE, direction: AnimationDirection.FORWARD, lastUpdated: performance.now() };
      this.slotStates.set(slotId, resetState);
      console.log(`\u{1F504} [AnimationStateManager] Reset slot state: ${slotId} (progress: 0.0, target: 0.0)`);
    } else {
      console.warn(`\u{1F504} [AnimationStateManager] Cannot reset unknown slot: ${slotId}`);
    }
  }
  /**
  * Force update all states to a specific status (emergency reset)
  * @param status - Status to set for all slots
  */
  forceAllStatuses(status) {
    console.log(`\u{1F6A8} [AnimationStateManager] Force setting all slots to status: ${status}`);
    for (const [slotId, state] of this.slotStates) {
      this.slotStates.set(slotId, { ...state, status, lastUpdated: performance.now() });
    }
  }
  // ========================================
  // CLEANUP AND LIFECYCLE METHODS
  // ========================================
  /**
       * Cleanup state for a specific slot
       * @param slotId - Slot to cleanup
       */
  cleanup(slotId) {
    this.stateStore.cleanupSlot(slotId);
    this.slotStates.delete(slotId);
    console.log(`\u{1F9F9} [AnimationStateManager] Cleaned up slot: ${slotId}`);
  }
  /**
  * Cleanup all states and reset manager
  */
  cleanupAll() {
    this.stateStore.cleanupAll();
    this.slotStates.clear();
    console.log(`\u{1F9F9} [AnimationStateManager] Cleaned up all slots`);
  }
  // ========================================
  // STORE DELEGATION METHODS
  // ========================================
  /**
       * Register animation cleanup function for interruption support
       * Delegates to state store
       */
  registerAnimationCleanup(slotId, cleanup2) {
    this.stateStore.registerAnimationCleanup(slotId, cleanup2);
  }
  /**
  * Cancel all active animations for a slot (interruption support)
  * Delegates to state store
  */
  cancelActiveAnimations(slotId) {
    this.stateStore.cancelActiveAnimations(slotId);
  }
  /**
  * Serialize all current animation states for persistence
  * Delegates to state store
  */
  serializeAllStates() {
    return this.stateStore.serializeStates(this.slotStates);
  }
  /**
  * Restore animation states from serialized data
  * Delegates to state store and updates internal state
  */
  restoreSerializedStates(serializedStates) {
    const restoredStates = this.stateStore.deserializeStates(serializedStates);
    for (const [slotId, state] of restoredStates) {
      this.slotStates.set(slotId, state);
    }
    console.log(`\u{1F504} [AnimationStateManager] Restored ${restoredStates.size} slot states`);
  }
  /**
  * Get debug information about current states
  * Delegates to state store
  */
  getDebugInfo() {
    return this.stateStore.getDebugInfo(this.slotStates);
  }
  /**
  * Check if any animations are currently running
  * Delegates to state store
  */
  hasRunningAnimations() {
    return this.stateStore.hasRunningAnimations(this.slotStates);
  }
  /**
  * Get count of running animations
  * Delegates to state store
  */
  getRunningAnimationCount() {
    return this.stateStore.getRunningAnimationCount(this.slotStates);
  }
  /**
  * Wait for the animation for a slot to reach COMPLETED status.
  * Resolves immediately if already completed.
  */
  waitForCompletion(slotId) {
    const state = this.getState(slotId);
    if (state && state.status === AnimationStatus.COMPLETED) {
      return Promise.resolve();
    }
    return new Promise((resolve) => {
      if (!this.completionListeners.has(slotId)) {
        this.completionListeners.set(slotId, /* @__PURE__ */ new Set());
      }
      this.completionListeners.get(slotId).add(resolve);
    });
  }
  constructor() {
    _define_property5(this, "slotStates", /* @__PURE__ */ new Map());
    _define_property5(this, "behaviorEngine", void 0);
    _define_property5(this, "stateStore", void 0);
    _define_property5(this, "completionListeners", /* @__PURE__ */ new Map());
    this.slotStates = /* @__PURE__ */ new Map();
    this.behaviorEngine = new BehaviorDecisionEngine();
    this.stateStore = new AnimationStateStore();
  }
};
var animationStateManager = new AnimationStateManager();

// http-url:https://framerusercontent.com/modules/WmtolwxkAtXpIv4wQjSn/ksa3PUqr6WUSWVkRYL5l/PrecomputedStyleCache.js
var CACHE_CONFIG = { enabled: true, batchSize: 10, idleTimeout: 5e3, commonProperties: ["transform", "opacity", "width", "height", "background-color", "color", "font-size", "line-height", "margin", "padding", "border", "position", "top", "left", "right", "bottom"] };
var styleCache = /* @__PURE__ */ new WeakMap();
var metrics = { hits: 0, misses: 0, precomputeTime: 0, totalElements: 0, cacheSize: 0 };
function initializeStyleCache() {
  if (typeof __dai_window === "undefined")
    return;
  console.log("\u{1F680} [PrecomputedStyleCache] Initializing simple style cache");
  if (CACHE_CONFIG.enabled) {
    warmCacheForExistingElements();
  }
}
function getCachedComputedStyles(element, properties) {
  const startTime = performance.now();
  try {
    const cached = styleCache.get(element);
    const propsToGet = properties || CACHE_CONFIG.commonProperties;
    if (cached && cached.isValid && isRecentEnough(cached.timestamp)) {
      const result2 = /* @__PURE__ */ new Map();
      propsToGet.forEach((prop) => {
        if (cached.styles.has(prop)) {
          result2.set(prop, cached.styles.get(prop));
        }
      });
      if (result2.size === propsToGet.length || !properties) {
        metrics.hits++;
        return result2;
      }
    }
    metrics.misses++;
    const computedStyle = getComputedStyle(element);
    const result = /* @__PURE__ */ new Map();
    propsToGet.forEach((prop) => {
      const value = computedStyle.getPropertyValue(prop);
      result.set(prop, value || "");
    });
    cacheElementStyles(element, result);
    return result;
  } catch (error) {
    if (false) {
      console.error("\u{1F680} [PrecomputedStyleCache] Error getting cached styles:", error);
    }
    return /* @__PURE__ */ new Map();
  }
}
async function precomputeElementStyles(element, properties = CACHE_CONFIG.commonProperties) {
  if (!element || !element.isConnected)
    return;
  return new Promise((resolve) => {
    const precompute = (deadline) => {
      const startTime = performance.now();
      try {
        const hasTime = deadline ? deadline.timeRemaining() > 5 : true;
        if (hasTime || !deadline) {
          const computedStyle = getComputedStyle(element);
          const styles = /* @__PURE__ */ new Map();
          properties.forEach((prop) => {
            const value = computedStyle.getPropertyValue(prop);
            styles.set(prop, value || "");
          });
          cacheElementStyles(element, styles);
          const precomputeTime = performance.now() - startTime;
          metrics.precomputeTime += precomputeTime;
        }
        resolve();
      } catch (error) {
        console.error("\u{1F680} [PrecomputedStyleCache] Error precomputing styles:", error);
        resolve();
      }
    };
    if ("requestIdleCallback" in __dai_window) {
      requestIdleCallback(precompute, { timeout: CACHE_CONFIG.idleTimeout });
    } else {
      setTimeout(() => precompute(), 0);
    }
  });
}
async function precomputeMultipleElementStyles(elements, properties = CACHE_CONFIG.commonProperties) {
  if (!elements || elements.length === 0)
    return;
  const startTime = performance.now();
  let processedCount = 0;
  for (let i = 0; i < elements.length; i += CACHE_CONFIG.batchSize) {
    const batch = elements.slice(i, i + CACHE_CONFIG.batchSize);
    await Promise.all(batch.map((element) => precomputeElementStyles(element, properties)));
    processedCount += batch.length;
    if (i + CACHE_CONFIG.batchSize < elements.length) {
      await new Promise((resolve) => setTimeout(resolve, 0));
    }
  }
  const totalTime = performance.now() - startTime;
}
function cacheElementStyles(element, styles) {
  const cached = { styles: new Map(styles), timestamp: performance.now(), isValid: true };
  styleCache.set(element, cached);
  metrics.cacheSize++;
}
function isRecentEnough(timestamp) {
  const age = performance.now() - timestamp;
  return age < 3e4;
}
function warmCacheForExistingElements() {
  if (typeof __dai_window === "undefined")
    return;
  const warmCache = (deadline) => {
    const fameElements = Array.from(document.querySelectorAll("[data-fame-element-id]"));
    if (fameElements.length > 0) {
      console.log(`\u{1F680} [PrecomputedStyleCache] Warming cache for ${fameElements.length} FAME elements (lightweight)`);
      precomputeMultipleElementStyles(fameElements.slice(0, 3));
    } else {
      console.log(`\u{1F680} [PrecomputedStyleCache] No FAME elements found for cache warming`);
    }
  };
  if ("requestIdleCallback" in __dai_window) {
    requestIdleCallback(warmCache, { timeout: 1e3 });
  } else {
    setTimeout(warmCache, 200);
  }
}
function clearStyleCache() {
  console.log("\u{1F680} [PrecomputedStyleCache] Style cache cleared");
  metrics.hits = 0;
  metrics.misses = 0;
  metrics.precomputeTime = 0;
  metrics.totalElements = 0;
  metrics.cacheSize = 0;
}
function cleanup() {
  clearStyleCache();
  console.log("\u{1F680} [PrecomputedStyleCache] Simple cache cleanup completed");
}

// http-url:https://framerusercontent.com/modules/pxqijtGMFctPRaFH3khz/uvX1KKbWCHXTLeOyKEpi/StyleCapture.js
function getCurrentPropertyValue(element, property, computedStyle) {
  const startTime = performance.now();
  try {
    const cachedStyles = getCachedComputedStyles(element, [property]);
    const cachedValue = cachedStyles.get(property);
    if (cachedValue !== void 0) {
      const lookupTime = performance.now() - startTime;
      if (lookupTime > 0.1) {
        console.log(`\u{1F680} [StyleCapture] \u2705 Used cached style in ${lookupTime.toFixed(3)}ms`);
      }
      switch (property) {
        case "opacity":
          return parseFloat(String(cachedValue)) || 1;
        case "translateX":
        case "translateY":
        case "translateZ":
          return extractTransformValue(String(cachedValue), property);
        case "scale":
        case "scaleX":
        case "scaleY":
          return extractTransformValue(String(cachedValue), property);
        case "rotate":
        case "rotateX":
        case "rotateY":
        case "rotateZ":
          return extractTransformValue(String(cachedValue), property);
        default:
          const numValue = parseFloat(String(cachedValue));
          return isNaN(numValue) ? cachedValue || 0 : numValue;
      }
    }
  } catch (error) {
    console.warn("\u{1F680} [StyleCapture] Error getting cached style, falling back to computed style:", error);
  }
  console.warn(`\u{1F680} [StyleCapture] \u26A0\uFE0F Cache miss for property '${property}' - using blocking getComputedStyle`);
  computedStyle = computedStyle || getComputedStyle(element);
  switch (property) {
    case "opacity":
      return parseFloat(computedStyle.opacity) || 1;
    case "translateX":
    case "translateY":
    case "translateZ":
      return extractTransformValue(computedStyle.transform, property);
    case "scale":
    case "scaleX":
    case "scaleY":
      return extractTransformValue(computedStyle.transform, property);
    case "rotate":
    case "rotateX":
    case "rotateY":
    case "rotateZ":
      return extractTransformValue(computedStyle.transform, property);
    default:
      const value = computedStyle.getPropertyValue(property);
      const numValue = parseFloat(value);
      return isNaN(numValue) ? value || 0 : numValue;
  }
}
function extractTransformValue(transform, property) {
  switch (property) {
    case "translateX":
    case "translateY":
    case "translateZ":
      return 0;
    case "scale":
    case "scaleX":
    case "scaleY":
      return 1;
    case "rotate":
    case "rotateX":
    case "rotateY":
    case "rotateZ":
      return 0;
    default:
      return 0;
  }
}

// http-url:https://framerusercontent.com/modules/rE0XjQp983oD4jeReHEd/3swgOtGAINxO8Oo6JszQ/InitialValueApplicator.js
function applyInitialValues(element, properties, immediate = true) {
  if (!element || !properties || properties.length === 0) {
    console.warn("\u{1F6A8} [InitialValueApplicator] Invalid parameters provided");
    return;
  }
  const willChangeProperties = /* @__PURE__ */ new Set();
  const transformProperties = /* @__PURE__ */ new Set();
  const otherProperties = /* @__PURE__ */ new Set();
  properties.forEach((property) => {
    const propName = property.property;
    if (isAnimatableProperty(propName)) {
      willChangeProperties.add(propName);
    }
    if (isTransformProperty2(propName)) {
      transformProperties.add(propName);
    } else {
      otherProperties.add(propName);
    }
  });
  if (willChangeProperties.size > 0) {
    element.style.willChange = Array.from(willChangeProperties).join(", ");
  }
  if (transformProperties.size > 0) {
    element.style.transformOrigin = "center center";
  }
  properties.forEach((property) => {
    if (isTransformProperty2(property.property) || property.property === "opacity") {
      applyPropertyWithValue(element, property);
    }
  });
  if (otherProperties.size > 0) {
    requestAnimationFrame(() => {
      properties.forEach((property) => {
        if (!isTransformProperty2(property.property) && property.property !== "opacity") {
          applyPropertyWithValue(element, property);
        }
      });
    });
  }
}
function applyPropertyWithValue(element, property) {
  try {
    const initialValue = resolveInitialValue(element, property);
    if (initialValue !== void 0 && initialValue !== null) {
      applyProperty(element, property.property, initialValue, property.unit);
    }
  } catch (error) {
    console.error(`\u{1F6A8} [InitialValueApplicator] Error applying initial value for ${property.property}:`, error);
  }
}
function isTransformProperty2(property) {
  return property.includes("translate") || property.includes("rotate") || property.includes("scale") || property.includes("skew") || property === "transform";
}
function isAnimatableProperty(property) {
  const animatableProperties = /* @__PURE__ */ new Set(["opacity", "transform", "translateX", "translateY", "translateZ", "rotate", "rotateX", "rotateY", "rotateZ", "scale", "scaleX", "scaleY", "width", "height", "left", "top", "right", "bottom", "margin", "padding", "color", "background-color"]);
  return animatableProperties.has(property);
}
function resetInitialValues(element, properties) {
  if (!element || !properties || properties.length === 0) {
    console.warn("\u{1F6A8} [InitialValueApplicator] Invalid parameters for reset");
    return;
  }
  console.log(`\u{1F504} [InitialValueApplicator] Resetting ${properties.length} properties to defaults`);
  let resetCount = 0;
  properties.forEach((property) => {
    try {
      const defaultValue = getDefaultValue(property.property);
      if (defaultValue !== void 0) {
        applyProperty(element, property.property, defaultValue, property.unit);
        resetCount++;
      } else {
        const styleProperty = property.property === "transform" ? "transform" : property.property;
        element.style.removeProperty(styleProperty);
        resetCount++;
      }
    } catch (error) {
      console.error(`\u{1F6A8} [InitialValueApplicator] Error resetting ${property.property}:`, error);
    }
  });
  console.log(`\u2705 [InitialValueApplicator] Reset ${resetCount}/${properties.length} properties to defaults`);
}
function resolveInitialValue(element, property) {
  if (property.from !== void 0 && property.from !== null) {
    return property.from;
  }
  try {
    const currentValue = getCurrentPropertyValue(element, property.property);
    if (currentValue !== void 0 && currentValue !== null) {
      return currentValue;
    }
  } catch (error) {
    console.warn(`\u26A0\uFE0F [InitialValueApplicator] Could not get current value for ${property.property}:`, error);
  }
  const defaultValue = getDefaultValue(property.property);
  if (defaultValue !== void 0) {
    return defaultValue;
  }
  console.warn(`\u26A0\uFE0F [InitialValueApplicator] No initial value could be resolved for ${property.property}`);
  return void 0;
}
function getDefaultValue(propertyName) {
  const transformDefaults = { translateX: 0, translateY: 0, translateZ: 0, rotate: 0, rotateX: 0, rotateY: 0, rotateZ: 0, scale: 1, scaleX: 1, scaleY: 1, scaleZ: 1, skewX: 0, skewY: 0 };
  const cssDefaults = { opacity: 1, width: "auto", height: "auto", left: 0, top: 0, right: "auto", bottom: "auto", margin: 0, padding: 0, "border-width": 0, "border-radius": 0, "background-color": "transparent", color: "inherit" };
  return transformDefaults[propertyName] ?? cssDefaults[propertyName];
}

// http-url:https://framerusercontent.com/modules/npSx4m1xIafP1t512PfQ/A0GbdgBycApM4WDrE3Q5/InitialValueCoordinator.js
var InitialValueCoordinator = class {
  /**
  * Apply initial values to animated elements based on Canvas mode and user preference
  *
  * COPIED FROM: AnimationOrchestrator.handleEventAnimation() initial value logic
  *
  * This method handles the complete initial value application lifecycle:
  * 1. Detect Canvas mode using EnvironmentDetector
  * 2. Determine whether to apply or reset initial values
  * 3. Choose between timeline-based or legacy application
  * 4. Apply values to all animated elements
  *
  * @param slot - Animation slot with properties and timeline
  * @param animatedElements - Elements to apply initial values to
  * @param showInitialValuesInCanvas - User preference for Canvas mode behavior
  */
  applyInitialValues(slot, animatedElements, showInitialValuesInCanvas) {
    console.log(`\u{1F3A8} [InitialValueCoordinator] Applying initial values for slot: ${slot.id}`);
    const disconnectedAtStart = animatedElements.filter((el) => !el.isConnected).length;
    if (disconnectedAtStart > 0) {
      console.error(`\u{1F6A8} [INITIAL-VALUES-DEBUG] START: ${disconnectedAtStart}/${animatedElements.length} elements disconnected at START of applyInitialValues!`);
    } else {
      console.log(`\u2705 [INITIAL-VALUES-DEBUG] All ${animatedElements.length} elements connected at START of applyInitialValues`);
    }
    try {
      const isCanvasMode = this.handleCanvasMode();
      const shouldApplyInitialValues = this.shouldApplyInitialValues(isCanvasMode, showInitialValuesInCanvas);
      if (shouldApplyInitialValues) {
        this.applyInitialValuesToElements(slot, animatedElements);
      } else {
        this.resetInitialValuesOnElements(slot, animatedElements);
      }
      console.log(`\u{1F3A8} [InitialValueCoordinator] Initial values applied successfully for ${animatedElements.length} elements`);
      const disconnectedAtEnd = animatedElements.filter((el) => !el.isConnected).length;
      if (disconnectedAtEnd > 0) {
        console.error(`\u{1F6A8} [INITIAL-VALUES-DEBUG] END: ${disconnectedAtEnd}/${animatedElements.length} elements disconnected at END of applyInitialValues!`);
      } else {
        console.log(`\u2705 [INITIAL-VALUES-DEBUG] All ${animatedElements.length} elements connected at END of applyInitialValues`);
      }
    } catch (error) {
      console.error(`\u{1F3A8} [InitialValueCoordinator] Error applying initial values:`, error);
    }
  }
  /**
  * Reset initial values to natural state
  *
  * EXTRACTED FROM: AnimationOrchestrator reset logic
  */
  resetInitialValues(slot, animatedElements) {
    console.log(`\u{1F3A8} [InitialValueCoordinator] Resetting initial values for slot: ${slot.id}`);
    try {
      this.resetInitialValuesOnElements(slot, animatedElements);
      console.log(`\u{1F3A8} [InitialValueCoordinator] Initial values reset successfully for ${animatedElements.length} elements`);
    } catch (error) {
      console.error(`\u{1F3A8} [InitialValueCoordinator] Error resetting initial values:`, error);
    }
  }
  /**
  * Handle Canvas mode detection
  *
  * COPIED FROM: AnimationOrchestrator Canvas mode logic
  */
  handleCanvasMode() {
    const isCanvasMode = EnvironmentDetector.isCanvas();
    console.log(`\u{1F3A8} [InitialValueCoordinator] Canvas mode detected: ${isCanvasMode}`);
    return isCanvasMode;
  }
  /**
  * Determine whether to apply initial values based on Canvas mode and user preference
  *
  * ✅ BALANCED FIX: Respect user setting while ensuring animation works properly
  *
  * LOGIC:
  * - In preview/published mode: Always apply initial values (animations need proper starting state)
  * - In Canvas mode: Respect user preference for design workflow flexibility
  *
  * This allows designers to toggle off initial values in Canvas to see natural element state,
  * while ensuring animations work correctly in all other contexts.
  */
  shouldApplyInitialValues(isCanvasMode, showInitialValuesInCanvas) {
    if (!isCanvasMode) {
      console.log(`\u{1F3A8} [InitialValueCoordinator] Non-Canvas mode: applying initial values for proper animation`);
      return true;
    }
    const shouldApply = showInitialValuesInCanvas;
    console.log(`\u{1F3A8} [InitialValueCoordinator] Canvas mode: user setting = ${showInitialValuesInCanvas}, applying = ${shouldApply}`);
    return shouldApply;
  }
  /**
  * Apply initial values to elements using timeline or legacy approach
  *
  * 📊 FEATURE 3A: Enhanced to handle distributed properties
  * 🚨 CRITICAL FIX: Only apply distributed logic to properties that actually have distributed values
  * COPIED FROM: AnimationOrchestrator timeline vs legacy application logic
  */
  applyInitialValuesToElements(slot, animatedElements) {
    const ENABLE_TIMELINE_ORCHESTRATOR2 = true;
    const distributedProperties = slot.properties.filter((prop) => prop.distributedFromValues || prop.distributedToValues);
    const nonDistributedProperties = slot.properties.filter((prop) => !prop.distributedFromValues && !prop.distributedToValues);
    console.log(`\u{1F3A8} [InitialValueCoordinator] Property breakdown: ${distributedProperties.length} distributed, ${nonDistributedProperties.length} non-distributed`);
    if (distributedProperties.length > 0) {
      console.log("\u{1F3A8} [InitialValueCoordinator] Applying distributed initial values to distributed properties only");
      const distributedSlot = { ...slot, properties: distributedProperties };
      this.applyDistributedInitialValues(distributedSlot, animatedElements);
    }
    if (nonDistributedProperties.length > 0) {
      console.log("\u{1F3A8} [InitialValueCoordinator] Applying normal initial values to non-distributed properties");
      const nonDistributedSlot = { ...slot, properties: nonDistributedProperties };
      if (ENABLE_TIMELINE_ORCHESTRATOR2 && slot.masterTimeline) {
        console.log("\u{1F3A8} [InitialValueCoordinator] Applying timeline-based initial values for non-distributed properties");
        this.applyTimelineBasedInitialValues(nonDistributedSlot, animatedElements);
      } else {
        console.log("\u{1F3A8} [InitialValueCoordinator] Applying legacy initial values for non-distributed properties");
        this.applyLegacyInitialValues(nonDistributedSlot, animatedElements);
      }
    }
    console.log("\u{1F3A8} [InitialValueCoordinator] \u2705 Applied initial values with proper property isolation");
  }
  /**
  * Apply distributed initial values for properties that vary per element
  * 📊 FEATURE 3A: Apply distributed "from" values to each element based on index
  * 🚨 DEBUG: Added comprehensive logging to track distributed initial value application
  */
  applyDistributedInitialValues(slot, animatedElements) {
    console.log(`\u{1F4CA} [InitialValueCoordinator] Applying distributed initial values for ${animatedElements.length} elements`);
    console.log(`\u{1F4CA} [InitialValueCoordinator] Slot has ${slot.properties.length} properties:`, slot.properties.map((p) => ({ property: p.property, hasDistributedFromValues: !!p.distributedFromValues, distributedFromValuesLength: p.distributedFromValues?.length || 0, regularFromValue: p.from })));
    animatedElements.forEach((element, elementIndex) => {
      const storedIndex = element.getAttribute("data-fame-element-index");
      const distributedIndex = storedIndex ? parseInt(storedIndex, 10) : elementIndex;
      console.log(`\u{1F4CA} [InitialValueCoordinator] Processing element ${distributedIndex} (elementIndex: ${elementIndex})`);
      slot.properties.forEach((property) => {
        try {
          let initialValue = property.from;
          if (property.distributedFromValues && property.distributedFromValues[distributedIndex] !== void 0) {
            initialValue = property.distributedFromValues[distributedIndex];
            console.log(`\u{1F4CA} [InitialValueCoordinator] Using distributed from value for ${property.property}: ${initialValue} (element ${distributedIndex})`);
          } else if (property.distributedFromValues) {
            console.warn(`\u{1F4CA} [InitialValueCoordinator] No distributed value found for ${property.property} at index ${distributedIndex}. Available indices: ${Object.keys(property.distributedFromValues)}`);
          }
          if (initialValue !== void 0 && initialValue !== null && initialValue !== "") {
            applyProperty(element, property.property, initialValue, property.unit);
            element.setAttribute(`data-fame-distributed-${property.property}`, "true");
            console.log(`\u{1F4CA} [InitialValueCoordinator] Applied ${property.property}=${initialValue} to element ${distributedIndex}`);
          }
        } catch (error) {
          console.error(`\u{1F4CA} [InitialValueCoordinator] Error applying distributed initial value for ${property.property}:`, error);
        }
      });
    });
  }
  /**
  * Apply timeline-based initial values
  *
  * Enhanced to handle timeline-based initial value application
  * 🚨 CRITICAL FIX: Skip properties that have distributed values to prevent override
  */
  applyTimelineBasedInitialValues(slot, animatedElements) {
    const masterTimeline = slot.masterTimeline;
    const initialValues = getMasterTimelineInitialValues(masterTimeline);
    console.log(`\u{1F3AC} [InitialValueCoordinator] Applying timeline-based initial values for ${initialValues.size} properties`);
    animatedElements.forEach((animatedElement) => {
      initialValues.forEach((value, propertyName) => {
        try {
          const hasDistributedValue = this.elementHasDistributedValueApplied(animatedElement, propertyName);
          if (hasDistributedValue) {
            console.log(`\u26A0\uFE0F [InitialValueCoordinator] Skipping timeline initial value for ${propertyName} - element has distributed value applied`);
            return;
          }
          console.log(`\u{1F3AC} [InitialValueCoordinator] Applying timeline initial value: ${propertyName}=${value}`);
          applyProperty(animatedElement, propertyName, value);
        } catch (error) {
          console.error(`\u{1F3A8} [InitialValueCoordinator] Error applying initial ${propertyName}:`, error);
        }
      });
    });
  }
  /**
  * Check if element has a distributed value applied for a property
  * This prevents timeline initial values from overriding distributed initial values
  */
  elementHasDistributedValueApplied(element, propertyName) {
    const distributedMarker = element.getAttribute(`data-fame-distributed-${propertyName}`);
    return distributedMarker === "true";
  }
  /**
  * Apply legacy initial values
  *
  * COPIED FROM: AnimationOrchestrator legacy initial value application
  */
  applyLegacyInitialValues(slot, animatedElements) {
    animatedElements.forEach((animatedElement) => {
      applyInitialValues(animatedElement, slot.properties);
    });
  }
  /**
  * Reset initial values to natural state
  *
  * COPIED FROM: AnimationOrchestrator reset logic
  */
  resetInitialValuesOnElements(slot, animatedElements) {
    animatedElements.forEach((animatedElement) => {
      resetInitialValues(animatedElement, slot.properties);
    });
  }
  constructor() {
    console.log(`\u{1F3A8} [InitialValueCoordinator] Initialized initial value coordination`);
  }
};

// http-url:https://framerusercontent.com/modules/LNvur9If95WkBMkH7yFi/Er7C500jocmjK6yoEXak/LinearStagger.js
var LinearStagger = class {
  /**
  * Calculate timed delays for linear staggering with advanced order support
  *
  * @description
  * Main entry point for linear stagger calculations. Supports all order types
  * and directional configuration for different animation directions.
  *
  * @param elements - Array of elements to stagger
  * @param config - Enhanced stagger configuration
  * @param animationDirection - Animation direction for order resolution
  * @returns Complete stagger result with timing and metadata
  */
  calculateTimedDelays(elements, config, animationDirection = "forward") {
    console.log(`\u{1F50D} [LINEAR-STAGGER-DEBUG] calculateTimedDelays called:`, { elementCount: elements.length, configEnabled: config.enabled, animationDirection, configOrder: config.order, configDelay: config.delay });
    if (!config.enabled || elements.length === 0) {
      console.log(`\u{1F50D} [LINEAR-STAGGER-DEBUG] Early return - disabled or no elements`);
      return { timings: [], totalDuration: 0, orderUsed: "first-to-last", animationDirection };
    }
    const orderToUse = animationDirection === "forward" ? config.order.forward : config.order.backward;
    console.log(`\u{1F50D} [LINEAR-STAGGER-DEBUG] Order resolved:`, { animationDirection, forwardOrder: config.order.forward, backwardOrder: config.order.backward, orderToUse });
    const elementPositions = this.needsPositioning(orderToUse) ? this.calculateElementPositions(elements) : [];
    const elementGroups = this.calculateElementGroups(elements, orderToUse, elementPositions, config);
    const timings = [];
    let currentOrderIndex = 0;
    elementGroups.forEach((group, groupIndex) => {
      const groupDelay = groupIndex * config.delay;
      group.elements.forEach((elementIndex, positionInGroup) => {
        const element = elements[elementIndex];
        const position = elementPositions.find((pos) => pos.index === elementIndex);
        timings.push({ element, delay: groupDelay, index: elementIndex, orderIndex: currentOrderIndex, metadata: { order: orderToUse, animationDirection, position, groupIndex, groupSize: group.elements.length, positionInGroup, ...group.distance !== void 0 && { distance: group.distance }, ...orderToUse === "random" && config.advanced?.random?.seed && { randomSeed: config.advanced.random.seed } } });
        currentOrderIndex++;
      });
    });
    const totalDuration = Math.max(...timings.map((t) => t.delay)) + config.delay;
    const result = { timings, totalDuration, orderUsed: orderToUse, animationDirection };
    if (elementPositions.length > 0) {
      const containerBounds = this.calculateContainerBounds(elements);
      result.spatialInfo = { containerBounds, containerCenter: { x: containerBounds.left + containerBounds.width / 2, y: containerBounds.top + containerBounds.height / 2 }, elementPositions };
    }
    return result;
  }
  /**
  * Calculate element groups for simultaneous animations
  *
  * @description
  * Groups elements that should animate at the same time (same delay).
  * For spatial orders, groups elements by distance. For linear orders,
  * each element gets its own group.
  *
  * @param elements - Original element array
  * @param order - Stagger order type
  * @param positions - Element positions (for spatial orders)
  * @param config - Stagger configuration
  * @returns Array of element groups with timing information
  */
  calculateElementGroups(elements, order, positions, config) {
    switch (order) {
      case "first-to-last":
        return this.createLinearGroups(elements.length, false);
      case "last-to-first":
        return this.createLinearGroups(elements.length, true);
      case "center-out":
        return this.createSpatialGroups(elements, positions, "center-out");
      case "edges-in":
        return this.createSpatialGroups(elements, positions, "edges-in");
      case "random":
        return this.createRandomGroups(elements.length, config.advanced?.random?.seed);
      case "custom":
        console.warn("Custom order not yet implemented, falling back to first-to-last");
        return this.createLinearGroups(elements.length, false);
      default:
        console.warn(`Unknown order type: ${order}, falling back to first-to-last`);
        return this.createLinearGroups(elements.length, false);
    }
  }
  /**
  * Create linear groups (one element per group)
  *
  * @param elementCount - Number of elements
  * @param reverse - Whether to reverse the order
  * @returns Array of single-element groups
  */
  createLinearGroups(elementCount, reverse) {
    const indices = Array.from({ length: elementCount }, (_, i) => i);
    if (reverse)
      indices.reverse();
    return indices.map((elementIndex, groupOrderIndex) => ({ elements: [elementIndex], groupOrderIndex }));
  }
  /**
  * Create spatial groups based on distance calculations
  *
  * @param elements - Element array
  * @param positions - Element positions with distance calculations
  * @param spatialOrder - Spatial order type
  * @returns Array of distance-based groups
  */
  createSpatialGroups(elements, positions, spatialOrder) {
    console.log(`\u{1F50D} [LINEAR-STAGGER-DEBUG] Creating spatial groups:`, { spatialOrder, elementCount: elements.length, positionsCount: positions.length, firstPositionDistance: positions[0]?.distanceFromCenter?.toFixed(3), lastPositionDistance: positions[positions.length - 1]?.distanceFromCenter?.toFixed(3) });
    if (positions.length === 0) {
      console.warn(`${spatialOrder} order requires element positions, falling back to linear`);
      console.log(`\u{1F50D} [LINEAR-STAGGER-DEBUG] Falling back to linear groups due to missing positions`);
      return this.createLinearGroups(elements.length, false);
    }
    const distanceGroups = /* @__PURE__ */ new Map();
    const tolerance = 1;
    positions.forEach((pos) => {
      const distance = pos.distanceFromCenter || 0;
      const roundedDistance = Math.round(distance / tolerance) * tolerance;
      if (!distanceGroups.has(roundedDistance)) {
        distanceGroups.set(roundedDistance, []);
      }
      distanceGroups.get(roundedDistance).push(pos.index);
    });
    const sortedDistances = Array.from(distanceGroups.keys()).sort((a, b) => {
      return spatialOrder === "center-out" ? a - b : b - a;
    });
    console.log(`\u{1F50D} [LINEAR-STAGGER-DEBUG] Spatial grouping result:`, { spatialOrder, totalDistances: sortedDistances.length, distanceGroups: sortedDistances.map((distance) => ({ distance: distance.toFixed(1), elementCount: distanceGroups.get(distance).length, elementIndices: distanceGroups.get(distance) })), sortDirection: spatialOrder === "center-out" ? "ascending (center-out)" : "descending (edges-in)" });
    return sortedDistances.map((distance, groupOrderIndex) => ({ elements: distanceGroups.get(distance), distance, groupOrderIndex }));
  }
  /**
  * Create random groups (one element per group, random order)
  *
  * @param elementCount - Number of elements
  * @param seed - Optional seed for stable randomization
  * @returns Array of single-element groups in random order
  */
  createRandomGroups(elementCount, seed) {
    const randomOrder = this.calculateRandomOrder(elementCount, seed);
    return randomOrder.map((elementIndex, groupOrderIndex) => ({ elements: [elementIndex], groupOrderIndex }));
  }
  /**
  * @deprecated Use calculateElementGroups instead
  * Legacy method maintained for potential backward compatibility
  */
  calculateElementOrder(elements, order, positions, config) {
    const groups = this.calculateElementGroups(elements, order, positions, config);
    return groups.flatMap((group) => group.elements);
  }
  /**
  * Calculate center-out order: elements closest to center animate first
  *
  * @param elements - Element array
  * @param positions - Element positions with distance calculations
  * @returns Ordered array of original indices
  */
  calculateCenterOutOrder(elements, positions) {
    if (positions.length === 0) {
      console.warn("Center-out order requires element positions, falling back to first-to-last");
      return Array.from({ length: elements.length }, (_, i) => i);
    }
    return positions.sort((a, b) => (a.distanceFromCenter || 0) - (b.distanceFromCenter || 0)).map((pos) => pos.index);
  }
  /**
  * Calculate edges-in order: elements farthest from center (at edges) animate first
  *
  * @param elements - Element array
  * @param positions - Element positions with distance calculations
  * @returns Ordered array of original indices
  */
  calculateEdgesInOrder(elements, positions) {
    if (positions.length === 0) {
      console.warn("Edges-in order requires element positions, falling back to first-to-last");
      return Array.from({ length: elements.length }, (_, i) => i);
    }
    return positions.sort((a, b) => (b.distanceFromCenter || 0) - (a.distanceFromCenter || 0)).map((pos) => pos.index);
  }
  /**
  * Generate stable random order with optional seed
  *
  * @param elementCount - Number of elements
  * @param seed - Optional seed for stable randomization
  * @returns Random order indices
  */
  calculateRandomOrder(elementCount, seed) {
    const indices = Array.from({ length: elementCount }, (_, i) => i);
    let rng = seed ?? Math.floor(Math.random() * 1e6);
    const random = () => {
      rng = (rng * 1664525 + 1013904223) % Math.pow(2, 32);
      return rng / Math.pow(2, 32);
    };
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    return indices;
  }
  /**
  * Calculate element positions for spatial order calculations
  *
  * @param elements - Elements to analyze
  * @returns Array of element positions with distance calculations
  */
  calculateElementPositions(elements) {
    if (elements.length === 0)
      return [];
    const containerBounds = this.calculateContainerBounds(elements);
    const containerCenter = { x: containerBounds.left + containerBounds.width / 2, y: containerBounds.top + containerBounds.height / 2 };
    return elements.map((element, index) => {
      const bounds = element.getBoundingClientRect();
      const center = { x: bounds.left + bounds.width / 2, y: bounds.top + bounds.height / 2 };
      const distanceFromCenter = Math.sqrt(Math.pow(center.x - containerCenter.x, 2) + Math.pow(center.y - containerCenter.y, 2));
      const distanceFromEdges = Math.min(
        center.x - containerBounds.left,
        containerBounds.right - center.x,
        center.y - containerBounds.top,
        containerBounds.bottom - center.y
        // bottom edge
      );
      return { element, index, bounds, center, distanceFromCenter, distanceFromEdges };
    });
  }
  /**
  * Calculate the bounding box that contains all elements
  *
  * @param elements - Elements to analyze
  * @returns Combined bounding rectangle
  */
  calculateContainerBounds(elements) {
    if (elements.length === 0) {
      return new DOMRect(0, 0, 0, 0);
    }
    const rects = elements.map((el) => el.getBoundingClientRect());
    const left = Math.min(...rects.map((rect) => rect.left));
    const top = Math.min(...rects.map((rect) => rect.top));
    const right = Math.max(...rects.map((rect) => rect.right));
    const bottom = Math.max(...rects.map((rect) => rect.bottom));
    return new DOMRect(left, top, right - left, bottom - top);
  }
  /**
  * Check if an order type requires element positioning calculations
  *
  * @param order - Order type to check
  * @returns True if positioning is needed
  */
  needsPositioning(order) {
    return order === "center-out" || order === "edges-in";
  }
  /**
  * Apply distribution easing to delays (future enhancement)
  *
  * @description
  * Future feature: Apply easing function to stagger timing distribution
  * Example: cubic.out easing makes later elements have less delay difference
  *
  * @param delays - Linear delay array
  * @param easingFunction - Easing function to apply
  * @returns Eased delay distribution
  */
  applyDistributionEasing(delays, easingFunction) {
    console.warn("Distribution easing not yet implemented");
    return delays;
  }
};

// http-url:https://framerusercontent.com/modules/HaLmWsNqCArDU4qyxrbI/3FKK7raZSXujHXeEzx4m/StaggerCoordinator.js
var StaggerCoordinator = class {
  /**
  * Execute linear stagger animation with proper timing coordination
  *
  * @description
  * Extracted from EventAnimationCoordinator.executeWithLinearStagger().
  * Handles all linear stagger calculations and coordinates execution through callback.
  *
  * @param slot - Animation slot configuration with stagger settings
  * @param animatedElements - Elements to animate with stagger
  * @param behavior - Animation behavior ('playForward', 'playBackward', 'toggle', etc.)
  * @param startProgress - Starting progress value (0.0 to 1.0)
  * @param reverseMode - Optional reverse behavior mode
  * @param executeCallback - Callback to execute each element with calculated delay
  *
  * @extracted_from EventAnimationCoordinator.executeWithLinearStagger() - lines 434-472
  */
  executeWithLinearStagger(slot, animatedElements, behavior, startProgress, reverseMode, executeCallback) {
    const animationDirection = this.determineAnimationDirection(startProgress, behavior);
    const linearStagger = new LinearStagger();
    const staggerResult = linearStagger.calculateTimedDelays(animatedElements, slot.staggering, animationDirection);
    console.log(`\u{1F3AF} [StaggerCoordinator] Linear stagger execution: ${slot.staggering.delay}s delay, ${staggerResult.orderUsed} order, direction: ${animationDirection}`);
    console.log(`\u{1F3AF} [StaggerCoordinator] Elements: ${staggerResult.timings.length}, behavior: ${behavior}, startProgress: ${startProgress.toFixed(3)}`);
    staggerResult.timings.forEach((timing) => {
      const delay = timing.delay * 1e3;
      executeCallback(timing.element, delay);
    });
  }
  /**
  * Execute grid stagger animation with proper timing coordination
  *
  * @description
  * Production implementation for grid-based stagger patterns.
  * Uses sophisticated grid detection, distance calculations, and origin resolution
  * to create professional 2D stagger effects.
  *
  * **Grid Staggering Algorithm:**
  * 1. Auto-detect grid layout from element positions
  * 2. Resolve origin point based on stagger configuration
  * 3. Calculate distances from origin to each element
  * 4. Convert distances to time-based delays
  * 5. Execute staggered animations through callback
  *
  * @param slot - Animation slot configuration with stagger settings
  * @param animatedElements - Elements to animate with grid stagger
  * @param behavior - Animation behavior
  * @param startProgress - Starting progress value (0.0 to 1.0)
  * @param reverseMode - Optional reverse behavior mode
  * @param executeCallback - Callback to execute each element with calculated delay
  */
  executeWithGridStagger(slot, animatedElements, behavior, startProgress, reverseMode, executeCallback) {
    console.log(`\u{1F3AF} [StaggerCoordinator] Grid stagger execution starting for ${animatedElements.length} elements`);
    try {
      Promise.resolve().then(() => (init_GridDetector(), GridDetector_exports)).then(({ GridDetector: GridDetector2 }) => {
        Promise.resolve().then(() => (init_DistanceCalculator(), DistanceCalculator_exports)).then(({ DistanceCalculator: DistanceCalculator2 }) => {
          Promise.resolve().then(() => (init_OriginResolver(), OriginResolver_exports)).then(({ OriginResolver: OriginResolver2 }) => {
            this.executeGridStaggerInternal(slot, animatedElements, behavior, startProgress, reverseMode, executeCallback, new GridDetector2(), new DistanceCalculator2(), new OriginResolver2());
          }).catch((error) => {
            console.error(`\u{1F6A7} [StaggerCoordinator] Failed to import OriginResolver:`, error);
            this.fallbackToLinearStagger(slot, animatedElements, behavior, startProgress, reverseMode, executeCallback);
          });
        }).catch((error) => {
          console.error(`\u{1F6A7} [StaggerCoordinator] Failed to import DistanceCalculator:`, error);
          this.fallbackToLinearStagger(slot, animatedElements, behavior, startProgress, reverseMode, executeCallback);
        });
      }).catch((error) => {
        console.error(`\u{1F6A7} [StaggerCoordinator] Failed to import GridDetector:`, error);
        this.fallbackToLinearStagger(slot, animatedElements, behavior, startProgress, reverseMode, executeCallback);
      });
    } catch (error) {
      console.error(`\u{1F6A7} [StaggerCoordinator] Error in grid stagger execution:`, error);
      this.fallbackToLinearStagger(slot, animatedElements, behavior, startProgress, reverseMode, executeCallback);
    }
  }
  /**
  * Internal grid stagger execution with loaded utilities
  *
  * @description
  * Core grid staggering logic executed after all utilities are loaded.
  * Now supports multiple grid modes: point-based, row-based, and column-based.
  *
  * @version 2.5.0 - Added row and column wave support
  */
  executeGridStaggerInternal(slot, animatedElements, behavior, startProgress, reverseMode, executeCallback, gridDetector, distanceCalculator, originResolver) {
    console.log(`\u{1F3AF} [StaggerCoordinator] Executing grid stagger with loaded utilities`);
    const gridResult = gridDetector.analyzeLayout(animatedElements);
    if (!gridResult || gridResult.elements.length === 0) {
      console.warn(`\u{1F6A7} [StaggerCoordinator] Grid detection failed, falling back to linear stagger`);
      this.fallbackToLinearStagger(slot, animatedElements, behavior, startProgress, reverseMode, executeCallback);
      return;
    }
    console.log(`\u{1F3AF} [StaggerCoordinator] Grid detected: ${gridResult.rows}x${gridResult.columns} with ${gridResult.elements.length} elements`);
    const gridConfig = slot.staggering?.advanced?.grid;
    const gridMode = gridConfig?.mode || "point-based";
    const staggerAmount = slot.staggering?.delay || 0.1;
    console.log(`\u{1F3AF} [StaggerCoordinator] Grid mode: ${gridMode}`);
    let staggerResult;
    const animationDirection = this.determineAnimationDirection(startProgress, behavior);
    try {
      switch (gridMode) {
        case "point-based":
          staggerResult = this.executePointBasedStagger(gridResult, gridConfig, distanceCalculator, originResolver, staggerAmount, reverseMode, animationDirection);
          break;
        case "row-based":
          staggerResult = this.executeRowBasedStagger(gridResult, gridConfig?.rowDirection || "top-to-bottom", staggerAmount, animationDirection);
          break;
        case "column-based":
          const columnTolerance = gridConfig?.columnTolerance || 10;
          staggerResult = this.executeColumnBasedStagger(gridResult, gridConfig?.columnDirection || "left-to-right", staggerAmount, animationDirection, columnTolerance);
          break;
        default:
          console.warn(`\u{1F6A7} [StaggerCoordinator] Unknown grid mode: ${gridMode}, falling back to point-based`);
          staggerResult = this.executePointBasedStagger(gridResult, gridConfig, distanceCalculator, originResolver, staggerAmount, reverseMode, animationDirection);
      }
      this.executeStaggerResult(staggerResult, executeCallback);
    } catch (error) {
      console.error(`\u{1F6A7} [StaggerCoordinator] Error in ${gridMode} stagger execution:`, error);
      this.fallbackToLinearStagger(slot, animatedElements, behavior, startProgress, reverseMode, executeCallback);
    }
  }
  /**
  * 🆕 NEW: Execute point-based stagger (extracted existing logic)
  *
  * @description
  * Executes the existing point-based grid stagger using origin points and distance calculations.
  * This preserves all existing functionality while allowing new modes.
  *
  * 🚀 ENHANCED: Now supports reverse mode for proper 2D grid stagger reversal
  */
  executePointBasedStagger(gridResult, gridConfig, distanceCalculator, originResolver, staggerAmount, reverseMode, animationDirection) {
    console.log(`\u{1F3AF} [StaggerCoordinator] Executing point-based stagger`);
    const gridOrigin = gridConfig?.origin || "center";
    const originPoint = originResolver.resolveOrigin(gridResult, gridOrigin);
    console.log(`\u{1F3AF} [StaggerCoordinator] Origin resolved: (${originPoint.x.toFixed(2)}, ${originPoint.y.toFixed(2)})`);
    const distanceMetric = gridConfig?.distanceMetric || "euclidean";
    const gridWithDistances = distanceCalculator.calculateGridDistances(gridResult, originPoint, distanceMetric);
    const distribution = gridConfig?.distribution || "linear";
    const isReverseAnimation = animationDirection === "backward";
    const gridReverseMode = gridConfig?.reverseMode || "latest-elements";
    const shouldApplyReverseLogic = isReverseAnimation && gridReverseMode === "latest-elements";
    console.log(`\u{1F504} [StaggerCoordinator] Reverse mode details: reverseMode=${reverseMode}, animationDirection=${animationDirection}, gridReverseMode=${gridReverseMode}, applyReverse=${shouldApplyReverseLogic}`);
    const staggerResult = distanceCalculator.calculateTimedStaggerDelays(
      gridWithDistances,
      staggerAmount,
      distribution,
      shouldApplyReverseLogic
      // 🚀 ENHANCED: Only apply reverse logic when user wants 'latest-elements'
    );
    console.log(`\u{1F3AF} [StaggerCoordinator] Point-based stagger: ${staggerAmount}s delay, ${distanceMetric} metric, gridReverseMode=${gridReverseMode}, applyReverse=${shouldApplyReverseLogic}`);
    console.log(`\u{1F3AF} [StaggerCoordinator] Grid elements: ${staggerResult.elements.length}, calculated delays: ${staggerResult.delays.length}`);
    return staggerResult;
  }
  /**
  * 🆕 NEW: Execute row-based stagger with dynamic import
  *
  * @description
  * Executes row-based wave stagger using the RowStaggerCalculator.
  * Dynamically imports the calculator to avoid circular dependencies.
  *
  * 🚀 ENHANCED: Now supports reverse mode for proper row wave reversal
  */
  executeRowBasedStagger(gridResult, direction, staggerAmount, animationDirection) {
    const modeInfo = animationDirection === "backward" ? " (REVERSE)" : " (FORWARD)";
    console.log(`\u{1F30A} [StaggerCoordinator] Executing row-based stagger: ${direction}${modeInfo}`);
    return Promise.resolve().then(() => (init_RowStaggerCalculator(), RowStaggerCalculator_exports)).then(({ RowStaggerCalculator: RowStaggerCalculator2 }) => {
      const calculator = new RowStaggerCalculator2();
      const isReverseAnimation = animationDirection === "backward";
      return calculator.calculateRowWaveDelays(gridResult, direction, staggerAmount);
    }).catch((error) => {
      console.error(`\u{1F6A7} [StaggerCoordinator] Failed to import RowStaggerCalculator:`, error);
      throw error;
    });
  }
  /**
  * 🆕 NEW: Execute column-based stagger with dynamic import
  *
  * @description
  * Executes column-based wave stagger using the ColumnStaggerCalculator.
  * Dynamically imports the calculator to avoid circular dependencies.
  *
  * 🚀 ENHANCED Phase 1B: Now supports tolerance-based column detection for text elements
  */
  executeColumnBasedStagger(gridResult, direction, staggerAmount, animationDirection, tolerance = 10) {
    const modeInfo = animationDirection === "backward" ? " (REVERSE)" : " (FORWARD)";
    console.log(`\u{1F30A} [StaggerCoordinator] Executing column-based stagger: ${direction}${modeInfo}, tolerance: ${tolerance}px`);
    return Promise.resolve().then(() => (init_ColumnStaggerCalculator(), ColumnStaggerCalculator_exports)).then(({ ColumnStaggerCalculator: ColumnStaggerCalculator2 }) => {
      const calculator = new ColumnStaggerCalculator2();
      const isReverseAnimation = animationDirection === "backward";
      return calculator.calculateColumnWaveDelays(gridResult, direction, staggerAmount, tolerance);
    }).catch((error) => {
      console.error(`\u{1F6A7} [StaggerCoordinator] Failed to import ColumnStaggerCalculator:`, error);
      throw error;
    });
  }
  /**
  * 🆕 NEW: Execute stagger result with unified timing
  *
  * @description
  * Unified execution method that handles both sync and async stagger results.
  * Executes the calculated delays through the provided callback.
  */
  executeStaggerResult(staggerResult, executeCallback) {
    const processResult = (result) => {
      if (!result || !result.elements || !result.delays) {
        console.warn(`\u{1F6A7} [StaggerCoordinator] Invalid stagger result, no animations executed`);
        return;
      }
      result.elements.forEach((gridElement, index) => {
        const delay = result.delays[index] * 1e3;
        const element = gridElement.element || gridElement;
        executeCallback(element, delay);
        if (gridElement.position) {
          console.log(`\u{1F3AF} [StaggerCoordinator] Element at (${gridElement.position.x}, ${gridElement.position.y}) scheduled with ${delay.toFixed(1)}ms delay`);
        } else {
          console.log(`\u{1F3AF} [StaggerCoordinator] Element scheduled with ${delay.toFixed(1)}ms delay`);
        }
      });
      console.log(`\u{1F3AF} [StaggerCoordinator] Stagger execution completed successfully`);
    };
    if (staggerResult && typeof staggerResult.then === "function") {
      staggerResult.then(processResult).catch((error) => {
        console.error(`\u{1F6A7} [StaggerCoordinator] Async stagger execution failed:`, error);
      });
    } else {
      processResult(staggerResult);
    }
  }
  /**
  * Fallback to linear stagger when grid stagger fails
  *
  * @description
  * Graceful fallback to linear staggering when grid detection or
  * calculation fails, ensuring animations still work properly.
  */
  fallbackToLinearStagger(slot, animatedElements, behavior, startProgress, reverseMode, executeCallback) {
    console.log(`\u{1F504} [StaggerCoordinator] Falling back to linear stagger`);
    this.executeWithLinearStagger(slot, animatedElements, behavior, startProgress, reverseMode, executeCallback);
  }
  /**
  * Determine animation direction based on start progress and behavior
  *
  * @description
  * Extracted from EventAnimationCoordinator.determineAnimationDirection().
  * Analyzes behavior and progress to determine correct stagger direction.
  *
  * @param startProgress - Starting progress value (0.0 to 1.0)
  * @param behavior - Animation behavior string
  * @returns Animation direction for stagger calculations
  *
  * @extracted_from EventAnimationCoordinator.determineAnimationDirection() - lines 476-495
  */
  determineAnimationDirection(startProgress, behavior) {
    if (behavior === "playForward") {
      return "forward";
    } else if (behavior === "playBackward") {
      return "backward";
    } else if (behavior === "PLAY_REVERSE") {
      return "backward";
    } else if (behavior === "toggle") {
      return startProgress < 0.5 ? "forward" : "backward";
    } else {
      return startProgress < 0.5 ? "forward" : "backward";
    }
  }
};

// http-url:https://framerusercontent.com/modules/1FawqKgOzWBNdiPk2Htk/x2P54IkTh3K3szOsX26H/BehaviorCoordinator.js
function _define_property6(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var BehaviorCoordinator = class {
  /**
  * Handle behavior decision and animation execution with interrupt behavior support
  *
  * 🚨 NEW: Enhanced with configurable interrupt behavior
  * - IMMEDIATE: Cancel current and start new (original behavior)
  * - BLOCK: Ignore new triggers while animating
  * - QUEUE_LATEST: Queue only the most recent trigger
  */
  handleBehaviorDecision(trigger, slot, animatedElements) {
    if (trigger.behavior === AnimationBehavior.START_LOOP || trigger.behavior === AnimationBehavior.STOP_LOOP || trigger.behavior === AnimationBehavior.START_PING_PONG || trigger.behavior === AnimationBehavior.STOP_PING_PONG) {
      console.log(`[BehaviorCoordinator] Skipping decision engine for loop/ping-pong behavior: ${trigger.behavior}`);
      return;
    }
    console.log(`\u{1F6A8} [BehaviorCoordinator] Handling trigger with interrupt behavior: ${slot.interruptBehavior}`);
    const interruptBehavior = slot.interruptBehavior || InterruptBehavior.IMMEDIATE;
    switch (interruptBehavior) {
      case InterruptBehavior.IMMEDIATE:
        this.executeImmediately(trigger, slot, animatedElements);
        break;
      case InterruptBehavior.BLOCK:
        this.blockIfAnimating(trigger, slot, animatedElements);
        break;
      case InterruptBehavior.QUEUE_LATEST:
        this.queueLatestIntent(trigger, slot, animatedElements);
        break;
      default:
        console.warn(`\u{1F6A8} [BehaviorCoordinator] Unknown interrupt behavior: ${interruptBehavior}, falling back to IMMEDIATE`);
        this.executeImmediately(trigger, slot, animatedElements);
    }
  }
  /**
  * IMMEDIATE behavior: Cancel current animation and start new one immediately
  * This is the original behavior, preserved for backward compatibility
  */
  executeImmediately(trigger, slot, animatedElements) {
    console.log(`\u{1F6A8} [BehaviorCoordinator] IMMEDIATE: Starting animation immediately`);
    this.queuedIntents.delete(slot.id);
    const currentState = animationStateManager.getState(slot.id);
    const currentProgress = currentState ? currentState.progress : 0;
    const overrideState = trigger.overrideState || false;
    const decision = animationStateManager.decideBehavior(slot.id, trigger.behavior, overrideState);
    animationStateManager.cancelActiveAnimations(slot.id);
    animationStateManager.updateTarget(slot.id, decision.targetProgress);
    const effectiveStartProgress = decision.overrideStartProgress ?? currentProgress;
    const isDoNothingDecision = Math.abs(effectiveStartProgress - decision.targetProgress) < 0.01;
    if (isDoNothingDecision) {
      console.log(`\u{1F6A8} [BehaviorCoordinator] Do-nothing decision, skipping animation`);
      console.log(`\u{1F6A8} [BehaviorCoordinator] \u27A4 Slot: ${slot.id}`);
      console.log(`\u{1F6A8} [BehaviorCoordinator] \u27A4 Behavior: ${trigger.behavior}`);
      console.log(`\u{1F6A8} [BehaviorCoordinator] \u27A4 Current Progress: ${currentProgress.toFixed(3)}`);
      console.log(`\u{1F6A8} [BehaviorCoordinator] \u27A4 Effective Start: ${effectiveStartProgress.toFixed(3)}`);
      console.log(`\u{1F6A8} [BehaviorCoordinator] \u27A4 Target Progress: ${decision.targetProgress.toFixed(3)}`);
      console.log(`\u{1F6A8} [BehaviorCoordinator] \u27A4 Difference: ${Math.abs(effectiveStartProgress - decision.targetProgress).toFixed(3)}`);
      console.log(`\u{1F6A8} [BehaviorCoordinator] \u27A4 Override Start: ${decision.overrideStartProgress ?? "none"}`);
      return;
    }
    this.animationExecutor(slot, animatedElements, trigger.behavior, effectiveStartProgress, trigger.reverseMode);
  }
  /**
  * BLOCK behavior: Ignore new triggers while animation is playing
  * Provides smooth, uninterruptible animations
  */
  blockIfAnimating(trigger, slot, animatedElements) {
    const currentState = animationStateManager.getState(slot.id);
    const isAnimating = currentState && currentState.status === "running";
    if (isAnimating) {
      console.log(`\u{1F6A8} [BehaviorCoordinator] BLOCK: Ignoring trigger, animation already running`);
      return;
    }
    console.log(`\u{1F6A8} [BehaviorCoordinator] BLOCK: No animation running, executing trigger`);
    this.queuedIntents.delete(slot.id);
    this.executeImmediately(trigger, slot, animatedElements);
  }
  /**
  * QUEUE_LATEST behavior: Queue only the most recent trigger, execute when current completes
  * Provides responsive UX while maintaining smooth animations
  */
  queueLatestIntent(trigger, slot, animatedElements) {
    const currentState = animationStateManager.getState(slot.id);
    const isAnimating = currentState && currentState.status === "running";
    console.log(`\u{1F50D} [STAGGER-DEBUG] QUEUE_LATEST state check:`, { slotId: slot.id, currentState: currentState ? { progress: currentState.progress.toFixed(3), status: currentState.status, targetProgress: currentState.targetProgress.toFixed(3) } : null, isAnimating, shouldExecuteImmediately: !isAnimating });
    if (!isAnimating) {
      console.log(`\u{1F6A8} [BehaviorCoordinator] QUEUE_LATEST: No animation running, executing immediately`);
      this.executeImmediately(trigger, slot, animatedElements);
      return;
    }
    console.log(`\u{1F6A8} [BehaviorCoordinator] QUEUE_LATEST: Queueing intent, replacing any previous`);
    const queuedIntent = { trigger, slot, animatedElements, timestamp: Date.now() };
    this.queuedIntents.set(slot.id, queuedIntent);
  }
  /**
      * 🎯 NEW: Event-driven queued intent execution (replaces polling-based approach)
      * Executes queued intents immediately when animations complete (no setTimeout delays)
      *
      * Called by EventAnimationCoordinator when animations complete
      */
  executeQueuedIntentIfExists(slotId) {
    const queuedIntent = this.queuedIntents.get(slotId);
    if (queuedIntent) {
      console.log(`\u{1F6A8} [BehaviorCoordinator] QUEUE_LATEST: Executing queued intent after completion (event-driven)`);
      this.queuedIntents.delete(slotId);
      this.executeImmediately(queuedIntent.trigger, queuedIntent.slot, queuedIntent.animatedElements);
    }
  }
  /**
  * Get the current queued intent for a slot (for debugging/inspection)
  */
  getQueuedIntent(slotId) {
    return this.queuedIntents.get(slotId);
  }
  /**
  * Clear all queued intents (for cleanup)
  */
  clearAllQueuedIntents() {
    this.queuedIntents.clear();
  }
  /**
  * Clear queued intent for specific slot (for cleanup)
  */
  clearQueuedIntent(slotId) {
    this.queuedIntents.delete(slotId);
  }
  constructor(animationExecutor) {
    _define_property6(this, "queuedIntents", void 0);
    _define_property6(this, "animationExecutor", void 0);
    this.queuedIntents = /* @__PURE__ */ new Map();
    this.animationExecutor = animationExecutor;
  }
};

// http-url:https://framerusercontent.com/modules/mMFWNk9fT7bAtziGvqi3/3RF5aWRTv1GWy94kxXou/UnifiedScrollManager.js
function _define_property7(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var UnifiedScrollManager = class _UnifiedScrollManager {
  /**
  * Get singleton instance
  */
  static getInstance() {
    if (!_UnifiedScrollManager.instance) {
      _UnifiedScrollManager.instance = new _UnifiedScrollManager();
    }
    return _UnifiedScrollManager.instance;
  }
  /**
  * Register animation with unified scroll coordination
  *
  * @param id - Unique animation identifier
  * @param updateHandler - Function containing the animation's scroll logic
  * @param priority - Processing priority (high = processed first)
  * @param throttleMs - Optional per-animation throttling
  * @returns Cleanup function to unregister
  */
  registerAnimation(id, updateHandler, priority = "medium", throttleMs) {
    if (this.animations.has(id)) {
      console.error(`\u{1F6A8} [UnifiedScrollManager] [CRITICAL CONFLICT] Animation ID '${id}' already exists!`);
      console.error(`\u{1F6A8} [UnifiedScrollManager] [CONFLICT] Existing: ${this.animations.get(id)?.priority}, New: ${priority}`);
      const existingIds2 = Array.from(this.animations.keys());
      console.error(`\u{1F6A8} [UnifiedScrollManager] [CONFLICT] All current registrations:`, existingIds2);
      const conflictSuffix = Math.random().toString(36).substr(2, 6);
      const originalId = id;
      id = `${id}-conflict-${conflictSuffix}`;
      console.warn(`\u{1F527} [UnifiedScrollManager] [AUTO-RESOLVE] Using new ID: ${originalId} \u2192 ${id}`);
    }
    const existingIds = Array.from(this.animations.keys());
    if (this.isCanvasMode) {
      console.log(`\u{1F3A8} [UnifiedScrollManager] Registration skipped in Canvas mode: ${id}`);
      return () => {
      };
    }
    const registration = { id, updateHandler, priority, lastUpdateTime: 0, isActive: true, throttleMs };
    this.animations.set(id, registration);
    if (this.animations.size === 1) {
      this.startGlobalScrollListener();
    }
    console.log(`\u{1F680} [UnifiedScrollManager] Registered animation: ${id} (total: ${this.animations.size})`);
    return () => {
      this.unregisterAnimation(id);
    };
  }
  /**
  * Unregister animation from coordination
  */
  unregisterAnimation(id) {
    const removed = this.animations.delete(id);
    if (removed) {
      console.log(`\u{1F680} [UnifiedScrollManager] Unregistered animation: ${id} (remaining: ${this.animations.size})`);
    }
    if (this.animations.size === 0) {
      this.stopGlobalScrollListener();
    }
  }
  /**
  * Start the single global scroll listener
  */
  startGlobalScrollListener() {
    if (this.isCanvasMode)
      return;
    this.lastScrollY = __dai_window.scrollY || 0;
    __dai_window.addEventListener("scroll", this.handleGlobalScroll, { passive: true, capture: false });
    __dai_window.addEventListener("resize", this.handleGlobalScroll, { passive: true, capture: false });
    console.log("\u{1F680} [UnifiedScrollManager] Global scroll listener activated");
  }
  /**
  * Stop the global scroll listener
  */
  stopGlobalScrollListener() {
    __dai_window.removeEventListener("scroll", this.handleGlobalScroll);
    __dai_window.removeEventListener("resize", this.handleGlobalScroll);
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
    console.log("\u{1F680} [UnifiedScrollManager] Global scroll listener deactivated");
  }
  /**
  * Process animations in batches to maintain frame budget
  * Each animation keeps its own logic and calculations
  */
  processAnimationBatches(frameStart) {
    const animations = Array.from(this.animations.values()).filter((anim) => anim.isActive);
    const batchSize = this.performanceConfig.batchSize;
    const sortedAnimations = animations.sort((a, b) => {
      const priorityOrder = { high: 3, medium: 2, low: 1 };
      return priorityOrder[b.priority] - priorityOrder[a.priority];
    });
    for (let i = 0; i < sortedAnimations.length; i += batchSize) {
      const currentTime = performance.now();
      if (currentTime - frameStart > this.performanceConfig.maxProcessingTime) {
        const skipped = sortedAnimations.length - i;
        if (skipped > 0) {
          this.metrics.droppedFrames++;
        }
        break;
      }
      const batch = sortedAnimations.slice(i, i + batchSize);
      this.processBatch(batch, currentTime);
    }
  }
  /**
  * Process a batch of animations
  * Each animation maintains its own boundary calculations and logic
  */
  processBatch(animations, currentTime) {
    animations.forEach((animation) => {
      try {
        if (animation.throttleMs) {
          const timeSinceLastUpdate = currentTime - animation.lastUpdateTime;
          if (timeSinceLastUpdate < animation.throttleMs) {
            return;
          }
        }
        animation.updateHandler();
        animation.lastUpdateTime = currentTime;
      } catch (error) {
        console.error(`\u{1F680} [UnifiedScrollManager] Error processing animation ${animation.id}:`, error);
      }
    });
  }
  /**
  * Update performance metrics
  */
  updatePerformanceMetrics(frameTime) {
    this.metrics.frameCount++;
    this.metrics.totalProcessingTime += frameTime;
    this.metrics.lastFrameTime = frameTime;
    if (frameTime > this.performanceConfig.maxProcessingTime) {
      console.warn(`\u{1F680} [UnifiedScrollManager] Slow frame: ${frameTime.toFixed(2)}ms (budget: ${this.performanceConfig.maxProcessingTime}ms)`);
    }
  }
  /**
  * Get performance statistics
  */
  getPerformanceStats() {
    const averageFrameTime = this.metrics.frameCount > 0 ? this.metrics.totalProcessingTime / this.metrics.frameCount : 0;
    const frameRate = averageFrameTime > 0 ? 1e3 / averageFrameTime : 0;
    const individualListenerEstimate = this.animations.size * 8;
    const currentPerformance = averageFrameTime;
    const performanceGain = individualListenerEstimate > 0 && currentPerformance > 0 ? `${Math.round((1 - currentPerformance / individualListenerEstimate) * 100)}%` : "N/A";
    const maxPossibleAnimations = Math.floor(this.performanceConfig.maxProcessingTime / 0.5);
    const coordinationEfficiency = maxPossibleAnimations > 0 ? `${Math.round(this.animations.size / maxPossibleAnimations * 100)}%` : "N/A";
    return { activeAnimations: this.animations.size, totalScrollEvents: this.metrics.scrollEventCount, averageFrameTime: Math.round(averageFrameTime * 100) / 100, droppedFrames: this.metrics.droppedFrames, frameRate: Math.round(frameRate), performanceGain, coordinationEfficiency };
  }
  /**
  * Enable/disable debug logging
  */
  setDebugLogging(enabled) {
    this.performanceConfig.enableDebugLogging = enabled;
    console.log(`\u{1F680} [UnifiedScrollManager] Debug logging ${enabled ? "enabled" : "disabled"}`);
  }
  /**
  * Update performance configuration
  */
  updatePerformanceConfig(config) {
    this.performanceConfig = { ...this.performanceConfig, ...config };
    console.log("\u{1F680} [UnifiedScrollManager] Performance configuration updated:", this.performanceConfig);
  }
  /**
  * Reset performance metrics
  */
  resetPerformanceMetrics() {
    this.metrics = { frameCount: 0, totalProcessingTime: 0, lastFrameTime: 0, scrollEventCount: 0, droppedFrames: 0 };
    console.log("\u{1F680} [UnifiedScrollManager] Performance metrics reset");
  }
  /**
  * Pause/resume specific animation
  */
  setAnimationActive(id, isActive) {
    const animation = this.animations.get(id);
    if (animation) {
      animation.isActive = isActive;
      console.log(`\u{1F680} [UnifiedScrollManager] Animation ${id} ${isActive ? "activated" : "paused"}`);
    }
  }
  /**
  * Force update all animations (useful for resize events)
  */
  forceUpdate() {
    if (this.animations.size > 0 && !this.isCanvasMode) {
      this.handleGlobalScroll();
    }
  }
  /**
  * 📊 PERFORMANCE MONITORING: Log detailed performance report
  */
  logPerformanceReport() {
    const stats = this.getPerformanceStats();
    console.log("\u{1F680} [UnifiedScrollManager] \u2550\u2550\u2550 PERFORMANCE REPORT \u2550\u2550\u2550");
    console.log(`\u{1F3AF} Active Animations: ${stats.activeAnimations} (coordinated by single listener)`);
    console.log(`\u26A1 Performance Gain: ${stats.performanceGain} vs individual listeners`);
    console.log(`\u{1F4CA} Coordination Efficiency: ${stats.coordinationEfficiency}`);
    console.log(`\u23F1\uFE0F Average Frame Time: ${stats.averageFrameTime}ms`);
    console.log(`\u{1F3AC} Frame Rate: ${stats.frameRate} FPS`);
    console.log(`\u{1F4C9} Dropped Frames: ${stats.droppedFrames}`);
    console.log(`\u{1F4CB} Total Scroll Events: ${stats.totalScrollEvents}`);
    if (stats.averageFrameTime > 8) {
      console.warn(`\u26A0\uFE0F [UnifiedScrollManager] Frame time (${stats.averageFrameTime}ms) exceeds 8ms budget`);
    }
    if (stats.droppedFrames > 0) {
      console.warn(`\u26A0\uFE0F [UnifiedScrollManager] ${stats.droppedFrames} frames dropped - consider reducing animation complexity`);
    }
    if (stats.activeAnimations > 20) {
      console.warn(`\u26A0\uFE0F [UnifiedScrollManager] ${stats.activeAnimations} animations active - high load detected`);
    }
    console.log("\u{1F680} [UnifiedScrollManager] \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550");
  }
  /**
  * 📊 PERFORMANCE MONITORING: Start automatic performance monitoring
  */
  startPerformanceMonitoring(intervalMs = 5e3) {
    const interval = setInterval(() => {
      if (this.animations.size > 0) {
        this.logPerformanceReport();
      }
    }, intervalMs);
    console.log(`\u{1F4CA} [UnifiedScrollManager] Performance monitoring started (${intervalMs}ms interval)`);
    return () => {
      clearInterval(interval);
      console.log("\u{1F4CA} [UnifiedScrollManager] Performance monitoring stopped");
    };
  }
  /**
  * Destroy the manager and clean up all resources
  */
  destroy() {
    this.animations.clear();
    this.stopGlobalScrollListener();
    _UnifiedScrollManager.instance = null;
    console.log("\u{1F680} [UnifiedScrollManager] Destroyed and cleaned up");
  }
  constructor() {
    _define_property7(this, "animations", /* @__PURE__ */ new Map());
    _define_property7(this, "rafId", null);
    _define_property7(this, "isProcessing", false);
    _define_property7(this, "lastScrollY", 0);
    _define_property7(this, "scrollDelta", 0);
    _define_property7(this, "isCanvasMode", void 0);
    _define_property7(this, "performanceConfig", { batchSize: 8, maxProcessingTime: 8, enableDebugLogging: false, adaptiveThrottling: true });
    _define_property7(this, "metrics", { frameCount: 0, totalProcessingTime: 0, lastFrameTime: 0, scrollEventCount: 0, droppedFrames: 0 });
    _define_property7(this, "handleGlobalScroll", () => {
      if (this.isProcessing)
        return;
      this.isProcessing = true;
      this.metrics.scrollEventCount++;
      const currentScrollY = __dai_window.scrollY || 0;
      this.scrollDelta = currentScrollY - this.lastScrollY;
      this.lastScrollY = currentScrollY;
      this.rafId = requestAnimationFrame(() => {
        const frameStart = performance.now();
        this.processAnimationBatches(frameStart);
        const frameTime = performance.now() - frameStart;
        this.updatePerformanceMetrics(frameTime);
        this.isProcessing = false;
        this.rafId = null;
      });
    });
    this.isCanvasMode = EnvironmentDetector.isCanvas();
    this.handleGlobalScroll = this.handleGlobalScroll.bind(this);
    if (this.isCanvasMode) {
      console.log("\u{1F3A8} [UnifiedScrollManager] Canvas mode detected - scroll coordination disabled");
    } else {
      console.log("\u{1F680} [UnifiedScrollManager] Initialized - ready for scroll coordination");
    }
  }
};
_define_property7(UnifiedScrollManager, "instance", null);
var unifiedScrollManager = UnifiedScrollManager.getInstance();

// http-url:https://framerusercontent.com/modules/B7fX4STSf4AhAJ5gBwVs/keqci8NTsNHUJx1yq2VK/ScrollAnimator.js
function _define_property8(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var ScrollAnimator = class {
  /**
  * Set up scroll threshold detection for an element
  * @param slot Animation slot configuration
  * @param animatedElement Element to animate (not used directly, kept for API compatibility)
  * @param triggerElement Element to observe for scroll triggers
  * @param scrollConfig Scroll configuration
  * @param triggerCallback Callback to fire when threshold is crossed (unified with other events)
  */
  animateOnScroll(slot, animatedElement, triggerElement, scrollConfig, triggerCallback) {
    if (EnvironmentDetector.isCanvas()) {
      logger.debug(this.loggerContext, "Scroll threshold detection disabled in Canvas mode");
      return () => {
      };
    }
    const elementId = animatedElement.dataset.frameId || animatedElement.id || Math.random().toString(36).substr(2, 9);
    const triggerId = `${slot.id}-element-${elementId}`;
    logger.debug(this.loggerContext, `Setting up scroll threshold detection for: ${triggerId}`);
    if (this.activeAnimations.has(triggerId)) {
      this.activeAnimations.get(triggerId)?.cleanup();
    }
    const scrollUpdateHandler = () => {
      this.handleScrollThreshold(triggerId);
    };
    const unifiedManagerCleanup = unifiedScrollManager.registerAnimation(
      `scroll-animator-${triggerId}`,
      scrollUpdateHandler,
      "high"
      // High priority - scroll threshold detection (direction detection is now isolated)
    );
    const cleanup2 = () => {
      unifiedManagerCleanup();
      this.activeAnimations.delete(triggerId);
    };
    this.activeAnimations.set(triggerId, { triggerElement, scrollConfig, hasPassedThreshold: false, triggerCallback, cleanup: cleanup2 });
    console.log(`\u{1F680} [ScrollAnimator] Registered with UnifiedScrollManager: ${triggerId}`);
    return cleanup2;
  }
  /**
  * Handle scroll threshold detection for specific trigger
  * 🎯 NEW: Simple threshold crossing detection (like other events)
  */
  handleScrollThreshold(triggerId) {
    const triggerInfo = this.activeAnimations.get(triggerId);
    if (!triggerInfo)
      return;
    const { triggerElement, scrollConfig, hasPassedThreshold, triggerCallback } = triggerInfo;
    const isThresholdCrossed = this.isThresholdCrossed(triggerElement, scrollConfig);
    if (isThresholdCrossed && !hasPassedThreshold) {
      logger.debug(this.loggerContext, `Threshold crossed (forward) for: ${triggerId}`);
      triggerInfo.hasPassedThreshold = true;
      triggerCallback("forward");
    }
    if (!isThresholdCrossed && hasPassedThreshold && scrollConfig.thresholdCrossedBackward) {
      logger.debug(this.loggerContext, `Threshold crossed (backward) for: ${triggerId}`);
      triggerInfo.hasPassedThreshold = false;
      triggerCallback("backward");
    }
  }
  /**
    * Check if scroll threshold is currently crossed
    * 🎯 NEW: Simple boolean check (not continuous progress)
    */
  isThresholdCrossed(element, scrollConfig) {
    const rect = element.getBoundingClientRect();
    const elementHeight = rect.height;
    const viewportHeight = __dai_window.innerHeight;
    const elementTop = rect.top;
    const elementTriggerPoint = elementTop + elementHeight * scrollConfig.elementStart / 100;
    const viewportTriggerPoint = viewportHeight * scrollConfig.viewportThreshold / 100;
    return elementTriggerPoint <= viewportTriggerPoint;
  }
  /**
  * Clean up all active animations
  */
  cleanup() {
    console.log(`\u{1F680} [ScrollAnimator] Cleaning up ${this.activeAnimations.size} scroll animations`);
    this.activeAnimations.forEach((triggerInfo) => {
      triggerInfo.cleanup();
    });
    this.activeAnimations.clear();
  }
  /**
  * Get current performance stats
  */
  getPerformanceStats() {
    return { activeAnimations: this.activeAnimations.size, animationIds: Array.from(this.activeAnimations.keys()), unifiedManagerStats: unifiedScrollManager.getPerformanceStats() };
  }
  constructor() {
    _define_property8(this, "activeAnimations", /* @__PURE__ */ new Map());
    _define_property8(this, "loggerContext", "ScrollAnimator");
  }
};
var scrollAnimator = new ScrollAnimator();

// http-url:https://framerusercontent.com/modules/Ek8g3c7wGj1TccVDdA7q/Hhdt9Dckhw1HXQt66ubv/ResponsiveTextManager.js
function _define_property9(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var ResponsiveTextManager = class _ResponsiveTextManager {
  /**
  * Get the singleton instance of ResponsiveTextManager
  *
  * Initializes ResizeObserver and window resize listener on first access.
  * Registers instance globally for cache management and debugging.
  *
  * @returns The singleton ResponsiveTextManager instance
  */
  static getInstance() {
    if (!_ResponsiveTextManager.instance) {
      _ResponsiveTextManager.instance = new _ResponsiveTextManager();
      _ResponsiveTextManager.instance.initializeObservers();
      _ResponsiveTextManager.instance.registerGlobalInstance();
    }
    return _ResponsiveTextManager.instance;
  }
  //=======================================
  //          PUBLIC API METHODS
  //=======================================
  /**
       * Register an element for responsive text re-splitting
       *
       * When the element's container resizes, the provided callback will be
       * invoked to re-split the text with the specified configuration.
       *
       * @param element - HTML element to monitor for resize events
       * @param config - Text processing configuration for re-splitting
       * @param reSplitCallback - Function to call when re-splitting is needed
       * @param onSplitComplete - Optional callback when split operation completes
       *
       * @example
       * ```typescript
       * resizeManager.registerElement(
       *     textElement,
       *     { animateBy: 'words', maskLines: true, enabled: true },
       *     async (el, cfg) => textSplitter.splitText(el, cfg),
       *     (elements, type) => console.log(`Split complete: ${elements.length} ${type}`)
       * );
       * ```
       */
  registerElement(element, config, reSplitCallback, onSplitComplete) {
    const elementId = this.getElementId(element);
    this.responsiveElements.set(elementId, { element, config, reSplitCallback, onSplitComplete });
    if (onSplitComplete) {
      this.splitCompleteCallbacks.set(elementId, onSplitComplete);
    }
    if (this.resizeObserver) {
      this.resizeObserver.observe(element);
    }
    this.logDebug(`Registered element for responsive splitting: ${elementId}`, { configEnabled: config.enabled, animateBy: config.animateBy });
  }
  /**
  * Unregister an element from responsive text re-splitting
  *
  * Stops monitoring the element for resize events and removes all
  * associated callbacks and configurations.
  *
  * @param element - HTML element to stop monitoring
  * @returns True if element was successfully unregistered, false if not found
  */
  unregisterElement(element) {
    const elementId = this.getElementId(element);
    const wasTracked = this.responsiveElements.delete(elementId);
    this.splitCompleteCallbacks.delete(elementId);
    if (this.resizeObserver) {
      this.resizeObserver.unobserve(element);
    }
    if (wasTracked) {
      this.logDebug(`Unregistered element from responsive splitting: ${elementId}`);
    }
    return wasTracked;
  }
  /**
  * Register a split completion callback for an element
  *
  * This callback will be invoked whenever the element completes
  * a text re-splitting operation due to resize events.
  *
  * @param elementId - Unique identifier for the element
  * @param callback - Function to call when split completes
  */
  registerSplitCompleteCallback(elementId, callback) {
    this.splitCompleteCallbacks.set(elementId, callback);
    this.logDebug(`Registered split complete callback for element: ${elementId}`);
  }
  /**
  * Unregister a split completion callback for an element
  *
  * @param elementId - Unique identifier for the element
  * @returns True if callback was removed, false if not found
  */
  unregisterSplitCompleteCallback(elementId) {
    const wasRemoved = this.splitCompleteCallbacks.delete(elementId);
    if (wasRemoved) {
      this.logDebug(`Unregistered split complete callback for element: ${elementId}`);
    }
    return wasRemoved;
  }
  /**
  * Manually trigger resize handling for all registered elements
  *
  * This method can be used to force re-splitting of all responsive
  * elements, bypassing the normal resize event detection.
  *
  * 🔥 ENHANCED: Forces fresh line detection for breakpoint changes
  *
  * @returns Promise that resolves when all re-splits are complete
  */
  async forceResizeAll() {
    const elementCount = this.responsiveElements.size;
    this.logDebug(`\u{1F6A8} FORCE RESIZE: Manually triggering resize for ${elementCount} responsive elements (breakpoint change detected)`);
    if (elementCount === 0) {
      this.logDebug("No responsive elements to force re-split");
      return;
    }
    const reSplitPromises = [];
    for (const [elementId, { element, config, reSplitCallback }] of this.responsiveElements) {
      this.logDebug(`\u{1F525} FORCE re-splitting element for line recalculation: ${elementId}`);
      const forceResplitConfig = { ...config, _isReSplit: true, _forceLineRecalculation: true };
      reSplitPromises.push(reSplitCallback(element, forceResplitConfig));
    }
    await Promise.all(reSplitPromises);
    this.logDebug(`\u2705 FORCE RESIZE COMPLETE: Processed ${elementCount} elements with fresh line detection`);
  }
  /**
  * Get comprehensive debug information about responsive text management
  *
  * Useful for troubleshooting resize-related issues and understanding
  * the current state of the responsive system.
  *
  * @returns Debug summary with detailed information
  */
  getDebugSummary() {
    return { trackedElements: this.responsiveElements.size, registeredCallbacks: this.splitCompleteCallbacks.size, hasResizeObserver: !!this.resizeObserver, hasWindowResizeListener: !!this.windowResizeListener, debugEnabled: _ResponsiveTextManager.debugEnabled, lastResizeTimestamp: this.lastResizeTimestamp };
  }
  /**
  * Clean up all observers, listeners, and tracked elements
  *
  * Should be called when the ResponsiveTextManager is no longer needed
  * to prevent memory leaks and remove event listeners.
  */
  cleanup() {
    this.logDebug("Starting ResponsiveTextManager cleanup");
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
      this.resizeObserver = null;
      this.logDebug("ResizeObserver disconnected");
    }
    if (this.windowResizeListener && typeof __dai_window !== "undefined") {
      __dai_window.removeEventListener("resize", this.windowResizeListener);
      this.windowResizeListener = null;
      this.logDebug("Window resize listener removed");
    }
    if (this.resizeTimer) {
      clearTimeout(this.resizeTimer);
      this.resizeTimer = null;
    }
    const trackedCount = this.responsiveElements.size;
    const callbackCount = this.splitCompleteCallbacks.size;
    this.responsiveElements.clear();
    this.splitCompleteCallbacks.clear();
    this.logDebug(`Cleanup complete - removed ${trackedCount} tracked elements and ${callbackCount} callbacks`);
  }
  //=======================================
  //          STATIC UTILITY METHODS
  //=======================================
  /**
       * Enable or disable debug logging for resize operations
       *
       * @param enabled - Whether to enable detailed debug logging
       */
  static setDebugEnabled(enabled) {
    _ResponsiveTextManager.debugEnabled = enabled;
    console.log(`\u{1F504} [ResponsiveTextManager] Debug logging ${enabled ? "enabled" : "disabled"}`);
  }
  /**
  * Test the resize fix functionality
  *
  * This method helps verify that the resize system is working correctly
  * by logging comprehensive status information and simulating resize events.
  */
  static testResizeFix() {
    console.log("\u{1F9EA} [ResponsiveTextManager] Testing resize fix...");
    const instance = _ResponsiveTextManager.getInstance();
    const summary = instance.getDebugSummary();
    console.log("\u{1F9EA} \u27A4 Debug Summary:");
    console.log(`\u{1F9EA}   \u2192 Tracked elements: ${summary.trackedElements}`);
    console.log(`\u{1F9EA}   \u2192 Registered callbacks: ${summary.registeredCallbacks}`);
    console.log(`\u{1F9EA}   \u2192 Has ResizeObserver: ${summary.hasResizeObserver}`);
    console.log(`\u{1F9EA}   \u2192 Has window listener: ${summary.hasWindowResizeListener}`);
    console.log(`\u{1F9EA}   \u2192 Debug enabled: ${summary.debugEnabled}`);
    if (summary.trackedElements > 0) {
      console.log(`\u{1F9EA} [ResponsiveTextManager] Simulating resize for ${summary.trackedElements} elements...`);
      instance.forceResizeAll().then(() => {
        console.log("\u{1F9EA} \u2705 Resize simulation complete");
      });
    } else {
      console.log("\u{1F9EA} \u26A0\uFE0F No elements to test - register some elements first");
    }
  }
  /**
  * Reset the singleton instance (primarily for testing)
  *
  * Cleans up the current instance and allows a fresh instance to be created.
  * Use with caution in production environments.
  */
  static resetInstance() {
    if (_ResponsiveTextManager.instance) {
      _ResponsiveTextManager.instance.cleanup();
      _ResponsiveTextManager.instance = null;
      console.log("\u{1F504} [ResponsiveTextManager] Instance reset");
    }
  }
  //=======================================
  //          PRIVATE IMPLEMENTATION
  //=======================================
  /**
       * Initialize ResizeObserver and window resize listeners
       *
       * Sets up the core observation mechanisms for detecting resize events
       * on both individual elements and the window.
       */
  initializeObservers() {
    this.initializeResizeObserver();
    this.initializeWindowResizeHandler();
  }
  /**
  * Initialize ResizeObserver for individual element monitoring
  *
  * Creates a ResizeObserver instance that watches for size changes
  * on registered elements and triggers debounced re-splitting.
  */
  initializeResizeObserver() {
    this.logDebug("ResizeObserver ENABLED with element ID preservation");
    if (typeof ResizeObserver !== "undefined") {
      this.resizeObserver = new ResizeObserver((entries) => {
        this.handleElementResize(entries);
      });
      this.logDebug("ResizeObserver initialized successfully");
    } else {
      console.warn("\u26A0\uFE0F [ResponsiveTextManager] ResizeObserver not supported in this environment");
    }
  }
  /**
  * Initialize window resize event handler
  *
  * Sets up a debounced listener for window resize events that can
  * trigger re-splitting for elements that depend on viewport dimensions.
  */
  initializeWindowResizeHandler() {
    this.logDebug("Window resize handler ENABLED for responsive text reflow");
    if (typeof __dai_window !== "undefined") {
      this.windowResizeListener = () => {
        this.handleWindowResize();
      };
      __dai_window.addEventListener("resize", this.windowResizeListener);
      this.logDebug("Window resize listener added successfully");
    } else {
      this.logDebug("Window not available - skipping window resize handler");
    }
  }
  /**
  * Handle ResizeObserver entries with debouncing
  *
  * Processes resize events from the ResizeObserver, implementing
  * debouncing to prevent excessive re-splitting operations.
  *
  * @param entries - Array of ResizeObserver entries
  */
  handleElementResize(entries) {
    if (this.resizeTimer) {
      clearTimeout(this.resizeTimer);
    }
    this.logDebug(`Resize detected for ${entries.length} elements, debouncing...`, { timestamp: (/* @__PURE__ */ new Date()).toISOString() });
    this.resizeTimer = __dai_window.setTimeout(() => {
      this.processElementResize(entries);
    }, _ResponsiveTextManager.RESIZE_DEBOUNCE_DELAY);
  }
  /**
  * Process element resize events after debouncing
  *
  * Executes the actual re-splitting logic for elements that have
  * been resized, coordinating with their registered callbacks.
  *
  * 🔥 ENHANCED: Now uses forced line recalculation for consistent word splitting responsiveness
  *
  * @param entries - Array of ResizeObserver entries to process
  */
  async processElementResize(entries) {
    this.lastResizeTimestamp = Date.now();
    this.logDebug(`Processing resize for ${entries.length} elements`, { timestamp: (/* @__PURE__ */ new Date()).toISOString() });
    const reSplitPromises = [];
    for (const entry of entries) {
      const element = entry.target;
      const elementId = this.getElementId(element);
      const config = this.responsiveElements.get(elementId);
      if (config) {
        this.logDebug(`Re-splitting text due to element resize: ${elementId}`, { timestamp: (/* @__PURE__ */ new Date()).toISOString() });
        const enhancedConfig = { ...config.config, _isReSplit: true, _forceLineRecalculation: true };
        this.logDebug(`\u{1F525} ELEMENT RESIZE: Using enhanced config with forced line recalculation for element: ${elementId}`);
        const reSplitPromise = config.reSplitCallback(element, enhancedConfig);
        reSplitPromises.push(reSplitPromise);
      } else {
        this.logDebug(`\u26A0\uFE0F Resize event for untracked element: ${elementId || "no-id"}`, { timestamp: (/* @__PURE__ */ new Date()).toISOString() });
      }
    }
    await Promise.all(reSplitPromises);
    this.logDebug(`\u2705 ELEMENT RESIZE COMPLETE: Processed ${entries.length} elements with forced line recalculation`);
  }
  /**
  * Handle window resize events with debouncing
  *
  * Responds to window resize events by re-splitting all registered
  * responsive elements after a debounce delay.
  */
  handleWindowResize() {
    if (this.resizeTimer) {
      clearTimeout(this.resizeTimer);
    }
    const isFramerPreview = this.isFramerPreviewEnvironment();
    const breakpointChangeDelay = isFramerPreview ? 1e3 : _ResponsiveTextManager.RESIZE_DEBOUNCE_DELAY;
    if (isFramerPreview) {
      this.logDebug(`Framer preview detected - using ${breakpointChangeDelay}ms delay for breakpoint transitions`);
    }
    this.logDebug("Window resize detected - triggering text reflow");
    this.resizeTimer = __dai_window.setTimeout(() => {
      this.processWindowResize();
    }, breakpointChangeDelay);
  }
  /**
  * Process window resize events after debouncing
  *
  * Triggers re-splitting for all registered responsive elements
  * in response to window dimension changes.
  *
  * 🔥 ENHANCED: Now uses forced line recalculation for better word splitting responsiveness
  */
  async processWindowResize() {
    const elementCount = this.responsiveElements.size;
    this.logDebug(`Handling window resize for ${elementCount} responsive elements`);
    if (elementCount === 0) {
      this.logDebug("No responsive elements to process for window resize");
      return;
    }
    if (this.resizeTimer) {
      clearTimeout(this.resizeTimer);
    }
    this.lastResizeTimestamp = Date.now();
    const reSplitPromises = [];
    for (const [elementId, { element, config, reSplitCallback }] of this.responsiveElements) {
      this.logDebug(`Re-splitting element due to window resize: ${elementId}`);
      const enhancedConfig = { ...config, _isReSplit: true, _forceLineRecalculation: true };
      this.logDebug(`\u{1F525} WINDOW RESIZE: Using enhanced config with forced line recalculation for element: ${elementId}`);
      reSplitPromises.push(reSplitCallback(element, enhancedConfig));
    }
    await Promise.all(reSplitPromises);
    this.logDebug(`\u2705 WINDOW RESIZE COMPLETE: Processed ${elementCount} elements with forced line recalculation`);
  }
  /**
  * Notify React component that splitting completed
  *
  * Invokes registered split completion callbacks to inform
  * React components about completed re-splitting operations.
  *
  * @param elementId - Unique identifier for the element
  * @param elements - Array of split HTML elements created
  * @param splitType - Type of splitting that was performed
  */
  notifySplitComplete(elementId, elements, splitType) {
    const callback = this.splitCompleteCallbacks.get(elementId);
    if (callback) {
      this.logDebug(`Notifying React component of split completion: ${elementId}`, { elementCount: elements.length, splitType });
      callback(elements, splitType);
    }
  }
  /**
  * Register instance globally for cache management and debugging
  *
  * Makes the instance available globally for debugging purposes
  * and cache management operations.
  */
  registerGlobalInstance() {
    if (typeof __dai_window !== "undefined") {
      __dai_window.__FAME_RESPONSIVE_TEXT_MANAGER__ = this;
      this.logDebug("Instance registered globally for cache management");
    }
  }
  /**
  * Get unique identifier for an HTML element
  *
  * Creates a consistent identifier for elements, preferring existing
  * IDs and falling back to data attributes or generated identifiers.
  *
  * @param element - HTML element to get ID for
  * @returns Unique string identifier for the element
  */
  getElementId(element) {
    if (element.id) {
      return element.id;
    }
    const framerName = element.getAttribute("data-framer-name");
    if (framerName) {
      return `framer-${framerName}`;
    }
    const textContent = (element.textContent || "").slice(0, 20);
    const timestamp = Date.now();
    return `responsive-text-${textContent.replace(/\s+/g, "-")}-${timestamp}`;
  }
  /**
  * Log debug information if debug mode is enabled
  *
  * @param message - Debug message to log
  * @param metadata - Optional metadata object to include
  */
  logDebug(message, metadata) {
    if (_ResponsiveTextManager.debugEnabled) {
      const prefix = "\u{1F504} [ResponsiveTextManager]";
      if (metadata) {
        console.log(`${prefix} ${message}`, metadata);
      } else {
        console.log(`${prefix} ${message}`);
      }
    }
  }
  /**
  * 🚨 FRAMER BREAKPOINT FIX: Detect if we're in Framer preview environment
  *
  * Framer preview has specific characteristics that we can detect to apply
  * special handling for breakpoint transitions.
  */
  isFramerPreviewEnvironment() {
    if (typeof __dai_window === "undefined")
      return false;
    const hasFramerPreview = __dai_window.location.hostname.includes("framer.app") || __dai_window.location.hostname.includes("framer.com") || __dai_window.location.hostname.includes("framer.website") || __dai_window.location.pathname.includes("/preview") || document.querySelector("[data-framer-name]") !== null || document.querySelector(".framer-") !== null || // Check for Framer CSS classes or data attributes
    document.documentElement.classList.toString().includes("framer") || // Check for Framer-specific global variables
    __dai_window.__framer__ !== void 0 || __dai_window.Framer !== void 0;
    return hasFramerPreview;
  }
  /**
  * Private constructor to enforce singleton pattern
  */
  constructor() {
    _define_property9(this, "responsiveElements", /* @__PURE__ */ new Map());
    _define_property9(this, "resizeObserver", null);
    _define_property9(this, "windowResizeListener", null);
    _define_property9(this, "resizeTimer", null);
    _define_property9(this, "splitCompleteCallbacks", /* @__PURE__ */ new Map());
    _define_property9(this, "lastResizeTimestamp", void 0);
    this.logDebug("ResponsiveTextManager instance created");
  }
};
_define_property9(ResponsiveTextManager, "instance", null);
_define_property9(ResponsiveTextManager, "debugEnabled", false);
_define_property9(ResponsiveTextManager, "RESIZE_DEBOUNCE_DELAY", 500);

// http-url:https://framerusercontent.com/modules/2bA8Bb10krhvH4N61ISJ/9lgVekUIwJyQ3swxw5mm/StylePreservationService.js
function _define_property10(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var DEFAULT_STYLE_CONFIG = { includeComputedStyles: true, processFramerVariables: true, convertSemanticTags: true, excludeProperties: ["position", "display", "margin", "padding"], debugMode: false };
var StylePreservationService = class _StylePreservationService {
  /**
  * Get singleton instance of StylePreservationService
  *
  * @returns The singleton instance
  *
  * @example
  * ```typescript
  * const styleService = StylePreservationService.getInstance();
  * ```
  */
  static getInstance() {
    if (!_StylePreservationService.instance) {
      _StylePreservationService.instance = new _StylePreservationService();
    }
    return _StylePreservationService.instance;
  }
  /**
  * Enable or disable debug logging
  *
  * @param enabled - Whether to enable debug mode
  *
  * @example
  * ```typescript
  * StylePreservationService.setDebugEnabled(true);
  * ```
  */
  static setDebugEnabled(enabled) {
    const instance = _StylePreservationService.getInstance();
    instance.debugEnabled = enabled;
    instance.log(`Debug mode ${enabled ? "enabled" : "disabled"}`);
  }
  /**
  * Update default configuration for style operations
  *
  * @param config - Partial configuration to merge with defaults
  *
  * @example
  * ```typescript
  * styleService.setDefaultConfig({
  *     processFramerVariables: false,
  *     debugMode: true
  * });
  * ```
  */
  setDefaultConfig(config) {
    this.defaultConfig = { ...this.defaultConfig, ...config };
    this.log("Default configuration updated", this.defaultConfig);
  }
  /**
  * Capture comprehensive style information from an HTML element
  *
  * @param element - The HTML element to analyze
  * @param elementId - Unique identifier for the element
  * @param config - Optional configuration to override defaults
  * @returns Style capture result with all discovered styles
  *
  * @description
  * This method performs a comprehensive scan of the HTML element to find
  * all styled sub-elements and capture their styling information. It uses
  * multiple CSS selectors to ensure no styled content is missed.
  *
  * **Capture Strategy:**
  * 1. **Broad Selector Scan:** Uses multiple selectors to find styled elements
  * 2. **Style Information Extraction:** Captures computed styles, inline styles, and tag semantics
  * 3. **Position Mapping:** Maps styles to exact character positions in text
  * 4. **Intelligent Filtering:** Excludes irrelevant or default styles
  *
  * @example
  * ```typescript
  * const result = styleService.captureElementStyles(
  *     element,
  *     'my-text-element',
  *     { debugMode: true }
  * );
  *
  * if (result.success) {
  *     console.log(`Captured ${result.styleInfos.length} styled elements`);
  * }
  * ```
  */
  captureElementStyles(element, elementId, config) {
    const finalConfig = { ...this.defaultConfig, ...config };
    const fullText = element.textContent || "";
    this.log(`Capturing styles from element: ${elementId}`, { textLength: fullText.length, textPreview: fullText.slice(0, 50) + "..." });
    try {
      const styleInfos = [];
      const possibleSelectors = ["*[style]", "*[class]", "span", "div", "p", "em", "strong", "b", "i", "u", "s", "mark", "small", "sub", "sup", "code", "kbd", "samp", "var", "*[data-*]"];
      const allStyledElements = /* @__PURE__ */ new Set();
      possibleSelectors.forEach((selector) => {
        try {
          const elements = element.querySelectorAll(selector);
          elements.forEach((el) => {
            const htmlEl = el;
            if (htmlEl.textContent && htmlEl !== element) {
              allStyledElements.add(htmlEl);
            }
          });
        } catch (error) {
          this.log(`Selector error for "${selector}": ${error}`);
        }
      });
      this.log(`Found ${allStyledElements.size} styled elements to analyze`);
      let styledCharacterCount = 0;
      for (const styledElement of allStyledElements) {
        const spanText = styledElement.textContent || "";
        const inlineStyle = styledElement.getAttribute("style") || "";
        if (spanText.trim()) {
          const startIndex = fullText.indexOf(spanText);
          if (startIndex !== -1) {
            const endIndex = startIndex + spanText.length;
            const computedStyles = __dai_window.getComputedStyle(styledElement);
            const styleInfo = { text: spanText, startIndex, endIndex, styles: computedStyles, tagName: styledElement.tagName.toLowerCase(), inlineStyle };
            styleInfos.push(styleInfo);
            styledCharacterCount += spanText.length;
            this.log(`Captured style for "${spanText}" at position ${startIndex}-${endIndex}`);
          } else {
            this.log(`Warning: Could not find position for text: "${spanText}"`);
          }
        }
      }
      this.capturedStyles.set(elementId, styleInfos);
      const result = { styleInfos, elementCount: allStyledElements.size, styledCharacterCount, success: true };
      this.log(`Style capture complete for ${elementId}`, { capturedStyles: styleInfos.length, styledElements: allStyledElements.size, styledCharacters: styledCharacterCount });
      return result;
    } catch (error) {
      const errorMessage = `Style capture failed for ${elementId}: ${error}`;
      this.log(errorMessage, "error");
      return { styleInfos: [], elementCount: 0, styledCharacterCount: 0, success: false, error: errorMessage };
    }
  }
  /**
  * Process style information and convert to CSS string
  *
  * @param styleInfo - The style information to process
  * @param config - Optional configuration to override defaults
  * @returns CSS string with processed styles
  *
  * @description
  * This method intelligently converts StyleInfo into a clean CSS string,
  * handling semantic HTML conversion, Framer variable processing, and
  * style prioritization with proper filtering of irrelevant properties.
  *
  * **Processing Pipeline:**
  * 1. **Semantic Tag Conversion:** Convert HTML tags (strong, em) to CSS
  * 2. **Framer Variable Processing:** Convert --framer-text-color to standard CSS
  * 3. **Inline Style Processing:** Handle inline styles with highest priority
  * 4. **Computed Style Extraction:** Extract meaningful computed styles
  * 5. **Property Filtering:** Remove default/irrelevant properties
  * 6. **CSS Generation:** Generate clean, optimized CSS string
  *
  * @example
  * ```typescript
  * const cssString = styleService.processStyleInfo(styleInfo, {
  *     processFramerVariables: true,
  *     convertSemanticTags: true
  * });
  * // Returns: "font-weight: bold; color: rgb(255, 0, 0);"
  * ```
  */
  processStyleInfo(styleInfo, config) {
    const finalConfig = { ...this.defaultConfig, ...config };
    const cssProperties = [];
    if (finalConfig.convertSemanticTags) {
      const semanticStyles = this.convertSemanticTagToCSS(styleInfo.tagName);
      cssProperties.push(...semanticStyles);
    }
    if (styleInfo.inlineStyle) {
      const processedInlineStyles = this.processInlineStyles(styleInfo.inlineStyle, finalConfig.processFramerVariables);
      if (processedInlineStyles) {
        cssProperties.push(processedInlineStyles);
      }
    }
    if (finalConfig.includeComputedStyles) {
      const computedStyles = this.extractComputedStyles(styleInfo.styles, styleInfo.inlineStyle, finalConfig.excludeProperties);
      cssProperties.push(...computedStyles);
    }
    const finalCssString = cssProperties.filter((prop) => prop.trim()).join("; ");
    if (finalCssString && finalConfig.debugMode) {
      this.log(`Processed styles for "${styleInfo.text}": ${finalCssString}`);
    }
    return finalCssString;
  }
  /**
  * Reconstruct HTML with preserved styling for a specific text segment
  *
  * @param lineText - The text content to style
  * @param lineStartIndex - Starting character position in original text
  * @param elementId - ID of the element with captured styles
  * @param config - Optional configuration to override defaults
  * @returns HTML string with preserved styling
  *
  * @description
  * This method rebuilds HTML with styling preserved by mapping character
  * positions to their original styles and generating appropriate span tags.
  * It handles overlapping styles, style boundaries, and efficient span generation.
  *
  * **Reconstruction Algorithm:**
  * 1. **Style Filtering:** Find styles that overlap with the text segment
  * 2. **Character Mapping:** Process each character to determine active styles
  * 3. **Span Generation:** Generate optimal span tags for style boundaries
  * 4. **HTML Assembly:** Build final HTML with proper tag nesting
  *
  * @example
  * ```typescript
  * // Original: "Hello <strong>world</strong>!"
  * const styledHTML = styleService.reconstructStyledHTML(
  *     "Hello world!",
  *     0,
  *     'my-element'
  * );
  * // Returns: "Hello <span style=\"font-weight: bold;\">world</span>!"
  * ```
  */
  reconstructStyledHTML(lineText, lineStartIndex, elementId, config) {
    const finalConfig = { ...this.defaultConfig, ...config };
    const styleInfos = this.capturedStyles.get(elementId) || [];
    if (styleInfos.length === 0) {
      this.log(`No styles found for element ${elementId}, returning plain text`);
      return lineText;
    }
    const lineEndIndex = lineStartIndex + lineText.length;
    const relevantStyles = styleInfos.filter((styleInfo) => {
      const overlapStart = Math.max(styleInfo.startIndex, lineStartIndex);
      const overlapEnd = Math.min(styleInfo.endIndex, lineEndIndex);
      return overlapStart < overlapEnd;
    });
    if (relevantStyles.length === 0) {
      this.log(`No relevant styles found for text segment at ${lineStartIndex}-${lineEndIndex}`);
      return lineText;
    }
    this.log(`Reconstructing HTML for "${lineText}" with ${relevantStyles.length} relevant styles`);
    let styledHTML = "";
    for (let i = 0; i < lineText.length; i++) {
      const globalIndex = lineStartIndex + i;
      const character = lineText[i];
      const activeStyle = relevantStyles.find((styleInfo) => globalIndex >= styleInfo.startIndex && globalIndex < styleInfo.endIndex);
      if (activeStyle) {
        const isStartOfSpan = this.isStartOfStyledSpan(globalIndex, activeStyle, relevantStyles);
        const isEndOfSpan = this.isEndOfStyledSpan(globalIndex, activeStyle, relevantStyles);
        if (isStartOfSpan) {
          const cssString = this.processStyleInfo(activeStyle, finalConfig);
          if (cssString) {
            styledHTML += `<span style="${cssString}">`;
          }
        }
        styledHTML += character;
        if (isEndOfSpan) {
          const cssString = this.processStyleInfo(activeStyle, finalConfig);
          if (cssString) {
            styledHTML += "</span>";
          }
        }
      } else {
        styledHTML += character;
      }
    }
    this.log(`HTML reconstruction complete: "${lineText}" \u2192 "${styledHTML}"`);
    return styledHTML;
  }
  /**
  * Get captured styles for a specific element
  *
  * @param elementId - The element ID to look up
  * @returns Array of captured style information, or empty array if none found
  *
  * @example
  * ```typescript
  * const styles = styleService.getElementStyles('my-element');
  * console.log(`Found ${styles.length} styled segments`);
  * ```
  */
  getElementStyles(elementId) {
    return this.capturedStyles.get(elementId) || [];
  }
  /**
  * Check if styles exist for a specific element
  *
  * @param elementId - The element ID to check
  * @returns True if styles are stored for this element
  *
  * @example
  * ```typescript
  * if (styleService.hasElementStyles('my-element')) {
  *     // Process with styling
  * } else {
  *     // Process as plain text
  * }
  * ```
  */
  hasElementStyles(elementId) {
    const styles = this.capturedStyles.get(elementId);
    return styles !== void 0 && styles.length > 0;
  }
  /**
  * Clear captured styles for a specific element
  *
  * @param elementId - The element ID to clear
  * @returns True if styles were cleared, false if none existed
  *
  * @example
  * ```typescript
  * const wasCleared = styleService.clearElementStyles('my-element');
  * console.log(`Styles cleared: ${wasCleared}`);
  * ```
  */
  clearElementStyles(elementId) {
    const existed = this.capturedStyles.has(elementId);
    this.capturedStyles.delete(elementId);
    if (existed) {
      this.log(`Cleared styles for element: ${elementId}`);
    }
    return existed;
  }
  /**
  * Clear all captured styles
  *
  * @example
  * ```typescript
  * styleService.clearAllStyles();
  * console.log('All styles cleared');
  * ```
  */
  clearAllStyles() {
    const count = this.capturedStyles.size;
    this.capturedStyles.clear();
    this.log(`Cleared styles for ${count} elements`);
  }
  /**
  * Get debug summary of the service state
  *
  * @returns Object with debug information
  *
  * @example
  * ```typescript
  * const summary = styleService.getDebugSummary();
  * console.log(`Tracking styles for ${summary.elementCount} elements`);
  * ```
  */
  getDebugSummary() {
    let totalStyleSegments = 0;
    for (const styles of this.capturedStyles.values()) {
      totalStyleSegments += styles.length;
    }
    return { elementCount: this.capturedStyles.size, totalStyleSegments, memoryUsage: `${this.capturedStyles.size} elements`, debugEnabled: this.debugEnabled };
  }
  /**
  * Convert semantic HTML tag to CSS properties
  *
  * @private
  * @param tagName - The HTML tag name to convert
  * @returns Array of CSS property strings
  */
  convertSemanticTagToCSS(tagName) {
    const properties = [];
    switch (tagName.toLowerCase()) {
      case "strong":
      case "b":
        properties.push("font-weight: bold");
        break;
      case "em":
      case "i":
        properties.push("font-style: italic");
        break;
      case "u":
        properties.push("text-decoration: underline");
        break;
      case "s":
        properties.push("text-decoration: line-through");
        break;
      case "small":
        properties.push("font-size: smaller");
        break;
      case "sub":
        properties.push("vertical-align: sub", "font-size: smaller");
        break;
      case "sup":
        properties.push("vertical-align: super", "font-size: smaller");
        break;
      case "code":
      case "kbd":
      case "samp":
      case "var":
        properties.push("font-family: monospace");
        break;
      case "mark":
        properties.push("background-color: yellow", "color: black");
        break;
    }
    return properties;
  }
  /**
  * Process inline styles with Framer variable conversion
  *
  * @private
  * @param inlineStyle - The inline style string to process
  * @param processFramerVariables - Whether to process Framer variables
  * @returns Processed CSS string
  */
  processInlineStyles(inlineStyle, processFramerVariables) {
    let processedStyle = inlineStyle;
    if (processFramerVariables && processedStyle.includes("--framer-text-color:")) {
      const colorMatch = processedStyle.match(/--framer-text-color:\s*([^;]+)/);
      if (colorMatch) {
        const colorValue = colorMatch[1].trim();
        processedStyle = processedStyle.replace(/--framer-text-color:\s*[^;]+;?/g, `color: ${colorValue};`);
      }
    }
    return processedStyle.replace(/;$/, "");
  }
  /**
  * Extract meaningful computed styles
  *
  * @private
  * @param computedStyles - The computed style declaration
  * @param inlineStyle - The inline style string (to avoid duplicates)
  * @param excludeProperties - Properties to exclude from extraction
  * @returns Array of CSS property strings
  */
  extractComputedStyles(computedStyles, inlineStyle, excludeProperties = []) {
    const properties = [];
    const importantTextProperties = ["color", "font-family", "font-size", "font-weight", "font-style", "line-height", "text-decoration", "text-transform", "letter-spacing", "word-spacing", "text-shadow", "background-color"];
    importantTextProperties.forEach((property) => {
      if (excludeProperties.includes(property)) {
        return;
      }
      if (inlineStyle.includes(`${property}:`)) {
        return;
      }
      const computedValue = computedStyles.getPropertyValue(property);
      if (this.shouldIncludeComputedStyle(property, computedValue)) {
        properties.push(`${property}: ${computedValue}`);
      }
    });
    return properties;
  }
  /**
  * Determine if a computed style should be included
  *
  * @private
  * @param property - The CSS property name
  * @param value - The computed value
  * @returns True if the style should be included
  */
  shouldIncludeComputedStyle(property, value) {
    if (!value)
      return false;
    const defaultValues = ["normal", "none", "inherit", "initial", "auto"];
    if (defaultValues.includes(value))
      return false;
    if (property === "font-family") {
      const isSystemFont = value.toLowerCase().includes("system-ui") || value.toLowerCase().includes("-apple-system") || value.toLowerCase().includes("sans-serif") || value.toLowerCase().includes("serif");
      return !isSystemFont || value.toLowerCase().includes("satoshi");
    }
    if (property === "font-style") {
      return value === "italic";
    }
    if (property === "font-weight") {
      return value !== "normal" && value !== "400";
    }
    return true;
  }
  /**
  * Check if a character position is the start of a styled span
  *
  * @private
  * @param globalIndex - Character position in original text
  * @param activeStyle - The active style for this position
  * @param relevantStyles - All styles relevant to this text segment
  * @returns True if this is the start of a span
  */
  isStartOfStyledSpan(globalIndex, activeStyle, relevantStyles) {
    if (globalIndex === activeStyle.startIndex) {
      return true;
    }
    const previousHasActiveStyle = relevantStyles.find((styleInfo) => globalIndex - 1 >= styleInfo.startIndex && globalIndex - 1 < styleInfo.endIndex);
    return !previousHasActiveStyle;
  }
  /**
  * Check if a character position is the end of a styled span
  *
  * @private
  * @param globalIndex - Character position in original text
  * @param activeStyle - The active style for this position
  * @param relevantStyles - All styles relevant to this text segment
  * @returns True if this is the end of a span
  */
  isEndOfStyledSpan(globalIndex, activeStyle, relevantStyles) {
    if (globalIndex === activeStyle.endIndex - 1) {
      return true;
    }
    const nextHasActiveStyle = relevantStyles.find((styleInfo) => globalIndex + 1 >= styleInfo.startIndex && globalIndex + 1 < styleInfo.endIndex);
    return !nextHasActiveStyle;
  }
  /**
  * Internal logging method
  *
  * @private
  * @param message - The message to log
  * @param data - Additional data to log
  * @param level - Log level (info, warn, error)
  */
  log(message, data, level = "info") {
    if (!this.debugEnabled)
      return;
    const timestamp = (/* @__PURE__ */ new Date()).toISOString();
    const prefix = `\u{1F3A8} [StylePreservationService]`;
    switch (level) {
      case "warn":
        console.warn(`${prefix} \u26A0\uFE0F ${message}`, data || "");
        break;
      case "error":
        console.error(`${prefix} \u274C ${message}`, data || "");
        break;
      default:
        console.log(`${prefix} ${message}`, data || "");
        break;
    }
  }
  /**
  * Reset singleton instance (for testing)
  *
  * @internal
  */
  static resetInstance() {
    _StylePreservationService.instance = null;
  }
  /**
  * Private constructor for singleton pattern
  */
  constructor() {
    _define_property10(this, "capturedStyles", /* @__PURE__ */ new Map());
    _define_property10(this, "defaultConfig", DEFAULT_STYLE_CONFIG);
    _define_property10(this, "debugEnabled", false);
    this.log("StylePreservationService initialized");
  }
};
_define_property10(StylePreservationService, "instance", null);

// http-url:https://framerusercontent.com/modules/3buwbdDXCDdnPKLzF3YB/HCPswPZ48GtlKW5ZHIG1/HTMLParsingService.js
function _define_property11(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var HTMLParsingService = class _HTMLParsingService {
  /**
  * Get singleton instance of HTMLParsingService
  *
  * @returns {HTMLParsingService} Singleton instance
  *
  * @example
  * ```typescript
  * const htmlService = HTMLParsingService.getInstance();
  * ```
  */
  static getInstance() {
    if (!_HTMLParsingService.instance) {
      _HTMLParsingService.instance = new _HTMLParsingService();
    }
    return _HTMLParsingService.instance;
  }
  /**
  * Internal logging method with optional debug control
  *
  * @param message - Message to log
  * @param config - Optional config to check debug status
  */
  log(message, config) {
    const debugEnabled = config?.debugEnabled ?? this.defaultConfig.debugEnabled;
    if (debugEnabled) {
      console.log(`\u{1F50D} [HTMLParsingService] ${message}`);
    }
  }
  /**
  * Detect line breaks and return HTML content with preserved styling for each line
  *
  * @param element - HTML element to analyze for line breaks
  * @param config - Optional configuration to override defaults
  * @returns {HTMLLineDetectionResult} Result containing detected lines and metadata
  *
  * @description
  * Uses captured style information to reconstruct styling across line boundaries.
  * Implements a sophisticated algorithm that:
  * 1. Analyzes text content for natural line breaks
  * 2. Preserves HTML styling across line boundaries
  * 3. Handles complex nested HTML structures
  * 4. Provides fallback mechanisms for edge cases
  *
  * **Algorithm:**
  * 1. **Content Analysis:** Extract plain text and original HTML
  * 2. **Line Detection:** Use DOM measurement to detect natural line breaks
  * 3. **Style Preservation:** Maintain HTML styling across detected boundaries
  * 4. **Result Assembly:** Combine detected lines with preserved styling
  *
  * @example
  * ```typescript
  * const result = htmlService.detectTextLinesWithHTML(textElement);
  * if (result.success) {
  *     console.log(`Detected ${result.lineCount} lines`);
  *     result.lines.forEach(line => console.log(line));
  * }
  * ```
  */
  detectTextLinesWithHTML(element, config) {
    const finalConfig = { ...this.defaultConfig, ...config };
    const startTime = Date.now();
    try {
      const originalHTML = element.innerHTML;
      const plainText = element.textContent || "";
      this.log(`Analyzing element with ${plainText.length} characters`, finalConfig);
      if (!plainText.trim()) {
        return { lines: [originalHTML], success: true, lineCount: 1, originalText: plainText, htmlPreserved: true };
      }
      const hasHTMLTags = originalHTML.includes("<span") || originalHTML.includes("<em>") || originalHTML.includes("<strong>");
      const hasInlineStyles = originalHTML.includes("style=") || originalHTML.includes("color:");
      const hasStyledChildren = element.children.length > 0;
      const hasHTMLStyling = hasHTMLTags || hasInlineStyles || hasStyledChildren;
      if (!hasHTMLStyling) {
        this.log("No HTML styling detected, using plain text analysis", finalConfig);
        return this.detectPlainTextLines(element, plainText, finalConfig);
      }
      this.log("HTML styling detected, using advanced analysis", finalConfig);
      return this.detectStyledHTMLLines(element, originalHTML, plainText, finalConfig);
    } catch (error) {
      this.log(`Error in HTML line detection: ${error}`, finalConfig);
      return { lines: [element.innerHTML], success: false, lineCount: 1, originalText: element.textContent || "", htmlPreserved: false, error: error instanceof Error ? error.message : "Unknown error" };
    }
  }
  /**
  * Detect lines in plain text content without HTML complexity
  *
  * @param element - HTML element to analyze
  * @param plainText - Plain text content
  * @param config - Configuration options
  * @returns {HTMLLineDetectionResult} Detection result
  */
  detectPlainTextLines(element, plainText, config) {
    const words = plainText.split(/\s+/).filter((word) => word.length > 0);
    if (words.length === 0) {
      return { lines: [plainText], success: true, lineCount: 1, originalText: plainText, htmlPreserved: false };
    }
    const lineBreakIndices = this.detectLineBreakIndices(element, words, config);
    if (lineBreakIndices.length === 0) {
      return { lines: [plainText], success: true, lineCount: 1, originalText: plainText, htmlPreserved: false };
    }
    const lines = [];
    let lastBreak = 0;
    for (let i = 0; i <= lineBreakIndices.length; i++) {
      const isLastLine = i === lineBreakIndices.length;
      const wordEndIndex = isLastLine ? words.length : lineBreakIndices[i];
      const lineWords = words.slice(lastBreak, wordEndIndex);
      if (lineWords.length > 0) {
        lines.push(lineWords.join(" "));
      }
      lastBreak = wordEndIndex;
    }
    return { lines: lines.length > 0 ? lines : [plainText], success: true, lineCount: lines.length || 1, originalText: plainText, htmlPreserved: false };
  }
  /**
  * Detect lines in HTML content with style preservation
  *
  * @param element - HTML element to analyze
  * @param originalHTML - Original HTML content
  * @param plainText - Plain text content
  * @param config - Configuration options
  * @returns {HTMLLineDetectionResult} Detection result
  */
  detectStyledHTMLLines(element, originalHTML, plainText, config) {
    this.log("Complex HTML styling detected, preserving as single line", config);
    if (originalHTML.length < 500) {
      return { lines: [originalHTML], success: true, lineCount: 1, originalText: plainText, htmlPreserved: true };
    }
    this.log("Long HTML content detected, falling back to plain text analysis", config);
    return this.detectPlainTextLines(element, plainText, config);
  }
  /**
  * Detect word indices where line breaks occur using DOM measurement
  *
  * @param element - Element to measure
  * @param words - Array of words to test
  * @param config - Configuration options
  * @returns {number[]} Array of word indices where line breaks occur
  */
  detectLineBreakIndices(element, words, config) {
    const lineBreakIndices = [];
    let currentLine = [];
    let lastBottom = -1;
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      const testLine = [...currentLine, word];
      element.innerHTML = testLine.join(" ");
      const currentHeight = element.scrollHeight;
      if (lastBottom !== -1 && currentHeight > lastBottom + config.lineTolerance) {
        lineBreakIndices.push(i);
        currentLine = [word];
        element.innerHTML = word;
        lastBottom = element.scrollHeight;
      } else {
        currentLine.push(word);
        lastBottom = currentHeight;
      }
    }
    return lineBreakIndices;
  }
  /**
  * Split HTML content based on word boundary indices while preserving structure
  *
  * @param html - HTML content to split
  * @param lineBreakIndices - Array of word indices where breaks occur
  * @param config - Optional configuration
  * @returns {string[]} Array of HTML strings for each line
  *
  * @description
  * Implements a sophisticated HTML splitting algorithm that preserves styling
  * and structure while respecting natural line break boundaries.
  *
  * **Features:**
  * - Maintains HTML tag integrity across line boundaries
  * - Preserves inline styles and attributes
  * - Handles nested HTML structures correctly
  * - Provides fallback for complex edge cases
  *
  * @example
  * ```typescript
  * const htmlLines = htmlService.splitHTMLByWordIndices(
  *     '<span style="color: red;">Hello world</span>',
  *     [1]  // Break after first word
  * );
  * // Result: ['<span style="color: red;">Hello</span>', '<span style="color: red;">world</span>']
  * ```
  */
  splitHTMLByWordIndices(html, lineBreakIndices, config) {
    const finalConfig = { ...this.defaultConfig, ...config };
    try {
      this.log(`Splitting HTML by ${lineBreakIndices.length} break indices`, finalConfig);
      if (lineBreakIndices.length === 0) {
        return [html];
      }
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = html;
      const plainText = tempDiv.textContent || "";
      const words = plainText.split(/\s+/).filter((w) => w.length > 0);
      if (words.length <= 1) {
        return [html];
      }
      const lineRanges = [];
      let lastBreak = 0;
      for (const breakIndex of lineBreakIndices) {
        lineRanges.push({ start: lastBreak, end: breakIndex });
        lastBreak = breakIndex;
      }
      lineRanges.push({ start: lastBreak, end: words.length });
      const lines = [];
      for (const range of lineRanges) {
        const lineWords = words.slice(range.start, range.end);
        if (lineWords.length > 0) {
          lines.push(lineWords.join(" "));
        }
      }
      if (html.includes("<span") || html.includes("<em>") || html.includes("<strong>")) {
        if (lines.length === 1) {
          this.log("Single line with HTML detected - preserving original", finalConfig);
          return [html];
        }
        if (html.length < 200) {
          this.log("Short HTML content - preserving as single line", finalConfig);
          return [html];
        }
      }
      this.log(`Split HTML into ${lines.length} lines`, finalConfig);
      return lines.length > 0 ? lines : [html];
    } catch (error) {
      this.log(`Error splitting HTML: ${error}`, finalConfig);
      return [html];
    }
  }
  /**
  * Wrap text content into character elements
  *
  * @param element - Element containing text to wrap
  * @param config - Configuration for element creation
  * @returns {HTMLElement[]} Array of character elements
  *
  * @description
  * Creates individual HTML elements for each character in the text content.
  * Optimized for animation performance with proper styling and attributes.
  *
  * **Performance Features:**
  * - Efficient character iteration using Array.from()
  * - Pre-configured styles for animation optimization
  * - Proper data attributes for identification and targeting
  * - Memory-conscious element creation
  *
  * @example
  * ```typescript
  * const charElements = htmlService.wrapCharacters(textElement, {
  *     useSpans: true,
  *     className: 'fame-char',
  *     baseStyles: { display: 'inline-block' }
  * });
  * ```
  */
  wrapCharacters(element, config) {
    const wrapConfig = { useSpans: true, className: "fame-text-char", baseStyles: { display: "inline-block", willChange: "transform, opacity", transformOrigin: "center center" }, dataAttributes: { "fame-split": "character" }, inlineBlock: true, ...config };
    const text = element.textContent || "";
    const chars = Array.from(text);
    const elements = [];
    this.log(`Creating ${chars.length} character elements`);
    element.innerHTML = "";
    chars.forEach((char, index) => {
      const charEl = document.createElement(wrapConfig.useSpans ? "span" : "div");
      charEl.textContent = char;
      charEl.className = wrapConfig.className;
      charEl.setAttribute("data-char-index", index.toString());
      Object.entries(wrapConfig.dataAttributes).forEach(([key, value]) => {
        charEl.setAttribute(`data-${key}`, value);
      });
      Object.entries(wrapConfig.baseStyles).forEach(([property, value]) => {
        charEl.style.setProperty(property, value);
      });
      if (/\s/.test(char)) {
        charEl.style.whiteSpace = "pre";
      }
      element.appendChild(charEl);
      elements.push(charEl);
    });
    this.log(`\u2705 Created ${elements.length} character elements`);
    return elements;
  }
  /**
  * Wrap text content into word elements
  *
  * @param element - Element containing text to wrap
  * @param config - Configuration for element creation
  * @returns {HTMLElement[]} Array of word elements
  *
  * @description
  * Creates individual HTML elements for each word in the text content.
  * Handles whitespace preservation and provides proper styling for animations.
  *
  * **Features:**
  * - Smart word boundary detection with whitespace preservation
  * - Optimized styling for transform animations
  * - Proper data attributes for targeting and identification
  * - Performance-conscious DOM manipulation
  *
  * @example
  * ```typescript
  * const wordElements = htmlService.wrapWords(textElement, {
  *     useSpans: true,
  *     className: 'fame-word',
  *     inlineBlock: true
  * });
  * ```
  */
  wrapWords(element, config) {
    const wrapConfig = { useSpans: true, className: "fame-text-word", baseStyles: { display: "inline-block", willChange: "transform, opacity", transformOrigin: "center center" }, dataAttributes: { "fame-split": "word" }, inlineBlock: true, ...config };
    const text = element.textContent || "";
    const words = text.split(/(\s+)/);
    const elements = [];
    this.log(`Creating ${words.length} word elements`);
    element.innerHTML = "";
    words.forEach((word, index) => {
      if (!word)
        return;
      const wordEl = document.createElement(wrapConfig.useSpans ? "span" : "div");
      wordEl.textContent = word;
      wordEl.className = wrapConfig.className;
      wordEl.setAttribute("data-word-index", index.toString());
      Object.entries(wrapConfig.dataAttributes).forEach(([key, value]) => {
        wordEl.setAttribute(`data-${key}`, value);
      });
      Object.entries(wrapConfig.baseStyles).forEach(([property, value]) => {
        wordEl.style.setProperty(property, value);
      });
      if (/^\s+$/.test(word)) {
        wordEl.style.whiteSpace = "pre";
      }
      element.appendChild(wordEl);
      elements.push(wordEl);
    });
    this.log(`\u2705 Created ${elements.length} word elements`);
    return elements;
  }
  /**
  * Wrap text content directly into line containers
  *
  * @param element - Element containing text to wrap
  * @param config - Configuration for element creation
  * @returns {HTMLElement[]} Array of line elements with preserved HTML styling
  *
  * @description
  * Creates line containers while preserving HTML styling including spans.
  * This is optimized for pure LINES split type operations.
  *
  * **Key Features:**
  * - Preserves complex HTML styling across line boundaries
  * - Uses advanced line detection algorithms
  * - Creates optimized line containers for animation
  * - Handles edge cases with graceful fallbacks
  *
  * @example
  * ```typescript
  * const lineElements = htmlService.wrapLines(textElement, {
  *     useSpans: true,
  *     className: 'fame-line'
  * });
  * ```
  */
  wrapLines(element, config) {
    const wrapConfig = { useSpans: true, className: "fame-text-line", baseStyles: { display: "block", width: "100%", transformOrigin: "left top", willChange: "transform", margin: "0", padding: "0", lineHeight: "inherit", fontFamily: "inherit" }, dataAttributes: { "fame-split": "line" }, inlineBlock: false, ...config };
    const originalText = element.textContent || "";
    if (!originalText.trim()) {
      this.log("Empty text content, returning empty array");
      return [];
    }
    if (!element.isConnected) {
      this.log("Element not connected to DOM, cannot create lines", { debugEnabled: true });
      return [];
    }
    const lineDetectionResult = this.detectTextLinesWithHTML(element);
    if (!lineDetectionResult.success) {
      this.log(`Line detection failed: ${lineDetectionResult.error}`, { debugEnabled: true });
      return [];
    }
    const lineElements = [];
    element.innerHTML = "";
    lineDetectionResult.lines.forEach((lineHTML, index) => {
      const lineWrapper = document.createElement(wrapConfig.useSpans ? "span" : "div");
      lineWrapper.className = wrapConfig.className;
      lineWrapper.innerHTML = lineHTML;
      lineWrapper.setAttribute("data-line-index", index.toString());
      Object.entries(wrapConfig.dataAttributes).forEach(([key, value]) => {
        lineWrapper.setAttribute(`data-${key}`, value);
      });
      Object.entries(wrapConfig.baseStyles).forEach(([property, value]) => {
        lineWrapper.style.setProperty(property, value);
      });
      element.appendChild(lineWrapper);
      lineElements.push(lineWrapper);
    });
    this.log(`\u2705 Created ${lineElements.length} line elements`);
    return lineElements;
  }
  /**
  * Group elements into line containers based on Y position
  *
  * @param elements - Array of elements to group into lines
  * @param config - Optional configuration
  * @returns {HTMLElement[]} Array of line wrapper elements for animation
  *
  * @description
  * Groups existing elements into line containers based on their Y position.
  * Returns the LINE WRAPPER elements for animation, not the individual elements.
  *
  * **Algorithm:**
  * 1. **Position Analysis:** Analyze Y positions of all elements
  * 2. **Line Grouping:** Group elements with similar Y positions
  * 3. **Container Creation:** Create line wrapper containers
  * 4. **Element Migration:** Move elements into appropriate containers
  * 5. **Cleanup:** Ensure proper DOM structure and styling
  *
  * **Performance:** O(n) complexity with efficient position-based grouping
  *
  * @example
  * ```typescript
  * const lineWrappers = htmlService.groupIntoLines(characterElements, {
  *     lineTolerance: 2
  * });
  * // Returns line containers, not individual character elements
  * ```
  */
  groupIntoLines(elements, config) {
    const finalConfig = { ...this.defaultConfig, ...config };
    if (elements.length === 0) {
      this.log("No elements to group, returning empty array");
      return [];
    }
    this.log(`Grouping ${elements.length} elements into lines`);
    const lines = [];
    let currentLine = [];
    let lastTop = null;
    for (const el of elements) {
      try {
        const rect = el.getBoundingClientRect();
        const top = Math.round(rect.top);
        if (lastTop === null || Math.abs(top - lastTop) <= finalConfig.lineTolerance) {
          currentLine.push(el);
        } else {
          if (currentLine.length > 0) {
            lines.push(currentLine);
          }
          currentLine = [el];
        }
        lastTop = top;
      } catch (error) {
        this.log(`Error getting element position, skipping: ${error}`, finalConfig);
        continue;
      }
    }
    if (currentLine.length > 0) {
      lines.push(currentLine);
    }
    this.log(`Grouped elements into ${lines.length} lines`);
    const lineWrapperElements = [];
    lines.forEach((lineElements, lineIndex) => {
      try {
        const lineWrapper = this.createLineWrapper(lineIndex, finalConfig);
        const parent = this.findValidParent(lineElements);
        if (parent) {
          parent.insertBefore(lineWrapper, lineElements[0]);
          lineElements.forEach((el) => {
            try {
              if (el.parentNode && document.contains(el)) {
                el.setAttribute("data-line-index", lineIndex.toString());
                lineWrapper.appendChild(el);
              }
            } catch (moveError) {
              this.log(`Error moving element to line wrapper: ${moveError}`, finalConfig);
            }
          });
          lineWrapperElements.push(lineWrapper);
        } else {
          const fallbackWrapper = this.createFallbackLineWrapper(lineIndex, lineElements, finalConfig);
          lineWrapperElements.push(fallbackWrapper);
        }
      } catch (error) {
        this.log(`Error creating line wrapper: ${error}`, finalConfig);
        const fallbackWrapper = this.createFallbackLineWrapper(lineIndex, lineElements, finalConfig);
        lineWrapperElements.push(fallbackWrapper);
      }
    });
    this.log(`\u2705 Created ${lineWrapperElements.length} line wrapper elements`);
    return lineWrapperElements;
  }
  /**
  * Create a line wrapper element with proper styling
  *
  * @param lineIndex - Index of the line
  * @param config - Configuration options
  * @returns {HTMLElement} Configured line wrapper element
  */
  createLineWrapper(lineIndex, config) {
    const lineWrapper = document.createElement("div");
    lineWrapper.className = "fame-text-line";
    lineWrapper.setAttribute("data-line-index", lineIndex.toString());
    lineWrapper.setAttribute("data-fame-split", "line");
    lineWrapper.style.display = "inline-block";
    lineWrapper.style.width = "100%";
    lineWrapper.style.transformOrigin = "left top";
    lineWrapper.style.willChange = "transform";
    lineWrapper.style.position = "relative";
    lineWrapper.style.zIndex = "1";
    return lineWrapper;
  }
  /**
  * Find valid parent element for line wrapper insertion
  *
  * @param lineElements - Elements that need a parent
  * @returns {Node | null} Valid parent node or null
  */
  findValidParent(lineElements) {
    for (const el of lineElements) {
      if (el.parentNode && document.contains(el)) {
        return el.parentNode;
      }
    }
    return null;
  }
  /**
  * Create fallback line wrapper for error cases
  *
  * @param lineIndex - Index of the line
  * @param lineElements - Elements to include in wrapper
  * @param config - Configuration options
  * @returns {HTMLElement} Fallback line wrapper
  */
  createFallbackLineWrapper(lineIndex, lineElements, config) {
    const fallbackWrapper = this.createLineWrapper(lineIndex, config);
    lineElements.forEach((el) => {
      try {
        fallbackWrapper.appendChild(el);
      } catch (e) {
        this.log(`Error in fallback wrapper: ${e}`, config);
      }
    });
    return fallbackWrapper;
  }
  /**
  * Cleanup method to reset service state
  *
  * @description
  * Cleans up any internal state and prepares the service for fresh operations.
  * Called automatically when needed or can be called manually for memory management.
  *
  * @example
  * ```typescript
  * htmlService.cleanup();
  * ```
  */
  cleanup() {
    this.log("HTMLParsingService cleanup completed");
  }
  /**
  * Get debug information about the service state
  *
  * @returns {object} Debug information object
  *
  * @example
  * ```typescript
  * const debugInfo = htmlService.getDebugInfo();
  * console.log(debugInfo);
  * ```
  */
  getDebugInfo() {
    return { serviceInitialized: _HTMLParsingService.instance !== null, defaultConfig: { ...this.defaultConfig }, memoryUsage: `${Math.round(performance.memory?.usedJSHeapSize / 1024 / 1024 || 0)}MB` };
  }
  /**
  * Reset singleton instance (primarily for testing)
  *
  * @description
  * Resets the singleton instance to null, forcing recreation on next getInstance() call.
  * Primarily used for testing scenarios or when complete service reset is needed.
  *
  * ⚠️ **Warning:** This should rarely be used in production code.
  *
  * @example
  * ```typescript
  * HTMLParsingService.resetInstance(); // Force new instance
  * const freshService = HTMLParsingService.getInstance();
  * ```
  */
  static resetInstance() {
    if (_HTMLParsingService.instance) {
      _HTMLParsingService.instance.cleanup();
      _HTMLParsingService.instance = null;
    }
  }
  /** Private constructor to enforce singleton pattern */
  constructor() {
    _define_property11(this, "defaultConfig", { useSpans: true, lineTolerance: 5, preserveWhitespace: true, debugEnabled: false, maxProcessingTime: 5e3 });
    this.log("HTMLParsingService initialized");
  }
};
_define_property11(HTMLParsingService, "instance", null);

// http-url:https://framerusercontent.com/modules/sSm16avxhjUqrDhDO37p/4AfLX96jB4JUz86IFREQ/PositionMappingService.js
function _define_property12(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var PositionFallbackStrategy;
(function(PositionFallbackStrategy2) {
  PositionFallbackStrategy2["SPLIT_POSITION"] = "splitPosition";
  PositionFallbackStrategy2["LAST_KNOWN"] = "lastKnown";
  PositionFallbackStrategy2["INTERPOLATED"] = "interpolated";
})(PositionFallbackStrategy || (PositionFallbackStrategy = {}));
var PositionMappingService = class _PositionMappingService {
  /**
  * Get singleton instance of PositionMappingService
  *
  * @returns {PositionMappingService} Singleton instance
  *
  * @example
  * ```typescript
  * const service = PositionMappingService.getInstance();
  * ```
  */
  static getInstance() {
    if (!_PositionMappingService.instance) {
      _PositionMappingService.instance = new _PositionMappingService();
    }
    return _PositionMappingService.instance;
  }
  /**
  * Internal logging method with configurable debug control
  *
  * @param message - Message to log
  * @param config - Optional config to check debug status
  */
  log(message, config) {
    const debugEnabled = config?.debugEnabled ?? this.defaultConfig.debugEnabled;
    if (debugEnabled) {
      console.log(`\u{1F5FA}\uFE0F [PositionMappingService] ${message}`);
    }
  }
  /**
  * Build accurate character position mapping between original and split text
  *
  * @param originalText - The original complete text content
  * @param splitLines - Array of line text content after splitting
  * @param config - Optional configuration to override defaults
  * @returns {PositionMappingResult} Detailed result with position map and metadata
  *
  * @description
  * Creates a character-by-character mapping between split text positions and original
  * text positions. This solves the cumulative offset error by providing exact position
  * correspondence, essential for accurate styling preservation.
  *
  * **Algorithm Details:**
  * 1. **Text Reconstruction:** Concatenate split lines to create reconstructed text
  * 2. **Exact Match Detection:** Check if original and reconstructed texts are identical
  * 3. **Character Matching:** For each split character, find corresponding original position
  * 4. **Intelligent Search:** Use optimized search with position advancement
  * 5. **Fallback Handling:** Apply configured fallback strategy for unmatched characters
  *
  * **Performance Characteristics:**
  * - **Time Complexity:** O(n×m) worst case, O(n) typical case where n=split length, m=original length
  * - **Space Complexity:** O(n) for position map storage
  * - **Optimization:** Early termination on exact matches, efficient character matching
  *
  * @example
  * ```typescript
  * const result = service.buildCharacterPositionMap(
  *     'Hello <strong>World</strong>!',
  *     ['Hello World!']
  * );
  *
  * console.log(`Mapped ${result.mappedCharacters} characters`);
  * console.log(`Processing time: ${result.processingTime}ms`);
  *
  * // Use position map
  * const originalPos = result.positionMap[splitIndex];
  * ```
  */
  buildCharacterPositionMap(originalText, splitLines, config) {
    const startTime = performance.now();
    const finalConfig = { ...this.defaultConfig, ...config };
    this.log(`Building position map for ${originalText.length} original chars`, finalConfig);
    const reconstructedText = splitLines.join("");
    this.log(`Reconstructed text: ${reconstructedText.length} chars`, finalConfig);
    if (originalText === reconstructedText) {
      const directMap = Array.from({ length: originalText.length }, (_, i) => i);
      const processingTime2 = performance.now() - startTime;
      this.log(`\u2705 Exact match - direct mapping (${originalText.length} chars)`, finalConfig);
      return { positionMap: directMap, originalText, reconstructedText, success: true, mappedCharacters: originalText.length, warnings: 0, processingTime: processingTime2, exactMatch: true };
    }
    const positionMap = [];
    let originalIndex = 0;
    let splitIndex = 0;
    let warnings = 0;
    const maxWarnings = finalConfig.maxWarnings;
    this.log(`Starting character-by-character mapping`, finalConfig);
    while (splitIndex < reconstructedText.length && originalIndex < originalText.length) {
      const splitChar = reconstructedText[splitIndex];
      let foundIndex = -1;
      for (let searchIndex = originalIndex; searchIndex < originalText.length; searchIndex++) {
        if (originalText[searchIndex] === splitChar) {
          foundIndex = searchIndex;
          break;
        }
      }
      if (foundIndex !== -1) {
        positionMap[splitIndex] = foundIndex;
        originalIndex = foundIndex + 1;
        splitIndex++;
      } else {
        const fallbackPosition = this.applyFallbackStrategy(splitIndex, originalIndex, positionMap, finalConfig.fallbackStrategy);
        positionMap[splitIndex] = fallbackPosition;
        if (warnings < maxWarnings) {
          this.log(`\u26A0\uFE0F Character "${splitChar}" not found at split position ${splitIndex}, using fallback: ${fallbackPosition}`, finalConfig);
        }
        warnings++;
        splitIndex++;
      }
    }
    while (splitIndex < reconstructedText.length) {
      const fallbackPosition = this.applyFallbackStrategy(splitIndex, originalIndex, positionMap, finalConfig.fallbackStrategy);
      positionMap[splitIndex] = fallbackPosition;
      splitIndex++;
    }
    const processingTime = performance.now() - startTime;
    if (finalConfig.enableValidation) {
      this.validatePositionMap(positionMap, originalText.length, finalConfig);
    }
    this.log(`\u2705 Position map built: ${positionMap.length} positions, ${warnings} warnings, ${processingTime.toFixed(2)}ms`, finalConfig);
    return { positionMap, originalText, reconstructedText, success: true, mappedCharacters: positionMap.length, warnings, processingTime, exactMatch: false };
  }
  /**
  * Apply fallback strategy for unmatched characters
  *
  * @param splitIndex - Current position in split text
  * @param originalIndex - Current position in original text
  * @param positionMap - Current position map array
  * @param strategy - Fallback strategy to apply
  * @returns {number} Fallback position to use
  */
  applyFallbackStrategy(splitIndex, originalIndex, positionMap, strategy) {
    switch (strategy) {
      case "splitPosition":
        return splitIndex;
      case "lastKnown":
        return splitIndex > 0 ? positionMap[splitIndex - 1] : originalIndex;
      case "interpolated":
        return splitIndex;
      default:
        return splitIndex;
    }
  }
  /**
  * Validate position map for correctness
  *
  * @param positionMap - Position map to validate
  * @param originalTextLength - Length of original text
  * @param config - Configuration for validation
  */
  validatePositionMap(positionMap, originalTextLength, config) {
    for (let i = 0; i < positionMap.length; i++) {
      const position = positionMap[i];
      if (position < 0 || position >= originalTextLength) {
        this.log(`\u26A0\uFE0F Invalid position at index ${i}: ${position} (should be 0-${originalTextLength - 1})`, config);
      }
    }
  }
  /**
  * Store position map for an element
  *
  * @param elementId - Unique identifier for the element
  * @param positionMap - Position map array to store
  * @returns {boolean} Whether storage was successful
  *
  * @description
  * Stores the position map for future retrieval. Overwrites any existing
  * position map for the same element ID.
  *
  * @example
  * ```typescript
  * const success = service.storePositionMap('myElement', [0, 1, 2, 5, 6, 7]);
  * console.log(`Storage ${success ? 'successful' : 'failed'}`);
  * ```
  */
  storePositionMap(elementId, positionMap) {
    try {
      this.positionMaps.set(elementId, [...positionMap]);
      this.log(`Stored position map for element: ${elementId} (${positionMap.length} positions)`);
      return true;
    } catch (error) {
      this.log(`\u274C Failed to store position map for element: ${elementId}`, { debugEnabled: true });
      return false;
    }
  }
  /**
  * Retrieve position map for an element
  *
  * @param elementId - Unique identifier for the element
  * @returns {number[]} Position map array, or empty array if not found
  *
  * @description
  * Retrieves the stored position map for the specified element.
  * Returns empty array if no position map exists for the element.
  *
  * @example
  * ```typescript
  * const positionMap = service.getPositionMap('myElement');
  * if (positionMap.length > 0) {
  *     const originalPos = positionMap[splitCharIndex];
  * }
  * ```
  */
  getPositionMap(elementId) {
    const positionMap = this.positionMaps.get(elementId);
    if (!positionMap) {
      this.log(`No position map found for element: ${elementId}`, { debugEnabled: true });
      return [];
    }
    return [...positionMap];
  }
  /**
     * Check if position map exists for an element
     *
     * @param elementId - Unique identifier for the element
     * @returns {boolean} Whether position map exists
     *
     * @example
     * ```typescript
     * if (service.hasPositionMap('myElement')) {
     *     const map = service.getPositionMap('myElement');
     * }
     * ```
     */
  hasPositionMap(elementId) {
    return this.positionMaps.has(elementId);
  }
  /**
  * Delete position map for an element
  *
  * @param elementId - Unique identifier for the element
  * @returns {boolean} Whether deletion was successful
  *
  * @description
  * Removes the position map for the specified element to free memory.
  * Safe to call even if no position map exists for the element.
  *
  * @example
  * ```typescript
  * const deleted = service.deletePositionMap('myElement');
  * console.log(`Deletion ${deleted ? 'successful' : 'failed'}`);
  * ```
  */
  deletePositionMap(elementId) {
    const existed = this.positionMaps.has(elementId);
    this.positionMaps.delete(elementId);
    if (existed) {
      this.log(`Deleted position map for element: ${elementId}`);
    }
    return existed;
  }
  /**
  * Clear all stored position maps
  *
  * @description
  * Removes all stored position maps to free memory. Useful for cleanup
  * operations and preventing memory leaks.
  *
  * @example
  * ```typescript
  * service.clearAllPositionMaps();
  * console.log('All position maps cleared');
  * ```
  */
  clearAllPositionMaps() {
    const count = this.positionMaps.size;
    this.positionMaps.clear();
    this.log(`Cleared all position maps (${count} maps removed)`);
  }
  /**
  * Get statistics about stored position maps
  *
  * @returns {PositionMappingStats} Statistics about position map storage
  *
  * @description
  * Provides insights into memory usage and storage patterns for monitoring
  * and optimization purposes.
  *
  * @example
  * ```typescript
  * const stats = service.getPositionMappingStats();
  * console.log(`Total maps: ${stats.totalMaps}`);
  * console.log(`Memory usage: ${stats.memoryUsage} bytes`);
  * ```
  */
  getPositionMappingStats() {
    const elementIds = Array.from(this.positionMaps.keys());
    const mapSizes = elementIds.map((id) => this.positionMaps.get(id)?.length || 0);
    const totalMaps = this.positionMaps.size;
    const largestMapSize = Math.max(...mapSizes, 0);
    const averageMapSize = mapSizes.length > 0 ? mapSizes.reduce((sum, size) => sum + size, 0) / mapSizes.length : 0;
    const memoryUsage = mapSizes.reduce((sum, size) => sum + size * 4, 0) + totalMaps * 50;
    return { totalMaps, memoryUsage, largestMapSize, averageMapSize: Math.round(averageMapSize * 100) / 100, elementIds };
  }
  /**
  * Get debug information about the service
  *
  * @returns Object containing debug information
  *
  * @example
  * ```typescript
  * const debug = service.getDebugInfo();
  * console.log('Service status:', debug);
  * ```
  */
  getDebugInfo() {
    return { serviceInitialized: _PositionMappingService.instance !== null, defaultConfig: { ...this.defaultConfig }, stats: this.getPositionMappingStats(), memoryUsage: `${Math.round(performance.memory?.usedJSHeapSize / 1024 / 1024 || 0)}MB` };
  }
  /**
  * Cleanup service and reset singleton instance
  *
  * @description
  * Clears all stored data and resets the singleton instance.
  * Useful for testing and memory cleanup.
  *
  * @example
  * ```typescript
  * PositionMappingService.resetInstance();
  * ```
  */
  static resetInstance() {
    if (_PositionMappingService.instance) {
      _PositionMappingService.instance.clearAllPositionMaps();
    }
    _PositionMappingService.instance = null;
  }
  /** Private constructor to enforce singleton pattern */
  constructor() {
    _define_property12(this, "positionMaps", /* @__PURE__ */ new Map());
    _define_property12(this, "defaultConfig", { debugEnabled: false, maxWarnings: 10, enableValidation: true, fallbackStrategy: "splitPosition" });
    this.log("PositionMappingService initialized");
  }
};
_define_property12(PositionMappingService, "instance", null);

// http-url:https://framerusercontent.com/modules/pfaHTpsUxJ3EpxEQdNPK/lhljKxOrWmFQ723lJkCO/ReactCallbackManager.js
function _define_property13(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var ReactCallbackManager = class _ReactCallbackManager {
  /**
  * Get singleton instance of ReactCallbackManager
  *
  * @returns {ReactCallbackManager} Singleton instance
  *
  * @example
  * ```typescript
  * const callbackManager = ReactCallbackManager.getInstance();
  * ```
  */
  static getInstance() {
    if (!_ReactCallbackManager.instance) {
      _ReactCallbackManager.instance = new _ReactCallbackManager();
    }
    return _ReactCallbackManager.instance;
  }
  /**
  * Internal logging method with configurable debug control
  *
  * @param message - Message to log
  * @param config - Optional config to check debug status
  */
  log(message, config) {
    const debugEnabled = config?.debugEnabled ?? this.defaultConfig.debugEnabled;
    if (debugEnabled) {
      console.log(`\u269B\uFE0F [ReactCallbackManager] ${message}`);
    }
  }
  /**
  * Validate callback function before registration
  *
  * @param callback - Callback function to validate
  * @param config - Configuration for validation
  * @returns Whether callback is valid
  */
  validateCallback(callback, config) {
    if (!config.enableValidation)
      return true;
    if (typeof callback !== "function") {
      this.log("Invalid callback: not a function", config);
      return false;
    }
    if (callback.length !== 2) {
      this.log(`Invalid callback signature: expected 2 parameters, got ${callback.length}`, config);
      return false;
    }
    return true;
  }
  /**
  * Register a callback for split completion notifications
  *
  * @param elementId - Unique identifier for the element
  * @param callback - Function to call when text splitting completes
  * @param config - Optional configuration to override defaults
  * @returns Whether registration was successful
  *
  * @description
  * Registers a callback to be invoked when text splitting operations complete
  * for the specified element. The callback receives the split elements and
  * split type, allowing React components to update their state accordingly.
  *
  * **Memory Safety:**
  * - Overwrites existing callbacks for the same element ID
  * - Validates callback function signature if validation is enabled
  * - Enforces maximum callback limits to prevent memory leaks
  *
  * @example
  * ```typescript
  * const success = callbackManager.registerCallback(
  *     'my-text-element',
  *     (elements, splitType) => {
  *         setAnimatedElements(elements);
  *         setIsReady(true);
  *     }
  * );
  * ```
  */
  registerCallback(elementId, callback, config) {
    const finalConfig = { ...this.defaultConfig, ...config };
    try {
      if (!elementId) {
        this.log("Registration failed: empty element ID", finalConfig);
        return false;
      }
      if (!this.validateCallback(callback, finalConfig)) {
        return false;
      }
      if (this.callbacks.size >= finalConfig.maxCallbacks && !this.callbacks.has(elementId)) {
        this.log(`Registration failed: maximum callbacks reached (${finalConfig.maxCallbacks})`, finalConfig);
        return false;
      }
      this.callbacks.set(elementId, callback);
      this.log(`Registered callback for element: ${elementId} (${this.callbacks.size} total)`, finalConfig);
      return true;
    } catch (error) {
      this.log(`Registration error for element ${elementId}: ${error}`, finalConfig);
      return false;
    }
  }
  /**
  * Unregister a callback for an element
  *
  * @param elementId - Unique identifier for the element
  * @param config - Optional configuration to override defaults
  * @returns Whether unregistration was successful
  *
  * @description
  * Removes the registered callback for the specified element, preventing
  * future notifications. Safe to call even if no callback is registered.
  *
  * @example
  * ```typescript
  * const removed = callbackManager.unregisterCallback('my-text-element');
  * console.log(`Callback ${removed ? 'removed' : 'not found'}`);
  * ```
  */
  unregisterCallback(elementId, config) {
    const finalConfig = { ...this.defaultConfig, ...config };
    const existed = this.callbacks.delete(elementId);
    if (existed) {
      this.log(`Unregistered callback for element: ${elementId} (${this.callbacks.size} remaining)`, finalConfig);
    } else {
      this.log(`No callback found for element: ${elementId}`, finalConfig);
    }
    return existed;
  }
  /**
  * Check if a callback is registered for an element
  *
  * @param elementId - Unique identifier for the element
  * @returns Whether callback is registered
  *
  * @example
  * ```typescript
  * if (callbackManager.hasCallback('my-element')) {
  *     console.log('Callback is registered');
  * }
  * ```
  */
  hasCallback(elementId) {
    return this.callbacks.has(elementId);
  }
  /**
  * Notify registered callback of split completion
  *
  * @param elementId - Unique identifier for the element
  * @param elements - Array of HTML elements created by splitting
  * @param splitType - Type of splitting performed
  * @param config - Optional configuration to override defaults
  * @returns Detailed result of the notification operation
  *
  * @description
  * Invokes the registered callback for the specified element with the split
  * results. Includes comprehensive error handling and performance tracking.
  *
  * **Error Handling:**
  * - Graceful handling of callback execution errors
  * - Timeout protection for long-running callbacks
  * - Comprehensive logging and statistics tracking
  *
  * @example
  * ```typescript
  * const result = callbackManager.notifyCompletion(
  *     'my-element',
  *     splitElements,
  *     TextSplitType.WORDS
  * );
  *
  * if (result.success) {
  *     console.log(`Notified callback in ${result.executionTime}ms`);
  * }
  * ```
  */
  notifyCompletion(elementId, elements, splitType, config) {
    const finalConfig = { ...this.defaultConfig, ...config };
    const startTime = performance.now();
    this.stats.totalNotifications++;
    const result = { success: false, elementId, elementCount: elements.length, splitType, executionTime: 0 };
    try {
      const callback = this.callbacks.get(elementId);
      if (!callback) {
        result.error = "No callback registered for element";
        this.log(`No callback found for element: ${elementId}`, finalConfig);
        this.stats.failedNotifications++;
        return result;
      }
      this.log(`Notifying callback for element: ${elementId} (${elements.length} ${splitType} elements)`, finalConfig);
      callback(elements, splitType);
      result.executionTime = performance.now() - startTime;
      result.success = true;
      this.stats.successfulNotifications++;
      this.stats.totalExecutionTime += result.executionTime;
      this.log(`Callback executed successfully in ${result.executionTime.toFixed(2)}ms`, finalConfig);
    } catch (error) {
      result.executionTime = performance.now() - startTime;
      result.error = error instanceof Error ? error.message : "Unknown error";
      this.stats.failedNotifications++;
      this.log(`Callback execution failed for element ${elementId}: ${result.error}`, finalConfig);
    }
    return result;
  }
  /**
  * Clear all registered callbacks
  *
  * @param config - Optional configuration to override defaults
  * @returns Number of callbacks that were cleared
  *
  * @description
  * Removes all registered callbacks and resets statistics. Useful for cleanup
  * operations and preventing memory leaks.
  *
  * @example
  * ```typescript
  * const cleared = callbackManager.clearAllCallbacks();
  * console.log(`Cleared ${cleared} callbacks`);
  * ```
  */
  clearAllCallbacks(config) {
    const finalConfig = { ...this.defaultConfig, ...config };
    const count = this.callbacks.size;
    this.callbacks.clear();
    this.stats = { totalNotifications: 0, successfulNotifications: 0, failedNotifications: 0, totalExecutionTime: 0 };
    this.log(`Cleared all callbacks (${count} removed)`, finalConfig);
    return count;
  }
  /**
  * Get statistics about callback management
  *
  * @returns Statistics about registered callbacks and notifications
  *
  * @description
  * Provides insights into callback usage patterns, performance metrics,
  * and memory usage for monitoring and optimization purposes.
  *
  * @example
  * ```typescript
  * const stats = callbackManager.getStats();
  * console.log(`${stats.totalCallbacks} callbacks registered`);
  * console.log(`${stats.successfulNotifications}/${stats.totalNotifications} notifications successful`);
  * ```
  */
  getStats() {
    const elementIds = Array.from(this.callbacks.keys());
    const averageExecutionTime = this.stats.totalNotifications > 0 ? this.stats.totalExecutionTime / this.stats.totalNotifications : 0;
    return { totalCallbacks: this.callbacks.size, elementIds, totalNotifications: this.stats.totalNotifications, successfulNotifications: this.stats.successfulNotifications, failedNotifications: this.stats.failedNotifications, averageExecutionTime: Math.round(averageExecutionTime * 100) / 100 };
  }
  /**
  * Get debug information about the service
  *
  * @returns Object containing debug information
  *
  * @example
  * ```typescript
  * const debug = callbackManager.getDebugInfo();
  * console.log('Service status:', debug);
  * ```
  */
  getDebugInfo() {
    return { serviceInitialized: _ReactCallbackManager.instance !== null, defaultConfig: { ...this.defaultConfig }, stats: this.getStats(), memoryUsage: `${Math.round(performance.memory?.usedJSHeapSize / 1024 / 1024 || 0)}MB` };
  }
  /**
  * Cleanup service and reset singleton instance
  *
  * @description
  * Clears all callbacks and resets the singleton instance.
  * Useful for testing and memory cleanup.
  *
  * @example
  * ```typescript
  * ReactCallbackManager.resetInstance();
  * ```
  */
  static resetInstance() {
    if (_ReactCallbackManager.instance) {
      _ReactCallbackManager.instance.clearAllCallbacks();
    }
    _ReactCallbackManager.instance = null;
  }
  /** Private constructor to enforce singleton pattern */
  constructor() {
    _define_property13(this, "callbacks", /* @__PURE__ */ new Map());
    _define_property13(this, "stats", { totalNotifications: 0, successfulNotifications: 0, failedNotifications: 0, totalExecutionTime: 0 });
    _define_property13(this, "defaultConfig", { debugEnabled: false, maxCallbacks: 100, enableValidation: true, callbackTimeout: 0 });
    this.log("ReactCallbackManager initialized");
  }
};
_define_property13(ReactCallbackManager, "instance", null);

// http-url:https://framerusercontent.com/modules/htBerpwBiXgqZVqnPaBB/cFvlBNBamAV86m6sdBUE/TextSplitter.js
function _define_property14(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var TextSplitter = class _TextSplitter {
  /**
  * Get singleton instance
  * 🚨 CACHE BUSTING: Register instance globally for cache management
  */
  static getInstance() {
    if (!_TextSplitter.instance) {
      _TextSplitter.instance = new _TextSplitter();
      _TextSplitter.instance.stylePreservationService = StylePreservationService.getInstance();
      _TextSplitter.instance.responsiveTextManager = ResponsiveTextManager.getInstance();
      _TextSplitter.instance.htmlParsingService = HTMLParsingService.getInstance();
      _TextSplitter.instance.positionMappingService = PositionMappingService.getInstance();
      _TextSplitter.instance.reactCallbackManager = ReactCallbackManager.getInstance();
      if (typeof __dai_window !== "undefined") {
        __dai_window.__FAME_TEXT_SPLITTER_INSTANCE__ = _TextSplitter.instance;
        console.log(`\u{1F504} [TextSplitter] Instance registered globally for cache management`);
      }
    }
    return _TextSplitter.instance;
  }
  /**
  * Register callback for split completion
  * This allows React components to be notified when text splitting completes
  * Delegated to ReactCallbackManager for comprehensive callback management
  */
  registerSplitCompleteCallback(elementId, callback) {
    if (this.reactCallbackManager) {
      this.reactCallbackManager.registerCallback(elementId, callback);
    }
    console.log(`\u{1F504} [TextSplitter] Registered split complete callback for element: ${elementId}`);
  }
  /**
  * Unregister callback for split completion
  * Delegated to ReactCallbackManager for comprehensive callback management
  */
  unregisterSplitCompleteCallback(elementId) {
    if (this.reactCallbackManager) {
      this.reactCallbackManager.unregisterCallback(elementId);
    }
    console.log(`\u{1F504} [TextSplitter] Unregistered split complete callback for element: ${elementId}`);
  }
  /**
  * Notify React component that splitting completed
  * Delegated to ReactCallbackManager for comprehensive callback management
  */
  notifySplitComplete(elementId, elements, splitType) {
    if (this.reactCallbackManager) {
      this.reactCallbackManager.notifyCompletion(elementId, elements, splitType);
    }
  }
  /**
  * Check if responsive handling is needed
  *
  * @deprecated In new architecture, we ALWAYS have lines and ALWAYS need responsive handling
  * This method now always returns true since all text splitting uses line foundation.
  */
  isLineSplitType(splitType) {
    return true;
  }
  /**
  * Split text element using the new "always lines foundation" architecture
  *
  * @architecture Always Lines Foundation
  * 1. Always create line foundation (fame-line-mask + fame-text-line)
  * 2. maskLines only controls overflow CSS (hidden/visible)
  * 3. Create animation targets based on animateBy within line structure
  * 4. Assign refs to the animated elements
  */
  async splitText(element, config) {
    console.log(`\u{1F3D7}\uFE0F [TextSplitter] splitText() called with:`, { element: element ? "present" : "null", elementId: element?.getAttribute("data-fame-element-id") || element?.id || "no-id", textContent: element?.textContent?.slice(0, 50) + "...", configEnabled: config?.enabled, animateBy: config?.animateBy, maskLines: config?.maskLines });
    if (!element || !config.enabled) {
      console.log(`\u{1F3D7}\uFE0F [TextSplitter] Early return: element=${!!element}, enabled=${config?.enabled}`);
      return this.createFailureResult(element, "Invalid input or disabled");
    }
    try {
      const isCanvas = EnvironmentDetector.isCanvas();
      console.log(`\u{1F3A8} [TextSplitter] Environment check: isCanvas=${isCanvas}`);
      if (isCanvas) {
        console.log("\u{1F3A8} [TextSplitter] Skipping text splitting in Canvas mode");
        return this.createSkippedResult(element, "Skipped in Canvas mode");
      }
    } catch (error) {
      console.log("\u{1F3A8} [TextSplitter] Environment detection failed, assuming production mode:", error);
    }
    console.log(`\u{1F3A8} [TextSplitter] Environment check passed, proceeding with text splitting`);
    const elementId = this.getElementId(element);
    if (this.stylePreservationService) {
      const styleResult = this.stylePreservationService.captureElementStyles(element, elementId);
      console.log(`\u{1F3A8} [Debug] Captured ${styleResult.styleInfos.length} style infos for element ID: ${elementId}`);
    }
    if (!this.originalHTML.has(elementId)) {
      this.originalHTML.set(elementId, element.innerHTML);
    }
    const originalText = element.textContent || "";
    if (!originalText.trim()) {
      return this.createFailureResult(element, "No text content");
    }
    element.innerHTML = originalText;
    try {
      console.log("\u{1F3D7}\uFE0F [TextSplitter] Creating line foundation structure");
      const lineFoundation = this.createLineFoundation(element, config);
      this.applyOverflowStyling(lineFoundation, config.maskLines);
      if (config.animateBy === "characters" || config.animateBy === "words") {
        console.log("\u{1F50D} [TextSplitter] Building character position mapping for accurate styling");
        const splitLineTexts = [];
        lineFoundation.forEach((maskContainer) => {
          const textLineElement = maskContainer.querySelector(".fame-text-line");
          if (textLineElement) {
            splitLineTexts.push(textLineElement.textContent || "");
          }
        });
        if (this.positionMappingService) {
          const result = this.positionMappingService.buildCharacterPositionMap(originalText, splitLineTexts, { debugEnabled: false });
          if (result.success) {
            this.positionMappingService.storePositionMap(elementId, result.positionMap);
            console.log(`\u{1F50D} [TextSplitter] \u2705 Character position map built and stored for element: ${elementId} (${result.mappedCharacters} chars, ${result.processingTime.toFixed(2)}ms)`);
          }
        } else {
          console.warn("[TextSplitter] PositionMappingService not available for position mapping");
        }
      }
      let animatedElements;
      let effectiveSplitType;
      switch (config.animateBy) {
        case "lines":
          console.log("\u{1F3AF} [TextSplitter] Animation target: text lines (inside mask containers)");
          animatedElements = lineFoundation.map((maskContainer) => {
            const textLine = maskContainer.querySelector(".fame-text-line");
            if (!textLine) {
              console.warn("\u{1F3AF} [TextSplitter] No .fame-text-line found in mask container");
              return maskContainer;
            }
            return textLine;
          });
          effectiveSplitType = TextSplitType.LINES;
          break;
        case "characters":
          console.log("\u{1F3AF} [TextSplitter] Animation target: characters within lines");
          animatedElements = this.createCharactersInLineFoundation(lineFoundation, config, elementId);
          effectiveSplitType = TextSplitType.CHARACTERS;
          break;
        case "words":
          console.log("\u{1F3AF} [TextSplitter] Animation target: words within lines");
          animatedElements = this.createWordsInLineFoundation(lineFoundation, config, elementId);
          effectiveSplitType = TextSplitType.WORDS;
          break;
        default:
          throw new Error(`Unsupported animateBy: ${config.animateBy}`);
      }
      if (this.responsiveTextManager && !config._isReSplit) {
        this.responsiveTextManager.registerElement(
          element,
          config,
          async (el, cfg) => {
            console.log(`\u{1F504} [TextSplitter] Simple re-splitting for element: ${this.getElementId(el)}`);
            const originalHTML = this.originalHTML.get(this.getElementId(el));
            if (originalHTML) {
              if (!el.isConnected || !document.contains(el)) {
                console.warn(`\u{1F50D} [TextSplitter] Element ${this.getElementId(el)} disconnected during Framer breakpoint transition, skipping re-split`);
                return;
              }
              el.innerHTML = originalHTML;
              const reSplitConfig = { ...cfg, _isReSplit: true };
              const result = await this.splitText(el, reSplitConfig);
              if (result.success) {
                console.log(`\u{1F504} [TextSplitter] \u2705 Re-split complete: ${result.splitElements.length} fresh elements created`);
                this.assignStableIdsToSplitElements(result.splitElements, result.splitType);
                this.notifySplitComplete(this.getElementId(el), result.splitElements, result.splitType);
                console.log(`\u{1F504} [TextSplitter] React callbacks re-enabled (event listener duplication fixed)`);
              }
            }
          },
          // Split complete callback: notify React components
          (elements, splitType) => {
            this.notifySplitComplete(elementId, elements, splitType);
          }
        );
      }
      console.log("\u{1F4CF} [TextSplitter] Responsive text splitting enabled via ResponsiveTextManager");
      this.assignStableIdsToSplitElements(animatedElements, effectiveSplitType);
      this.notifySplitComplete(elementId, animatedElements, effectiveSplitType);
      return { success: true, splitElements: animatedElements, splitType: effectiveSplitType, error: null, originalText, metadata: { elementCount: animatedElements.length, originalElement: element, containerElement: element, timestamp: Date.now() } };
    } catch (error) {
      console.error("\u{1F3D7}\uFE0F [TextSplitter] Error during text splitting:", error);
      return this.createFailureResult(element, `Splitting failed: ${error}`);
    }
  }
  /**
  * 🏗️ ALWAYS CREATE LINE FOUNDATION
  *
  * Creates the foundation line structure that is always present:
  * <div class="fame-line-mask">
  *   <div class="fame-text-line">Text content</div>
  * </div>
  *
  * This structure is created regardless of animateBy or maskLines settings.
  * The responsive re-splitting logic can always rely on this consistent structure.
  */
  createLineFoundation(element, config) {
    console.log("\u{1F3D7}\uFE0F [TextSplitter] Creating consistent line foundation structure");
    if (!element) {
      console.warn("\u{1F3D7}\uFE0F [TextSplitter] Element is null, skipping line foundation creation");
      return [];
    }
    if (!element.isConnected || !document.contains(element)) {
      console.warn("\u{1F3D7}\uFE0F [TextSplitter] Element disconnected during Framer breakpoint transition, skipping line foundation creation");
      return [];
    }
    const computedStyle = getComputedStyle(element);
    const actualFontSize = computedStyle.fontSize;
    console.log(`\u{1F3A8} [TextSplitter] Captured font size from original element: ${actualFontSize}`);
    const forceRecalculation = config._forceLineRecalculation || false;
    const htmlLines = this.detectTextLinesWithHTML(element, forceRecalculation);
    const lineFoundation = [];
    element.innerHTML = "";
    htmlLines.forEach((lineHTML, index) => {
      try {
        if (!element.isConnected || !document.contains(element)) {
          console.warn(`\u{1F3D7}\uFE0F [TextSplitter] Element disconnected during line ${index} creation, stopping foundation creation`);
          return;
        }
        const lineMaskContainer = document.createElement("div");
        lineMaskContainer.className = "fame-line-mask";
        lineMaskContainer.setAttribute("data-line-index", index.toString());
        const textLineElement = document.createElement("span");
        textLineElement.className = "fame-text-line";
        textLineElement.innerHTML = lineHTML;
        textLineElement.setAttribute("data-line-index", index.toString());
        textLineElement.setAttribute("data-fame-split", "line");
        this.applyLineFoundationStyles(lineMaskContainer, textLineElement);
        lineMaskContainer.appendChild(textLineElement);
        if (element.isConnected && document.contains(element)) {
          element.appendChild(lineMaskContainer);
          lineFoundation.push(lineMaskContainer);
        } else {
          console.warn(`\u{1F3D7}\uFE0F [TextSplitter] Element disconnected before appending line ${index}, skipping`);
        }
      } catch (error) {
        console.warn(`\u{1F3D7}\uFE0F [TextSplitter] Error creating line foundation for line ${index}:`, error);
      }
    });
    console.log(`\u{1F3D7}\uFE0F [TextSplitter] Created ${lineFoundation.length} line foundation containers`);
    return lineFoundation;
  }
  /**
  * 🎨 APPLY LINE FOUNDATION STYLES
  *
  * Applies essential CSS for the line foundation structure to work correctly
  */
  applyLineFoundationStyles(maskContainer, textLineElement) {
    maskContainer.style.display = "block";
    maskContainer.style.width = "100%";
    maskContainer.style.position = "relative";
    maskContainer.style.transformOrigin = "left top";
    maskContainer.style.willChange = "transform";
    maskContainer.style.margin = "0";
    maskContainer.style.padding = "0";
    textLineElement.style.display = "block";
    textLineElement.style.width = "100%";
    textLineElement.style.lineHeight = "inherit";
    textLineElement.style.fontFamily = "inherit";
    textLineElement.style.margin = "0";
    textLineElement.style.padding = "0";
    textLineElement.style.willChange = "transform, opacity";
    textLineElement.style.transformOrigin = "center center";
  }
  /**
  * 🎭 APPLY OVERFLOW STYLING
  *
  * Controls overflow CSS based on maskLines setting.
  * This is the ONLY difference maskLines makes - just CSS overflow control.
  */
  applyOverflowStyling(lineFoundation, maskLines) {
    const overflowValue = maskLines ? "hidden" : "visible";
    console.log(`\u{1F3AD} [TextSplitter] Applying overflow: ${overflowValue} to ${lineFoundation.length} mask containers`);
    lineFoundation.forEach((maskContainer) => {
      maskContainer.style.overflow = overflowValue;
      if (maskLines) {
        maskContainer.style.height = "auto";
      }
    });
  }
  /**
  * 🔤 CREATE CHARACTERS IN LINE FOUNDATION
  *
  * Creates character elements within the existing line foundation structure.
  * Returns the character elements (which become the animated elements).
  *
  * ✅ SIMPLE STYLE PRESERVATION: Applies captured styles directly to character elements
  * to avoid nested spans that cause animation timing conflicts.
  */
  createCharactersInLineFoundation(lineFoundation, config, originalElementId) {
    const allCharacterElements = [];
    console.log(`\u{1F524} [TextSplitter] Creating characters within ${lineFoundation.length} line containers`);
    const originalElement = document.querySelector(`[data-fame-element-id="${originalElementId}"]`);
    let actualFontSize = "16px";
    if (originalElement) {
      const computedStyle = getComputedStyle(originalElement);
      actualFontSize = computedStyle.fontSize;
      console.log(`\u{1F3A8} [TextSplitter] Captured font size for characters: ${actualFontSize}`);
    } else {
      console.warn(`\u{1F3A8} [TextSplitter] Could not find original element for font size capture, using fallback: ${actualFontSize}`);
    }
    lineFoundation.forEach((maskContainer, lineIndex) => {
      const textLineElement = maskContainer.querySelector(".fame-text-line");
      if (!textLineElement) {
        console.warn(`\u{1F524} [TextSplitter] No text line found in mask container ${lineIndex}`);
        return;
      }
      const lineText = textLineElement.textContent || "";
      if (!lineText.trim())
        return;
      const capturedStyles = this.stylePreservationService ? this.stylePreservationService.getElementStyles(originalElementId) : [];
      const positionMap = this.positionMappingService ? this.positionMappingService.getPositionMap(originalElementId) : [];
      if (positionMap.length === 0) {
        console.warn(`\u{1F50D} [TextSplitter] No position map found for element: ${originalElementId}`);
      }
      let splitTextOffset = 0;
      for (let i = 0; i < lineIndex; i++) {
        const prevMask = lineFoundation[i];
        const prevTextLine = prevMask.querySelector(".fame-text-line");
        if (prevTextLine) {
          splitTextOffset += (prevTextLine.textContent || "").length;
        }
      }
      textLineElement.innerHTML = "";
      const characters = Array.from(lineText);
      characters.forEach((char, charIndex) => {
        const charElement = document.createElement(config.wrapInSpans !== false ? "span" : "div");
        charElement.textContent = char;
        charElement.className = "fame-text-char";
        charElement.setAttribute("data-char-index", charIndex.toString());
        charElement.setAttribute("data-line-index", lineIndex.toString());
        charElement.setAttribute("data-fame-split", "character");
        charElement.style.display = "inline-block";
        charElement.style.willChange = "transform, opacity";
        charElement.style.transformOrigin = "center center";
        charElement.style.fontSize = actualFontSize;
        if (/\s/.test(char)) {
          charElement.style.whiteSpace = "pre";
        }
        const splitPosition = splitTextOffset + charIndex;
        const originalPosition = positionMap[splitPosition] !== void 0 ? positionMap[splitPosition] : splitPosition;
        const applicableStyle = capturedStyles.find((styleInfo) => {
          const isInRange = originalPosition >= styleInfo.startIndex && originalPosition < styleInfo.endIndex;
          return isInRange;
        });
        if (applicableStyle) {
          const comprehensiveStyles = this.stylePreservationService ? this.stylePreservationService.processStyleInfo(applicableStyle) : "";
          if (comprehensiveStyles) {
            const existingStyle = charElement.getAttribute("style") || "";
            const combinedStyle = existingStyle ? `${existingStyle}; ${comprehensiveStyles}` : comprehensiveStyles;
            charElement.setAttribute("style", combinedStyle);
          }
        }
        textLineElement.appendChild(charElement);
        allCharacterElements.push(charElement);
      });
    });
    console.log(`\u{1F524} [TextSplitter] \u2705 Created ${allCharacterElements.length} character elements`);
    return allCharacterElements;
  }
  /**
  * 🔤 CREATE WORDS IN LINE FOUNDATION
  *
  * Creates word elements within the existing line foundation structure.
  * Returns the word elements (which become the animated elements).
  *
  * ✅ SIMPLE STYLE PRESERVATION: Applies captured styles directly to word elements
  * to avoid nested spans that cause animation timing conflicts.
  */
  createWordsInLineFoundation(lineFoundation, config, originalElementId) {
    const allWordElements = [];
    console.log(`\u{1F524} [TextSplitter] Creating words within ${lineFoundation.length} line containers`);
    const originalElement = document.querySelector(`[data-fame-element-id="${originalElementId}"]`);
    let actualFontSize = "16px";
    if (originalElement) {
      const computedStyle = getComputedStyle(originalElement);
      actualFontSize = computedStyle.fontSize;
      console.log(`\u{1F3A8} [TextSplitter] Captured font size for words: ${actualFontSize}`);
    } else {
      console.warn(`\u{1F3A8} [TextSplitter] Could not find original element for font size capture, using fallback: ${actualFontSize}`);
    }
    lineFoundation.forEach((maskContainer, lineIndex) => {
      const textLineElement = maskContainer.querySelector(".fame-text-line");
      if (!textLineElement) {
        console.warn(`\u{1F524} [TextSplitter] No text line found in mask container ${lineIndex}`);
        return;
      }
      const lineText = textLineElement.textContent || "";
      if (!lineText.trim())
        return;
      const capturedStyles = this.stylePreservationService ? this.stylePreservationService.getElementStyles(originalElementId) : [];
      const positionMap = this.positionMappingService ? this.positionMappingService.getPositionMap(originalElementId) : [];
      if (positionMap.length === 0) {
        console.warn(`\u{1F50D} [TextSplitter] No position map found for element: ${originalElementId}`);
      }
      let splitTextOffset = 0;
      for (let i = 0; i < lineIndex; i++) {
        const prevMask = lineFoundation[i];
        const prevTextLine = prevMask.querySelector(".fame-text-line");
        if (prevTextLine) {
          splitTextOffset += (prevTextLine.textContent || "").length;
        }
      }
      textLineElement.innerHTML = "";
      const words = lineText.split(/(\s+)/);
      let currentCharIndex = splitTextOffset;
      words.forEach((word, wordIndex) => {
        if (!word)
          return;
        const wordElement = document.createElement(config.wrapInSpans !== false ? "span" : "div");
        wordElement.textContent = word;
        wordElement.className = "fame-text-word";
        wordElement.setAttribute("data-word-index", wordIndex.toString());
        wordElement.setAttribute("data-line-index", lineIndex.toString());
        wordElement.setAttribute("data-fame-split", "word");
        wordElement.style.display = "inline-block";
        wordElement.style.willChange = "transform, opacity";
        wordElement.style.transformOrigin = "center center";
        wordElement.style.fontSize = actualFontSize;
        if (/^\s+$/.test(word)) {
          wordElement.style.whiteSpace = "pre";
        }
        const wordStartSplitIndex = currentCharIndex;
        const wordEndSplitIndex = currentCharIndex + word.length;
        const wordStartOriginalIndex = positionMap[wordStartSplitIndex] !== void 0 ? positionMap[wordStartSplitIndex] : wordStartSplitIndex;
        const wordEndOriginalIndex = positionMap[wordEndSplitIndex - 1] !== void 0 ? positionMap[wordEndSplitIndex - 1] + 1 : wordEndSplitIndex;
        const applicableStyle = capturedStyles.find((styleInfo) => {
          const wordOverlapsStyle = wordStartOriginalIndex < styleInfo.endIndex && wordEndOriginalIndex > styleInfo.startIndex;
          return wordOverlapsStyle;
        });
        if (applicableStyle) {
          const comprehensiveStyles = this.stylePreservationService ? this.stylePreservationService.processStyleInfo(applicableStyle) : "";
          if (comprehensiveStyles) {
            const existingStyle = wordElement.getAttribute("style") || "";
            const combinedStyle = existingStyle ? `${existingStyle}; ${comprehensiveStyles}` : comprehensiveStyles;
            wordElement.setAttribute("style", combinedStyle);
          }
        }
        currentCharIndex += word.length;
        textLineElement.appendChild(wordElement);
        allWordElements.push(wordElement);
      });
    });
    console.log(`\u{1F524} [TextSplitter] \u2705 Created ${allWordElements.length} word elements`);
    return allWordElements;
  }
  /**
  * Wrap text into character spans - delegated to HTMLParsingService
  */
  wrapCharacters(element, useSpans = true) {
    if (this.htmlParsingService) {
      return this.htmlParsingService.wrapCharacters(element, { useSpans, className: "fame-text-char", dataAttributes: { "fame-split": "character" } });
    }
    console.warn("[TextSplitter] HTMLParsingService not available, using fallback");
    return [];
  }
  /**
  * Wrap text into word spans - delegated to HTMLParsingService
  */
  wrapWords(element, useSpans = true) {
    if (this.htmlParsingService) {
      return this.htmlParsingService.wrapWords(element, { useSpans, className: "fame-text-word", dataAttributes: { "fame-split": "word" } });
    }
    console.warn("[TextSplitter] HTMLParsingService not available, using fallback");
    return [];
  }
  /**
  * Reconstruct styled HTML for a line based on captured style information
  */
  reconstructStyledLineHTML(lineText, lineStartIndex, elementId) {
    if (this.stylePreservationService) {
      return this.stylePreservationService.reconstructStyledHTML(lineText, lineStartIndex, elementId);
    }
    return lineText;
  }
  /**
  * Detect line breaks and return HTML content with preserved styling for each line
  * Delegated to HTMLParsingService for comprehensive HTML analysis
  *
  * 🔥 ENHANCED: Supports forced line recalculation for breakpoint changes
  */
  detectTextLinesWithHTML(element, forceRecalculation = false) {
    if (this.htmlParsingService) {
      const result = this.htmlParsingService.detectTextLinesWithHTML(element, { debugEnabled: forceRecalculation, lineTolerance: forceRecalculation ? 2 : 5, maxProcessingTime: forceRecalculation ? 1e4 : 5e3 });
      if (result.success) {
        if (forceRecalculation) {
          console.log(`\u{1F525} [TextSplitter] FORCED line recalculation: detected ${result.lineCount} lines`);
        }
        return result.lines;
      } else {
        console.warn(`[TextSplitter] HTML line detection failed: ${result.error}`);
        return [element.innerHTML];
      }
    }
    console.warn("[TextSplitter] HTMLParsingService not available, using fallback");
    return [element.innerHTML];
  }
  /**
  * Split HTML content based on word boundary indices while preserving spans and styling
  * Delegated to HTMLParsingService for comprehensive HTML processing
  */
  splitHTMLByWordIndices(html, lineBreakIndices) {
    if (this.htmlParsingService) {
      return this.htmlParsingService.splitHTMLByWordIndices(html, lineBreakIndices, { debugEnabled: false });
    }
    console.warn("[TextSplitter] HTMLParsingService not available, using fallback");
    return [html];
  }
  /**
  * Split text directly into line containers (no word/character sub-splitting)
  * Delegated to HTMLParsingService for comprehensive line creation
  */
  wrapLines(element, useSpans = true) {
    if (this.htmlParsingService) {
      return this.htmlParsingService.wrapLines(element, { useSpans, className: "fame-text-line", dataAttributes: { "fame-split": "line" } });
    }
    console.warn("[TextSplitter] HTMLParsingService not available, using fallback");
    return [];
  }
  /**
  * Group elements into line containers based on Y position
  * Delegated to HTMLParsingService for comprehensive line grouping
  */
  groupIntoLines(elements) {
    if (this.htmlParsingService) {
      return this.htmlParsingService.groupIntoLines(elements, { lineTolerance: 2 });
    }
    console.warn("[TextSplitter] HTMLParsingService not available, using fallback");
    return [];
  }
  /**
  * 🔥 CRITICAL FIX: Assign stable IDs to split elements for dynamic resolution
  *
  * This method ensures all split elements have stable IDs that can be resolved
  * by the DynamicElementResolver even after DOM recreation. This solves the
  * core DOM disconnection issue.
  *
  * 🚀 ENHANCED: Uses position-based IDs for character/word elements to ensure
  * the same element gets the same ID across re-splitting operations.
  *
  * @param splitElements - Array of split elements to assign IDs to
  * @param splitType - Type of split for ID prefix
  */
  assignStableIdsToSplitElements(splitElements, splitType) {
    const parentElement = splitElements[0]?.closest("[data-fame-element-id]");
    const parentId = parentElement?.getAttribute("data-fame-element-id") || "unknown";
    console.log(`\u{1F50D} [TextSplitter] Assigning stable IDs based on parent: ${parentId}`);
    splitElements.forEach((element, index) => {
      let existingId = element.getAttribute("data-fame-element-id");
      if (!existingId) {
        let stableId;
        const splitTypeName = this.getSplitTypePrefix(splitType);
        if (splitType === TextSplitType.CHARACTERS) {
          const lineIndex = element.getAttribute("data-line-index") || "0";
          const charIndex = element.getAttribute("data-char-index") || index.toString();
          stableId = `fame-char-${parentId}-line${lineIndex}-char${charIndex}`;
        } else if (splitType === TextSplitType.WORDS) {
          const lineIndex = element.getAttribute("data-line-index") || "0";
          const wordIndex = element.getAttribute("data-word-index") || index.toString();
          stableId = `fame-word-${parentId}-line${lineIndex}-word${wordIndex}`;
        } else {
          stableId = `fame-line-${parentId}-line${index}`;
        }
        element.setAttribute("data-fame-element-id", stableId);
        console.log(`\u{1F50D} [TextSplitter] Assigned predictable ID: ${stableId} to ${splitTypeName} element ${index}`);
      } else {
        console.log(`\u{1F50D} [TextSplitter] Element ${index} already has stable ID: ${existingId}`);
      }
    });
  }
  /**
  * Get split type prefix for ID generation
  */
  getSplitTypePrefix(splitType) {
    switch (splitType) {
      case TextSplitType.CHARACTERS:
        return "char";
      case TextSplitType.WORDS:
        return "word";
      case TextSplitType.LINES:
        return "line";
      default:
        return "split";
    }
  }
  /**
  * Get unique element ID
  */
  getElementId(element) {
    let id = element.getAttribute("data-fame-element-id") || element.id;
    if (!id) {
      id = `fame-text-${Date.now()}-${Math.floor(Math.random() * 1e3)}`;
      element.setAttribute("data-fame-element-id", id);
    }
    return id;
  }
  /**
  * Create result for Canvas mode (skipped)
  */
  createSkippedResult(element, reason) {
    return { originalText: element.textContent || "", splitElements: [], splitType: TextSplitType.CHARACTERS, success: true, metadata: { elementCount: 0, originalElement: element, containerElement: element, timestamp: Date.now() } };
  }
  /**
  * Create failure result
  */
  createFailureResult(element, error) {
    return { originalText: element.textContent || "", splitElements: [], splitType: TextSplitType.CHARACTERS, success: false, error, metadata: { elementCount: 0, originalElement: element, containerElement: element, timestamp: Date.now() } };
  }
  /**
  * Cleanup split text and restore original
  *
  * @architecture Simplified Cleanup
  * With "always lines foundation" architecture, cleanup is simple:
  * just restore original HTML (automatically removes all line foundation structure)
  */
  cleanupSplitText(element) {
    try {
      const elementId = this.getElementId(element);
      const originalHTML = this.originalHTML.get(elementId);
      if (originalHTML) {
        element.innerHTML = originalHTML;
        this.originalHTML.delete(elementId);
        if (this.stylePreservationService) {
          this.stylePreservationService.clearElementStyles(elementId);
        }
        if (this.positionMappingService) {
          this.positionMappingService.deletePositionMap(elementId);
        }
        if (this.responsiveTextManager) {
          this.responsiveTextManager.unregisterElement(element);
        }
        console.log("\u{1F9F9} [TextSplitter] Cleaned up split text (line foundation automatically removed)");
        return true;
      }
      return false;
    } catch (error) {
      console.error("\u{1F9F9} [TextSplitter] Error cleaning up split text:", error);
      return false;
    }
  }
  /**
  * Cleanup all split text
  *
  * @architecture Simplified Global Cleanup
  * With "always lines foundation" architecture, global cleanup is straightforward:
  * just clear all tracking data and stop observers.
  */
  cleanupAllSplitText() {
    if (this.responsiveTextManager) {
      this.responsiveTextManager.cleanup();
      console.log("\u{1F9F9} [TextSplitter] ResponsiveTextManager cleaned up");
    }
    this.originalHTML.clear();
    if (this.stylePreservationService) {
      this.stylePreservationService.clearAllStyles();
    }
    if (this.reactCallbackManager) {
      this.reactCallbackManager.clearAllCallbacks();
    }
    if (this.positionMappingService) {
      this.positionMappingService.clearAllPositionMaps();
    }
    console.log("\u{1F9F9} [TextSplitter] All split text cleaned up (line foundations automatically removed)");
  }
  /**
  * Get debug summary for troubleshooting
  */
  getDebugSummary() {
    const responsiveDebugSummary = this.responsiveTextManager?.getDebugSummary();
    const callbackStats = this.reactCallbackManager?.getStats();
    return { trackedElements: responsiveDebugSummary?.trackedElements || 0, registeredCallbacks: callbackStats?.totalCallbacks || 0, hasResizeObserver: responsiveDebugSummary?.hasResizeObserver || false };
  }
  /**
  * Control debug logging for resize operations
  */
  static setDebugResize(enabled) {
    ResponsiveTextManager.setDebugEnabled(enabled);
    console.log(`\u{1F504} [TextSplitter] Debug resize logging ${enabled ? "enabled" : "disabled"}`);
  }
  /**
  * 🚨 CACHE BUSTING: Force reset singleton instance
  * Used to ensure fresh initialization after cache invalidation
  */
  static resetInstance() {
    if (_TextSplitter.instance) {
      console.log(`\u{1F504} [TextSplitter] Forcing singleton reset for cache invalidation`);
      _TextSplitter.instance.cleanupAllSplitText();
      _TextSplitter.instance = null;
      if (typeof __dai_window !== "undefined") {
        delete __dai_window.__FAME_TEXT_SPLITTER_INSTANCE__;
      }
    }
  }
  /**
  * Test method to verify resize functionality
  *
  * This method helps verify that the resize fix is working correctly.
  * Call this in the browser console to test the fix.
  */
  static testResizeFix() {
    console.log(`\u{1F9EA} [TextSplitter] Testing resize fix...`);
    const instance = _TextSplitter.getInstance();
    const summary = instance.getDebugSummary();
    console.log(`\u{1F9EA} [TextSplitter] Current state:`);
    console.log(`\u{1F9EA} \u27A4 Tracked elements: ${summary.trackedElements}`);
    console.log(`\u{1F9EA} \u27A4 Registered callbacks: ${summary.registeredCallbacks}`);
    console.log(`\u{1F9EA} \u27A4 Has resize observer: ${summary.hasResizeObserver}`);
    if (instance.responsiveTextManager && summary.trackedElements > 0) {
      console.log(`\u{1F9EA} [TextSplitter] Testing ResponsiveTextManager with ${summary.trackedElements} elements...`);
      ResponsiveTextManager.testResizeFix();
    } else {
      console.log(`\u{1F9EA} [TextSplitter] No elements to test or ResponsiveTextManager not available`);
    }
  }
  /**
  * 🔥 NEW: Debug method to verify element ID preservation
  *
  * This method helps verify that element IDs are being properly preserved
  * during text re-splitting, which is critical for animation continuity.
  */
  static debugElementIdPreservation() {
    console.log(`\u{1F50D} [TextSplitter] Debugging element ID preservation...`);
    const splitElements = document.querySelectorAll("[data-fame-element-id]");
    console.log(`\u{1F50D} [TextSplitter] Found ${splitElements.length} elements with FAME IDs`);
    const byType = { line: [], word: [], char: [] };
    splitElements.forEach((element) => {
      const splitType = element.getAttribute("data-fame-split");
      const elementId = element.getAttribute("data-fame-element-id");
      if (splitType && elementId) {
        if (!byType[splitType])
          byType[splitType] = [];
        byType[splitType].push(element);
        console.log(`\u{1F50D} [TextSplitter] Element ID: ${elementId}, Type: ${splitType}, Connected: ${element.isConnected}`);
      }
    });
    console.log(`\u{1F50D} [TextSplitter] Element ID preservation summary:`);
    Object.entries(byType).forEach(([type, elements]) => {
      const connectedCount = elements.filter((el) => el.isConnected).length;
      console.log(`\u{1F50D} \u27A4 ${type}: ${connectedCount}/${elements.length} connected`);
    });
  }
  /**
  * 🔥 NEW: Complete rebuild for breakpoint changes - AGGRESSIVE APPROACH
  *
  * This method tries multiple strategies to force Framer to apply current breakpoint styles.
  * Instead of relying on timing, we force recreation of the entire element context.
  *
  * @param element - Element to rebuild
  * @param config - Text processing configuration
  * @returns Promise resolving when rebuild is complete
  */
  async completeRebuildForBreakpoint(element, config) {
    const elementId = this.getElementId(element);
    const originalText = element.textContent || "";
    try {
      if (!originalText.trim()) {
        console.log(`\u{1F525} [TextSplitter] No text content to rebuild for element: ${elementId}`);
        return;
      }
      console.log(`\u{1F525} [TextSplitter] AGGRESSIVE REBUILD for: ${elementId}`);
      console.log(`\u{1F525} [TextSplitter] Original text: "${originalText.slice(0, 50)}..."`);
      const parent = element.parentElement;
      if (!parent) {
        console.error(`\u{1F525} [TextSplitter] No parent element found, cannot perform aggressive rebuild`);
        return;
      }
      const newElement = document.createElement(element.tagName);
      Array.from(element.attributes).forEach((attr) => {
        if (!attr.name.startsWith("data-fame-")) {
          newElement.setAttribute(attr.name, attr.value);
        }
      });
      newElement.textContent = originalText;
      parent.replaceChild(newElement, element);
      console.log(`\u{1F525} [TextSplitter] Element replaced, waiting for Framer style application...`);
      await new Promise((resolve) => setTimeout(resolve, 300));
      newElement.offsetHeight;
      const computedStyle = getComputedStyle(newElement);
      console.log(`\u{1F525} [TextSplitter] Fresh element styles:`, { fontSize: computedStyle.fontSize, color: computedStyle.color, lineHeight: computedStyle.lineHeight, fontFamily: computedStyle.fontFamily, width: computedStyle.width, height: computedStyle.height });
      const freshConfig = { ...config, _isReSplit: true, _forceLineRecalculation: false };
      console.log(`\u{1F525} [TextSplitter] Performing fresh split on replaced element`);
      const result = await this.splitText(newElement, freshConfig);
      if (result.success) {
        console.log(`\u{1F525} [TextSplitter] \u2705 AGGRESSIVE REBUILD SUCCESS: ${result.splitElements.length} elements with fresh styles`);
        this.assignStableIdsToSplitElements(result.splitElements, result.splitType);
        this.notifySplitComplete(elementId, result.splitElements, result.splitType);
      } else {
        console.error(`\u{1F525} [TextSplitter] \u274C AGGRESSIVE REBUILD FAILED: ${result.error}`);
      }
    } catch (error) {
      console.error(`\u{1F525} [TextSplitter] \u274C Aggressive rebuild error:`, error);
      console.log(`\u{1F525} [TextSplitter] Falling back to simple rebuild approach...`);
      try {
        await this.simpleRebuildFallback(element, config, originalText);
      } catch (fallbackError) {
        console.error(`\u{1F525} [TextSplitter] \u274C Fallback rebuild also failed:`, fallbackError);
      }
    }
  }
  /**
  * 🔥 Fallback method for when aggressive rebuild fails
  */
  async simpleRebuildFallback(element, config, originalText) {
    element.innerHTML = "";
    element.textContent = originalText;
    await new Promise((resolve) => setTimeout(resolve, 500));
    const result = await this.splitText(element, { ...config, _isReSplit: true, _forceLineRecalculation: false });
    if (result.success) {
      console.log(`\u{1F525} [TextSplitter] \u2705 FALLBACK SUCCESS: ${result.splitElements.length} elements`);
      this.assignStableIdsToSplitElements(result.splitElements, result.splitType);
    }
  }
  /**
  * 🔥 NEW: Test method to verify the resize fix
  *
  * This method simulates a window resize to test if element IDs are preserved
  * and animations continue working after re-splitting.
  */
  static testResizeFixWithSimulation() {
    console.log(`\u{1F9EA} [TextSplitter] Testing resize fix with simulation...`);
    const textElements = document.querySelectorAll("[data-fame-element-id]");
    if (textElements.length === 0) {
      console.log(`\u{1F9EA} [TextSplitter] No split text elements found to test`);
      return;
    }
    console.log(`\u{1F9EA} [TextSplitter] Found ${textElements.length} split elements to test`);
    const instance = _TextSplitter.getInstance();
    if (!instance.responsiveTextManager) {
      console.log(`\u{1F9EA} [TextSplitter] ResponsiveTextManager not available`);
      return;
    }
    console.log(`\u{1F9EA} [TextSplitter] Simulating window resize...`);
    instance.responsiveTextManager.forceResizeAll().then(() => {
      console.log(`\u{1F9EA} [TextSplitter] \u2705 Resize simulation completed`);
      const elementsAfterResize = document.querySelectorAll("[data-fame-element-id]");
      console.log(`\u{1F9EA} [TextSplitter] Elements after resize: ${elementsAfterResize.length}`);
      let preservedCount = 0;
      elementsAfterResize.forEach((element) => {
        const elementId = element.getAttribute("data-fame-element-id");
        if (elementId && element.isConnected) {
          preservedCount++;
        }
      });
      console.log(`\u{1F9EA} [TextSplitter] \u2705 Element ID preservation: ${preservedCount}/${elementsAfterResize.length} elements preserved`);
      if (preservedCount === elementsAfterResize.length) {
        console.log(`\u{1F9EA} [TextSplitter] \u2705 SUCCESS: All element IDs preserved during resize`);
      } else {
        console.log(`\u{1F9EA} [TextSplitter] \u274C FAILURE: Some element IDs lost during resize`);
      }
    }).catch((error) => {
      console.error(`\u{1F9EA} [TextSplitter] \u274C Resize simulation failed:`, error);
    });
  }
  /**
  * 🔥 NEW: Test method to verify the complete rebuild approach
  *
  * This method simulates a breakpoint change to test if the complete rebuild
  * approach correctly captures fresh styles and rebuilds text splitting.
  */
  static testCompleteRebuild() {
    console.log(`\u{1F9EA} [TextSplitter] Testing complete rebuild approach...`);
    const textElements = document.querySelectorAll("[data-fame-element-id]");
    if (textElements.length === 0) {
      console.log(`\u{1F9EA} [TextSplitter] No split text elements found to test`);
      return;
    }
    console.log(`\u{1F9EA} [TextSplitter] Found ${textElements.length} split elements to test`);
    const instance = _TextSplitter.getInstance();
    if (!instance.responsiveTextManager) {
      console.log(`\u{1F9EA} [TextSplitter] ResponsiveTextManager not available`);
      return;
    }
    console.log(`\u{1F9EA} [TextSplitter] Simulating breakpoint change with complete rebuild...`);
    instance.responsiveTextManager.forceResizeAll().then(() => {
      console.log(`\u{1F9EA} [TextSplitter] \u2705 Complete rebuild simulation completed`);
      const elementsAfterRebuild = document.querySelectorAll("[data-fame-element-id]");
      console.log(`\u{1F9EA} [TextSplitter] Elements after rebuild: ${elementsAfterRebuild.length}`);
      console.log(`\u{1F9EA} [TextSplitter] \u2705 Check console above for "COMPLETE REBUILD SUCCESS" messages`);
    }).catch((error) => {
      console.error(`\u{1F9EA} [TextSplitter] \u274C Complete rebuild simulation failed:`, error);
    });
  }
  /**
  * 🚨 FRAMER BREAKPOINT FIX: Detect if we're in Framer preview environment
  *
  * Framer preview has specific characteristics that we can detect to apply
  * special handling for breakpoint transitions.
  */
  isFramerPreviewEnvironment() {
    if (typeof __dai_window === "undefined")
      return false;
    const hasFramerPreview = __dai_window.location.hostname.includes("framer.app") || __dai_window.location.hostname.includes("framer.com") || __dai_window.location.hostname.includes("framer.website") || __dai_window.location.pathname.includes("/preview") || document.querySelector("[data-framer-name]") !== null || document.querySelector(".framer-") !== null || // Check for Framer CSS classes or data attributes
    document.documentElement.classList.toString().includes("framer") || // Check for Framer-specific global variables
    __dai_window.__framer__ !== void 0 || __dai_window.Framer !== void 0;
    return hasFramerPreview;
  }
  constructor() {
    _define_property14(this, "originalHTML", /* @__PURE__ */ new Map());
    _define_property14(this, "stylePreservationService", null);
    _define_property14(this, "responsiveTextManager", null);
    _define_property14(this, "htmlParsingService", null);
    _define_property14(this, "positionMappingService", null);
    _define_property14(this, "reactCallbackManager", null);
  }
};
_define_property14(TextSplitter, "instance", null);
_define_property14(TextSplitter, "DEBUG_RESIZE", true);

// http-url:https://framerusercontent.com/modules/fXcQm4SgjDJqj9v2BQyM/3AkOg9bHSJAEzV0DXKfR/DistributedPropertyPatternGenerator.js
var DistributedPropertyPatternGenerator = class {
  /**
  * Generate element-specific values from pattern configuration
  *
  * @description
  * Main entry point for pattern generation. Delegates to specific pattern
  * handlers based on configuration type. Always returns an array with
  * exactly one value per element.
  *
  * @param elements - Array of HTML elements (used for count only)
  * @param config - Distributed property configuration with pattern details
  * @param baseValue - Fallback value when distribution is disabled
  *
  * @returns Array of property values, one per element
  *
  * @throws {Error} When pattern type is unsupported
  * @throws {Error} When required pattern data is missing
  *
  * @complexity O(n) where n = elements.length
  *
  * @examples
  * ```typescript
  * // Disabled distribution - returns base value for all elements
  * generateElementValues(elements, { enabled: false }, '50px')
  * // → ['50px', '50px', '50px', ...]
  *
  * // Comma-separated pattern
  * generateElementValues(elements, {
  *   enabled: true,
  *   pattern: { type: 'comma-separated', values: '10px,20px' }
  * }, '0px')
  * // → ['10px', '20px', '10px', '20px', ...] (cycles through pattern)
  *
  * // Linear range pattern
  * generateElementValues(elements, {
  *   enabled: true,
  *   pattern: {
  *     type: 'linear-range',
  *     linearRange: { minValue: '0px', maxValue: '100px', progression: 'ascending' }
  *   }
  * }, '0px')
  * // → ['0px', '33px', '66px', '100px'] (for 4 elements)
  * ```
  *
  * @god_class_prevention
  * This method ONLY generates values. It does NOT:
  * - Validate element selection (ElementFinder's job)
  * - Parse property control UI data (AnimationSlotAdapter's job)
  * - Create timeline keyframes (PropertyTimeline's job)
  * - Apply styles to DOM (StyleApplicator's job)
  *
  * @testing_coverage
  * - All pattern types with various element counts
  * - Edge cases: 0 elements, 1 element, 1000+ elements
  * - Invalid configurations (missing data, wrong types)
  * - Performance with large element arrays
  */
  generateElementValues(elements, config, baseValue) {
    if (!config || !config.enabled) {
      return elements.map(() => baseValue);
    }
    if (!elements || elements.length === 0) {
      console.warn("[DistributedPropertyPatternGenerator] No elements provided, returning empty array");
      return [];
    }
    console.log("[DistributedPropertyPatternGenerator] Processing config:", config);
    const patternType = config.pattern;
    if (!patternType) {
      console.error("[DistributedPropertyPatternGenerator] No pattern type found in config.pattern:", config);
      return elements.map(() => baseValue);
    }
    console.log(`[DistributedPropertyPatternGenerator] Using pattern type: ${patternType}`);
    try {
      switch (patternType) {
        case "comma-separated":
          return this.generateCommaSeparatedPattern(elements, config);
        case "linear-range":
          return this.generateLinearRangePattern(elements, config);
        case "random":
          console.warn("[DistributedPropertyPatternGenerator] Random patterns not yet implemented - falling back to base value");
          return elements.map(() => baseValue);
        case "grid-aware":
          console.warn("[DistributedPropertyPatternGenerator] Grid-aware patterns not yet implemented - falling back to base value");
          return elements.map(() => baseValue);
        default:
          console.error(`[DistributedPropertyPatternGenerator] Unknown pattern type: ${patternType}`);
          return elements.map(() => baseValue);
      }
    } catch (error) {
      console.error("[DistributedPropertyPatternGenerator] Pattern generation failed:", error);
      return elements.map(() => baseValue);
    }
  }
  /**
  * Generate values using comma-separated pattern
  *
  * @description
  * Splits comma-separated values and cycles through them for each element.
  * Values repeat when there are more elements than pattern values.
  *
  * @param elements - Array of elements (used for count)
  * @param config - Flat config with values field
  *
  * @returns Array of values cycling through the pattern
  *
  * @complexity O(n) where n = elements.length
  *
  * @examples
  * ```typescript
  * // Pattern: "10px,20px,30px" with 5 elements
  * // Result: ['10px', '20px', '30px', '10px', '20px']
  *
  * // Pattern: "red,blue" with 3 elements
  * // Result: ['red', 'blue', 'red']
  * ```
  *
  * @error_handling
  * - Empty values string returns empty pattern
  * - Whitespace is automatically trimmed from each value
  * - Empty values after splitting are filtered out
  */
  generateCommaSeparatedPattern(elements, config) {
    console.log("[DistributedPropertyPatternGenerator] Comma-separated config:", config);
    if (!config.values || config.values.trim() === "") {
      console.warn("[DistributedPropertyPatternGenerator] Empty comma-separated values provided");
      return elements.map(() => "");
    }
    const patternValues = config.values.split(",").map((value) => value.trim()).filter((value) => value !== "");
    console.log("[DistributedPropertyPatternGenerator] Pattern values:", patternValues);
    if (patternValues.length === 0) {
      console.warn("[DistributedPropertyPatternGenerator] No valid values after parsing comma-separated pattern");
      return elements.map(() => "");
    }
    const result = elements.map((_, index) => patternValues[index % patternValues.length]);
    console.log("[DistributedPropertyPatternGenerator] Generated comma-separated values:", result);
    return result;
  }
  /**
  * Generate values using linear range pattern
  *
  * @description
  * Distributes values evenly between min and max with optional progression curves.
  * Supports both numeric values (with units) and color gradients.
  *
  * @param elements - Array of elements (used for count)
  * @param config - Flat config with minValue, maxValue, progression fields
  *
  * @returns Array of values distributed across the range
  *
  * @complexity O(n) where n = elements.length
  *
  * @examples
  * ```typescript
  * // Numeric range: 0px → 100px, linear, 5 elements
  * // Result: ['0px', '25px', '50px', '75px', '100px']
  *
  * // Color gradient: white → black, linear, 5 elements
  * // Result: ['#ffffff', '#cccccc', '#999999', '#666666', '#333333', '#000000']
  *
  * // TRUE RANDOM: 0% → -100%, random, 5 elements
  * // Result: ['0%', '-23%', '-67%', '-41%', '-89%'] (truly random within range)
  * ```
  *
  * @color_support
  * Supports color gradients with smooth RGB interpolation
  * - Hex colors: #ffffff → #000000
  * - RGB colors: rgb(255,0,0) → rgb(0,0,255)
  * - Mixed formats: white → #000000 (auto-detection)
  *
  * @random_distribution
  * NEW: True random distribution instead of curved progression
  * - Each element gets a truly random value within the min-max range
  * - Uses deterministic seeding for consistent results across renders
  * - Perfect for scattered/varied effects in animations
  *
  * @mathematical_progressions
  * - linear: Linear 0 → 1 progression
  * - linear-reverse: Linear 1 → 0 progression
  * - bell-curve: Smooth Gaussian bell curve (peak in center)
  * - roof: Triangular peak (sharp rise to center)
  * - reverse-roof: Triangular valley (sharp fall to center)
  * - ramp-up: Slow start, fast end (quadratic acceleration)
  * - ramp-down: Fast start, slow end (quadratic deceleration)
  * - ease-in-out: Smooth S-curve transition
  * - steps: Discrete stepped progression
  * - random: TRUE RANDOM values within range (handled separately)
  * - cubic-in-out: Pronounced S-curve with stronger acceleration/deceleration
  * - bounce: Bouncing oscillations creating wave-like patterns
  * - elastic: Elastic overshoot with damped oscillations
  * - exponential: Strong exponential curve for dramatic effects
  */
  generateLinearRangePattern(elements, config) {
    console.log("[DistributedPropertyPatternGenerator] Linear range config:", config);
    const elementCount = elements.length;
    if (elementCount === 1) {
      return [config.minValue || "0px"];
    }
    console.log("\u{1F3A8} [DistributedPropertyPatternGenerator] Generating linear range pattern:", config);
    const minColor = this.parseColor(config.minValue);
    const maxColor = this.parseColor(config.maxValue);
    if (minColor && maxColor) {
      console.log(`\u{1F4CA} [DistributedPropertyPatternGenerator] Generating color gradient: ${config.minValue} \u2192 ${config.maxValue} for ${elementCount} elements`);
      if (config.progression === "random") {
        console.log(`\u{1F3A8} [DistributedPropertyPatternGenerator] Generating truly random color values for ${elementCount} elements`);
        const randomColors = elements.map((_, index) => {
          const randomProgress = this.seededRandom(index);
          const interpolatedColor = this.interpolateColors(minColor, maxColor, randomProgress);
          return interpolatedColor;
        });
        console.log(`\u{1F3B2} [Random Color Debug] First 5 colors:`, randomColors.slice(0, 5));
        console.log(`\u{1F3B2} [Random Color Debug] Random progresses:`, elements.slice(0, 5).map((_, i) => this.seededRandom(i).toFixed(3)));
        return randomColors;
      }
      return elements.map((_, index) => {
        let progress = elementCount === 1 ? 0 : index / (elementCount - 1);
        progress = this.applyProgressionCurve(progress, config.progression || "linear");
        const interpolatedColor = this.interpolateColors(minColor, maxColor, progress);
        return interpolatedColor;
      });
    }
    const minNum = this.parseNumericValue(config.minValue);
    const maxNum = this.parseNumericValue(config.maxValue);
    const unit = this.extractUnit(config.minValue) || this.extractUnit(config.maxValue) || "";
    if (minNum === null || maxNum === null) {
      console.warn("[DistributedPropertyPatternGenerator] Failed to parse values as colors or numbers, using min value for all elements");
      return elements.map(() => config.minValue || "0px");
    }
    if (config.progression === "random") {
      console.log(`\u{1F4CA} [DistributedPropertyPatternGenerator] Generating truly random values: ${config.minValue} \u2192 ${config.maxValue} for ${elementCount} elements`);
      const randomValues = elements.map((_, index) => {
        const randomProgress = this.seededRandom(index);
        const value = minNum + (maxNum - minNum) * randomProgress;
        return `${value}${unit}`;
      });
      console.log(`\u{1F3B2} [Random Debug] First 5 values:`, randomValues.slice(0, 5));
      console.log(`\u{1F3B2} [Random Debug] Random progresses:`, elements.slice(0, 5).map((_, i) => this.seededRandom(i).toFixed(3)));
      return randomValues;
    }
    const result = elements.map((_, index) => {
      let progress = elementCount === 1 ? 0 : index / (elementCount - 1);
      progress = this.applyProgressionCurve(progress, config.progression || "linear");
      const value = minNum + (maxNum - minNum) * progress;
      return `${value}${unit}`;
    });
    console.log("[DistributedPropertyPatternGenerator] Generated linear range values:", result);
    return result;
  }
  /**
  * Generate deterministic seeded random value with better distribution
  *
  * @description
  * Creates consistent "random" values based on a seed value.
  * Same seed will always produce the same random value.
  * Uses improved mixing algorithm for better randomness with consecutive indices.
  *
  * @param seed - Seed value (typically element index)
  * @returns Pseudo-random value between 0 and 1
  *
  * @algorithm
  * Uses multiple hash-like operations to better mix the seed value,
  * producing more scattered results for consecutive indices.
  */
  seededRandom(seed) {
    let hash = seed;
    hash = (hash ^ 61 ^ hash >>> 16) >>> 0;
    hash = hash + (hash << 3) >>> 0;
    hash = (hash ^ hash >>> 4) >>> 0;
    hash = hash * 668265261 >>> 0;
    hash = (hash ^ hash >>> 15) >>> 0;
    hash = hash * 1597334677 >>> 0;
    hash = (hash ^ hash >>> 16) >>> 0;
    hash = hash * 3812015801 >>> 0;
    hash = (hash ^ hash >>> 16) >>> 0;
    return (hash >>> 0) / 4294967296;
  }
  /**
     * Apply mathematical progression curve to linear progress
     *
     * @description
     * Transforms linear 0→1 progress into curved progressions for visual effects.
     * Each curve creates different distribution patterns across elements.
     *
     * @param progress - Linear progress from 0 to 1
     * @param progression - Type of mathematical curve to apply
     *
     * @returns Transformed progress value
     *
     * @mathematical_functions
     * - linear: f(x) = x (identity function)
     * - linear-reverse: f(x) = 1 - x (inversion)
     * - bell-curve: f(x) = exp(-((x-0.5)^2) / 0.125) (smooth Gaussian bell)
     * - roof: f(x) = 1 - |2x - 1| (triangular peak)
     * - reverse-roof: f(x) = |2x - 1| (triangular valley)
     * - ramp-up: f(x) = x^2 (quadratic acceleration)
     * - ramp-down: f(x) = 1 - (1-x)^2 (quadratic deceleration)
     * - ease-in-out: f(x) = 3x^2 - 2x^3 (smoothstep function)
     * - steps: f(x) = floor(x * 5) / 4 (discrete steps)
     * - random: Handled separately - true random distribution (not a curve)
     * - cubic-in-out: f(x) = x < 0.5 ? 4x^3 : 1-4(1-x)^3 (cubic S-curve)
     * - bounce: f(x) = 1 - |sin(x * π * 3)| * (1-x) (bouncing oscillation)
     * - elastic: f(x) = sin(x * π * 6) * exp(-x * 3) * 0.5 + 0.5 (elastic wave)
     * - exponential: f(x) = (exp(x * 4) - 1) / (exp(4) - 1) (exponential curve)
     */
  applyProgressionCurve(progress, progression) {
    switch (progression) {
      case "linear":
        return progress;
      case "linear-reverse":
        return 1 - progress;
      case "bell-curve":
        const centerOffset = progress - 0.5;
        return Math.exp(-(centerOffset * centerOffset) / 0.125);
      case "roof":
        return 1 - Math.abs(2 * progress - 1);
      case "reverse-roof":
        return Math.abs(2 * progress - 1);
      case "ramp-up":
        return progress * progress;
      case "ramp-down":
        return 1 - (1 - progress) * (1 - progress);
      case "ease-in-out":
        return 3 * progress * progress - 2 * progress * progress * progress;
      case "steps":
        return Math.floor(progress * 5) / 4;
      case "random":
        console.warn("[DistributedPropertyPatternGenerator] Random progression should be handled separately, falling back to seeded random");
        return this.seededRandom(progress);
      case "cubic-in-out":
        if (progress < 0.5) {
          return 4 * progress * progress * progress;
        } else {
          const adjusted = 1 - progress;
          return 1 - 4 * adjusted * adjusted * adjusted;
        }
      case "bounce":
        return 1 - Math.abs(Math.sin(progress * Math.PI * 3)) * (1 - progress);
      case "elastic":
        return Math.sin(progress * Math.PI * 6) * Math.exp(-progress * 3) * 0.5 + 0.5;
      case "exponential":
        return (Math.exp(progress * 4) - 1) / (Math.exp(4) - 1);
      default:
        console.warn(`[DistributedPropertyPatternGenerator] Unknown progression type: ${progression}, using linear`);
        return progress;
    }
  }
  /**
  * Parse numeric value from CSS value string
  *
  * @description
  * Extracts the numeric component from CSS values like "100px", "50%", "1.5em".
  * Handles integers, decimals, and negative numbers.
  *
  * @param value - CSS value string to parse
  *
  * @returns Parsed numeric value or null if parsing fails
  *
  * @examples
  * ```typescript
  * parseNumericValue('100px')   // → 100
  * parseNumericValue('-50%')    // → -50
  * parseNumericValue('1.5em')   // → 1.5
  * parseNumericValue('auto')    // → null
  * ```
  */
  parseNumericValue(value) {
    if (typeof value !== "string") {
      return null;
    }
    const match = value.match(/^(-?\d*\.?\d+)/);
    if (!match) {
      return null;
    }
    const numericValue = parseFloat(match[1]);
    return isNaN(numericValue) ? null : numericValue;
  }
  /**
  * Extract unit from CSS value string
  *
  * @description
  * Extracts the unit component from CSS values like "100px", "50%", "1.5em".
  * Returns empty string for unitless values.
  *
  * @param value - CSS value string to parse
  *
  * @returns Unit string or empty string if no unit
  *
  * @examples
  * ```typescript
  * extractUnit('100px')   // → 'px'
  * extractUnit('-50%')    // → '%'
  * extractUnit('1.5')     // → ''
  * extractUnit('auto')    // → ''
  * ```
  */
  extractUnit(value) {
    if (typeof value !== "string") {
      return "";
    }
    const match = value.match(/^-?\d*\.?\d+([a-zA-Z%]+)/);
    return match ? match[1] : "";
  }
  /**
  * Parse a color string to RGB values
  *
  * @description
  * Parses color strings in various formats (hex, rgb, rgba) into RGB components.
  * Used for color gradient generation in distributed properties.
  *
  * @param color - Color string to parse
  * @returns RGB color object or null if parsing fails
  *
  * @examples
  * ```typescript
  * parseColor('#ffffff')           // → { r: 255, g: 255, b: 255 }
  * parseColor('#fff')              // → { r: 255, g: 255, b: 255 }
  * parseColor('rgb(255, 0, 0)')    // → { r: 255, g: 0, b: 0 }
  * parseColor('rgba(0, 0, 255, 0.5)')  // → { r: 0, g: 0, b: 255, a: 0.5 }
  * parseColor('invalid')           // → null
  * ```
  */
  parseColor(color) {
    const trimmed = color.trim();
    if (trimmed.startsWith("#")) {
      const hex = trimmed.substring(1);
      let r, g, b;
      if (hex.length === 3) {
        r = parseInt(hex[0] + hex[0], 16);
        g = parseInt(hex[1] + hex[1], 16);
        b = parseInt(hex[2] + hex[2], 16);
      } else if (hex.length === 6) {
        r = parseInt(hex.substring(0, 2), 16);
        g = parseInt(hex.substring(2, 4), 16);
        b = parseInt(hex.substring(4, 6), 16);
      } else {
        return null;
      }
      return { r, g, b };
    }
    const rgbMatch = trimmed.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*([\d.]+))?\s*\)/);
    if (rgbMatch) {
      const r = parseInt(rgbMatch[1], 10);
      const g = parseInt(rgbMatch[2], 10);
      const b = parseInt(rgbMatch[3], 10);
      const a = rgbMatch[4] ? parseFloat(rgbMatch[4]) : void 0;
      return { r, g, b, a };
    }
    const colorNames = { white: { r: 255, g: 255, b: 255 }, black: { r: 0, g: 0, b: 0 }, red: { r: 255, g: 0, b: 0 }, green: { r: 0, g: 128, b: 0 }, blue: { r: 0, g: 0, b: 255 }, yellow: { r: 255, g: 255, b: 0 }, cyan: { r: 0, g: 255, b: 255 }, magenta: { r: 255, g: 0, b: 255 }, transparent: { r: 0, g: 0, b: 0 } };
    const namedColor = colorNames[trimmed.toLowerCase()];
    if (namedColor) {
      return namedColor;
    }
    return null;
  }
  /**
  * Interpolate between two RGB colors
  *
  * @description
  * Performs smooth RGB interpolation between two colors.
  * Used for generating color gradients in distributed properties.
  *
  * @param fromColor - Starting color (RGB object)
  * @param toColor - Ending color (RGB object)
  * @param progress - Interpolation progress (0-1)
  * @returns Interpolated color as hex string
  *
  * @examples
  * ```typescript
  * interpolateColors({ r: 255, g: 0, b: 0 }, { r: 0, g: 0, b: 255 }, 0.5)
  * // → '#800080' (purple, halfway between red and blue)
  *
  * interpolateColors({ r: 255, g: 255, b: 255 }, { r: 0, g: 0, b: 0 }, 0.25)
  * // → '#bfbfbf' (light gray, 25% towards black)
  * ```
  */
  interpolateColors(fromColor, toColor, progress) {
    progress = Math.max(0, Math.min(1, progress));
    const r = Math.round(fromColor.r + (toColor.r - fromColor.r) * progress);
    const g = Math.round(fromColor.g + (toColor.g - fromColor.g) * progress);
    const b = Math.round(fromColor.b + (toColor.b - fromColor.b) * progress);
    if (fromColor.a !== void 0 && toColor.a !== void 0) {
      const a = fromColor.a + (toColor.a - fromColor.a) * progress;
      return `rgba(${r}, ${g}, ${b}, ${a})`;
    }
    const toHex = (value) => {
      const hex = Math.max(0, Math.min(255, value)).toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    };
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  }
};
var distributedPropertyPatternGenerator = new DistributedPropertyPatternGenerator();

// http-url:https://framerusercontent.com/modules/4R4WyHocnZeuJk6aPeC3/wyCvJZ1Quudj24o6gTyV/AnimationSlotAdapter.js
var ENABLE_TIMELINE_ARCHITECTURE = true;
function convertIndividualCriteriaToArray(element) {
  console.log("[TEXTSPLITTERDOMTESTING] CRITICAL --- convertIndividualCriteriaToArray: element:", element);
  const criteria = [];
  for (let i = 1; i <= 3; i++) {
    const typeField = `criteriaType${i}`;
    const valueField = `criteriaValue${i}`;
    const criteriaType = element[typeField];
    const criteriaValue = element[valueField];
    if (criteriaType && criteriaType !== "none" && criteriaValue && criteriaValue.trim() !== "") {
      criteria.push({ type: criteriaType, value: criteriaValue.trim() });
    }
  }
  console.log("[TEXTSPLITTERDOMTESTING] CRITICAL --- convertIndividualCriteriaToArray: criteria:", criteria);
  return criteria;
}
function convertTextProcessingConfig(config) {
  const animateBy = config.animateBy || "characters";
  let derivedSplitType;
  switch (animateBy) {
    case "characters":
      derivedSplitType = TextSplitType.CHARACTERS;
      break;
    case "words":
      derivedSplitType = TextSplitType.WORDS;
      break;
    case "lines":
      derivedSplitType = TextSplitType.LINES;
      break;
    default:
      derivedSplitType = TextSplitType.CHARACTERS;
  }
  return {
    enabled: true,
    animateBy,
    maskLines: config.maskLines || false,
    canvasMode: config.canvasMode ? { enableInCanvas: config.canvasMode.enableInCanvas !== false, fallbackBehavior: config.canvasMode.fallbackBehavior || TextCanvasFallback.ANIMATE_CONTAINER, maxTextLength: config.canvasMode.maxTextLength || 500 } : { enableInCanvas: true, fallbackBehavior: TextCanvasFallback.ANIMATE_CONTAINER, maxTextLength: 500 },
    textEffects: config.textEffects || [],
    // 🔧 INTERNAL: Derived properties for backward compatibility
    splitType: derivedSplitType,
    preserveWhitespace: true,
    wrapInSpans: animateBy !== "lines"
  };
}
function convertEnhancedStaggerConfig(props) {
  if (!props.staggerEnabled) {
    return void 0;
  }
  const staggerConfig = props.staggerConfig || {};
  const strategy = staggerConfig.strategy || "linear";
  const config = {
    enabled: true,
    delay: staggerConfig.delay || 0.1,
    strategy,
    // Set default order (will be properly configured below based on strategy)
    order: { forward: "first-to-last", backward: "first-to-last" }
  };
  if (strategy === "grid") {
    const gridMode = staggerConfig.gridMode || "point-based";
    config.advanced = { grid: {
      // Existing properties
      origin: staggerConfig.gridOrigin || "center",
      autoDetect: staggerConfig.gridAutoDetect !== false,
      distanceMetric: staggerConfig.gridDistanceMetric || "euclidean",
      // 🆕 NEW: Grid mode and direction configuration
      mode: gridMode,
      // 🚀 NEW: Grid reverse behavior configuration (Phase 1A)
      reverseMode: staggerConfig.gridReverseMode || "latest-elements",
      // Row-based configuration
      ...gridMode === "row-based" && { rowDirection: staggerConfig.gridRowDirection || "top-to-bottom" },
      // Column-based configuration
      ...gridMode === "column-based" && { columnDirection: staggerConfig.gridColumnDirection || "left-to-right" }
    } };
    if (!config.advanced.grid.autoDetect) {
      config.advanced.grid.rows = staggerConfig.gridRows || 3;
      config.advanced.grid.columns = staggerConfig.gridColumns || 3;
    }
    if (staggerConfig.showAdvanced && staggerConfig.randomSeed) {
      config.advanced.random = { seed: staggerConfig.randomSeed };
    }
  } else {
    const orderMode = staggerConfig.orderMode || "simple";
    let orderConfig;
    if (orderMode === "directional") {
      orderConfig = { forward: staggerConfig.forwardOrder || "first-to-last", backward: staggerConfig.backwardOrder || "last-to-first" };
    } else {
      const simpleOrder = staggerConfig.simpleOrder || "first-to-last";
      orderConfig = { forward: simpleOrder, backward: simpleOrder };
    }
    config.order = orderConfig;
    if (staggerConfig.showAdvanced && staggerConfig.randomSeed) {
      config.advanced = { random: { seed: staggerConfig.randomSeed } };
    }
  }
  return config;
}
function convertScrollBoundaries(boundaries) {
  const defaultBoundaries = { start: { element: { value: "0%" }, viewport: { value: "0%" } }, end: { element: { value: "100%" }, viewport: { value: "100%" } } };
  if (!boundaries) {
    console.log(`\u{1F3AD} [SCRUBBED_ANIMATOR_DEBUG] Using default boundaries`);
    return defaultBoundaries;
  }
  console.log(`\u{1F3AD} [SCRUBBED_ANIMATOR_DEBUG] Converting boundaries:`, boundaries);
  const convertedBoundaries = { start: { element: { value: `${boundaries.start?.element !== void 0 ? boundaries.start.element : 0}%` }, viewport: { value: `${boundaries.start?.viewport !== void 0 ? boundaries.start.viewport : 0}%` } }, end: { element: { value: `${boundaries.end?.element !== void 0 ? boundaries.end.element : 100}%` }, viewport: { value: `${boundaries.end?.viewport !== void 0 ? boundaries.end.viewport : 100}%` } } };
  console.log(`\u{1F3AD} [SCRUBBED_ANIMATOR_DEBUG] Converted boundaries:`, convertedBoundaries);
  return convertedBoundaries;
}
function toInternalFormat(propertyControlsSlot, componentInstanceId) {
  if (!propertyControlsSlot) {
    throw new Error("PropertyControlsSlot is required");
  }
  const baseId = propertyControlsSlot.id || propertyControlsSlot.name || "unnamed";
  const instanceId = componentInstanceId || "global";
  const timestamp = Date.now();
  const randomSuffix = Math.random().toString(36).substr(2, 9);
  const slotId = `fame-${baseId}-${instanceId}-${timestamp}-${randomSuffix}`;
  console.log(`\u{1F3F7}\uFE0F [AnimationSlotAdapter] Generated unique slot ID: ${slotId}`, { originalId: propertyControlsSlot.id, originalName: propertyControlsSlot.name, componentInstanceId: instanceId, generatedId: slotId });
  console.log(`\u{1F3AD} [SCRUBBED_ANIMATOR_DEBUG] Property controls input:`, { animationParadigm: propertyControlsSlot.animationParadigm, animationParadigmType: typeof propertyControlsSlot.animationParadigm, availableModes: Object.values(AnimationMode), rawPropertyControls: { keys: Object.keys(propertyControlsSlot).filter((key) => key.includes("mode") || key.includes("Mode") || key.includes("paradigm") || key.includes("Paradigm")), scrollKeys: Object.keys(propertyControlsSlot).filter((key) => key.includes("scroll") || key.includes("Scroll")) } });
  const triggers = [];
  if (propertyControlsSlot.triggers && propertyControlsSlot.triggers.length > 0) {
    propertyControlsSlot.triggers.forEach((triggerElement, index) => {
      if (!triggerElement.targetElement) {
        console.warn(`Trigger ${index} missing targetElement, skipping`);
        return;
      }
      const event = triggerElement.event || EventType.CLICK;
      const behavior = triggerElement.behavior || AnimationBehavior.TOGGLE;
      const targetElement = triggerElement.targetElement;
      const criteria = convertIndividualCriteriaToArray(targetElement);
      const internalTrigger = { selection: { scope: targetElement.scope || ElementScope.SELF, criteria }, event, behavior, overrideState: triggerElement.overrideState || false, reverseMode: triggerElement.reverseMode || ReverseMode.EASING_PRESERVATION };
      if (triggerElement.loopConfig) {
        internalTrigger.loopConfig = triggerElement.loopConfig;
        console.log(`\u{1F504} [AnimationSlotAdapter] Added loopConfig:`, triggerElement.loopConfig);
      }
      if (triggerElement.pingPongConfig) {
        internalTrigger.pingPongConfig = triggerElement.pingPongConfig;
        console.log(`\u{1F3D3} [AnimationSlotAdapter] Added pingPongConfig:`, triggerElement.pingPongConfig);
      }
      if (triggerElement.delayedTriggerConfig) {
        internalTrigger.delayedTriggerConfig = triggerElement.delayedTriggerConfig;
        console.log(`\u23F1\uFE0F [AnimationSlotAdapter] Added delayedTriggerConfig:`, triggerElement.delayedTriggerConfig);
      }
      if (event === EventType.SCROLL) {
        console.log(`\u{1F3AF} [AnimationSlotAdapter] Processing scroll trigger:`, { event, scrollThresholds: triggerElement.scrollThresholds, hasScrollThresholds: !!triggerElement.scrollThresholds, triggerElement });
        console.log(`\u{1F6A8} [AnimationSlotAdapter] DETAILED SCROLL DEBUG:`, { fullTriggerElement: JSON.stringify(triggerElement, null, 2), scrollThresholdsPath: triggerElement.scrollThresholds, elementStart: triggerElement.scrollThresholds?.elementStart, viewportThreshold: triggerElement.scrollThresholds?.viewportThreshold, thresholdCrossedBackward: triggerElement.scrollThresholds?.thresholdCrossedBackward, scrollThresholdsType: typeof triggerElement.scrollThresholds, scrollThresholdsKeys: triggerElement.scrollThresholds ? Object.keys(triggerElement.scrollThresholds) : "N/A" });
        if (triggerElement.scrollThresholds) {
          const elementStart = triggerElement.scrollThresholds.elementStart;
          const viewportThreshold = triggerElement.scrollThresholds.viewportThreshold;
          const thresholdCrossedBackward = triggerElement.scrollThresholds.thresholdCrossedBackward;
          console.log(`\u{1F6A8} [AnimationSlotAdapter] Raw scroll threshold values:`, { elementStart, viewportThreshold, thresholdCrossedBackward, elementStartType: typeof elementStart, viewportThresholdType: typeof viewportThreshold, thresholdCrossedBackwardType: typeof thresholdCrossedBackward });
          internalTrigger.scrollThresholds = { elementStart: elementStart !== void 0 ? elementStart : 0, viewportThreshold: viewportThreshold !== void 0 ? viewportThreshold : 80, thresholdCrossedBackward: thresholdCrossedBackward || "none" };
          console.log(`\u{1F3AF} [AnimationSlotAdapter] Added scroll thresholds:`, internalTrigger.scrollThresholds);
          if (elementStart !== void 0 && elementStart !== internalTrigger.scrollThresholds.elementStart) {
            console.error(`\u{1F6A8} [AnimationSlotAdapter] ERROR: elementStart value mismatch! UI: ${elementStart}, Internal: ${internalTrigger.scrollThresholds.elementStart}`);
          }
          if (viewportThreshold !== void 0 && viewportThreshold !== internalTrigger.scrollThresholds.viewportThreshold) {
            console.error(`\u{1F6A8} [AnimationSlotAdapter] ERROR: viewportThreshold value mismatch! UI: ${viewportThreshold}, Internal: ${internalTrigger.scrollThresholds.viewportThreshold}`);
          }
        } else {
          console.warn(`\u{1F3AF} [AnimationSlotAdapter] No scroll thresholds found in trigger element for scroll event`);
          console.log(`\u{1F6A8} [AnimationSlotAdapter] Available trigger element properties:`, Object.keys(triggerElement));
          console.log(`\u{1F6A8} [AnimationSlotAdapter] Trigger element structure:`, JSON.stringify(triggerElement, null, 2));
        }
      }
      triggers.push(internalTrigger);
    });
  } else {
    triggers.push({ selection: { scope: ElementScope.SELF }, event: EventType.CLICK, behavior: AnimationBehavior.TOGGLE, overrideState: false, reverseMode: ReverseMode.EASING_PRESERVATION });
  }
  const animatedElements = [];
  if (propertyControlsSlot.animatedElements && propertyControlsSlot.animatedElements.length > 0) {
    propertyControlsSlot.animatedElements.forEach((animatedElement, index) => {
      const criteria = convertIndividualCriteriaToArray(animatedElement);
      const selection = convertToElementSelection(animatedElement.scope || ElementScope.SELF, criteria, animatedElement.depth);
      const convertedElement = { selection };
      if (animatedElement.textProcessingEnabled && animatedElement.textProcessingConfig) {
        convertedElement.textProcessing = convertTextProcessingConfig(animatedElement.textProcessingConfig);
      }
      animatedElements.push(convertedElement);
    });
  } else {
    animatedElements.push({ selection: { scope: ElementScope.SELF } });
  }
  const { globalTimelineEnabled = false, globalTimelineConfig = {} } = propertyControlsSlot;
  console.log("\u{1F310} [GlobalTimeline] Processing global timeline:", { enabled: globalTimelineEnabled, config: globalTimelineConfig });
  let animationProperties;
  let totalDuration;
  let masterTimeline = void 0;
  if (ENABLE_TIMELINE_ARCHITECTURE) {
    const timelineResult = processWithTimelineArchitecture(propertyControlsSlot, globalTimelineConfig, globalTimelineEnabled);
    animationProperties = timelineResult.properties;
    totalDuration = timelineResult.totalDuration;
    masterTimeline = timelineResult.masterTimeline;
  } else {
    console.error("\u{1F6A8} [AnimationSlotAdapter] Legacy processing requested but not available - Timeline-First Architecture required");
    throw new Error("Legacy multi-property processing has been removed. Enable Timeline-First Architecture.");
  }
  const staggerConfig = convertEnhancedStaggerConfig(propertyControlsSlot);
  if (staggerConfig) {
  }
  const animationParadigm = propertyControlsSlot.animationParadigm;
  let detectedMode;
  if (animationParadigm === "scroll-based") {
    detectedMode = AnimationMode.SCRUBBED;
  } else {
    detectedMode = AnimationMode.TIMED;
  }
  console.log(`\u{1F3AD} [SCRUBBED_ANIMATOR_DEBUG] Animation mode assignment:`, { animationParadigm, animationParadigmType: typeof animationParadigm, detectedMode, scrubbedEnumValue: AnimationMode.SCRUBBED, timedEnumValue: AnimationMode.TIMED, isScrubbedMode: detectedMode === AnimationMode.SCRUBBED });
  const scrollRelatedKeys = Object.keys(propertyControlsSlot).filter((key) => key.toLowerCase().includes("scroll") || key.toLowerCase().includes("scrub") || key.toLowerCase().includes("boundary") || key.toLowerCase().includes("threshold"));
  console.log(`\u{1F3AD} [SCRUBBED_ANIMATOR_DEBUG] Scroll-related configuration:`, { scrollRelatedKeys, scrollValues: scrollRelatedKeys.reduce((acc, key) => {
    acc[key] = propertyControlsSlot[key];
    return acc;
  }, {}) });
  let scrollConfig = void 0;
  if (detectedMode === AnimationMode.SCRUBBED) {
    console.log(`\u{1F3AD} [SCRUBBED_ANIMATOR_DEBUG] Processing scroll configuration for scrubbed mode`);
    const scrollSettings = propertyControlsSlot.scrollScrubbedConfig || propertyControlsSlot.scrollSettings || propertyControlsSlot.scrollConfig;
    if (scrollSettings) {
      console.log(`\u{1F3AD} [SCRUBBED_ANIMATOR_DEBUG] Found scroll settings:`, scrollSettings);
      let triggerElement = { scope: "self" };
      if (scrollSettings.triggerElement) {
        const triggerElementConfig = scrollSettings.triggerElement;
        console.log(`\u{1F6A8} [SCRUBBED_ANIMATOR_DEBUG] Processing trigger element config:`, triggerElementConfig);
        const criteria = convertIndividualCriteriaToArray(triggerElementConfig);
        triggerElement = { scope: triggerElementConfig.scope || "self", criteria };
        console.log(`\u{1F6A8} [SCRUBBED_ANIMATOR_DEBUG] Converted trigger element:`, triggerElement);
      }
      let staggerConfig2 = void 0;
      if (propertyControlsSlot.staggerEnabled) {
        if (propertyControlsSlot.scrollStaggerConfig) {
          console.log(`\u{1F3AD} [SCRUBBED_ANIMATOR_DEBUG] Found scroll stagger config:`, propertyControlsSlot.scrollStaggerConfig);
          const config = propertyControlsSlot.scrollStaggerConfig;
          staggerConfig2 = {
            mode: config.mode || "scrubbed",
            scrubWindow: config.scrubWindow || 100,
            // 🚨 NEW: Extract grid stagger properties
            strategy: config.strategy || "linear",
            order: config.order,
            gridMode: config.gridMode,
            gridOrigin: config.gridOrigin,
            gridRowDirection: config.gridRowDirection,
            gridColumnDirection: config.gridColumnDirection,
            gridDistanceMetric: config.gridDistanceMetric,
            gridReverseMode: config.gridReverseMode,
            gridAutoDetect: config.gridAutoDetect,
            gridRows: config.gridRows,
            gridColumns: config.gridColumns
          };
          console.log(`\u{1F3AD} [SCRUBBED_ANIMATOR_DEBUG] Processed stagger config:`, staggerConfig2);
        } else {
          console.warn(`\u{1F3AD} [SCRUBBED_ANIMATOR_DEBUG] Stagger enabled but no scrollStaggerConfig found, using defaults`);
          staggerConfig2 = { mode: "scrubbed", scrubWindow: 100, strategy: "linear" };
        }
      } else {
        console.log(`\u{1F3AD} [SCRUBBED_ANIMATOR_DEBUG] Stagger disabled - no stagger configuration will be applied`);
      }
      scrollConfig = { mode: "scrubbed", scrubbedConfig: { triggerElement, boundaries: convertScrollBoundaries(scrollSettings.boundaries), ...staggerConfig2 && { stagger: staggerConfig2 } } };
    } else {
      console.warn(`\u{1F3AD} [SCRUBBED_ANIMATOR_DEBUG] No scroll settings found for scrubbed mode, using defaults`);
      let staggerConfig2 = void 0;
      if (propertyControlsSlot.staggerEnabled) {
        if (propertyControlsSlot.scrollStaggerConfig) {
          console.log(`\u{1F3AD} [SCRUBBED_ANIMATOR_DEBUG] Found scroll stagger config (no scroll settings):`, propertyControlsSlot.scrollStaggerConfig);
          const config = propertyControlsSlot.scrollStaggerConfig;
          staggerConfig2 = {
            mode: config.mode || "scrubbed",
            scrubWindow: config.scrubWindow || 100,
            // 🚨 NEW: Extract grid stagger properties
            strategy: config.strategy || "linear",
            order: config.order,
            gridMode: config.gridMode,
            gridOrigin: config.gridOrigin,
            gridRowDirection: config.gridRowDirection,
            gridColumnDirection: config.gridColumnDirection,
            gridDistanceMetric: config.gridDistanceMetric,
            gridReverseMode: config.gridReverseMode,
            gridAutoDetect: config.gridAutoDetect,
            gridRows: config.gridRows,
            gridColumns: config.gridColumns
          };
          console.log(`\u{1F3AD} [SCRUBBED_ANIMATOR_DEBUG] Processed stagger config (no scroll settings):`, staggerConfig2);
        } else {
          console.warn(`\u{1F3AD} [SCRUBBED_ANIMATOR_DEBUG] Stagger enabled but no scrollStaggerConfig found (no scroll settings), using defaults`);
          staggerConfig2 = { mode: "scrubbed", scrubWindow: 100, strategy: "linear" };
        }
      } else {
        console.log(`\u{1F3AD} [SCRUBBED_ANIMATOR_DEBUG] Stagger disabled (no scroll settings) - no stagger configuration will be applied`);
      }
      scrollConfig = { mode: "scrubbed", scrubbedConfig: { triggerElement: { scope: "self" }, boundaries: { start: { element: { value: "0px" }, viewport: { value: "100vh" } }, end: { element: { value: "100%" }, viewport: { value: "0vh" } } }, ...staggerConfig2 && { stagger: staggerConfig2 } } };
    }
    console.log(`\u{1F3AD} [SCRUBBED_ANIMATOR_DEBUG] Final scroll config:`, scrollConfig);
  }
  const internalSlot = {
    id: slotId,
    triggers,
    animatedElements,
    animationMode: detectedMode,
    properties: animationProperties,
    // Extract timing configuration
    timing: propertyControlsSlot.timing ? { duration: propertyControlsSlot.timing.duration || 1e3, delay: propertyControlsSlot.timing.delay || 0, easing: propertyControlsSlot.timing.easing || "cubic.inout" } : { duration: 1e3, delay: 0, easing: "cubic.inout" },
    // Add simple stagger configuration
    ...staggerConfig && { staggering: staggerConfig },
    // 🚨 NEW: Add interrupt behavior (default to IMMEDIATE for backward compatibility)
    interruptBehavior: propertyControlsSlot.interruptBehavior || InterruptBehavior.IMMEDIATE,
    // 🔧 Timeline coordination metadata
    totalTimelineDuration: totalDuration,
    // 🎬 NEW: Master timeline for Timeline-First Architecture
    ...masterTimeline && { masterTimeline },
    // 🚀 NEW: Add scroll configuration for scrubbed mode
    ...scrollConfig && { scrollConfig }
  };
  return internalSlot;
}
function convertSlotArray(propertyControlsSlots) {
  if (!Array.isArray(propertyControlsSlots)) {
    throw new Error("propertyControlsSlots must be an array");
  }
  return propertyControlsSlots.map((slot, index) => {
    try {
      return toInternalFormat(slot);
    } catch (error) {
      console.error(`\u{1F504} [AnimationSlotAdapter] Failed to convert slot ${index}:`, error);
      throw new Error(`Failed to convert animation slot at index ${index}: ${error instanceof Error ? error.message : "Unknown error"}`);
    }
  });
}
function expandDistributedProperties(slot, elements) {
  console.log(`\u{1F4CA} [DistributedProperties] Expanding properties for slot ${slot.id} with ${elements.length} elements`);
  if (!elements || elements.length === 0) {
    console.warn(`\u{1F4CA} [DistributedProperties] No elements provided for slot ${slot.id}, returning original slot`);
    return slot;
  }
  if (!slot.properties || slot.properties.length === 0) {
    console.warn(`\u{1F4CA} [DistributedProperties] No properties to expand for slot ${slot.id}, returning original slot`);
    return slot;
  }
  if (elements.length === 1) {
    console.log(`\u{1F4CA} [DistributedProperties] SINGLE ELEMENT DEBUG: Processing slot ${slot.id} with 1 element`);
    console.log(`\u{1F4CA} [DistributedProperties] Element details:`, { tagName: elements[0].tagName, className: elements[0].className, id: elements[0].id });
    console.log(`\u{1F4CA} [DistributedProperties] Properties to process:`, slot.properties.map((p) => ({ property: p.property, hasDistributeFrom: !!p.distributeFrom?.enabled, hasDistributeTo: !!p.distributeTo?.enabled, from: p.from, to: p.to })));
  }
  const processedProperties = [];
  let hasDistributedProperties = false;
  slot.properties.forEach((property, propertyIndex) => {
    const hasDistributedFrom = property.distributeFrom?.enabled === true;
    const hasDistributedTo = property.distributeTo?.enabled === true;
    if (!hasDistributedFrom && !hasDistributedTo) {
      processedProperties.push(property);
      return;
    }
    hasDistributedProperties = true;
    console.log(`\u{1F4CA} [DistributedProperties] Processing distributed property "${property.property}"`);
    try {
      console.log(`\u{1F4CA} [EXPANSION] Processing property "${property.property}":`, { hasDistributedFrom, hasDistributedTo, distributeFrom: property.distributeFrom, distributeTo: property.distributeTo });
      const fromValues = hasDistributedFrom ? distributedPropertyPatternGenerator.generateElementValues(elements, property.distributeFrom, property.from) : elements.map(() => property.from);
      const toValues = hasDistributedTo ? distributedPropertyPatternGenerator.generateElementValues(elements, property.distributeTo, property.to) : elements.map(() => property.to);
      console.log(`\u{1F4CA} [DistributedProperties] Generated values for ${elements.length} elements:`, { property: property.property, fromValues: fromValues.slice(0, 3), toValues: toValues.slice(0, 3) });
      let finalFromValues = fromValues;
      let finalToValues = toValues;
      if (elements.length === 1) {
        console.log(`\u{1F4CA} [DistributedProperties] SINGLE ELEMENT FIX: Ensuring proper values for property "${property.property}":`, { originalFrom: property.from, originalTo: property.to, generatedFromValues: fromValues, generatedToValues: toValues, willUseFrom: fromValues[0] || property.from, willUseTo: toValues[0] || property.to });
        if (hasDistributedFrom && (!fromValues || fromValues.length === 0)) {
          console.warn(`\u{1F4CA} [DistributedProperties] SINGLE ELEMENT WARNING: No from values generated, using fallback`);
          finalFromValues = [property.from];
        }
        if (hasDistributedTo && (!toValues || toValues.length === 0)) {
          console.warn(`\u{1F4CA} [DistributedProperties] SINGLE ELEMENT WARNING: No to values generated, using fallback`);
          finalToValues = [property.to];
        }
      }
      const processedProperty = {
        ...property,
        // Use first element's values as defaults (for compatibility with existing systems)
        from: finalFromValues[0] || property.from,
        to: finalToValues[0] || property.to,
        // Store element-specific values for animation execution to use
        distributedFromValues: finalFromValues,
        distributedToValues: finalToValues,
        // Remove the configuration objects (no longer needed)
        distributeFrom: void 0,
        distributeTo: void 0
      };
      console.log(`\u{1F4CA} [DistributedProperties] Created processed property for "${property.property}":`, { property: property.property, hasDistributedFrom: !!finalFromValues, hasDistributedTo: !!finalToValues, distributedFromValues: finalFromValues, distributedToValues: finalToValues, firstElementFrom: finalFromValues[0], firstElementTo: finalToValues[0], elementCount: elements.length });
      processedProperties.push(processedProperty);
    } catch (error) {
      console.error(`\u{1F4CA} [DistributedProperties] Failed to expand property "${property.property}":`, error);
      const fallbackProperty = { ...property, distributeFrom: void 0, distributeTo: void 0 };
      processedProperties.push(fallbackProperty);
    }
  });
  if (hasDistributedProperties) {
    console.log(`\u{1F4CA} [DistributedProperties] Successfully processed distributed properties for slot ${slot.id}`);
  }
  return { ...slot, properties: processedProperties };
}
function mergeGlobalTimelineSettings(globalConfig, propertyConfig, globalTimelineEnabled) {
  const wantsGlobalSettings = propertyConfig.useGlobalSettings === true;
  const hasGlobalSettings = globalTimelineEnabled && globalConfig;
  let finalDuration;
  let finalEasing;
  let finalSpringConfig;
  if (wantsGlobalSettings && hasGlobalSettings) {
    finalDuration = globalConfig.duration || 0.6;
    finalEasing = globalConfig.easing || "ease";
    finalSpringConfig = globalConfig.springConfig;
  } else {
    finalDuration = propertyConfig.duration || 0.6;
    finalEasing = propertyConfig.easing || "ease";
    finalSpringConfig = propertyConfig.springConfig;
  }
  if (finalSpringConfig && typeof finalSpringConfig === "object") {
    if (Object.keys(finalSpringConfig).length === 0) {
      finalSpringConfig = void 0;
    }
  }
  const finalDelay = propertyConfig.delay || 0;
  return { duration: finalDuration, delay: finalDelay, easing: finalEasing, springConfig: finalSpringConfig };
}
function processWithTimelineArchitecture(propertyControlsSlot, globalTimelineConfig, globalTimelineEnabled) {
  if (propertyControlsSlot.animateProperties && Array.isArray(propertyControlsSlot.animateProperties)) {
    console.log("\u{1F3AF} [NEW APPROACH] Processing animateProperties array:", propertyControlsSlot.animateProperties);
    return processNewPropertyConfigurationArray(propertyControlsSlot, globalTimelineConfig, globalTimelineEnabled);
  }
  if (propertyControlsSlot.activeProperties && Array.isArray(propertyControlsSlot.activeProperties)) {
    console.log("\u{1F504} [LEGACY] Processing activeProperties array (backward compatibility):", propertyControlsSlot.activeProperties);
    return processLegacyActiveProperties(propertyControlsSlot, globalTimelineConfig, globalTimelineEnabled);
  }
  console.warn("\u{1F6A8} [AnimationSlotAdapter] No animateProperties or activeProperties found");
  return { properties: [], totalDuration: 0, masterTimeline: null };
}
function processNewPropertyConfigurationArray(propertyControlsSlot, globalTimelineConfig, globalTimelineEnabled) {
  const animationProperties = [];
  propertyControlsSlot.animateProperties.forEach((propertyConfig, index) => {
    const propertyName = propertyConfig.property;
    if (!propertyName) {
      console.warn(`\u{1F3AF} [NEW APPROACH] Property name missing at index ${index}`);
      return;
    }
    console.log(`\u{1F3AF} [NEW APPROACH] Processing property "${propertyName}":`, propertyConfig);
    const mergedSettings = mergeGlobalTimelineSettings(globalTimelineConfig, propertyConfig, globalTimelineEnabled);
    let distributeFromConfig = void 0;
    let distributeToConfig = void 0;
    if (propertyConfig.useDistributedValues === true) {
      console.log(`\u{1F4CA} [DISTRIBUTED] Processing distributed property "${propertyName}":`, propertyConfig);
      if (propertyConfig.distributedFromConfig) {
        distributeFromConfig = { enabled: true, ...propertyConfig.distributedFromConfig };
        console.log(`\u{1F4CA} [DISTRIBUTED] From config:`, distributeFromConfig);
      }
      if (propertyConfig.distributedToConfig) {
        distributeToConfig = { enabled: true, ...propertyConfig.distributedToConfig };
        console.log(`\u{1F4CA} [DISTRIBUTED] To config:`, distributeToConfig);
      }
    }
    const isDistributedEnabled = distributeFromConfig || distributeToConfig;
    const fromValue = isDistributedEnabled ? propertyConfig.distributedFromPattern || "0" : propertyConfig.from !== void 0 ? propertyConfig.from : "0";
    const toValue = isDistributedEnabled ? propertyConfig.distributedToPattern || "100" : propertyConfig.to !== void 0 ? propertyConfig.to : "100";
    const animationProperty = {
      property: propertyName,
      from: fromValue,
      to: toValue,
      duration: mergedSettings.duration,
      delay: mergedSettings.delay,
      easing: mergedSettings.easing,
      springConfig: mergedSettings.springConfig,
      instanceId: `${propertyName}_${index}`,
      // 📊 FEATURE 3A: Add distributed property configurations if present
      ...distributeFromConfig && { distributeFrom: distributeFromConfig },
      ...distributeToConfig && { distributeTo: distributeToConfig }
    };
    animationProperties.push(animationProperty);
  });
  const builder = new MasterTimelineBuilder();
  const globalSettings = globalTimelineEnabled ? { enabled: true, duration: globalTimelineConfig?.duration, delay: globalTimelineConfig?.delay, easing: globalTimelineConfig?.easing, springConfig: globalTimelineConfig?.springConfig } : void 0;
  const masterTimeline = builder.buildMasterTimeline(animationProperties, globalSettings);
  console.log(`\u{1F3AF} [NEW APPROACH] Successfully processed ${animationProperties.length} properties`);
  return { properties: animationProperties, totalDuration: masterTimeline.totalDuration, masterTimeline };
}
function processLegacyActiveProperties(propertyControlsSlot, globalTimelineConfig, globalTimelineEnabled) {
  const animationProperties = [];
  const propertyCounters = /* @__PURE__ */ new Map();
  const activeProperties = propertyControlsSlot.activeProperties || [];
  activeProperties.forEach((propertyName) => {
    const count = propertyCounters.get(propertyName) || 0;
    const controlId = count === 0 ? propertyName : `${propertyName}_${count}`;
    const propertyConfig = propertyControlsSlot[controlId];
    if (!propertyConfig) {
      console.warn(`\u{1F504} [LEGACY] Property configuration missing for ${controlId}`);
      return;
    }
    const mergedSettings = mergeGlobalTimelineSettings(globalTimelineConfig, propertyConfig, globalTimelineEnabled);
    const distributeFromConfig = extractDistributedPropertyConfig(propertyConfig, propertyName, "From");
    const distributeToConfig = extractDistributedPropertyConfig(propertyConfig, propertyName, "To");
    if (distributeFromConfig || distributeToConfig) {
      console.log(`\u{1F4CA} [LEGACY] Distributed property detected: ${propertyName}`);
    }
    const isDistributedEnabled = distributeFromConfig || distributeToConfig;
    const fromValue = isDistributedEnabled ? "0" : propertyConfig.from !== void 0 ? propertyConfig.from : 0;
    const toValue = isDistributedEnabled ? "100" : propertyConfig.to !== void 0 ? propertyConfig.to : 100;
    const animationProperty = {
      property: propertyName,
      from: fromValue,
      to: toValue,
      unit: propertyConfig.unit,
      duration: mergedSettings.duration,
      delay: mergedSettings.delay,
      easing: mergedSettings.easing,
      springConfig: mergedSettings.springConfig,
      instanceId: controlId,
      // 📊 FEATURE 3A: Add distributed property configurations if present
      ...distributeFromConfig && { distributeFrom: distributeFromConfig },
      ...distributeToConfig && { distributeTo: distributeToConfig }
    };
    animationProperties.push(animationProperty);
    propertyCounters.set(propertyName, count + 1);
  });
  const builder = new MasterTimelineBuilder();
  const globalSettings = globalTimelineEnabled ? { enabled: true, duration: globalTimelineConfig?.duration, delay: globalTimelineConfig?.delay, easing: globalTimelineConfig?.easing, springConfig: globalTimelineConfig?.springConfig } : void 0;
  const masterTimeline = builder.buildMasterTimeline(animationProperties, globalSettings);
  console.log(`\u{1F504} [LEGACY] Successfully processed ${animationProperties.length} properties`);
  return { properties: animationProperties, totalDuration: masterTimeline.totalDuration, masterTimeline };
}
function convertToElementSelection(scope, criteria, depth) {
  return { scope, criteria: criteria && criteria.length > 0 ? criteria : void 0, depth: depth || ScopeDepth.DIRECT };
}

// http-url:https://framerusercontent.com/modules/81jriKkfEzvsd443iYXX/U1V6GMNgAjoau2LkXXqj/ScrollDirectionDetector.js
function _define_property15(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var ScrollDirectionDetector = class {
  /**
  * Start scroll direction detection
  *
  * @param callback - Function to call when direction changes
  * @returns Cleanup function to stop detection
  */
  startDetection(callback) {
    this.callbacks.add(callback);
    if (!this.isActive) {
      this.setupUnifiedScrollListener();
      this.isActive = true;
    } else {
    }
    console.log(`\u{1F30A} [ScrollDirectionDetector] Started detection for callback (${this.callbacks.size} total)`);
    return () => {
      this.callbacks.delete(callback);
      console.log(`\u{1F30A} [ScrollDirectionDetector] Removed callback (${this.callbacks.size} remaining)`);
      if (this.callbacks.size === 0) {
        this.stopDetection();
      }
    };
  }
  /**
  * Stop all scroll direction detection
  */
  stopDetection() {
    if (!this.isActive)
      return;
    this.isActive = false;
    this.callbacks.clear();
    this.currentDirection = null;
    this.hasDetectedInitialDirection = false;
    this.velocityHistory = [];
    if (this.debounceTimer) {
      clearTimeout(this.debounceTimer);
      this.debounceTimer = null;
    }
    if (this.scrollListenerCleanup) {
      this.scrollListenerCleanup();
      this.scrollListenerCleanup = null;
      console.log(`\u{1F30A} [ScrollDirectionDetector] Unregistered from UnifiedScrollManager`);
    }
  }
  /**
  * Get the current scroll direction
  */
  getCurrentDirection() {
    return this.currentDirection;
  }
  /**
  * Check if detector is currently active
  */
  isDetectionActive() {
    return this.isActive;
  }
  /**
  * Reset all internal state for fresh detection
  *
  * @description
  * This method resets all internal state to ensure fresh detection
  * on component re-renders. Critical for React environments where
  * singleton instances persist across re-renders.
  */
  reset() {
    console.log(`\u{1F504} [ScrollDirectionDetector] Resetting state for fresh detection`);
    if (this.isActive) {
      this.stopDetection();
    }
    this.currentDirection = null;
    this.hasDetectedInitialDirection = false;
    this.lastScrollY = 0;
    this.lastTimestamp = 0;
    this.velocityHistory = [];
    if (this.debounceTimer) {
      clearTimeout(this.debounceTimer);
      this.debounceTimer = null;
    }
    console.log(`\u2705 [ScrollDirectionDetector] State reset complete`);
  }
  /**
  * Setup performant scroll event listener through UnifiedScrollManager
  */
  setupUnifiedScrollListener() {
    if (this.scrollListenerCleanup) {
      return;
    }
    this.lastScrollY = __dai_window.scrollY;
    this.lastTimestamp = performance.now();
    this.velocityHistory = [];
    this.currentDirection = null;
    this.hasDetectedInitialDirection = false;
    const scrollUpdateHandler = () => {
      if (!this.isActive || this.callbacks.size === 0) {
        return;
      }
      const currentTime = performance.now();
      const currentScrollY = __dai_window.scrollY;
      const deltaY = currentScrollY - this.lastScrollY;
      const deltaTime = Math.max(currentTime - this.lastTimestamp, 1);
      const velocity = deltaY / deltaTime;
      this.velocityHistory.push({ velocity, timestamp: currentTime });
      const cutoffTime = currentTime - this.config.sampleRate * 3;
      this.velocityHistory = this.velocityHistory.filter((sample) => sample.timestamp > cutoffTime);
      const averageVelocity = this.velocityHistory.length > 0 ? this.velocityHistory.reduce((sum, sample) => sum + sample.velocity, 0) / this.velocityHistory.length : velocity;
      if (Math.abs(averageVelocity) < this.config.threshold / 1e3) {
        this.lastScrollY = currentScrollY;
        this.lastTimestamp = currentTime;
        return;
      }
      const newDirection = averageVelocity > 0 ? "down" : "up";
      if (!this.hasDetectedInitialDirection) {
        this.currentDirection = newDirection;
        this.hasDetectedInitialDirection = true;
      } else if (newDirection !== this.currentDirection) {
        this.currentDirection = newDirection;
        this.fireDirectionChange(newDirection);
        console.log(`\u{1F30A} [ScrollDirectionDetector] Direction changed to: ${newDirection} (velocity: ${averageVelocity.toFixed(3)})`);
      } else {
      }
      this.lastScrollY = currentScrollY;
      this.lastTimestamp = currentTime;
    };
    this.scrollListenerCleanup = unifiedScrollManager.registerAnimation(
      "scroll-direction-detector",
      scrollUpdateHandler,
      "high"
      // High priority for direction detection
    );
    console.log(`\u{1F30A} [ScrollDirectionDetector] Setup complete with UnifiedScrollManager coordination (eliminates duplicate scroll listeners)`);
  }
  /**
      * Fire direction change callbacks with debouncing
      */
  fireDirectionChange(direction) {
    if (this.debounceTimer) {
      clearTimeout(this.debounceTimer);
    }
    this.debounceTimer = setTimeout(() => {
      console.log(`\u{1F30A} [ScrollDirectionDetector] Firing direction change: ${direction} to ${this.callbacks.size} callbacks`);
      this.callbacks.forEach((callback) => {
        try {
          callback(direction);
        } catch (error) {
          console.error("\u{1F30A} [ScrollDirectionDetector] Error in callback:", error);
        }
      });
    }, this.config.debounceDelay);
  }
  constructor(config = {}) {
    _define_property15(this, "config", void 0);
    _define_property15(this, "callbacks", /* @__PURE__ */ new Set());
    _define_property15(this, "currentDirection", null);
    _define_property15(this, "debounceTimer", null);
    _define_property15(this, "isActive", false);
    _define_property15(
      this,
      "hasDetectedInitialDirection",
      false
      // Track if we've seen the first direction
    );
    _define_property15(this, "scrollListenerCleanup", null);
    _define_property15(this, "lastScrollY", 0);
    _define_property15(this, "lastTimestamp", 0);
    _define_property15(this, "velocityHistory", []);
    this.config = { threshold: 50, debounceDelay: 100, sampleRate: 16, ...config };
    console.log(`\u{1F30A} [ScrollDirectionDetector] Initialized with config:`, this.config);
  }
};
var globalScrollDirectionDetector = new ScrollDirectionDetector({ threshold: 100, debounceDelay: 150, sampleRate: 16 });

// http-url:https://framerusercontent.com/modules/aPfszNbVr8nCP158XDuM/V4PQFsXdWgwq2rxjuyvF/LoopRunner.js
function _define_property16(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var LoopRunner = class {
  /**
  * 🚨 CRITICAL FIX: Non-blocking event-driven loop execution
  *
  * Instead of using a blocking while loop, we now use setTimeout to schedule
  * each iteration asynchronously, allowing the browser to maintain responsiveness.
  */
  start() {
    console.log(`\u{1F504} [LoopRunner] Starting non-blocking loop: ${this.iterations} iterations with ${this.delay}ms delay`);
    this.stopped = false;
    this.currentIteration = 0;
    this.scheduleNextIteration();
  }
  /**
  * 🔄 NON-BLOCKING: Schedule the next iteration using setTimeout
  * This yields control to the browser between each iteration
  */
  scheduleNextIteration() {
    if (this.stopped) {
      console.log(`\u{1F504} [LoopRunner] Stopped by user request at iteration ${this.currentIteration}`);
      return;
    }
    if (this.currentIteration >= this.iterations) {
      console.log(`\u{1F504} [LoopRunner] Completed all ${this.iterations} iterations`);
      return;
    }
    if (this.currentIteration >= this.MAX_ITERATIONS) {
      console.error(`\u{1F6A8} [LoopRunner] SAFETY STOP: Hit maximum iteration limit (${this.MAX_ITERATIONS})`);
      this.stop();
      return;
    }
    this.executeIteration().then(() => {
      this.timeoutId = __dai_window.setTimeout(() => {
        this.currentIteration++;
        this.scheduleNextIteration();
      }, this.delay);
    }).catch((error) => {
      console.error(`\u{1F6A8} [LoopRunner] Error in iteration ${this.currentIteration}:`, error);
      this.timeoutId = __dai_window.setTimeout(() => {
        this.currentIteration++;
        this.scheduleNextIteration();
      }, this.delay);
    });
  }
  /**
  * Execute a single iteration
  */
  async executeIteration() {
    console.log(`\u{1F504} [LoopRunner] Executing iteration ${this.currentIteration + 1}/${this.iterations}`);
    try {
      await this.play();
      console.log(`\u{1F504} [LoopRunner] Iteration ${this.currentIteration + 1} completed successfully`);
    } catch (error) {
      console.error(`\u{1F504} [LoopRunner] Iteration ${this.currentIteration + 1} failed:`, error);
    }
  }
  /**
     * Stops the loop and cleans up any pending timeouts
     */
  stop() {
    console.log(`\u{1F504} [LoopRunner] Stopping loop at iteration ${this.currentIteration}`);
    this.stopped = true;
    if (this.timeoutId !== null) {
      clearTimeout(this.timeoutId);
      this.timeoutId = null;
    }
  }
  /**
  * Get current loop status for debugging
  */
  getStatus() {
    return { currentIteration: this.currentIteration, totalIterations: this.iterations, stopped: this.stopped, hasPendingTimeout: this.timeoutId !== null };
  }
  constructor(config) {
    _define_property16(this, "iterations", void 0);
    _define_property16(this, "delay", void 0);
    _define_property16(this, "play", void 0);
    _define_property16(this, "stopped", false);
    _define_property16(this, "currentIteration", 0);
    _define_property16(this, "timeoutId", null);
    _define_property16(
      this,
      "MAX_ITERATIONS",
      1e4
      // Safety limit even for "infinite" loops
    );
    _define_property16(
      this,
      "MIN_DELAY",
      16
      // Reference: 16ms = 60fps (no longer enforced as minimum)
    );
    this.iterations = config.iterations;
    this.delay = Math.max(config.delay, 0);
    this.play = config.play;
    if (this.iterations === Infinity) {
      console.warn(`\u{1F504} [LoopRunner] Infinite iterations capped at ${this.MAX_ITERATIONS} for safety`);
      this.iterations = this.MAX_ITERATIONS;
    }
  }
};

// http-url:https://framerusercontent.com/modules/1XLFKAxTW4A2AsDlyUVU/J3BW2Fpxxs88754jPZEf/PingPongRunner.js
function _define_property17(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var PingPongRunner = class {
  /**
  * 🚨 CRITICAL FIX: Non-blocking event-driven ping-pong execution
  *
  * Instead of using a blocking while loop, we now use setTimeout to schedule
  * each phase asynchronously, allowing the browser to maintain responsiveness.
  */
  start() {
    console.log(`\u{1F3D3} [PingPongRunner] Starting non-blocking ping-pong: ${this.cycles} cycles with ${this.delay}ms delay`);
    this.stopped = false;
    this.currentCycle = 0;
    this.currentPhase = "forward";
    this.scheduleNextPhase();
  }
  /**
  * 🔄 NON-BLOCKING: Schedule the next phase using setTimeout
  * This yields control to the browser between each phase
  */
  scheduleNextPhase() {
    if (this.stopped) {
      console.log(`\u{1F3D3} [PingPongRunner] Stopped by user request at cycle ${this.currentCycle}, phase: ${this.currentPhase}`);
      return;
    }
    if (this.currentCycle >= this.cycles) {
      console.log(`\u{1F3D3} [PingPongRunner] Completed all ${this.cycles} cycles`);
      return;
    }
    if (this.currentCycle >= this.MAX_CYCLES) {
      console.error(`\u{1F6A8} [PingPongRunner] SAFETY STOP: Hit maximum cycle limit (${this.MAX_CYCLES})`);
      this.stop();
      return;
    }
    this.executeCurrentPhase().then(() => {
      this.timeoutId = __dai_window.setTimeout(() => {
        this.advancePhase();
        this.scheduleNextPhase();
      }, this.delay);
    }).catch((error) => {
      console.error(`\u{1F6A8} [PingPongRunner] Error in cycle ${this.currentCycle}, phase ${this.currentPhase}:`, error);
      this.timeoutId = __dai_window.setTimeout(() => {
        this.advancePhase();
        this.scheduleNextPhase();
      }, this.delay);
    });
  }
  /**
  * Execute the current phase (forward or backward)
  */
  async executeCurrentPhase() {
    const phaseLabel = this.currentPhase === "forward" ? "Forward" : "Backward";
    console.log(`\u{1F3D3} [PingPongRunner] Executing ${phaseLabel} phase of cycle ${this.currentCycle + 1}/${this.cycles}`);
    try {
      if (this.currentPhase === "forward") {
        await this.playForward();
      } else {
        await this.playBackward();
      }
      console.log(`\u{1F3D3} [PingPongRunner] ${phaseLabel} phase completed successfully`);
    } catch (error) {
      console.error(`\u{1F3D3} [PingPongRunner] ${phaseLabel} phase failed:`, error);
    }
  }
  /**
     * Advance to the next phase or cycle
     */
  advancePhase() {
    if (this.currentPhase === "forward") {
      this.currentPhase = "backward";
    } else {
      this.currentPhase = "forward";
      this.currentCycle++;
    }
  }
  /**
  * Stops the ping-pong and cleans up any pending timeouts
  */
  stop() {
    console.log(`\u{1F3D3} [PingPongRunner] Stopping ping-pong at cycle ${this.currentCycle}, phase: ${this.currentPhase}`);
    this.stopped = true;
    if (this.timeoutId !== null) {
      clearTimeout(this.timeoutId);
      this.timeoutId = null;
    }
  }
  /**
  * Get current ping-pong status for debugging
  */
  getStatus() {
    return { currentCycle: this.currentCycle, totalCycles: this.cycles, currentPhase: this.currentPhase, stopped: this.stopped, hasPendingTimeout: this.timeoutId !== null };
  }
  constructor(config) {
    _define_property17(this, "cycles", void 0);
    _define_property17(this, "delay", void 0);
    _define_property17(this, "playForward", void 0);
    _define_property17(this, "playBackward", void 0);
    _define_property17(this, "stopped", false);
    _define_property17(this, "currentCycle", 0);
    _define_property17(this, "currentPhase", "forward");
    _define_property17(this, "timeoutId", null);
    _define_property17(
      this,
      "MAX_CYCLES",
      5e3
      // Safety limit even for "infinite" cycles
    );
    _define_property17(
      this,
      "MIN_DELAY",
      16
      // Reference: 16ms = 60fps (no longer enforced as minimum)
    );
    this.cycles = config.cycles;
    this.delay = Math.max(config.delay, 0);
    this.playForward = config.playForward;
    this.playBackward = config.playBackward;
    if (this.cycles === Infinity) {
      console.warn(`\u{1F3D3} [PingPongRunner] Infinite cycles capped at ${this.MAX_CYCLES} for safety`);
      this.cycles = this.MAX_CYCLES;
    }
  }
};

// http-url:https://framerusercontent.com/modules/IQBLSlr1BEG6ZPowWT3m/pAUlBmDQdBPPxI6xbtNt/DelayedTriggerManager.js
function _define_property18(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var DelayedTriggerManager = class {
  /**
  * Determine if a trigger should execute based on the delayed trigger configuration
  *
  * @param slotId - Unique identifier for the animation slot
  * @param config - Delayed trigger configuration
  * @returns Object with execution decision and target behavior
  */
  shouldExecuteTrigger(slotId, config) {
    let slotState = this.slotStates.get(slotId);
    if (!slotState) {
      slotState = { triggerCount: 0, patternPosition: 0, config };
      this.slotStates.set(slotId, slotState);
    }
    slotState.triggerCount++;
    const mode = config.mode || "simple";
    const targetBehavior = config.behavior || AnimationBehavior.PLAY_FORWARD;
    if (mode === "simple") {
      return this.handleSimpleMode(slotState, config, targetBehavior);
    } else if (mode === "pattern") {
      return this.handlePatternMode(slotState, config, targetBehavior);
    } else {
      console.warn(`\u{1F3AF} [DelayedTriggerManager] Unknown mode: ${mode}, falling back to simple`);
      return this.handleSimpleMode(slotState, config, targetBehavior);
    }
  }
  /**
  * Handle simple skip count mode
  */
  handleSimpleMode(slotState, config, targetBehavior) {
    const skipCount = config.skipCount || 3;
    const shouldExecute = slotState.triggerCount > skipCount;
    if (shouldExecute) {
      slotState.triggerCount = 0;
      console.log(`\u{1F3AF} [DelayedTriggerManager] SIMPLE: Executing after ${skipCount} skips`);
    }
    const debugInfo = `Simple mode: trigger ${slotState.triggerCount}/${skipCount + 1}, execute: ${shouldExecute}`;
    return { shouldExecute, targetBehavior, debugInfo };
  }
  /**
  * Handle advanced pattern mode
  */
  handlePatternMode(slotState, config, targetBehavior) {
    if (!slotState.parsedPattern || slotState.config.pattern !== config.pattern) {
      slotState.parsedPattern = this.parsePattern(config.pattern || "0,0,1");
      slotState.config = config;
      slotState.patternPosition = 0;
      console.log(`\u{1F3AF} [DelayedTriggerManager] PATTERN: Parsed pattern:`, slotState.parsedPattern);
    }
    const pattern = slotState.parsedPattern;
    const currentPatternValue = pattern[slotState.patternPosition];
    const shouldExecute = currentPatternValue === 1;
    console.log(`\u{1F3AF} [DelayedTriggerManager] PATTERN: Position ${slotState.patternPosition}/${pattern.length - 1}, value: ${currentPatternValue}, execute: ${shouldExecute}`);
    slotState.patternPosition++;
    if (slotState.patternPosition >= pattern.length) {
      slotState.patternPosition = 0;
      console.log(`\u{1F3AF} [DelayedTriggerManager] PATTERN: Restarting pattern cycle`);
    }
    const debugInfo = `Pattern mode: ${config.pattern}, position: ${slotState.patternPosition - 1}, value: ${currentPatternValue}, execute: ${shouldExecute}`;
    return { shouldExecute, targetBehavior, debugInfo };
  }
  /**
  * Parse pattern string into number array
  *
  * @param pattern - Pattern string like "0,0,1,0,1" or "0 0 1 0 1"
  * @returns Array of 0s and 1s
  */
  parsePattern(pattern) {
    try {
      const cleanPattern = pattern.replace(/\s+/g, ",").replace(/,+/g, ",");
      const parts = cleanPattern.split(",").map((part) => part.trim()).filter((part) => part.length > 0);
      const parsed = parts.map((part) => {
        const num = parseInt(part, 10);
        if (num !== 0 && num !== 1) {
          console.warn(`\u{1F3AF} [DelayedTriggerManager] Invalid pattern value: ${part}, treating as 0`);
          return 0;
        }
        return num;
      });
      if (parsed.length === 0) {
        console.warn(`\u{1F3AF} [DelayedTriggerManager] Empty pattern, using default: [0,0,1]`);
        return [0, 0, 1];
      }
      console.log(`\u{1F3AF} [DelayedTriggerManager] Parsed pattern "${pattern}" as:`, parsed);
      return parsed;
    } catch (error) {
      console.error(`\u{1F3AF} [DelayedTriggerManager] Error parsing pattern "${pattern}":`, error);
      return [0, 0, 1];
    }
  }
  /**
    * Reset trigger state for a specific slot
    */
  resetSlot(slotId) {
    console.log(`\u{1F3AF} [DelayedTriggerManager] Resetting state for slot: ${slotId}`);
    this.slotStates.delete(slotId);
  }
  /**
  * Get current state for debugging
  */
  getSlotState(slotId) {
    return this.slotStates.get(slotId);
  }
  /**
  * Clean up all slot states
  */
  cleanup() {
    console.log(`\u{1F3AF} [DelayedTriggerManager] Cleaning up all slot states`);
    this.slotStates.clear();
  }
  constructor() {
    _define_property18(this, "slotStates", /* @__PURE__ */ new Map());
  }
};

// http-url:https://framerusercontent.com/modules/6ZXvZ3X1r0kyIbuXvDvP/PxiHaaZhnAr9YV2YtXOJ/EventAnimationCoordinator.js
function _define_property19(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var EventAnimationCoordinator = class {
  /**
  * Execute event-driven animation with behavior support
  *
  * COPIED FROM: AnimationOrchestrator.handleEventAnimation()
  *
  * 🔧 REFACTOR R3.1: Now handles element finding and initial values internally
  * 🎨 FEATURE 2B: Made async to support text processing integration
  */
  async executeEventAnimation(slot, parentElement, showInitialValuesInCanvas = false, textElementCallbacks) {
    console.log(`\u{1F39B}\uFE0F [EventAnimationCoordinator] Executing event animation for slot: ${slot.id}`);
    const cleanupFunctions = [];
    const showInitial = showInitialValuesInCanvas;
    try {
      const animatedElements = await this.findAnimatedElements(slot, parentElement, textElementCallbacks);
      console.log(`\u{1F50D} [EventAnimationCoordinator] Found ${animatedElements.length} animated elements for slot: ${slot.id}`);
      if (animatedElements.length === 0) {
        console.warn(`\u{1F39B}\uFE0F [EventAnimationCoordinator] No animated elements for slot: ${slot.id}`);
        return () => {
        };
      }
      if (textElementCallbacks?.addRetargetCallback) {
        const unregister = textElementCallbacks.addRetargetCallback(() => {
          this.findAnimatedElements(slot, parentElement, textElementCallbacks).then((newElements) => {
            animatedElements.splice(0, animatedElements.length, ...newElements);
            try {
              const state = animationStateManager.getState(slot.id);
              const currentProgress = state ? state.progress : 0;
              if (slot.masterTimeline) {
                newElements.forEach((el) => {
                  this.masterTimelinePlayer.seekToProgress(slot.masterTimeline, el, currentProgress);
                });
              }
            } catch (err) {
              console.error("Progress re-apply failed during retarget", err);
            }
          }).catch((err) => console.error("Retargeting failed", err));
        });
        if (typeof unregister === "function") {
          cleanupFunctions.push(unregister);
        }
      }
      const expandedSlot = expandDistributedProperties(slot, animatedElements);
      console.log(`\u{1F4CA} [EventAnimationCoordinator] Using ${expandedSlot === slot ? "original" : "expanded"} slot for execution`);
      this.initialValueCoordinator.applyInitialValues(expandedSlot, animatedElements, showInitial);
      const hasScrollDirectionTrigger = expandedSlot.triggers.some((trigger) => trigger.event === EventType.SCROLL_DIRECTION_CHANGE);
      if (hasScrollDirectionTrigger) {
        console.log(`\u{1F680} [EventAnimationCoordinator] PERFORMANCE: Scroll direction detection needed for slot ${expandedSlot.id}`);
        globalScrollDirectionDetector.reset();
      }
      expandedSlot.triggers.forEach((trigger, triggerIndex) => {
        if (trigger.event !== EventType.SCROLL) {
          const eventCleanup = this.setupTriggerListeners(trigger, parentElement, expandedSlot, animatedElements);
          cleanupFunctions.push(...eventCleanup);
        } else {
          const scrollCleanup = this.setupScrollTriggerListeners(trigger, parentElement, expandedSlot, "shared", animatedElements);
          cleanupFunctions.push(...scrollCleanup);
        }
      });
      return () => {
        cleanupFunctions.forEach((cleanup2) => cleanup2());
        this.stopLoopRunner(expandedSlot.id);
        this.stopPingPongRunner(expandedSlot.id);
        this.delayedTriggerManager.resetSlot(expandedSlot.id);
        animationStateManager.cleanup(expandedSlot.id);
      };
    } catch (error) {
      console.error(`\u{1F39B}\uFE0F [EventAnimationCoordinator] Error setting up event animation:`, error);
      return () => {
      };
    }
  }
  /**
  * Find animated elements based on slot configuration
  *
  * 🔧 REFACTOR R3.1: Moved from AnimationOrchestrator
  * 🎨 FEATURE 2B: Added text processing integration (Phase 1)
  */
  async findAnimatedElements(slot, parentElement, textElementCallbacks) {
    const allAnimatedElements = [];
    console.log(`\u{1F50D} [EventAnimationCoordinator] Looking for animated elements. Slot has ${slot.animatedElements.length} configs`);
    for (const animatedElementConfig of slot.animatedElements) {
      try {
        console.log(`\u{1F50D} [EventAnimationCoordinator] Processing config:`, { scope: animatedElementConfig.selection.scope, hasTextProcessing: !!animatedElementConfig.textProcessing?.enabled });
        const elements = findAnimatedElementsWithCriteria(
          parentElement,
          animatedElementConfig.selection,
          false
          // Normal debug logging
        );
        console.log(`\u{1F50D} [EventAnimationCoordinator] Found ${elements.length} base elements for this config`);
        if (animatedElementConfig.textProcessing?.enabled) {
          console.log(`\u{1F50D} [EventAnimationCoordinator] Text processing enabled for ${elements.length} elements`);
          for (const element of elements) {
            try {
              const animateBy = animatedElementConfig.textProcessing.animateBy;
              let existingSplitSelector;
              switch (animateBy) {
                case "lines":
                  existingSplitSelector = ".fame-text-line";
                  break;
                case "characters":
                  existingSplitSelector = ".fame-text-char";
                  break;
                case "words":
                  existingSplitSelector = ".fame-text-word";
                  break;
                default:
                  existingSplitSelector = ".fame-text-line, .fame-text-word, .fame-text-char";
                  console.warn(`\u{1F6A8} [EventAnimationCoordinator] Unknown animateBy value: ${animateBy}`);
              }
              console.log(`\u{1F50D} [EventAnimationCoordinator] Processing text element for splitting:`, { elementId: element.getAttribute("data-fame-element-id") || element.id || "no-id", animateBy });
              const existingSplitElements = Array.from(element.querySelectorAll(existingSplitSelector));
              if (existingSplitElements.length > 0) {
                const shouldForceResplit = this.shouldForceResplitForStyleChanges(element, existingSplitElements);
                if (shouldForceResplit) {
                  console.log(`\u{1F504} [EventAnimationCoordinator] \u{1F6A8} FORCING RE-SPLIT: Style changes detected, existing elements may be stale`);
                  await this.forceResplitTextElement(element, animatedElementConfig.textProcessing);
                  const newSplitElements = Array.from(element.querySelectorAll(existingSplitSelector));
                  if (newSplitElements.length > 0) {
                    console.log(`\u{1F504} [EventAnimationCoordinator] \u2705 Re-split complete: ${newSplitElements.length} fresh ${animateBy} elements`);
                    allAnimatedElements.push(...newSplitElements);
                    if (textElementCallbacks?.updateElementRefs) {
                      textElementCallbacks.updateElementRefs(newSplitElements, animatedElementConfig.textProcessing.splitType);
                    }
                  } else {
                    console.warn(`\u{1F504} [EventAnimationCoordinator] Re-split failed, falling back to original element`);
                    allAnimatedElements.push(element);
                  }
                } else {
                  console.log(`\u{1F527} [EventAnimationCoordinator] \u2705 Reusing ${existingSplitElements.length} existing ${animateBy} elements (${existingSplitSelector}) - no style changes detected`);
                  allAnimatedElements.push(...existingSplitElements);
                }
                continue;
              }
              console.log(`\u{1F50D} [EventAnimationCoordinator] No existing split elements found, calling TextSplitter.splitText()`);
              const result = await TextSplitter.getInstance().splitText(element, animatedElementConfig.textProcessing);
              console.log(`\u{1F50D} [EventAnimationCoordinator] TextSplitter result:`, { success: result.success, splitElementsCount: result.splitElements?.length || 0, error: result.error });
              if (result.success && result.splitElements.length > 0) {
                if (textElementCallbacks?.updateElementRefs) {
                  textElementCallbacks.updateElementRefs(result.splitElements, animatedElementConfig.textProcessing.splitType);
                }
                if (textElementCallbacks?.registerForSplitCallbacks) {
                  const elementId = element.getAttribute("data-fame-element-id") || element.id;
                  if (elementId) {
                    textElementCallbacks.registerForSplitCallbacks(elementId);
                  }
                }
                const connectedElements = result.splitElements.filter((el) => el.isConnected && document.contains(el));
                allAnimatedElements.push(...connectedElements);
              } else {
                allAnimatedElements.push(element);
              }
            } catch (textError) {
              console.error(`Text processing failed for element:`, textError);
              allAnimatedElements.push(element);
            }
          }
        } else {
          allAnimatedElements.push(...elements);
        }
      } catch (error) {
        console.error(`Failed to find elements for config:`, error);
      }
    }
    console.log(`\u{1F50D} [EventAnimationCoordinator] \u2705 Total animated elements found: ${allAnimatedElements.length}`);
    allAnimatedElements.forEach((element, index) => {
      element.setAttribute("data-fame-element-index", index.toString());
    });
    return allAnimatedElements;
  }
  /**
  * Setup event listeners for trigger elements
  * 🔥 FIXED: Multiple animations can now share the same trigger element + event type
  */
  setupTriggerListeners(trigger, parentElement, slot, animatedElements) {
    const cleanupFunctions = [];
    if (trigger.event === EventType.SCROLL_DIRECTION_CHANGE) {
      const elementResolver2 = () => {
        const currentElements = this.getCurrentAnimatedElements(slot.id, parentElement, slot);
        return currentElements;
      };
      const slotCallback = () => {
        const currentAnimatedElements = elementResolver2();
        if (currentAnimatedElements.length === 0) {
          console.warn(`\u{1F504} [EventAnimationCoordinator] No current animated elements found for slot ${slot.id} - skipping animation`);
          return;
        }
        this.behaviorCoordinator.handleBehaviorDecision(trigger, slot, currentAnimatedElements);
      };
      const scrollDirectionCleanup = globalScrollDirectionDetector.startDetection((direction) => {
        console.log(`\u{1F30A} [EventAnimationCoordinator] Scroll direction changed to: ${direction}`);
        slotCallback();
      });
      console.log(`\u{1F3AF} [EventAnimationCoordinator] \u2705 Added GLOBAL scroll direction detection for ${trigger.event} - slot: ${slot.id}`);
      cleanupFunctions.push(scrollDirectionCleanup);
      return cleanupFunctions;
    }
    const triggerElements = findTriggerElementsWithCriteria(parentElement, trigger.selection);
    if (triggerElements.length === 0) {
      console.warn(`\u{1F39B}\uFE0F [EventAnimationCoordinator] No trigger elements found`);
      return [];
    }
    const elementResolver = () => {
      const currentElements = this.getCurrentAnimatedElements(slot.id, parentElement, slot);
      console.log(`\u{1F504} [EventAnimationCoordinator] Dynamic element resolution: found ${currentElements.length} current elements for slot ${slot.id}`);
      return currentElements;
    };
    triggerElements.forEach((triggerElement) => {
      const sharedElementKey = `__fame_listeners_${trigger.event}`;
      if (!triggerElement[sharedElementKey]) {
        triggerElement[sharedElementKey] = { listeners: /* @__PURE__ */ new Map(), domEventListener: null };
      }
      const sharedRegistry = triggerElement[sharedElementKey];
      const existingSlotListener = sharedRegistry.listeners.get(slot.id);
      if (existingSlotListener) {
        const existingElementIds = existingSlotListener.elementIds;
        const currentElementIds2 = animatedElements.map((el) => el.getAttribute("data-fame-element-id") || el.id || "no-id");
        if (existingElementIds.length === currentElementIds2.length && existingElementIds.every((id, index) => id === currentElementIds2[index])) {
          console.log(`\u{1F504} [EventAnimationCoordinator] Skipping duplicate listener - same elements for slot: ${slot.id}`);
          return;
        } else {
          console.log(`\u{1F504} [EventAnimationCoordinator] Elements changed, updating listener for slot: ${slot.id}`);
          sharedRegistry.listeners.delete(slot.id);
        }
      }
      const slotCallback = () => {
        const currentAnimatedElements = elementResolver();
        if (currentAnimatedElements.length === 0) {
          console.warn(`\u{1F504} [EventAnimationCoordinator] No current animated elements found for slot ${slot.id} - skipping animation`);
          return;
        }
        if (trigger.behavior === AnimationBehavior.DELAYED_TRIGGER) {
          const config = trigger.delayedTriggerConfig;
          if (!config) {
            console.warn(`\u{1F3AF} [EventAnimationCoordinator] DELAYED_TRIGGER behavior requires delayedTriggerConfig`);
            return;
          }
          const result = this.delayedTriggerManager.shouldExecuteTrigger(slot.id, config);
          console.log(`\u{1F3AF} [EventAnimationCoordinator] DELAYED_TRIGGER: ${result.debugInfo}`);
          if (!result.shouldExecute) {
            console.log(`\u{1F3AF} [EventAnimationCoordinator] DELAYED_TRIGGER: Ignoring trigger (pattern/skip logic)`);
            return;
          }
          const executionTrigger = { ...trigger, behavior: result.targetBehavior };
          console.log(`\u{1F3AF} [EventAnimationCoordinator] DELAYED_TRIGGER: Executing with behavior: ${result.targetBehavior}`);
          this.behaviorCoordinator.handleBehaviorDecision(executionTrigger, slot, currentAnimatedElements);
          return;
        }
        if (trigger.behavior === AnimationBehavior.START_LOOP) {
          this.stopLoopRunner(slot.id);
          const config = trigger.loopConfig || { iterations: 3, delay: 500, behavior: AnimationBehavior.PLAY_FORWARD };
          let safeIterations = config.iterations;
          if (config.iterations >= 999) {
            safeIterations = 1e3;
            console.log(`\u{1F504} [EventAnimationCoordinator] User set ${config.iterations} iterations - treating as infinite (1000 iterations)`);
          } else {
            safeIterations = Math.min(config.iterations, 1e3);
          }
          const safeDelay = config.delay !== void 0 ? Math.max(config.delay, 0) : 500;
          console.log(`\u{1F504} [EventAnimationCoordinator] Starting LoopRunner with user config: ${safeIterations} iterations (user set: ${config.iterations}), ${safeDelay}ms delay`);
          const play = async () => {
            this.behaviorCoordinator.handleBehaviorDecision({ ...trigger, behavior: config.behavior, overrideState: true }, slot, currentAnimatedElements);
            await animationStateManager.waitForCompletion(slot.id);
          };
          const runner = new LoopRunner({ iterations: safeIterations, delay: safeDelay, play });
          this.loopRunners.set(slot.id, runner);
          runner.start();
          console.log(`[EventAnimationCoordinator] Started LoopRunner for slot ${slot.id}`);
          return;
        } else if (trigger.behavior === AnimationBehavior.STOP_LOOP) {
          this.stopLoopRunner(slot.id);
          console.log(`[EventAnimationCoordinator] Stopped LoopRunner for slot ${slot.id}`);
          return;
        } else if (trigger.behavior === AnimationBehavior.START_PING_PONG) {
          this.stopPingPongRunner(slot.id);
          const config = trigger.pingPongConfig || { cycles: 3, delay: 500, reverseMode: trigger.reverseMode || ReverseMode.EASING_PRESERVATION };
          let safeCycles = config.cycles;
          if (config.cycles >= 999) {
            safeCycles = 1e3;
            console.log(`\u{1F3D3} [EventAnimationCoordinator] User set ${config.cycles} cycles - treating as infinite (1000 cycles)`);
          } else {
            safeCycles = Math.min(config.cycles, 1e3);
          }
          const safeDelay = config.delay !== void 0 ? Math.max(config.delay, 0) : 500;
          console.log(`\u{1F3D3} [EventAnimationCoordinator] Starting PingPongRunner with user config: ${safeCycles} cycles (user set: ${config.cycles}), ${safeDelay}ms delay`);
          const playForward = async () => {
            this.behaviorCoordinator.handleBehaviorDecision({ ...trigger, behavior: AnimationBehavior.PLAY_FORWARD, overrideState: true }, slot, currentAnimatedElements);
            await animationStateManager.waitForCompletion(slot.id);
          };
          const playBackward = async () => {
            this.behaviorCoordinator.handleBehaviorDecision({ ...trigger, behavior: AnimationBehavior.PLAY_BACKWARD, reverseMode: config.reverseMode, overrideState: true }, slot, currentAnimatedElements);
            await animationStateManager.waitForCompletion(slot.id);
          };
          const runner = new PingPongRunner({ cycles: safeCycles, delay: safeDelay, playForward, playBackward });
          this.pingPongRunners.set(slot.id, runner);
          runner.start();
          console.log(`[EventAnimationCoordinator] Started PingPongRunner for slot ${slot.id}`);
          return;
        } else if (trigger.behavior === AnimationBehavior.STOP_PING_PONG) {
          this.stopPingPongRunner(slot.id);
          console.log(`[EventAnimationCoordinator] Stopped PingPongRunner for slot ${slot.id}`);
          return;
        }
        this.behaviorCoordinator.handleBehaviorDecision(trigger, slot, currentAnimatedElements);
      };
      const currentElementIds = animatedElements.map((el) => el.getAttribute("data-fame-element-id") || el.id || "no-id");
      sharedRegistry.listeners.set(slot.id, { slotId: slot.id, callback: slotCallback, elementIds: currentElementIds, timestamp: Date.now() });
      if (!sharedRegistry.domEventListener) {
        console.log(`\u{1F3AF} [EventAnimationCoordinator] Creating shared DOM listener for ${trigger.event} on element`);
        const sharedDomListener = () => {
          console.log(`\u{1F3AF} [EventAnimationCoordinator] Shared ${trigger.event} event fired, triggering ${sharedRegistry.listeners.size} animations`);
          sharedRegistry.listeners.forEach((listenerData, slotId) => {
            try {
              listenerData.callback();
            } catch (error) {
              console.error(`\u{1F3AF} [EventAnimationCoordinator] Error triggering animation for slot ${slotId}:`, error);
            }
          });
        };
        if (trigger.event === EventType.LOAD) {
          console.log(`\u{1F3AF} [EventAnimationCoordinator] Setting up LOAD event for slot: ${slot.id}`);
          if (EnvironmentDetector.isCanvas()) {
            console.log(`\u{1F3A8} [EventAnimationCoordinator] Load animations disabled in Framer canvas environment`);
            return;
          }
          const loadTriggerDelay = 100;
          const loadTrigger = () => {
            console.log(`\u{1F3AF} [EventAnimationCoordinator] Load trigger fired for slot: ${slot.id}`);
            sharedDomListener();
          };
          setTimeout(loadTrigger, loadTriggerDelay);
          sharedRegistry.domEventListener = loadTrigger;
          console.log(`\u{1F3AF} [EventAnimationCoordinator] \u2705 Added load event trigger for ${trigger.event} - initial slot: ${slot.id}`);
        } else {
          triggerElement.addEventListener(trigger.event, sharedDomListener);
          sharedRegistry.domEventListener = sharedDomListener;
          console.log(`\u{1F3AF} [EventAnimationCoordinator] \u2705 Added shared DOM listener for ${trigger.event} - initial slot: ${slot.id}`);
        }
      } else {
        console.log(`\u{1F3AF} [EventAnimationCoordinator] \u2705 Reusing shared DOM listener for ${trigger.event} - added slot: ${slot.id} (${sharedRegistry.listeners.size} total)`);
      }
      cleanupFunctions.push(() => {
        const registry = triggerElement[sharedElementKey];
        if (registry) {
          registry.listeners.delete(slot.id);
          console.log(`\u{1F3AF} [EventAnimationCoordinator] Removed slot ${slot.id} from shared listener (${registry.listeners.size} remaining)`);
          if (registry.listeners.size === 0 && registry.domEventListener) {
            if (trigger.event === EventType.LOAD) {
              console.log(`\u{1F3AF} [EventAnimationCoordinator] Load event cleanup - timeout-based trigger (no DOM cleanup needed)`);
            } else {
              triggerElement.removeEventListener(trigger.event, registry.domEventListener);
              console.log(`\u{1F3AF} [EventAnimationCoordinator] Removed shared DOM listener for ${trigger.event} - no more slots listening`);
            }
            delete triggerElement[sharedElementKey];
          }
        }
      });
    });
    return cleanupFunctions;
  }
  /**
  * 🚀 CLEAN: Setup scroll trigger listeners - simplified delegation to ScrollAnimator
  */
  setupScrollTriggerListeners(trigger, parentElement, slot, mode, animatedElements) {
    const cleanupFunctions = [];
    if (EnvironmentDetector.isCanvas()) {
      console.log(`\u{1F3A8} [EventAnimationCoordinator] Scroll animations disabled in Framer canvas environment`);
      return [];
    }
    const scrollThresholds = trigger.scrollThresholds;
    if (!scrollThresholds) {
      console.warn(`\u{1F30A} [EventAnimationCoordinator] No scroll thresholds found for trigger: ${trigger.event}`);
      return [];
    }
    const scrollConfig = { elementStart: scrollThresholds.elementStart, viewportThreshold: scrollThresholds.viewportThreshold, thresholdCrossedBackward: scrollThresholds.thresholdCrossedBackward !== "none" };
    console.log(`\u{1F30A} [EventAnimationCoordinator] Delegating scroll animation to ScrollAnimator:`, { mode, scrollConfig, slotId: slot.id });
    if (mode === "individual") {
      console.log(`\u{1F30A} [EventAnimationCoordinator] Individual mode (SELF-SCROLL): Setting up per-element scroll triggers`);
      const triggerElements = findTriggerElementsWithCriteria(parentElement, trigger.selection);
      if (triggerElements.length === 0) {
        console.warn(`\u{1F30A} [EventAnimationCoordinator] No trigger elements found for SELF mode \u2013 falling back to raw trigger handling`);
        if (animatedElements && animatedElements.length > 0) {
          animatedElements.forEach((element, index) => {
            const elementSpecificSlotId = `${slot.id}-self-element-${index}`;
            const animationCallback = (scrollDirection) => {
              console.log(`\u{1F30A} [EventAnimationCoordinator] Fallback individual scroll callback fired for element ${index}, direction: ${scrollDirection}`);
              let effectiveBehavior = trigger.behavior;
              if (scrollDirection) {
                console.log(`\u{1F30A} [EventAnimationCoordinator] Fallback mode - Scroll direction: ${scrollDirection}, original behavior: ${trigger.behavior}`);
                if (trigger.behavior === AnimationBehavior.TOGGLE || trigger.behavior === AnimationBehavior.PLAY_FORWARD) {
                  if (scrollDirection === "forward") {
                    effectiveBehavior = AnimationBehavior.PLAY_FORWARD;
                  } else if (scrollDirection === "backward") {
                    effectiveBehavior = AnimationBehavior.PLAY_BACKWARD;
                  }
                }
                console.log(`\u{1F30A} [EventAnimationCoordinator] Fallback mode - Effective behavior: ${effectiveBehavior}`);
              }
              const triggerForExecution = { ...trigger, behavior: effectiveBehavior, reverseMode: trigger.reverseMode };
              const elementSpecificSlot = { ...slot, id: elementSpecificSlotId };
              this.behaviorCoordinator.handleBehaviorDecision(triggerForExecution, elementSpecificSlot, [element]);
            };
            const cleanup2 = scrollAnimator.animateOnScroll({ ...slot, id: elementSpecificSlotId }, element, element, scrollConfig, animationCallback);
            cleanupFunctions.push(cleanup2);
          });
        }
      } else {
        triggerElements.forEach((triggerElement, index) => {
          const elementGroup = animatedElements?.filter((el) => triggerElement.contains(el) || triggerElement === el) || [];
          if (elementGroup.length === 0) {
            console.warn(`\u{1F30A} [EventAnimationCoordinator] No animated elements found for trigger ${index}, using trigger as animated element`);
            elementGroup.push(triggerElement);
          }
          const elementSpecificSlotId = `${slot.id}-trigger-${index}`;
          const animationCallback = (scrollDirection) => {
            console.log(`\u{1F30A} [EventAnimationCoordinator] Individual scroll callback fired for trigger ${index}, elements: ${elementGroup.length}, direction: ${scrollDirection}`);
            let effectiveBehavior = trigger.behavior;
            if (scrollDirection) {
              console.log(`\u{1F30A} [EventAnimationCoordinator] Individual mode - Scroll direction: ${scrollDirection}, original behavior: ${trigger.behavior}`);
              if (trigger.behavior === AnimationBehavior.TOGGLE || trigger.behavior === AnimationBehavior.PLAY_FORWARD) {
                if (scrollDirection === "forward") {
                  effectiveBehavior = AnimationBehavior.PLAY_FORWARD;
                } else if (scrollDirection === "backward") {
                  effectiveBehavior = AnimationBehavior.PLAY_BACKWARD;
                }
              }
              console.log(`\u{1F30A} [EventAnimationCoordinator] Individual mode - Effective behavior: ${effectiveBehavior}`);
            }
            const triggerForExecution = { ...trigger, behavior: effectiveBehavior, reverseMode: trigger.reverseMode };
            const elementSpecificSlot = { ...slot, id: elementSpecificSlotId };
            this.behaviorCoordinator.handleBehaviorDecision(triggerForExecution, elementSpecificSlot, elementGroup);
          };
          const cleanup2 = scrollAnimator.animateOnScroll({ ...slot, id: elementSpecificSlotId }, triggerElement, triggerElement, scrollConfig, animationCallback);
          cleanupFunctions.push(cleanup2);
        });
      }
    } else {
      const triggerElements = findTriggerElementsWithCriteria(parentElement, trigger.selection);
      const elements = animatedElements || [];
      if (triggerElements.length > 0 && elements.length > 0) {
        const triggerElement = triggerElements[0];
        const animationCallback = (scrollDirection) => {
          let effectiveBehavior = trigger.behavior;
          if (scrollDirection) {
            console.log(`\u{1F30A} [EventAnimationCoordinator] Scroll direction: ${scrollDirection}, original behavior: ${trigger.behavior}`);
            if (trigger.behavior === AnimationBehavior.TOGGLE || trigger.behavior === AnimationBehavior.PLAY_FORWARD) {
              if (scrollDirection === "forward") {
                effectiveBehavior = AnimationBehavior.PLAY_FORWARD;
              } else if (scrollDirection === "backward") {
                effectiveBehavior = AnimationBehavior.PLAY_BACKWARD;
              }
            }
            console.log(`\u{1F30A} [EventAnimationCoordinator] Effective behavior: ${effectiveBehavior}`);
          }
          const triggerForExecution = { ...trigger, behavior: effectiveBehavior, reverseMode: trigger.reverseMode };
          this.behaviorCoordinator.handleBehaviorDecision(triggerForExecution, slot, elements);
        };
        const cleanup2 = scrollAnimator.animateOnScroll(slot, triggerElement, triggerElement, scrollConfig, animationCallback);
        cleanupFunctions.push(cleanup2);
      }
    }
    return cleanupFunctions;
  }
  /**
  * 🔥 NEW: Dynamic element resolution method
  * This method always returns the current animated elements for a slot,
  * ensuring that event listeners work correctly even after DOM changes.
  */
  getCurrentAnimatedElements(slotId, parentElement, slot) {
    try {
      const allElements = [];
      for (const animatedElementConfig of slot.animatedElements) {
        if (animatedElementConfig.textProcessing?.enabled) {
          const elements = findAnimatedElementsWithCriteria(
            parentElement,
            animatedElementConfig.selection,
            false
            // Disable debug logging for performance
          );
          for (const element of elements) {
            const animateBy = animatedElementConfig.textProcessing.animateBy;
            let selector;
            switch (animateBy) {
              case "lines":
                selector = ".fame-text-line";
                break;
              case "characters":
                selector = ".fame-text-char";
                break;
              case "words":
                selector = ".fame-text-word";
                break;
              default:
                selector = ".fame-text-line, .fame-text-word, .fame-text-char";
            }
            const splitElements = Array.from(element.querySelectorAll(selector));
            if (splitElements.length > 0) {
              allElements.push(...splitElements);
            } else {
              allElements.push(element);
            }
          }
        } else {
          const elements = findAnimatedElementsWithCriteria(parentElement, animatedElementConfig.selection, false);
          allElements.push(...elements);
        }
      }
      return allElements;
    } catch (error) {
      console.error(`\u{1F504} [EventAnimationCoordinator] Error resolving current elements:`, error);
      return [];
    }
  }
  /**
  * Execute timeline animation for multiple elements
  */
  async executeTimelineForElements(slot, animatedElements, behavior, startProgress, reverseMode) {
    if (!slot.masterTimeline) {
      console.warn("No master timeline found for slot:", slot.id);
      return;
    }
    const behaviorEnum = behavior;
    console.log(`\u{1F50D} [EventAnimationCoordinator] executeTimelineForElements - behavior: "${behavior}", slot: ${slot.id}`);
    let actualBehaviorForExecution = behavior;
    if (behaviorEnum === "playForwardAndReverse" || behaviorEnum === "playBackwardAndReverse") {
      if (!this.reverseBehaviorPhases.has(slot.id)) {
        console.log(`\u{1F504} [EventAnimationCoordinator] Tracking reverse behavior Phase 1: ${behaviorEnum}`);
        this.reverseBehaviorPhases.set(slot.id, { originalBehavior: behaviorEnum, currentPhase: 1, slot, animatedElements, reverseMode, totalElements: animatedElements.length, phase1CompletedElements: /* @__PURE__ */ new Set(), phase2CompletedElements: /* @__PURE__ */ new Set(), phase2Started: false });
        if (behaviorEnum === "playForwardAndReverse") {
          actualBehaviorForExecution = "playForward";
        } else if (behaviorEnum === "playBackwardAndReverse") {
          actualBehaviorForExecution = "playBackward";
        }
        console.log(`\u{1F504} [EventAnimationCoordinator] Converting reverse behavior to single-phase: ${actualBehaviorForExecution}`);
      } else {
        console.log(`\u{1F504} [EventAnimationCoordinator] Already tracking reverse behavior for slot: ${slot.id}`);
      }
    } else {
      console.log(`\u{1F504} [EventAnimationCoordinator] Not a reverse behavior: ${behavior}`);
    }
    if (slot.staggering?.enabled) {
      const executeCallback = (element, delay) => {
        console.log(`\u{1F6A8} [EventAnimationCoordinator] executeCallback called:`, { elementTagName: element.tagName, elementClasses: element.className, elementTextContent: element.textContent?.slice(0, 20) + "...", delay, behavior: actualBehaviorForExecution, slotId: slot.id, willExecuteIn: `${delay}ms` });
        setTimeout(() => {
          console.log(`\u{1F6A8} [EventAnimationCoordinator] setTimeout fired after ${delay}ms delay, calling executeTimelineForElement`);
          const cleanup2 = this.executeTimelineForElement(slot, element, actualBehaviorForExecution, startProgress, reverseMode);
          animationStateManager.registerAnimationCleanup(slot.id, cleanup2);
        }, delay);
      };
      if (slot.staggering.strategy === "grid") {
        this.staggerCoordinator.executeWithGridStagger(slot, animatedElements, actualBehaviorForExecution, startProgress, reverseMode, executeCallback);
      } else {
        this.staggerCoordinator.executeWithLinearStagger(slot, animatedElements, actualBehaviorForExecution, startProgress, reverseMode, executeCallback);
      }
    } else {
      animatedElements.forEach((animatedElement) => {
        const cleanup2 = this.executeTimelineForElement(slot, animatedElement, actualBehaviorForExecution, startProgress, reverseMode);
        animationStateManager.registerAnimationCleanup(slot.id, cleanup2);
      });
    }
  }
  /**
  * Execute timeline animation for a single element
  *
  * COPIED FROM: AnimationOrchestrator.executeWithTimelineArchitecture()
  */
  executeTimelineForElement(slot, animatedElement, behavior, startProgress, reverseMode) {
    let elementSpecificSlot = slot;
    const hasDistributedProperties = slot.properties.some((prop) => prop.distributedFromValues || prop.distributedToValues);
    if (hasDistributedProperties) {
      const elementIndex = this.getElementIndex(animatedElement, slot);
      if (elementIndex !== -1) {
        console.log(`\u{1F4CA} [EventAnimationCoordinator] Using distributed values for element ${elementIndex}`);
        const elementSpecificProperties = slot.properties.map((property) => {
          if (property.distributedFromValues || property.distributedToValues) {
            const elementFrom = property.distributedFromValues?.[elementIndex] ?? property.from;
            const elementTo = property.distributedToValues?.[elementIndex] ?? property.to;
            console.log(`\u{1F4CA} [EventAnimationCoordinator] Property ${property.property} for element ${elementIndex}: from=${elementFrom}, to=${elementTo}`);
            return {
              ...property,
              from: elementFrom,
              to: elementTo,
              // Remove distributed arrays to avoid confusion
              distributedFromValues: void 0,
              distributedToValues: void 0
            };
          }
          return property;
        });
        elementSpecificSlot = { ...slot, properties: elementSpecificProperties };
        const builder = new MasterTimelineBuilder();
        const elementMasterTimeline = builder.buildMasterTimeline(elementSpecificProperties);
        elementSpecificSlot.masterTimeline = elementMasterTimeline;
        console.log(`\u{1F4CA} [EventAnimationCoordinator] Created element-specific timeline for element ${elementIndex}`);
      } else {
        console.warn(`\u{1F4CA} [EventAnimationCoordinator] Could not determine element index for distributed properties`);
      }
    }
    console.log(`\u{1F6A8} [EventAnimationCoordinator] executeTimelineForElement called for element:`, { slotId: slot.id, elementTagName: animatedElement.tagName, elementClasses: animatedElement.className, elementTextContent: animatedElement.textContent?.slice(0, 30) + "...", behavior, startProgress, hasSlotMasterTimeline: !!slot.masterTimeline, hasElementSpecificMasterTimeline: !!elementSpecificSlot.masterTimeline, slotProperties: slot.properties?.length || 0 });
    const masterTimeline = elementSpecificSlot.masterTimeline;
    if (!masterTimeline) {
      console.error(`\u{1F6A8} [EventAnimationCoordinator] \u274C No master timeline found for slot: ${slot.id}`, { originalSlotHasTimeline: !!slot.masterTimeline, elementSpecificSlotHasTimeline: !!elementSpecificSlot.masterTimeline, propertiesCount: slot.properties?.length || 0, properties: slot.properties?.map((p) => ({ property: p.property, from: p.from, to: p.to })) });
      return () => {
      };
    }
    const progressCallback = (progress) => {
      animationStateManager.updateProgress(slot.id, progress, AnimationStatus.RUNNING);
    };
    const executeBehaviorAsync = async () => {
      try {
        const behaviorEnum = behavior;
        animationStateManager.updateProgress(slot.id, startProgress, AnimationStatus.RUNNING);
        console.log(`\u{1F6A8} [EventAnimationCoordinator] Calling this.masterTimelinePlayer.executeBehavior now...`);
        let finalExpectedProgress;
        try {
          finalExpectedProgress = await this.masterTimelinePlayer.executeBehavior(behaviorEnum, masterTimeline, animatedElement, startProgress, progressCallback, reverseMode || ReverseMode.EASING_PRESERVATION);
          console.log(`\u{1F6A8} [EventAnimationCoordinator] MasterTimelinePlayer.executeBehavior completed with finalExpectedProgress: ${finalExpectedProgress}`);
        } catch (executeBehaviorError) {
          console.error(`\u{1F6A8} [EventAnimationCoordinator] ERROR in MasterTimelinePlayer.executeBehavior:`, { error: executeBehaviorError, errorMessage: executeBehaviorError?.message, errorStack: executeBehaviorError?.stack, behavior, behaviorEnum, elementTagName: animatedElement.tagName, masterTimelineExists: !!masterTimeline });
          throw executeBehaviorError;
        }
        const phaseInfo = this.reverseBehaviorPhases.get(slot.id);
        if (phaseInfo && (phaseInfo.originalBehavior === "playForwardAndReverse" || phaseInfo.originalBehavior === "playBackwardAndReverse")) {
          this.handleReverseBehaviorElementCompletion(slot.id, animatedElement, finalExpectedProgress);
        } else {
          animationStateManager.updateProgress(slot.id, finalExpectedProgress, AnimationStatus.COMPLETED);
          animationStateManager.updateTarget(slot.id, finalExpectedProgress);
          this.behaviorCoordinator.executeQueuedIntentIfExists(slot.id);
        }
      } catch (error) {
        console.error(`\u{1F6A8} [EventAnimationCoordinator] Timeline execution error:`, error);
        const errorState = animationStateManager.getState(slot.id);
        const errorProgress = errorState ? errorState.progress : startProgress;
        animationStateManager.updateProgress(slot.id, errorProgress, AnimationStatus.COMPLETED);
        animationStateManager.updateTarget(slot.id, errorProgress);
        this.reverseBehaviorPhases.delete(slot.id);
      }
    };
    executeBehaviorAsync();
    return () => {
      if (this.masterTimelinePlayer.isPlaying(animatedElement)) {
        this.masterTimelinePlayer.stopElement(animatedElement);
      }
    };
  }
  // 🔄 NEW: Handle Phase 2 of reverse behaviors with proper stagger coordination
  /**
       * Handle automatic Phase 2 for reverse behaviors (PLAY_FORWARD_AND_REVERSE, PLAY_BACKWARD_AND_REVERSE)
       * This ensures Phase 2 uses the correct directional stagger order
       */
  handleReverseBehaviorPhase2(slotId, currentProgress) {
    const phaseInfo = this.reverseBehaviorPhases.get(slotId);
    if (!phaseInfo) {
      console.warn(`\u{1F504} [EventAnimationCoordinator] No phase info found for reverse behavior Phase 2: ${slotId}`);
      return;
    }
    if (phaseInfo.currentPhase !== 1) {
      console.warn(`\u{1F504} [EventAnimationCoordinator] Phase 2 called but current phase is: ${phaseInfo.currentPhase}`);
      return;
    }
    phaseInfo.currentPhase = 2;
    this.reverseBehaviorPhases.set(slotId, phaseInfo);
    let phase2Behavior;
    let targetProgress;
    let phase2StartProgress;
    if (phaseInfo.originalBehavior === "playForwardAndReverse") {
      phase2Behavior = "playBackward";
      targetProgress = 0;
      phase2StartProgress = 1;
    } else if (phaseInfo.originalBehavior === "playBackwardAndReverse") {
      phase2Behavior = "playForward";
      targetProgress = 1;
      phase2StartProgress = 0;
    } else {
      console.warn(`\u{1F504} [EventAnimationCoordinator] Unknown reverse behavior: ${phaseInfo.originalBehavior}`);
      this.reverseBehaviorPhases.delete(slotId);
      return;
    }
    this.executeTimelineForElements(phaseInfo.slot, phaseInfo.animatedElements, phase2Behavior, phase2StartProgress, phaseInfo.reverseMode).catch((error) => {
      console.error(`\u{1F6A8} [EventAnimationCoordinator] Phase 2 execution error:`, error);
    });
  }
  /**
  * 🎯 NEW: Handle individual element completion for reverse behaviors
  * Implements group-based phase completion tracking to prevent conflicts
  */
  handleReverseBehaviorElementCompletion(slotId, element, finalProgress) {
    const phaseInfo = this.reverseBehaviorPhases.get(slotId);
    if (!phaseInfo) {
      console.warn(`\u{1F504} [EventAnimationCoordinator] No phase info found for element completion: ${slotId}`);
      return;
    }
    if (phaseInfo.currentPhase === 1) {
      phaseInfo.phase1CompletedElements.add(element);
      const phase1Complete = phaseInfo.phase1CompletedElements.size === phaseInfo.totalElements;
      if (phase1Complete && !phaseInfo.phase2Started) {
        phaseInfo.phase2Started = true;
        this.reverseBehaviorPhases.set(slotId, phaseInfo);
        animationStateManager.updateProgress(slotId, finalProgress, AnimationStatus.RUNNING);
        animationStateManager.updateTarget(slotId, finalProgress);
        this.handleReverseBehaviorPhase2(slotId, finalProgress);
      }
    } else if (phaseInfo.currentPhase === 2) {
      phaseInfo.phase2CompletedElements.add(element);
      const phase2Complete = phaseInfo.phase2CompletedElements.size === phaseInfo.totalElements;
      if (phase2Complete) {
        animationStateManager.updateProgress(slotId, finalProgress, AnimationStatus.COMPLETED);
        animationStateManager.updateTarget(slotId, finalProgress);
        this.markReverseBehaviorComplete(slotId);
        this.behaviorCoordinator.executeQueuedIntentIfExists(slotId);
      }
    }
  }
  /**
  * Mark completion of reverse behavior phases
  */
  markReverseBehaviorComplete(slotId) {
    const phaseInfo = this.reverseBehaviorPhases.get(slotId);
    if (phaseInfo) {
      this.reverseBehaviorPhases.delete(slotId);
    }
  }
  /**
  * 📊 FEATURE 3A: Helper function to determine element index for distributed properties
  *
  * @description
  * Finds the index of the current element in the original elements array.
  * This is needed to map distributed values to the correct element.
  *
  * @param element - The element to find the index for
  * @param slot - The animation slot (not used currently, but available for future logic)
  * @returns Element index or -1 if not found
  */
  getElementIndex(element, slot) {
    const indexAttr = element.getAttribute("data-fame-element-index");
    if (indexAttr !== null) {
      const index = parseInt(indexAttr, 10);
      if (!isNaN(index)) {
        return index;
      }
    }
    const parent = element.parentElement;
    if (parent) {
      const siblings = Array.from(parent.children);
      const index = siblings.indexOf(element);
      if (index !== -1) {
        return index;
      }
    }
    console.warn(`\u{1F4CA} [EventAnimationCoordinator] Could not determine element index, using 0`);
    return 0;
  }
  /**
  * 🔥 NEW: Detect if existing split elements should be re-created due to style changes
  * This addresses the core issue where existing elements become stale after breakpoint style changes
  */
  shouldForceResplitForStyleChanges(parentElement, existingSplitElements) {
    try {
      const parentStyleTimestamp = parentElement.getAttribute("data-fame-style-timestamp");
      const splitTimestamp = existingSplitElements[0]?.getAttribute("data-fame-split-timestamp");
      if (parentStyleTimestamp && splitTimestamp) {
        const parentTime = parseInt(parentStyleTimestamp);
        const splitTime = parseInt(splitTimestamp);
        if (parentTime > splitTime) {
          console.log(`\u{1F504} [EventAnimationCoordinator] Style timestamp mismatch: parent(${parentTime}) > split(${splitTime})`);
          return true;
        }
      }
      const hasFramerStyleAttrs = parentElement.hasAttribute("style") && (parentElement.style.opacity !== "" || parentElement.style.color !== "" || parentElement.style.fontSize !== "" || parentElement.style.transform !== "");
      const firstSplitElement = existingSplitElements[0];
      if (firstSplitElement) {
        const hasAnimationSetup = firstSplitElement.style.willChange || firstSplitElement.style.transformOrigin || firstSplitElement.hasAttribute("data-fame-element-id");
        if (!hasAnimationSetup) {
          console.log(`\u{1F504} [EventAnimationCoordinator] Missing animation setup on existing split elements`);
          return true;
        }
      }
      const recentMutationIndicator = document.body.getAttribute("data-framer-mutation-timestamp");
      if (recentMutationIndicator) {
        const mutationTime = parseInt(recentMutationIndicator);
        const now = Date.now();
        if (now - mutationTime < 1e3) {
          console.log(`\u{1F504} [EventAnimationCoordinator] Recent DOM mutations detected, forcing re-split for safety`);
          return true;
        }
      }
      if (hasFramerStyleAttrs) {
        console.log(`\u{1F504} [EventAnimationCoordinator] Framer style attributes detected on parent, forcing re-split`);
        return true;
      }
      return false;
    } catch (error) {
      console.warn(`\u{1F504} [EventAnimationCoordinator] Error checking style changes, defaulting to re-split:`, error);
      return true;
    }
  }
  /**
    * 🔥 NEW: Force re-splitting of a text element by cleaning up and re-creating split elements
    */
  async forceResplitTextElement(element, textProcessingConfig) {
    try {
      console.log(`\u{1F504} [EventAnimationCoordinator] Force re-splitting text element:`, { elementId: element.getAttribute("data-fame-element-id") || element.id, currentChildren: element.children.length });
      const textSplitter = TextSplitter.getInstance();
      const cleanupSuccess = textSplitter.cleanupSplitText(element);
      if (!cleanupSuccess) {
        console.warn(`\u{1F504} [EventAnimationCoordinator] Cleanup failed, proceeding anyway`);
      }
      element.setAttribute("data-fame-style-timestamp", Date.now().toString());
      const result = await textSplitter.splitText(element, textProcessingConfig);
      if (!result.success) {
        console.error(`\u{1F504} [EventAnimationCoordinator] Force re-split failed:`, result.error);
        throw new Error(`Re-split failed: ${result.error}`);
      }
      if (result.splitElements) {
        result.splitElements.forEach((splitEl) => {
          splitEl.setAttribute("data-fame-split-timestamp", Date.now().toString());
        });
      }
      console.log(`\u{1F504} [EventAnimationCoordinator] \u2705 Force re-split completed: ${result.splitElements?.length || 0} new elements`);
    } catch (error) {
      console.error(`\u{1F504} [EventAnimationCoordinator] Force re-split error:`, error);
      throw error;
    }
  }
  /**
    * 🎯 NEW: Map reverse behavior string to AnimationBehavior enum
    */
  mapReverseBehaviorToAnimationBehavior(reverseBehavior) {
    switch (reverseBehavior) {
      case "playReverse":
        return AnimationBehavior.PLAY_BACKWARD;
      case "playForward":
        return AnimationBehavior.PLAY_FORWARD;
      case "toggle":
        return AnimationBehavior.TOGGLE;
      case "none":
        return AnimationBehavior.PLAY_ONCE;
      default:
        console.warn(`\u{1F6A8} [EventAnimationCoordinator] Unknown reverse behavior: ${reverseBehavior}, defaulting to PLAY_ONCE`);
        return AnimationBehavior.PLAY_ONCE;
    }
  }
  // Add stop helpers
  stopLoopRunner(slotId) {
    const runner = this.loopRunners.get(slotId);
    if (runner)
      runner.stop();
    this.loopRunners.delete(slotId);
  }
  stopPingPongRunner(slotId) {
    const runner = this.pingPongRunners.get(slotId);
    if (runner)
      runner.stop();
    this.pingPongRunners.delete(slotId);
  }
  constructor() {
    _define_property19(this, "masterTimelinePlayer", void 0);
    _define_property19(this, "initialValueCoordinator", void 0);
    _define_property19(this, "staggerCoordinator", void 0);
    _define_property19(this, "behaviorCoordinator", void 0);
    _define_property19(this, "reverseBehaviorPhases", /* @__PURE__ */ new Map());
    _define_property19(this, "loopRunners", /* @__PURE__ */ new Map());
    _define_property19(this, "pingPongRunners", /* @__PURE__ */ new Map());
    _define_property19(this, "delayedTriggerManager", void 0);
    this.masterTimelinePlayer = new MasterTimelinePlayer();
    this.initialValueCoordinator = new InitialValueCoordinator();
    this.staggerCoordinator = new StaggerCoordinator();
    this.delayedTriggerManager = new DelayedTriggerManager();
    const animationExecutor = async (slot, animatedElements, behavior, startProgress, reverseMode) => {
      await this.executeTimelineForElements(slot, animatedElements, behavior, startProgress, reverseMode);
    };
    this.behaviorCoordinator = new BehaviorCoordinator(animationExecutor);
  }
};

// http-url:https://framerusercontent.com/modules/2Eej4IWfagQtSNzkuqA1/YSCXZ8tqrqPvVOkcshZu/TimelineCache.js
function _define_property20(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var TimelineCache = class _TimelineCache {
  /**
  * Get singleton instance
  */
  static getInstance(config) {
    if (!_TimelineCache.instance) {
      _TimelineCache.instance = new _TimelineCache(config);
    }
    return _TimelineCache.instance;
  }
  /**
  * Get or create timeline from cache
  *
  * @param properties - Animation properties to build timeline from
  * @param factory - Factory function to create timeline if not cached
  * @param slotId - Animation slot ID for cache isolation
  * @returns Cached or newly created timeline
  */
  getOrCreateTimeline(properties, factory, slotId) {
    const startTime = performance.now();
    const signature = this.generatePropertySignature(properties, slotId);
    const cached = this.cache.get(signature);
    if (cached && this.isValidCacheEntry(cached)) {
      cached.lastAccessed = Date.now();
      this.metrics.hits++;
      this.metrics.totalLookups++;
      const lookupTime2 = performance.now() - startTime;
      this.updateAverageLookupTime(lookupTime2);
      console.log(`\u{1F3AC} [TimelineCache] \u2705 Cache HIT for signature: ${signature.substring(0, 16)}...`);
      return cached.timeline;
    }
    this.metrics.misses++;
    this.metrics.totalLookups++;
    console.log(`\u{1F3AC} [TimelineCache] \u274C Cache MISS for signature: ${signature.substring(0, 16)}... Creating new timeline`);
    const timeline = factory();
    this.storeInCache(signature, timeline);
    const lookupTime = performance.now() - startTime;
    this.updateAverageLookupTime(lookupTime);
    return timeline;
  }
  /**
  * Generate property signature for cache key
  *
  * @description
  * Creates a deterministic hash from property configurations and slot ID
  * that uniquely identifies a timeline configuration per animation slot.
  */
  generatePropertySignature(properties, slotId) {
    const sortedProps = [...properties].sort((a, b) => a.property.localeCompare(b.property));
    const signatureData = sortedProps.map((prop) => ({
      property: prop.property,
      from: prop.from,
      to: prop.to,
      duration: prop.duration,
      delay: prop.delay,
      easing: prop.easing,
      unit: prop.unit,
      // Include distributed property signatures
      distributedFrom: prop.distributedFromValues ? prop.distributedFromValues.join(",") : "",
      distributedTo: prop.distributedToValues ? prop.distributedToValues.join(",") : ""
    }));
    const signatureWithSlot = { slotId: slotId || "global", properties: signatureData };
    const signatureString = JSON.stringify(signatureWithSlot);
    return this.simpleHash(signatureString);
  }
  /**
  * Simple hash function for signature generation
  */
  simpleHash(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash = hash & hash;
    }
    return Math.abs(hash).toString(16);
  }
  /**
  * Check if cache entry is still valid
  */
  isValidCacheEntry(entry) {
    const now = Date.now();
    const age = now - entry.createdAt;
    return age < this.config.ttlMs;
  }
  /**
  * Store timeline in cache with LRU eviction
  */
  storeInCache(signature, timeline) {
    const now = Date.now();
    if (this.cache.size >= this.config.maxCacheSize) {
      this.evictLRUEntries();
    }
    this.cache.set(signature, { timeline, signature, lastAccessed: now, createdAt: now });
    console.log(`\u{1F3AC} [TimelineCache] Stored timeline with signature: ${signature.substring(0, 16)}... (${this.cache.size}/${this.config.maxCacheSize})`);
  }
  /**
  * Evict least recently used entries
  */
  evictLRUEntries() {
    const entries = Array.from(this.cache.entries());
    entries.sort((a, b) => a[1].lastAccessed - b[1].lastAccessed);
    const toRemove = Math.max(1, Math.floor(entries.length * 0.25));
    for (let i = 0; i < toRemove; i++) {
      const [signature] = entries[i];
      this.cache.delete(signature);
      this.metrics.evictions++;
    }
    console.log(`\u{1F3AC} [TimelineCache] Evicted ${toRemove} LRU entries`);
  }
  /**
  * Update average lookup time metric
  */
  updateAverageLookupTime(lookupTime) {
    if (!this.config.enableTracking)
      return;
    const alpha = 0.1;
    this.metrics.averageLookupTime = this.metrics.averageLookupTime * (1 - alpha) + lookupTime * alpha;
  }
  /**
  * Clear cache (useful for testing or memory cleanup)
  */
  clear() {
    this.cache.clear();
    console.log("\u{1F3AC} [TimelineCache] Cache cleared");
  }
  /**
  * Get cache performance metrics
  */
  getMetrics() {
    const hitRate = this.metrics.totalLookups > 0 ? this.metrics.hits / this.metrics.totalLookups : 0;
    return { ...this.metrics, cacheSize: this.cache.size, hitRate: Math.round(hitRate * 100) / 100 };
  }
  /**
  * Reset metrics (useful for testing)
  */
  resetMetrics() {
    this.metrics = { hits: 0, misses: 0, evictions: 0, totalLookups: 0, averageLookupTime: 0 };
  }
  constructor(config = {}) {
    _define_property20(this, "cache", /* @__PURE__ */ new Map());
    _define_property20(this, "config", void 0);
    _define_property20(this, "metrics", void 0);
    this.config = { maxCacheSize: 100, ttlMs: 5 * 60 * 1e3, enableTracking: true, ...config };
    this.metrics = { hits: 0, misses: 0, evictions: 0, totalLookups: 0, averageLookupTime: 0 };
    console.log("\u{1F3AC} [TimelineCache] Initialized with config:", this.config);
  }
};
_define_property20(TimelineCache, "instance", null);
var timelineCache = TimelineCache.getInstance();

// http-url:https://framerusercontent.com/modules/Hsl89fFGEHAZvV3o1gwN/chAzKrKQo04jRaO3aWZA/ScrollProgressTracker.js
function _define_property21(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var ScrollProgressTracker = class _ScrollProgressTracker {
  /**
  * Find the scrollable container for the trigger element
  */
  findScrollableContainer(element) {
    let current = element;
    while (current && current !== document.body) {
      const computedStyle = __dai_window.getComputedStyle(current);
      const overflowY = computedStyle.overflowY;
      const overflowX = computedStyle.overflowX;
      if (overflowY === "scroll" || overflowY === "auto" || overflowX === "scroll" || overflowX === "auto") {
        if (current.scrollHeight > current.clientHeight || current.scrollWidth > current.clientWidth) {
          return current;
        }
      }
      current = current.parentElement;
    }
    return __dai_window;
  }
  /**
  * Get current scroll position from the correct scroll container
  */
  getCurrentScrollY() {
    if (!this.scrollElement) {
      return 0;
    }
    if (this.scrollElement === __dai_window) {
      return __dai_window.scrollY || 0;
    } else {
      return this.scrollElement.scrollTop || 0;
    }
  }
  /**
  * Get the scroll container's dimensions and position
  */
  getScrollContainerInfo() {
    if (!this.scrollElement) {
      return { scrollTop: 0, containerHeight: __dai_window.innerHeight, containerTop: 0, isWindow: true };
    }
    if (this.scrollElement === __dai_window) {
      return { scrollTop: __dai_window.scrollY || 0, containerHeight: __dai_window.innerHeight, containerTop: 0, isWindow: true };
    } else {
      const element = this.scrollElement;
      const rect = element.getBoundingClientRect();
      return { scrollTop: element.scrollTop || 0, containerHeight: element.clientHeight, containerTop: rect.top + (__dai_window.scrollY || 0), isWindow: false };
    }
  }
  /**
  * Start tracking scroll progress for a trigger element
  *
  * @param triggerElement - Element to track scroll progress for
  * @param boundaries - Start and end boundaries for progress calculation
  * @param progressCallback - Callback fired when progress changes
  * @returns Cleanup function to stop tracking
  */
  startTracking(triggerElement, boundaries, progressCallback) {
    if (this.isCanvasMode) {
      return () => {
      };
    }
    this.stopTracking();
    this.triggerElement = triggerElement;
    this.boundaries = boundaries;
    this.progressCallback = progressCallback;
    this.isTracking = true;
    const microTimestamp = performance.now().toString().replace(".", "_");
    const randomSuffix = Math.random().toString(36).substr(2, 9);
    const elementId = triggerElement.id || triggerElement.getAttribute("data-fame-element-id") || "unknown";
    this.trackingId = `scroll-progress-${Date.now()}-${microTimestamp}-${elementId}-${randomSuffix}`;
    this.scrollElement = this.findScrollableContainer(triggerElement);
    const scrollUpdateHandler = () => {
      if (this.isTracking && this.rafId === null) {
        this.rafId = requestAnimationFrame(() => {
          this.rafId = null;
          if (this.isTracking) {
            this.updateProgress();
          }
        });
      }
    };
    this.unifiedManagerCleanup = unifiedScrollManager.registerAnimation(
      this.trackingId,
      scrollUpdateHandler,
      "medium"
      // Medium priority for progress tracking
    );
    this.setupResizeObserver();
    this.updateProgress();
    return () => this.stopTracking();
  }
  /**
  * Stop tracking scroll progress
  */
  stopTracking() {
    if (this.rafId !== null) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
    if (this.unifiedManagerCleanup) {
      this.unifiedManagerCleanup();
      this.unifiedManagerCleanup = null;
    }
    this.isTracking = false;
    this.scrollElement = null;
    this.triggerElement = null;
    this.boundaries = null;
    this.progressCallback = null;
    this.boundaryCache = null;
    this.trackingId = null;
    this.cleanupResizeObserver();
  }
  /**
      * Update progress calculation
      */
  updateProgress() {
    if (!this.triggerElement || !this.boundaries || !this.progressCallback) {
      return;
    }
    const currentScrollY = this.getCurrentScrollY();
    if (Math.abs(currentScrollY - this.lastScrollY) < 0.1) {
      return;
    }
    this.lastScrollY = currentScrollY;
    const progress = this.calculateProgress();
    if (Math.abs(progress - this.lastProgress) < _ScrollProgressTracker.PROGRESS_EPSILON) {
      return;
    }
    this.lastProgress = progress;
    this.progressCallback(progress);
  }
  /**
  * Calculate progress (0-1) based on scroll position and boundaries
  */
  calculateProgress() {
    if (!this.triggerElement || !this.boundaries) {
      return 0;
    }
    const { startPx, endPx } = this.getBoundaryPositions();
    const currentScrollY = this.getCurrentScrollY();
    const totalDistance = endPx - startPx;
    if (totalDistance <= 0) {
      console.warn(`\u{1F30A} [ScrollProgressTracker] Invalid boundary distance: ${totalDistance}`);
      return 0;
    }
    const scrollDistance = currentScrollY - startPx;
    const progress = scrollDistance / totalDistance;
    return Math.max(0, Math.min(1, progress));
  }
  /**
  * Get boundary positions in pixels (with caching)
  */
  getBoundaryPositions() {
    if (!this.triggerElement || !this.boundaries) {
      return { startPx: 0, endPx: 0 };
    }
    if (this.isCacheValid()) {
      return { startPx: this.boundaryCache.startPx, endPx: this.boundaryCache.endPx };
    }
    const startPx = this.calculateBoundaryPosition(this.boundaries.start);
    const endPx = this.calculateBoundaryPosition(this.boundaries.end);
    this.boundaryCache = { startPx, endPx, timestamp: Date.now(), viewportHeight: __dai_window.innerHeight, elementHeight: this.triggerElement.offsetHeight };
    return { startPx, endPx };
  }
  /**
  * Calculate absolute pixel position for a boundary
  */
  calculateBoundaryPosition(boundary) {
    if (!this.triggerElement) {
      return 0;
    }
    const scrollContainerInfo = this.getScrollContainerInfo();
    const elementRect = this.triggerElement.getBoundingClientRect();
    let elementTop;
    if (scrollContainerInfo.isWindow) {
      elementTop = elementRect.top + scrollContainerInfo.scrollTop;
    } else {
      elementTop = elementRect.top + scrollContainerInfo.scrollTop - scrollContainerInfo.containerTop;
    }
    const elementOffsetPx = this.convertToPixels(boundary.element.value, this.triggerElement.offsetHeight);
    const viewportOffsetPx = this.convertToPixels(boundary.viewport.value, scrollContainerInfo.containerHeight);
    const absolutePosition = elementTop + elementOffsetPx - viewportOffsetPx;
    return absolutePosition;
  }
  /**
  * Helper method to interpret what a boundary configuration means
  */
  interpretBoundaryMeaning(boundary) {
    const elementDesc = boundary.element.value === "0%" ? "top" : boundary.element.value === "50%" ? "center" : boundary.element.value === "100%" ? "bottom" : boundary.element.value;
    const viewportDesc = boundary.viewport.value === "0%" ? "top" : boundary.viewport.value === "50%" ? "center" : boundary.viewport.value === "100%" ? "bottom" : boundary.viewport.value;
    return `Element ${elementDesc} meets viewport ${viewportDesc}`;
  }
  /**
  * Convert CSS value to pixels
  */
  convertToPixels(value, referenceSize) {
    try {
      if (value.endsWith("px")) {
        return parseFloat(value);
      } else if (value.endsWith("%")) {
        const percentage = parseFloat(value) / 100;
        return percentage * referenceSize;
      } else if (value.endsWith("vh")) {
        const percentage = parseFloat(value) / 100;
        return percentage * __dai_window.innerHeight;
      } else if (value.endsWith("vw")) {
        const percentage = parseFloat(value) / 100;
        return percentage * __dai_window.innerWidth;
      } else {
        return convertToPixels2(value, document.documentElement, "width");
      }
    } catch (error) {
      console.warn(`\u{1F30A} [ScrollProgressTracker] Error converting value "${value}" to pixels:`, error);
      return 0;
    }
  }
  /**
  * Check if boundary cache is still valid
  */
  isCacheValid() {
    if (!this.boundaryCache || !this.triggerElement)
      return false;
    const now = Date.now();
    const cacheAge = now - this.boundaryCache.timestamp;
    if (cacheAge > _ScrollProgressTracker.CACHE_DURATION_MS) {
      return false;
    }
    const currentViewportHeight = __dai_window.innerHeight;
    const currentElementHeight = this.triggerElement.offsetHeight;
    if (currentViewportHeight !== this.boundaryCache.viewportHeight || currentElementHeight !== this.boundaryCache.elementHeight) {
      return false;
    }
    return true;
  }
  /**
  * Get current progress without starting tracking (for debugging)
  */
  getCurrentProgress(triggerElement, boundaries) {
    const originalTriggerElement = this.triggerElement;
    const originalBoundaries = this.boundaries;
    this.triggerElement = triggerElement;
    this.boundaries = boundaries;
    this.scrollElement = this.findScrollableContainer(triggerElement);
    const progress = this.calculateProgress();
    this.triggerElement = originalTriggerElement;
    this.boundaries = originalBoundaries;
    return progress;
  }
  /**
  * Check if currently tracking
  */
  isCurrentlyTracking() {
    return this.isTracking;
  }
  /**
  * Set up ResizeObserver for intelligent cache invalidation
  *
  * @description
  * Uses ResizeObserver to efficiently detect when the trigger element
  * or viewport changes size, allowing us to invalidate the cache only
  * when necessary instead of using aggressive time-based expiration.
  */
  setupResizeObserver() {
    if (!this.triggerElement || !("ResizeObserver" in __dai_window)) {
      return;
    }
    this.cleanupResizeObserver();
    this.resizeObserver = new ResizeObserver((entries) => {
      if (this.debounceTimeout) {
        clearTimeout(this.debounceTimeout);
      }
      this.debounceTimeout = __dai_window.setTimeout(() => {
        this.boundaryCache = null;
        this.debounceTimeout = null;
      }, _ScrollProgressTracker.RESIZE_DEBOUNCE_MS);
    });
    this.resizeObserver.observe(this.triggerElement);
  }
  /**
      * Clean up ResizeObserver and debounce timeout
      */
  cleanupResizeObserver() {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
      this.resizeObserver = null;
    }
    if (this.debounceTimeout) {
      clearTimeout(this.debounceTimeout);
      this.debounceTimeout = null;
    }
  }
  constructor() {
    _define_property21(this, "rafId", null);
    _define_property21(this, "isTracking", false);
    _define_property21(this, "boundaryCache", null);
    _define_property21(this, "lastScrollY", 0);
    _define_property21(this, "lastProgress", 0);
    _define_property21(this, "isCanvasMode", void 0);
    _define_property21(this, "scrollElement", null);
    _define_property21(this, "triggerElement", null);
    _define_property21(this, "boundaries", null);
    _define_property21(this, "progressCallback", null);
    _define_property21(this, "resizeObserver", null);
    _define_property21(this, "debounceTimeout", null);
    _define_property21(this, "unifiedManagerCleanup", null);
    _define_property21(this, "trackingId", null);
    this.isCanvasMode = EnvironmentDetector.isCanvas();
  }
};
_define_property21(
  ScrollProgressTracker,
  "CACHE_DURATION_MS",
  2e3
  // 2 seconds (more aggressive caching)
);
_define_property21(
  ScrollProgressTracker,
  "PROGRESS_EPSILON",
  5e-4
  // Minimum progress change to trigger callback (used for fast scrolling)
);
_define_property21(
  ScrollProgressTracker,
  "RESIZE_DEBOUNCE_MS",
  150
  // Debounce resize events
);
var scrollProgressTracker = new ScrollProgressTracker();

// http-url:https://framerusercontent.com/modules/nO8YGcuwdXg1w7phkbiD/HqALnpsC3oVloskvU3Hs/TimelineScrollMapper.js
var TimelineScrollMapper = class {
  /**
  * Map a time-based timeline to scroll progress
  *
  * @param masterTimeline - Original time-based master timeline
  * @param config - Mapping configuration
  * @returns Scroll-based timeline
  */
  mapTimelineToScroll(masterTimeline, config = { mode: "compress_to_scroll", preserveRelativeTiming: true }) {
    const scrollRange = this.calculateScrollRange(masterTimeline, config);
    const scrollPropertyTimelines = masterTimeline.propertyTimelines.map((propertyTimeline) => this.mapPropertyTimelineToScroll(propertyTimeline, scrollRange, config));
    const scrollTimeline = { propertyTimelines: scrollPropertyTimelines, originalTimeline: masterTimeline, mappingConfig: config, metadata: { originalDuration: masterTimeline.totalDuration, compressionRatio: scrollRange.end - scrollRange.start, keyframeCount: scrollPropertyTimelines.reduce((sum, pt) => sum + pt.keyframes.length, 0), createdAt: Date.now() } };
    return scrollTimeline;
  }
  /**
  * Get property values at specific scroll progress
  *
  * @param scrollTimeline - Scroll-based timeline
  * @param progress - Scroll progress (0-1)
  * @returns Map of property names to values
  */
  getValuesAtScrollProgress(scrollTimeline, progress) {
    const clampedProgress = Math.max(0, Math.min(1, progress));
    const values = /* @__PURE__ */ new Map();
    scrollTimeline.propertyTimelines.forEach((propertyTimeline) => {
      const value = this.interpolatePropertyAtProgress(propertyTimeline, clampedProgress);
      values.set(propertyTimeline.property, value);
    });
    return values;
  }
  /**
  * Convert scroll progress back to original timeline time
  *
  * @param scrollTimeline - Scroll timeline
  * @param progress - Scroll progress (0-1)
  * @returns Original timeline time in seconds
  */
  progressToOriginalTime(scrollTimeline, progress) {
    const clampedProgress = Math.max(0, Math.min(1, progress));
    const config = scrollTimeline.mappingConfig;
    const originalDuration = scrollTimeline.originalTimeline.totalDuration;
    switch (config.mode) {
      case "compress_to_scroll":
        return clampedProgress * originalDuration;
      case "custom_range":
        const startTime = (config.startProgress || 0) * originalDuration;
        const endTime = (config.endProgress || 1) * originalDuration;
        return startTime + clampedProgress * (endTime - startTime);
      case "preserve_duration":
      default:
        return clampedProgress * originalDuration;
    }
  }
  /**
  * Use original timeline interpolation at converted time
  *
  * @param scrollTimeline - Scroll timeline
  * @param progress - Scroll progress (0-1)
  * @returns Values using original timeline interpolation
  */
  getValuesUsingOriginalInterpolation(scrollTimeline, progress) {
    const originalTime = this.progressToOriginalTime(scrollTimeline, progress);
    return getMasterTimelineValuesAtTime(scrollTimeline.originalTimeline, originalTime);
  }
  /**
  * Use original timeline interpolation at converted time with element-specific support
  *
  * @param scrollTimeline - Scroll timeline
  * @param progress - Scroll progress (0-1)
  * @param elementIndex - Index of the element (for distributed properties)
  * @returns Values using original timeline interpolation with element-specific distributed values
  */
  getValuesUsingOriginalInterpolationForElement(scrollTimeline, progress, elementIndex) {
    const originalTime = this.progressToOriginalTime(scrollTimeline, progress);
    return getMasterTimelineValuesAtTimeForElement(scrollTimeline.originalTimeline, originalTime, elementIndex);
  }
  /**
  * Calculate scroll range based on mapping configuration
  */
  calculateScrollRange(masterTimeline, config) {
    switch (config.mode) {
      case "compress_to_scroll":
        return { start: 0, end: 1 };
      case "custom_range":
        return { start: config.startProgress || 0, end: config.endProgress || 1 };
      case "preserve_duration":
      default:
        return { start: 0, end: 1 };
    }
  }
  /**
  * Map a single property timeline to scroll progress
  */
  mapPropertyTimelineToScroll(propertyTimeline, scrollRange, config) {
    const totalDuration = propertyTimeline.totalDuration;
    const scrollSpan = scrollRange.end - scrollRange.start;
    const scrollKeyframes = propertyTimeline.keyframes.map((keyframe) => ({ progress: scrollRange.start + keyframe.time / totalDuration * scrollSpan, value: keyframe.value, easing: keyframe.easing, originalTime: keyframe.time }));
    return { property: propertyTimeline.property, keyframes: scrollKeyframes, interpolator: propertyTimeline.interpolator, unit: propertyTimeline.unit, springConfig: propertyTimeline.springConfig, originalTimeline: propertyTimeline };
  }
  /**
  * Interpolate property value at specific scroll progress
  */
  interpolatePropertyAtProgress(propertyTimeline, progress) {
    const keyframes = propertyTimeline.keyframes;
    if (keyframes.length === 0) {
      console.warn("\u{1F5FA}\uFE0F [TimelineScrollMapper] No keyframes for property:", propertyTimeline.property);
      return null;
    }
    if (keyframes.length === 1) {
      return keyframes[0].value;
    }
    const { before, after } = this.findSurroundingKeyframes(keyframes, progress);
    if (!before) {
      return after.value;
    }
    if (!after) {
      return before.value;
    }
    if (before === after) {
      return before.value;
    }
    const keyframeProgress = (progress - before.progress) / (after.progress - before.progress);
    const beforeTime = before.originalTime;
    const afterTime = after.originalTime;
    const interpolationTime = beforeTime + keyframeProgress * (afterTime - beforeTime);
    const result = propertyTimeline.interpolator.valueAtTime(propertyTimeline.originalTimeline.keyframes, interpolationTime, propertyTimeline.springConfig);
    return result;
  }
  /**
  * Find keyframes surrounding a progress value
  */
  findSurroundingKeyframes(keyframes, progress) {
    let before = null;
    let after = null;
    for (let i = 0; i < keyframes.length; i++) {
      const keyframe = keyframes[i];
      if (keyframe.progress <= progress) {
        before = keyframe;
      }
      if (keyframe.progress >= progress && !after) {
        after = keyframe;
        break;
      }
    }
    return { before, after };
  }
  /**
  * Get scroll range for a specific property
  *
  * @param scrollTimeline - Scroll timeline
  * @param propertyName - Property name
  * @returns Progress range where this property is active
  */
  getPropertyScrollRange(scrollTimeline, propertyName) {
    const propertyTimeline = scrollTimeline.propertyTimelines.find((pt) => pt.property === propertyName);
    if (!propertyTimeline || propertyTimeline.keyframes.length === 0) {
      return null;
    }
    const keyframes = propertyTimeline.keyframes;
    return { start: keyframes[0].progress, end: keyframes[keyframes.length - 1].progress };
  }
  /**
  * Check if a property is active at specific scroll progress
  *
  * @param scrollTimeline - Scroll timeline
  * @param propertyName - Property name
  * @param progress - Scroll progress (0-1)
  * @returns True if property should be animated at this progress
  */
  isPropertyActiveAtProgress(scrollTimeline, propertyName, progress) {
    const range = this.getPropertyScrollRange(scrollTimeline, propertyName);
    return range ? progress >= range.start && progress <= range.end : false;
  }
  /**
  * Get debug information about the mapping
  *
  * @param scrollTimeline - Scroll timeline
  * @returns Debug information
  */
  getDebugInfo(scrollTimeline) {
    const originalDuration = scrollTimeline.originalTimeline.totalDuration;
    const scrollRange = this.calculateScrollRange(scrollTimeline.originalTimeline, scrollTimeline.mappingConfig);
    const properties = scrollTimeline.propertyTimelines.map((pt) => {
      const scrollRange2 = this.getPropertyScrollRange(scrollTimeline, pt.property);
      const originalKeyframes = pt.originalTimeline.keyframes;
      return { name: pt.property, keyframeCount: pt.keyframes.length, scrollRange: scrollRange2 || { start: 0, end: 0 }, originalRange: { start: originalKeyframes[0]?.time || 0, end: originalKeyframes[originalKeyframes.length - 1]?.time || 0 } };
    });
    return { originalDuration, scrollRange, properties };
  }
  constructor() {
  }
};
var timelineScrollMapper = new TimelineScrollMapper();

// http-url:https://framerusercontent.com/modules/Kg9DPScjRzjhjVpbAoDl/k6Cm089BdEEVQtUA7UCn/ScrollPropertyApplicator.js
function _define_property22(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var ScrollPropertyApplicator = class {
  /**
  * Apply properties to an element at specific scroll progress
  *
  * @param element - Element to apply properties to
  * @param propertyValues - Map of property names to values
  * @param scrollProgress - Current scroll progress (0-1)
  * @param enableGPU - Whether to enable GPU acceleration
  */
  applyPropertiesAtProgress(element, propertyValues, scrollProgress, enableGPU = true) {
    if (!element || !propertyValues || propertyValues.size === 0) {
      return;
    }
    const startTime = this.config.enablePerformanceTracking ? performance.now() : 0;
    if (enableGPU && this.config.enableGPUAcceleration && !this.isCanvasMode) {
      this.enableGPUAccelerationForElement(element);
    }
    this.applyPropertiesDirectly(element, propertyValues);
    if (this.config.enablePerformanceTracking) {
      this.updatePerformanceMetrics(performance.now() - startTime, propertyValues.size);
    }
  }
  /**
  * Apply properties directly to an element (optimized for scroll)
  */
  applyPropertiesDirectly(element, propertyValues) {
    const transforms = /* @__PURE__ */ new Map();
    const styles = /* @__PURE__ */ new Map();
    for (const [property, value] of propertyValues.entries()) {
      if (this.isTransformProperty(property)) {
        transforms.set(property, value);
      } else {
        styles.set(property, value);
      }
    }
    if (transforms.size > 0) {
      this.applyTransformGroup(element, transforms);
    }
    if (styles.size > 0) {
      this.applyStyleGroup(element, styles);
    }
  }
  /**
  * Apply transform properties as a group
  */
  applyTransformGroup(element, transforms) {
    for (const [property, value] of transforms.entries()) {
      applyProperty(element, property, value);
    }
  }
  /**
  * Apply style properties as a group
  */
  applyStyleGroup(element, styles) {
    for (const [property, value] of styles.entries()) {
      applyProperty(element, property, value);
    }
  }
  /**
  * Batch apply properties to multiple elements
  *
  * @param batches - Array of property batches to apply
  */
  batchApply(batches) {
    if (!this.config.enableBatching || batches.length === 0) {
      batches.forEach((batch) => {
        this.applyPropertiesAtProgress(batch.element, batch.properties, 0, batch.enableGPU ?? true);
      });
      return;
    }
    this.pendingApplications.push(...batches);
    if (this.batchFlushId === null) {
      this.batchFlushId = requestAnimationFrame(() => this.flushBatch());
    }
  }
  /**
  * Flush pending batch applications
  */
  flushBatch() {
    if (this.pendingApplications.length === 0) {
      this.batchFlushId = null;
      return;
    }
    const startTime = this.config.enablePerformanceTracking ? performance.now() : 0;
    let appliedCount = 0;
    while (this.pendingApplications.length > 0 && appliedCount < this.config.maxPropertiesPerFrame) {
      const batch = this.pendingApplications.shift();
      this.applyPropertiesAtProgress(batch.element, batch.properties, 0, batch.enableGPU ?? true);
      appliedCount += batch.properties.size;
    }
    if (this.config.enablePerformanceTracking) {
      this.performanceMetrics.batchedOperations++;
      this.updatePerformanceMetrics(performance.now() - startTime, appliedCount);
    }
    if (this.pendingApplications.length > 0) {
      this.batchFlushId = requestAnimationFrame(() => this.flushBatch());
    } else {
      this.batchFlushId = null;
    }
  }
  /**
  * Enable GPU acceleration for an element
  */
  enableGPUAccelerationForElement(element) {
    if (this.gpuAcceleratedElements.has(element)) {
      return;
    }
    enableGPUAcceleration(element);
    this.gpuAcceleratedElements.add(element);
    this.scheduleWillChangeCleanup(element);
    if (this.config.enablePerformanceTracking) {
      this.performanceMetrics.gpuAcceleratedElements++;
    }
  }
  /**
  * Schedule will-change cleanup for an element
  */
  scheduleWillChangeCleanup(element) {
    const existingTimeout = this.willChangeTimeouts.get(element);
    if (existingTimeout) {
      clearTimeout(existingTimeout);
    }
    const timeoutId = __dai_window.setTimeout(() => {
      this.cleanupWillChange(element);
    }, this.config.willChangeDebounceTime);
    this.willChangeTimeouts.set(element, timeoutId);
  }
  /**
  * Clean up will-change property for an element
  */
  cleanupWillChange(element) {
    if (element.style.willChange) {
      element.style.willChange = "";
    }
    this.gpuAcceleratedElements.delete(element);
    this.willChangeTimeouts.delete(element);
  }
  /**
  * Check if a property is a transform property
  */
  isTransformProperty(property) {
    return ["translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "scaleZ", "rotate", "rotateX", "rotateY", "rotateZ", "skewX", "skewY"].includes(property);
  }
  /**
  * Update performance metrics
  */
  updatePerformanceMetrics(executionTime, propertyCount) {
    this.performanceMetrics.totalApplications += propertyCount;
    const totalTime = this.performanceMetrics.averageApplicationTime * (this.performanceMetrics.totalApplications - propertyCount);
    this.performanceMetrics.averageApplicationTime = (totalTime + executionTime) / this.performanceMetrics.totalApplications;
  }
  /**
  * Apply properties using existing timeline values
  *
  * @param element - Element to apply properties to
  * @param timelineValues - Values from TimelineScrollMapper
  * @param scrollProgress - Current scroll progress
  */
  applyTimelineValues(element, timelineValues, scrollProgress) {
    this.applyPropertiesAtProgress(element, timelineValues, scrollProgress, true);
  }
  /**
  * Clean up all optimizations for an element
  *
  * @param element - Element to clean up
  */
  cleanup(element) {
    cleanupStyles(element);
    this.cleanupWillChange(element);
    this.pendingApplications = this.pendingApplications.filter((batch) => batch.element !== element);
    console.log("\u{1F4CB} [ScrollPropertyApplicator] Cleaned up element:", element.tagName);
  }
  /**
  * Clean up all resources
  */
  destroy() {
    if (this.batchFlushId !== null) {
      cancelAnimationFrame(this.batchFlushId);
      this.batchFlushId = null;
    }
    this.willChangeTimeouts.forEach((timeoutId) => clearTimeout(timeoutId));
    this.willChangeTimeouts.clear();
    this.gpuAcceleratedElements.forEach((element) => {
      this.cleanupWillChange(element);
    });
    this.gpuAcceleratedElements.clear();
    this.pendingApplications = [];
    console.log("\u{1F4CB} [ScrollPropertyApplicator] Destroyed and cleaned up all resources");
  }
  /**
  * Get current performance metrics
  */
  getPerformanceMetrics() {
    return { ...this.performanceMetrics };
  }
  /**
  * Reset performance metrics
  */
  resetPerformanceMetrics() {
    this.performanceMetrics = { totalApplications: 0, averageApplicationTime: 0, batchedOperations: 0, gpuAcceleratedElements: this.gpuAcceleratedElements.size, lastResetTime: Date.now() };
    console.log("\u{1F4CB} [ScrollPropertyApplicator] Performance metrics reset");
  }
  /**
  * Check if batching is enabled and has pending applications
  */
  hasPendingApplications() {
    return this.pendingApplications.length > 0;
  }
  /**
  * Force flush any pending applications
  */
  forceFlush() {
    if (this.batchFlushId !== null) {
      cancelAnimationFrame(this.batchFlushId);
      this.batchFlushId = null;
    }
    this.flushBatch();
  }
  constructor(config = {}) {
    _define_property22(this, "performanceMetrics", void 0);
    _define_property22(this, "config", void 0);
    _define_property22(this, "pendingApplications", []);
    _define_property22(this, "batchFlushId", null);
    _define_property22(this, "gpuAcceleratedElements", /* @__PURE__ */ new Set());
    _define_property22(this, "willChangeTimeouts", /* @__PURE__ */ new Map());
    _define_property22(this, "isCanvasMode", void 0);
    this.config = { enableGPUAcceleration: true, maxPropertiesPerFrame: 50, enableBatching: true, willChangeDebounceTime: 100, enablePerformanceTracking: false, ...config };
    this.performanceMetrics = { totalApplications: 0, averageApplicationTime: 0, batchedOperations: 0, gpuAcceleratedElements: 0, lastResetTime: Date.now() };
    this.isCanvasMode = EnvironmentDetector.isCanvas();
    console.log("\u{1F4CB} [ScrollPropertyApplicator] Initialized with config:", this.config);
    if (this.isCanvasMode) {
      console.log("\u{1F3A8} [ScrollPropertyApplicator] Canvas mode detected - optimizations disabled");
    }
  }
};
var scrollPropertyApplicator = new ScrollPropertyApplicator();

// http-url:https://framerusercontent.com/modules/hRYcYfVB4PAMS2i85xxF/6LuGSyCrKPxYrDDQSea3/DynamicElementResolver.js
function _define_property23(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var DynamicElementResolver = class _DynamicElementResolver {
  /**
  * Get singleton instance
  */
  static getInstance(config) {
    if (!_DynamicElementResolver.instance) {
      _DynamicElementResolver.instance = new _DynamicElementResolver(config);
    }
    return _DynamicElementResolver.instance;
  }
  /**
  * 🎯 CORE METHOD: Resolve element ID to current DOM element
  *
  * This is the heart of solving the DOM disconnection issue.
  * Always returns the CURRENT element with the given ID, even if
  * the original element was destroyed and recreated.
  *
  * @param elementId - Element ID to resolve
  * @returns Current DOM element with that ID, or null if not found
  */
  resolveElement(elementId) {
    if (!elementId) {
      if (this.config.debug) {
        console.warn("\u{1F50D} [DynamicElementResolver] Cannot resolve empty element ID");
      }
      return null;
    }
    if (this.config.enableCache) {
      const cached = this.getCachedElement(elementId);
      if (cached) {
        return cached;
      }
    }
    const element = this.resolveFromDOM(elementId);
    if (this.config.enableCache && element) {
      this.cacheElement(elementId, element);
    }
    return element;
  }
  /**
  * 🔧 UTILITY: Ensure element has a stable ID for future resolution
  *
  * If element doesn't have a stable ID, assigns one using FAME's
  * existing convention (data-fame-element-id or element.id).
  *
  * @param element - Element to ensure has an ID
  * @returns The element ID (existing or newly assigned)
  */
  ensureElementId(element) {
    let elementId = element.getAttribute("data-fame-element-id");
    if (!elementId) {
      elementId = element.id;
    }
    if (!elementId) {
      elementId = this.generateElementId();
      element.setAttribute("data-fame-element-id", elementId);
      if (this.config.debug) {
        console.log(`\u{1F50D} [DynamicElementResolver] Assigned new ID: ${elementId} to`, element);
      }
    }
    this.assignedIds.add(elementId);
    return elementId;
  }
  /**
  * 🎯 BATCH RESOLUTION: Resolve multiple element IDs at once
  *
  * Efficiently resolves multiple element IDs to current DOM elements.
  * Returns only elements that were successfully found.
  *
  * @param elementIds - Array of element IDs to resolve
  * @returns Array of resolved elements (may be shorter than input)
  */
  resolveElements(elementIds) {
    const resolved = [];
    for (const elementId of elementIds) {
      const element = this.resolveElement(elementId);
      if (element) {
        resolved.push(element);
      }
    }
    if (this.config.debug && resolved.length !== elementIds.length) {
      console.warn(`\u{1F50D} [DynamicElementResolver] Resolved ${resolved.length}/${elementIds.length} elements`);
    }
    return resolved;
  }
  /**
  * 🧹 CLEANUP: Clear element cache
  *
  * Clears the element resolution cache. Useful when you know
  * DOM structure has changed significantly.
  */
  clearCache() {
    this.elementCache.clear();
    if (this.config.debug) {
      console.log("\u{1F50D} [DynamicElementResolver] Cache cleared");
    }
  }
  /**
  * 📊 DEBUG: Get resolver statistics
  *
  * Returns debug information about the resolver state.
  */
  getDebugInfo() {
    return { assignedIds: this.assignedIds.size, cachedElements: this.elementCache.size, config: this.config };
  }
  // ========================================
  // PRIVATE IMPLEMENTATION METHODS
  // ========================================
  /**
       * Resolve element from DOM using multiple strategies
       */
  resolveFromDOM(elementId) {
    let element = null;
    element = document.querySelector(`[data-fame-element-id="${elementId}"]`);
    if (element) {
      if (this.config.debug) {
        console.log(`\u{1F50D} [DynamicElementResolver] \u2705 Found element by data-fame-element-id: ${elementId}`);
      }
      return element;
    }
    element = document.getElementById(elementId);
    if (element) {
      if (this.config.debug) {
        console.log(`\u{1F50D} [DynamicElementResolver] \u2705 Found element by id: ${elementId}`);
      }
      return element;
    }
    this.handleElementNotFound(elementId);
    return null;
  }
  /**
  * Handle element not found according to configured strategy
  */
  handleElementNotFound(elementId) {
    const message = `\u{1F50D} [DynamicElementResolver] \u274C Element not found: ${elementId}`;
    switch (this.config.fallbackStrategy) {
      case "error":
        throw new Error(message);
      case "warn":
        console.warn(message);
        break;
      case "silent":
        break;
    }
  }
  /**
  * Generate unique element ID
  */
  generateElementId() {
    return `fame-dynamic-${Date.now()}-${Math.floor(Math.random() * 1e3)}`;
  }
  /**
  * Get cached element if available and valid
  */
  getCachedElement(elementId) {
    const cached = this.elementCache.get(elementId);
    if (!cached) {
      return null;
    }
    const now = performance.now();
    if (now - cached.resolvedAt > this.config.cacheTimeout) {
      this.elementCache.delete(elementId);
      return null;
    }
    if (!cached.element.isConnected) {
      this.elementCache.delete(elementId);
      return null;
    }
    cached.lastAccessed = now;
    if (this.config.debug) {
      console.log(`\u{1F50D} [DynamicElementResolver] \u{1F3AF} Cache hit for: ${elementId}`);
    }
    return cached.element;
  }
  /**
  * Cache resolved element
  */
  cacheElement(elementId, element) {
    const now = performance.now();
    this.elementCache.set(elementId, { element, resolvedAt: now, lastAccessed: now });
    if (this.config.debug) {
      console.log(`\u{1F50D} [DynamicElementResolver] \u{1F4E6} Cached element: ${elementId}`);
    }
  }
  constructor(config = {}) {
    _define_property23(this, "config", void 0);
    _define_property23(this, "elementCache", /* @__PURE__ */ new Map());
    _define_property23(this, "assignedIds", /* @__PURE__ */ new Set());
    this.config = { debug: config.debug ?? false, fallbackStrategy: config.fallbackStrategy ?? "warn", enableCache: config.enableCache ?? false, cacheTimeout: config.cacheTimeout ?? 1e3 };
    if (this.config.debug) {
      console.log("\u{1F50D} [DynamicElementResolver] Initialized with config:", this.config);
    }
  }
};
_define_property23(DynamicElementResolver, "instance", null);
var dynamicElementResolver = DynamicElementResolver.getInstance({ debug: false, fallbackStrategy: "warn", enableCache: false });
function resolveElement(elementId) {
  return dynamicElementResolver.resolveElement(elementId);
}
function ensureElementId(element) {
  return dynamicElementResolver.ensureElementId(element);
}

// http-url:https://framerusercontent.com/modules/vMqK50XvHKrw8nMpGGG7/Eb0jCH4VwWSsV5VTYny7/ScrollAnimationCoordinator.js
init_GridDetector();
init_OriginResolver();
init_DistanceCalculator();
function _define_property24(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var ScrollAnimationCoordinator = class {
  /**
  * Process animated elements for text splitting
  *
  * @description
  * Similar to EventAnimationCoordinator.findAnimatedElements, this method processes
  * the animated elements to apply text splitting when enabled. This ensures that
  * scroll animations can target individual lines, words, or characters instead of
  * the entire paragraph.
  */
  async processAnimatedElementsForTextSplitting(slot, parentElement, animatedElements, textElementCallbacks) {
    const processedElements = [];
    console.log(`\u{1F3A8} [ScrollAnimationCoordinator] Processing ${animatedElements.length} animated elements for text splitting`);
    for (const [configIndex, animatedElementConfig] of slot.animatedElements.entries()) {
      const matchingElements = findAnimatedElementsWithCriteria(parentElement, animatedElementConfig.selection, false);
      console.log(`\u{1F3A8} [ScrollAnimationCoordinator] Config ${configIndex}: Found ${matchingElements.length} matching elements`);
      for (const element of matchingElements) {
        try {
          if (animatedElementConfig.textProcessing?.enabled) {
            const animateBy = animatedElementConfig.textProcessing.animateBy;
            let existingSplitSelector;
            switch (animateBy) {
              case "lines":
                existingSplitSelector = ".fame-text-line";
                break;
              case "characters":
                existingSplitSelector = ".fame-text-char";
                break;
              case "words":
                existingSplitSelector = ".fame-text-word";
                break;
              default:
                existingSplitSelector = ".fame-text-line, .fame-text-word, .fame-text-char";
                console.warn(`\u{1F6A8} [ScrollAnimationCoordinator] Unknown animateBy value: ${animateBy}`);
            }
            const existingSplitElements = Array.from(element.querySelectorAll(existingSplitSelector));
            if (existingSplitElements.length > 0) {
              const shouldForceResplit = this.shouldForceResplitForStyleChanges(element, existingSplitElements);
              if (shouldForceResplit) {
                console.log(`\u{1F504} [ScrollAnimationCoordinator] \u{1F6A8} FORCING RE-SPLIT: Style changes detected, existing elements may be stale`);
                await this.forceResplitTextElement(element, animatedElementConfig.textProcessing);
                const newSplitElements = Array.from(element.querySelectorAll(existingSplitSelector));
                if (newSplitElements.length > 0) {
                  console.log(`\u{1F504} [ScrollAnimationCoordinator] \u2705 Re-split complete: ${newSplitElements.length} fresh ${animateBy} elements`);
                  processedElements.push(...newSplitElements);
                  if (textElementCallbacks?.updateElementRefs) {
                    textElementCallbacks.updateElementRefs(newSplitElements, animatedElementConfig.textProcessing.splitType);
                  }
                } else {
                  console.warn(`\u{1F504} [ScrollAnimationCoordinator] Re-split failed, falling back to original element`);
                  processedElements.push(element);
                }
              } else {
                console.log(`\u{1F527} [ScrollAnimationCoordinator] \u2705 Reusing ${existingSplitElements.length} existing ${animateBy} elements - no style changes detected`);
                processedElements.push(...existingSplitElements);
              }
              continue;
            }
            console.log(`\u{1F3A8} [ScrollAnimationCoordinator] No existing split elements found, calling TextSplitter.splitText()`);
            const result = await TextSplitter.getInstance().splitText(element, animatedElementConfig.textProcessing);
            console.log(`\u{1F3A8} [ScrollAnimationCoordinator] TextSplitter result:`, { success: result.success, splitElementsCount: result.splitElements?.length || 0, error: result.error });
            if (result.success && result.splitElements.length > 0) {
              if (textElementCallbacks?.updateElementRefs) {
                textElementCallbacks.updateElementRefs(result.splitElements, animatedElementConfig.textProcessing.splitType);
              }
              if (textElementCallbacks?.registerForSplitCallbacks) {
                const elementId = element.getAttribute("data-fame-element-id") || element.id;
                if (elementId) {
                  textElementCallbacks.registerForSplitCallbacks(elementId);
                }
              }
              const connectedElements = result.splitElements.filter((el) => el.isConnected && document.contains(el));
              processedElements.push(...connectedElements);
            } else {
              processedElements.push(element);
            }
          } else {
            processedElements.push(element);
          }
        } catch (error) {
          console.error(`\u{1F3A8} [ScrollAnimationCoordinator] Text processing failed for element:`, error);
          processedElements.push(element);
        }
      }
    }
    console.log(`\u{1F3A8} [ScrollAnimationCoordinator] \u2705 Processed ${processedElements.length} total elements (including split text elements)`);
    processedElements.forEach((element, index) => {
      element.setAttribute("data-fame-element-index", index.toString());
    });
    return processedElements;
  }
  /**
  * 🔥 Detect if existing split elements should be re-created due to style changes
  * This addresses the core issue where existing elements become stale after breakpoint style changes
  */
  shouldForceResplitForStyleChanges(parentElement, existingSplitElements) {
    try {
      const parentStyleTimestamp = parentElement.getAttribute("data-fame-style-timestamp");
      const splitTimestamp = existingSplitElements[0]?.getAttribute("data-fame-split-timestamp");
      if (parentStyleTimestamp && splitTimestamp) {
        const parentTime = parseInt(parentStyleTimestamp);
        const splitTime = parseInt(splitTimestamp);
        if (parentTime > splitTime) {
          console.log(`\u{1F504} [ScrollAnimationCoordinator] Style timestamp mismatch: parent(${parentTime}) > split(${splitTime})`);
          return true;
        }
      }
      const hasFramerStyleAttrs = parentElement.hasAttribute("style") && (parentElement.style.opacity !== "" || parentElement.style.color !== "" || parentElement.style.fontSize !== "" || parentElement.style.transform !== "");
      const firstSplitElement = existingSplitElements[0];
      if (firstSplitElement) {
        const hasAnimationSetup = firstSplitElement.style.willChange || firstSplitElement.style.transformOrigin || firstSplitElement.hasAttribute("data-fame-element-id");
        if (!hasAnimationSetup) {
          console.log(`\u{1F504} [ScrollAnimationCoordinator] Missing animation setup on existing split elements`);
          return true;
        }
      }
      const recentMutationIndicator = document.body.getAttribute("data-framer-mutation-timestamp");
      if (recentMutationIndicator) {
        const mutationTime = parseInt(recentMutationIndicator);
        const now = Date.now();
        if (now - mutationTime < 1e3) {
          console.log(`\u{1F504} [ScrollAnimationCoordinator] Recent DOM mutations detected, forcing re-split for safety`);
          return true;
        }
      }
      if (hasFramerStyleAttrs) {
        console.log(`\u{1F504} [ScrollAnimationCoordinator] Framer style attributes detected on parent, forcing re-split`);
        return true;
      }
      return false;
    } catch (error) {
      console.warn(`\u{1F504} [ScrollAnimationCoordinator] Error checking style changes, defaulting to re-split:`, error);
      return true;
    }
  }
  /**
    * 🔥 Force re-splitting of a text element by cleaning up and re-creating split elements
    */
  async forceResplitTextElement(element, textProcessingConfig) {
    try {
      console.log(`\u{1F504} [ScrollAnimationCoordinator] Force re-splitting text element:`, { elementId: element.getAttribute("data-fame-element-id") || element.id, currentChildren: element.children.length });
      const textSplitter = TextSplitter.getInstance();
      const cleanupSuccess = textSplitter.cleanupSplitText(element);
      if (!cleanupSuccess) {
        console.warn(`\u{1F504} [ScrollAnimationCoordinator] Cleanup failed, proceeding anyway`);
      }
      element.setAttribute("data-fame-style-timestamp", Date.now().toString());
      const result = await textSplitter.splitText(element, textProcessingConfig);
      if (!result.success) {
        console.error(`\u{1F504} [ScrollAnimationCoordinator] Force re-split failed:`, result.error);
        throw new Error(`Re-split failed: ${result.error}`);
      }
      if (result.splitElements) {
        result.splitElements.forEach((splitEl) => {
          splitEl.setAttribute("data-fame-split-timestamp", Date.now().toString());
        });
      }
      console.log(`\u{1F504} [ScrollAnimationCoordinator] \u2705 Force re-split completed: ${result.splitElements?.length || 0} new elements`);
    } catch (error) {
      console.error(`\u{1F504} [ScrollAnimationCoordinator] Force re-split error:`, error);
      throw error;
    }
  }
  /**
    * Start scrubbed scroll animation
    *
    * @param slot - Animation slot configuration
    * @param triggerElement - Element to track for scroll progress
    * @param animatedElements - Elements to animate
    * @param boundaries - Scroll boundaries
    * @param staggerConfig - Stagger configuration
    * @param parentElement - Parent element for text processing
    * @param textElementCallbacks - React ref management callbacks for text elements
    * @returns Cleanup function
    */
  async startScrollAnimation(slot, triggerElement, animatedElements, boundaries, staggerConfig, parentElement, textElementCallbacks) {
    if (this.isCanvasMode) {
      console.log("\u{1F3A8} [ScrollAnimationCoordinator] Scrubbed animations disabled in Canvas mode");
      return () => {
      };
    }
    const microTimestamp = performance.now().toString().replace(".", "_");
    const randomSuffix = Math.random().toString(36).substr(2, 9);
    const slotIdFragment = slot.id.slice(-12);
    const animationId = `scroll-animation-${++this.animationCounter}-${slotIdFragment}-${microTimestamp}-${randomSuffix}`;
    if (this.activeAnimations.has(animationId)) {
      throw new Error(`\u{1F6A8} [ScrollAnimationCoordinator] Animation ID conflict detected: ${animationId}`);
    }
    console.log(`\u{1F3AA} [ScrollAnimationCoordinator] Generated unique animation ID: ${animationId}`);
    let processedAnimatedElements = animatedElements;
    if (parentElement) {
      console.log(`\u{1F3A8} [ScrollAnimationCoordinator] Processing animated elements for text splitting`);
      processedAnimatedElements = await this.processAnimatedElementsForTextSplitting(slot, parentElement, animatedElements, textElementCallbacks);
      console.log(`\u{1F3A8} [ScrollAnimationCoordinator] Text processing complete: ${animatedElements.length} -> ${processedAnimatedElements.length} elements`);
    }
    const expandedSlot = expandDistributedProperties(slot, processedAnimatedElements);
    if (expandedSlot.properties.some((prop) => prop.distributedFromValues || prop.distributedToValues)) {
      const cachedTimeline = timelineCache.getOrCreateTimeline(expandedSlot.properties, () => {
        console.log(`\u{1F527} [ScrollAnimationCoordinator] Creating new timeline for slot ${slot.id} (cache miss)`);
        const builder = new MasterTimelineBuilder();
        return builder.buildMasterTimeline(expandedSlot.properties);
      }, slot.id);
      expandedSlot.masterTimeline = cachedTimeline;
    } else {
    }
    if (!expandedSlot.masterTimeline) {
      console.error("\u{1F3AA} [ScrollAnimationCoordinator] No master timeline found for slot:", slot.id);
      return () => {
      };
    }
    const scrollTimeline = timelineScrollMapper.mapTimelineToScroll(expandedSlot.masterTimeline, { mode: "compress_to_scroll", preserveRelativeTiming: true });
    let effectiveStaggerConfig = void 0;
    let elementProgress = void 0;
    let thresholdCheckpoints = void 0;
    let thresholdStates = void 0;
    let behaviorCoordinator = void 0;
    let animationExecutor = void 0;
    if (staggerConfig) {
      console.log(`\u{1F3AA} [ScrollAnimationCoordinator] Stagger enabled - setting up stagger configuration`);
      effectiveStaggerConfig = staggerConfig;
      elementProgress = /* @__PURE__ */ new Map();
      thresholdCheckpoints = /* @__PURE__ */ new Map();
      thresholdStates = /* @__PURE__ */ new Map();
      if (effectiveStaggerConfig.mode === "scrubbed") {
        this.calculateScrubbedStaggerOffsets(processedAnimatedElements, effectiveStaggerConfig, elementProgress);
      } else {
        this.calculateThresholdStaggerStates(processedAnimatedElements, effectiveStaggerConfig, thresholdCheckpoints, thresholdStates, expandedSlot);
      }
      if (effectiveStaggerConfig.mode === "threshold") {
        const result = this.createBehaviorCoordinatorForThresholdStagger(expandedSlot, processedAnimatedElements);
        behaviorCoordinator = result.behaviorCoordinator;
        animationExecutor = result.animationExecutor;
      }
    } else {
    }
    const progressCallback = (globalProgress) => {
      this.handleScrollProgress(animationId, globalProgress);
    };
    console.log(`\u{1F680} [ScrollAnimationCoordinator] Creating isolated ScrollProgressTracker: ${animationId}`);
    let progressCleanup;
    if (this.isCanvasMode) {
      progressCleanup = () => {
      };
    } else {
      const progressTracker = new ScrollProgressTracker();
      progressCleanup = progressTracker.startTracking(triggerElement, boundaries, progressCallback);
    }
    const animatedElementIds = processedAnimatedElements.map((el) => {
      let elementId = el.getAttribute("data-fame-element-id") || el.id;
      if (!elementId) {
        elementId = ensureElementId(el);
      }
      return elementId;
    });
    const activeAnimation = { id: animationId, slot: expandedSlot, triggerElementId: triggerElement.getAttribute("data-fame-element-id") || triggerElement.id, animatedElementIds, boundaries, scrollTimeline, progressCleanup, staggerConfig: effectiveStaggerConfig, elementProgress, thresholdCheckpoints, thresholdStates, behaviorCoordinator, animationExecutor };
    this.activeAnimations.set(animationId, activeAnimation);
    if (!effectiveStaggerConfig) {
      this.handleScrollProgress(animationId, 0);
    } else if (effectiveStaggerConfig.mode === "threshold") {
      this.applyInitialValuesForThresholdStagger(activeAnimation);
      this.checkInitialThresholdStates(activeAnimation);
    } else {
      this.handleScrollProgress(animationId, 0);
    }
    return () => this.stopScrollAnimation(animationId);
  }
  /**
  * Create behavior coordinator for threshold stagger
  *
  * @description
  * Creates a behavior coordinator that handles individual element animations
  * using element-specific slot IDs for proper state tracking
  */
  createBehaviorCoordinatorForThresholdStagger(slot, animatedElements) {
    const animationExecutor = async (elementSlot, elements, behavior, startProgress, reverseMode) => {
      const element = elements[0];
      if (!element)
        return;
      const elementIndex = animatedElements.indexOf(element);
      if (elementIndex === -1)
        return;
      const elementSpecificSlot = elementSlot;
      if (!elementSpecificSlot.masterTimeline) {
        console.error("\u{1F3AA} [ScrollAnimationCoordinator] No master timeline found for element-specific slot:", elementSpecificSlot.id);
        return;
      }
      const elementSlotId = elementSpecificSlot.id;
      if (!animationStateManager.getState(elementSlotId)) {
        animationStateManager.initializeState(elementSlotId, element.id || `element-${elementIndex}`);
      }
      const currentState = animationStateManager.getState(elementSlotId);
      const currentProgress = currentState ? currentState.progress : startProgress;
      const progressCallback = (progress) => {
        animationStateManager.updateProgress(elementSlotId, progress, AnimationStatus.RUNNING);
      };
      try {
        const finalProgress = await this.masterTimelinePlayer.executeBehavior(behavior, elementSpecificSlot.masterTimeline, element, currentProgress, progressCallback, reverseMode || ReverseMode.EASING_PRESERVATION);
        animationStateManager.updateProgress(elementSlotId, finalProgress, AnimationStatus.COMPLETED);
        animationStateManager.updateTarget(elementSlotId, finalProgress);
        console.log(`\u{1F3AA} [ScrollAnimationCoordinator] Animation completed for element ${elementIndex}:`, { behavior, finalProgress, elementSlotId });
      } catch (error) {
        console.error(`\u{1F3AA} [ScrollAnimationCoordinator] Animation error for element ${elementIndex}:`, error);
        const errorState = animationStateManager.getState(elementSlotId);
        const errorProgress = errorState ? errorState.progress : startProgress;
        animationStateManager.updateProgress(elementSlotId, errorProgress, AnimationStatus.COMPLETED);
        animationStateManager.updateTarget(elementSlotId, errorProgress);
      }
    };
    return { behaviorCoordinator: new BehaviorCoordinator(animationExecutor), animationExecutor };
  }
  /**
  * Handle scroll progress update
  * 🔥 DOM DISCONNECTION FIX: Updated to use dynamic element resolution
  */
  handleScrollProgress(animationId, globalProgress) {
    const animation = this.activeAnimations.get(animationId);
    if (!animation)
      return;
    const { staggerConfig, animatedElementIds, scrollTimeline } = animation;
    if (!staggerConfig) {
      this.handleNonStaggeredProgress(animation, globalProgress);
    } else if (staggerConfig.mode === "scrubbed") {
      this.handleScrubbedStaggerProgress(animation, globalProgress);
    } else {
      this.handleThresholdStaggerProgress(animation, globalProgress);
    }
  }
  /**
  * Handle non-staggered progress (when stagger is disabled)
  * 🔥 DOM DISCONNECTION FIX: Updated to use dynamic element resolution
  *
  * @description
  * When stagger is disabled, all elements animate simultaneously with the same progress.
  * ✅ FIXED: Uses the same working pattern as other methods for reliability.
  */
  handleNonStaggeredProgress(animation, globalProgress) {
    console.log(`\u{1F6A8} [DEBUG] handleNonStaggeredProgress called with progress: ${globalProgress}`);
    const { animatedElementIds, scrollTimeline } = animation;
    console.log(`\u{1F6A8} [DEBUG] Animation object:`, { animatedElementIds, hasScrollTimeline: !!scrollTimeline, scrollTimelineProps: scrollTimeline ? scrollTimeline.propertyTimelines.length : 0, slotId: animation.slot.id });
    const animatedElements = animatedElementIds.map((id) => resolveElement(id)).filter((el) => el !== null);
    console.log(`\u{1F6A8} [DEBUG] Resolved elements:`, { elementIdsCount: animatedElementIds.length, resolvedElementsCount: animatedElements.length, elementIds: animatedElementIds, elements: animatedElements.map((el) => ({ tagName: el.tagName, id: el.id, className: el.className })) });
    if (animatedElements.length === 0) {
      console.error(`\u{1F6A8} [DEBUG] DETAILED RESOLUTION FAILURE ANALYSIS:`);
      animatedElementIds.forEach((elementId, index) => {
        console.error(`\u{1F6A8} [DEBUG] Element ID ${index}: "${elementId}"`);
        const byDataAttr = document.querySelector(`[data-fame-element-id="${elementId}"]`);
        const byId = document.getElementById(elementId);
        console.error(`\u{1F6A8} [DEBUG] - By data-fame-element-id: ${byDataAttr ? "FOUND" : "NOT FOUND"}`);
        console.error(`\u{1F6A8} [DEBUG] - By getElementById: ${byId ? "FOUND" : "NOT FOUND"}`);
        if (byDataAttr) {
          console.error(`\u{1F6A8} [DEBUG] - Found via data attr:`, { tagName: byDataAttr.tagName, id: byDataAttr.id, className: byDataAttr.className, isConnected: byDataAttr.isConnected });
        }
        if (byId) {
          console.error(`\u{1F6A8} [DEBUG] - Found via ID:`, { tagName: byId.tagName, className: byId.className, isConnected: byId.isConnected });
        }
      });
      const allFameElements = document.querySelectorAll("[data-fame-element-id]");
      console.error(`\u{1F6A8} [DEBUG] ALL ELEMENTS WITH data-fame-element-id in DOM (${allFameElements.length} total):`);
      allFameElements.forEach((el, index) => {
        const htmlEl = el;
        const elementId = htmlEl.getAttribute("data-fame-element-id");
        console.error(`\u{1F6A8} [DEBUG] DOM Element ${index}: ID="${elementId}", tag=${htmlEl.tagName}, class="${htmlEl.className}"`);
      });
      console.error(`\u{1F6A8} [DEBUG] No elements found! Cannot apply animation.`);
      return;
    }
    if (!scrollTimeline) {
      console.error(`\u{1F6A8} [DEBUG] No scroll timeline! Cannot apply animation.`);
      return;
    }
    animatedElements.forEach((element, elementIndex) => {
      const elementFinalProgress = globalProgress;
      console.log(`\u{1F6A8} [DEBUG] Processing element ${elementIndex}:`, { elementFinalProgress, elementTagName: element.tagName, elementId: element.id });
      try {
        console.log(`\u{1F6A8} [DEBUG] Calling getValuesUsingOriginalInterpolationForElement...`);
        const propertyValues = timelineScrollMapper.getValuesUsingOriginalInterpolationForElement(scrollTimeline, elementFinalProgress, elementIndex);
        console.log(`\u{1F6A8} [DEBUG] Got property values:`, { propertyValuesSize: propertyValues.size, properties: Array.from(propertyValues.entries()) });
        if (propertyValues.size === 0) {
          console.warn(`\u{1F6A8} [DEBUG] No property values returned for element ${elementIndex}!`);
          return;
        }
        console.log(`\u{1F6A8} [DEBUG] Calling applyTimelineValues...`);
        scrollPropertyApplicator.applyTimelineValues(element, propertyValues, elementFinalProgress);
        console.log(`\u{1F6A8} [DEBUG] Successfully applied values to element ${elementIndex}`);
      } catch (error) {
        console.error(`\u{1F6A8} [DEBUG] Error processing element ${elementIndex}:`, error);
      }
      if (elementIndex === 0) {
        console.log(`\u{1F3AA} [ScrollAnimationCoordinator] Non-staggered progress: ${(elementFinalProgress * 100).toFixed(1)}% for ${animatedElements.length} elements`);
      }
    });
    console.log(`\u{1F6A8} [DEBUG] handleNonStaggeredProgress completed`);
  }
  /**
  * Handle scrubbed stagger progress
  * 🔥 DOM DISCONNECTION FIX: Updated to use dynamic element resolution
  *
  * @description
  * ✅ FIXED: Uses the same reliable approach as working methods for consistency.
  */
  handleScrubbedStaggerProgress(animation, globalProgress) {
    const { animatedElementIds, scrollTimeline, elementProgress } = animation;
    const animatedElements = animatedElementIds.map((id) => resolveElement(id)).filter((el) => el !== null);
    animatedElements.forEach((element, elementIndex) => {
      const elementId = ensureElementId(element);
      const elementScrollProgress = elementProgress?.get(elementId) || 0;
      const elementFinalProgress = this.calculateElementProgress(globalProgress, elementScrollProgress, animation.staggerConfig?.scrubWindow || 100);
      const propertyValues = timelineScrollMapper.getValuesUsingOriginalInterpolationForElement(scrollTimeline, elementFinalProgress, elementIndex);
      scrollPropertyApplicator.applyTimelineValues(element, propertyValues, elementFinalProgress);
      if (elementIndex === 0) {
        console.log(`\u{1F3AA} [ScrollAnimationCoordinator] Staggered progress: Global=${(globalProgress * 100).toFixed(1)}%, Element=${(elementFinalProgress * 100).toFixed(1)}% (offset=${(elementScrollProgress * 100).toFixed(1)}%)`);
      }
    });
  }
  /**
  * Handle threshold stagger progress
  * 🔥 DOM DISCONNECTION FIX: Updated to use dynamic element resolution
  */
  handleThresholdStaggerProgress(animation, globalProgress) {
    const { animatedElementIds, thresholdStates, thresholdCheckpoints, slot, animationExecutor } = animation;
    if (!thresholdStates || !thresholdCheckpoints || !animationExecutor)
      return;
    const animatedElements = animatedElementIds.map((id) => resolveElement(id)).filter((el) => el !== null);
    const tolerance = 0.01;
    animatedElements.forEach((element, index) => {
      const elementId = ensureElementId(element);
      const state = thresholdStates.get(elementId);
      if (!state)
        return;
      const { checkpoint, crossedForward, crossedBackward, elementSlotId } = state;
      if (globalProgress >= checkpoint - tolerance && !crossedForward) {
        this.executeElementAnimationDirectly(animationExecutor, slot, element, elementSlotId, AnimationBehavior.PLAY_FORWARD, index);
        state.crossedForward = true;
        state.crossedBackward = false;
      } else if (globalProgress < checkpoint + tolerance && crossedForward && !crossedBackward) {
        this.executeElementAnimationDirectly(animationExecutor, slot, element, elementSlotId, AnimationBehavior.PLAY_BACKWARD, index);
        state.crossedForward = false;
        state.crossedBackward = true;
      }
    });
  }
  /**
  * Execute element animation directly using the animation executor
  *
  * @description
  * Bypasses the BehaviorCoordinator to avoid interrupt logic interference
  * and ensures each element gets its own animation execution
  */
  executeElementAnimationDirectly(animationExecutor, slot, element, elementSlotId, behavior, elementIndex) {
    const elementSpecificSlot = this.createElementSpecificSlot(slot, elementIndex);
    const uniqueElementSlotId = elementSpecificSlot.id;
    console.log(`\u{1F3AA} [ScrollAnimationCoordinator] Executing direct animation for element ${elementIndex}:`, { behavior, originalElementSlotId: elementSlotId, uniqueElementSlotId, elementIndex });
    const currentState = animationStateManager.getState(uniqueElementSlotId);
    const startProgress = currentState ? currentState.progress : 0;
    animationExecutor(elementSpecificSlot, [element], behavior, startProgress, ReverseMode.EASING_PRESERVATION).catch((error) => {
      console.error(`\u{1F3AA} [ScrollAnimationCoordinator] Direct animation execution failed for element ${elementIndex}:`, error);
    });
  }
  /**
  * Calculate scrubbed stagger offsets
  * 🔥 DOM DISCONNECTION FIX: Updated to use element IDs as map keys
  */
  calculateScrubbedStaggerOffsets(elements, staggerConfig, elementProgress) {
    if (staggerConfig.strategy === "linear") {
      this.calculateLinearScrubbedStaggerOffsets(elements, staggerConfig, elementProgress);
    } else if (staggerConfig.strategy === "grid") {
      this.calculateGridScrubbedStaggerOffsets(elements, staggerConfig, elementProgress);
    } else if (staggerConfig.strategy === "random") {
      this.calculateRandomScrubbedStaggerOffsets(elements, staggerConfig, elementProgress);
    }
  }
  /**
  * Calculate linear scrubbed stagger offsets
  * 🔥 DOM DISCONNECTION FIX: Updated to use element IDs as map keys
  */
  calculateLinearScrubbedStaggerOffsets(elements, staggerConfig, elementProgress) {
    const scrubWindow = staggerConfig.scrubWindow || 100;
    const staggerStep = (100 - scrubWindow) / (elements.length - 1);
    elements.forEach((element, index) => {
      const startProgress = index * staggerStep / 100;
      const elementId = ensureElementId(element);
      elementProgress.set(elementId, startProgress);
    });
  }
  /**
  * Calculate grid scrubbed stagger offsets
  * 🔥 DOM DISCONNECTION FIX: Updated to use element IDs as map keys
  */
  calculateGridScrubbedStaggerOffsets(elements, staggerConfig, elementProgress) {
    const scrubWindow = staggerConfig.scrubWindow || 100;
    const gridMode = staggerConfig.gridMode || "point-based";
    const gridOrigin = staggerConfig.gridOrigin || "center";
    const gridAutoDetect = staggerConfig.gridAutoDetect !== false;
    const distanceMetric = staggerConfig.gridDistanceMetric || "euclidean";
    try {
      const gridDetector = new GridDetector();
      const gridLayout = gridAutoDetect ? gridDetector.analyzeLayout(elements) : this.createManualGridLayout(elements, staggerConfig.gridRows || 3, staggerConfig.gridColumns || 3);
      let distances = [];
      if (gridMode === "point-based") {
        const originResolver = new OriginResolver();
        const origin = originResolver.resolveOrigin(gridLayout, gridOrigin);
        const distanceCalculator = new DistanceCalculator();
        const updatedGrid = distanceCalculator.calculateGridDistances(gridLayout, origin, distanceMetric);
        distances = updatedGrid.elements.map((el) => el.distance);
      } else if (gridMode === "row-based") {
        distances = this.calculateRowBasedDistances(gridLayout, staggerConfig);
      } else if (gridMode === "column-based") {
        distances = this.calculateColumnBasedDistances(gridLayout, staggerConfig);
      }
      const maxDistance = Math.max(...distances);
      const normalizedDistances = maxDistance > 0 ? distances.map((d) => d / maxDistance) : distances.map(() => 0);
      const maxOffset = (100 - scrubWindow) / 100;
      elements.forEach((element, index) => {
        const offset = normalizedDistances[index] * maxOffset;
        const elementId = ensureElementId(element);
        elementProgress.set(elementId, offset);
      });
    } catch (error) {
      console.error("\u{1F3AA} [ScrollAnimationCoordinator] Grid stagger calculation failed, falling back to linear:", error);
      this.calculateLinearScrubbedStaggerOffsets(elements, staggerConfig, elementProgress);
    }
  }
  /**
  * Create manual grid layout when auto-detection is disabled
  */
  createManualGridLayout(elements, rows, columns) {
    const gridElements = elements.map((element, index) => {
      const rowIndex = Math.floor(index / columns);
      const colIndex = index % columns;
      const rect = element.getBoundingClientRect();
      return { element, position: { x: colIndex, y: rowIndex }, pixelPosition: rect, distance: 0, normalizedDistance: 0, index };
    });
    return { rows, columns, elements: gridElements, originPoint: { x: (columns - 1) / 2, y: (rows - 1) / 2 }, maxDistance: 0 };
  }
  /**
  * Calculate row-based distances for staggering
  */
  calculateRowBasedDistances(gridLayout, staggerConfig) {
    const { elements, rows } = gridLayout;
    const direction = staggerConfig.gridRowDirection || "top-to-bottom";
    return elements.map((element) => {
      const rowIndex = element.position.y;
      switch (direction) {
        case "bottom-to-top":
          return rows - 1 - rowIndex;
        case "center-out-rows":
          const centerRow = (rows - 1) / 2;
          return Math.abs(rowIndex - centerRow);
        case "edges-in-rows":
          const distanceFromEdge = Math.min(rowIndex, rows - 1 - rowIndex);
          return rows - 1 - distanceFromEdge;
        default:
          return rowIndex;
      }
    });
  }
  /**
  * Calculate column-based distances for staggering
  */
  calculateColumnBasedDistances(gridLayout, staggerConfig) {
    const { elements, columns } = gridLayout;
    const direction = staggerConfig.gridColumnDirection || "left-to-right";
    return elements.map((element) => {
      const colIndex = element.position.x;
      switch (direction) {
        case "right-to-left":
          return columns - 1 - colIndex;
        case "center-out-columns":
          const centerCol = (columns - 1) / 2;
          return Math.abs(colIndex - centerCol);
        case "edges-in-columns":
          const distanceFromEdge = Math.min(colIndex, columns - 1 - colIndex);
          return columns - 1 - distanceFromEdge;
        default:
          return colIndex;
      }
    });
  }
  /**
  * Calculate threshold stagger states
  * 🔥 DOM DISCONNECTION FIX: Updated to use element IDs as map keys
  */
  calculateThresholdStaggerStates(elements, staggerConfig, thresholdCheckpoints, thresholdStates, slot) {
    if (staggerConfig.strategy === "linear") {
      this.calculateLinearThresholdStaggerStates(elements, staggerConfig, thresholdCheckpoints, thresholdStates, slot);
    } else if (staggerConfig.strategy === "grid") {
      this.calculateGridThresholdStaggerStates(elements, staggerConfig, thresholdCheckpoints, thresholdStates, slot);
    } else if (staggerConfig.strategy === "random") {
      this.calculateRandomThresholdStaggerStates(elements, staggerConfig, thresholdCheckpoints, thresholdStates, slot);
    }
  }
  /**
  * Calculate random scrubbed stagger offsets
  * 🔥 DOM DISCONNECTION FIX: Updated to use element IDs as map keys
  */
  calculateRandomScrubbedStaggerOffsets(elements, staggerConfig, elementProgress) {
    const scrubWindow = staggerConfig.scrubWindow || 100;
    const maxOffset = (100 - scrubWindow) / 100;
    elements.forEach((element) => {
      const randomOffset = Math.random() * maxOffset;
      const elementId = ensureElementId(element);
      elementProgress.set(elementId, randomOffset);
    });
  }
  /**
  * Calculate linear threshold stagger states
  * 🔥 DOM DISCONNECTION FIX: Updated to use element IDs as map keys
  */
  calculateLinearThresholdStaggerStates(elements, staggerConfig, thresholdCheckpoints, thresholdStates, slot) {
    const startOffset = 0.01;
    const endOffset = 0.99;
    const totalRange = endOffset - startOffset;
    const step = elements.length > 1 ? totalRange / (elements.length - 1) : 0;
    elements.forEach((element, index) => {
      const checkpoint = startOffset + index * step;
      const elementSlotId = `${slot.id}-element-${index}`;
      const elementId = ensureElementId(element);
      thresholdCheckpoints.set(elementId, checkpoint);
      thresholdStates.set(elementId, { checkpoint, crossedForward: false, crossedBackward: false, elementSlotId });
    });
  }
  /**
  * Calculate grid threshold stagger states
  * 🔥 DOM DISCONNECTION FIX: Updated to use element IDs as map keys
  */
  calculateGridThresholdStaggerStates(elements, staggerConfig, thresholdCheckpoints, thresholdStates, slot) {
    try {
      const gridDetector = new GridDetector();
      const gridAutoDetect = staggerConfig.gridAutoDetect !== false;
      const gridLayout = gridAutoDetect ? gridDetector.analyzeLayout(elements) : this.createManualGridLayout(elements, staggerConfig.gridRows || 3, staggerConfig.gridColumns || 3);
      const gridMode = staggerConfig.gridMode || "point-based";
      const gridOrigin = staggerConfig.gridOrigin || "center";
      const distanceMetric = staggerConfig.gridDistanceMetric || "euclidean";
      let distances = [];
      if (gridMode === "point-based") {
        const originResolver = new OriginResolver();
        const origin = originResolver.resolveOrigin(gridLayout, gridOrigin);
        const distanceCalculator = new DistanceCalculator();
        const updatedGrid = distanceCalculator.calculateGridDistances(gridLayout, origin, distanceMetric);
        distances = updatedGrid.elements.map((el) => el.distance);
      } else if (gridMode === "row-based") {
        distances = this.calculateRowBasedDistances(gridLayout, staggerConfig);
      } else if (gridMode === "column-based") {
        distances = this.calculateColumnBasedDistances(gridLayout, staggerConfig);
      }
      const maxDistance = Math.max(...distances);
      const startOffset = 0.01;
      const endOffset = 0.99;
      const totalRange = endOffset - startOffset;
      elements.forEach((element, index) => {
        const normalizedDistance = maxDistance > 0 ? distances[index] / maxDistance : 0;
        const checkpoint = startOffset + normalizedDistance * totalRange;
        const elementSlotId = `${slot.id}-element-${index}`;
        const elementId = ensureElementId(element);
        thresholdCheckpoints.set(elementId, checkpoint);
        thresholdStates.set(elementId, { checkpoint, crossedForward: false, crossedBackward: false, elementSlotId });
      });
    } catch (error) {
      console.error("\u{1F3AA} [ScrollAnimationCoordinator] Grid threshold stagger calculation failed, falling back to linear:", error);
      this.calculateLinearThresholdStaggerStates(elements, staggerConfig, thresholdCheckpoints, thresholdStates, slot);
    }
  }
  /**
  * Calculate random threshold stagger states
  * 🔥 DOM DISCONNECTION FIX: Updated to use element IDs as map keys
  */
  calculateRandomThresholdStaggerStates(elements, staggerConfig, thresholdCheckpoints, thresholdStates, slot) {
    elements.forEach((element, index) => {
      const checkpoint = 0.05 + Math.random() * 0.9;
      const elementSlotId = `${slot.id}-element-${index}`;
      const elementId = ensureElementId(element);
      thresholdCheckpoints.set(elementId, checkpoint);
      thresholdStates.set(elementId, { checkpoint, crossedForward: false, crossedBackward: false, elementSlotId });
    });
  }
  /**
  * Apply initial "from" values for threshold stagger
  *
  * @description
  * For threshold stagger, all elements should start with their "from" values
  * applied immediately, before any scroll checkpoints are crossed.
  * This prevents the "jump" effect where elements only get styles when animating.
  */
  applyInitialValuesForThresholdStagger(animation) {
    console.log(`\u{1F6A8} [DEBUG WORKING] applyInitialValuesForThresholdStagger called`);
    const { animatedElementIds, scrollTimeline } = animation;
    console.log(`\u{1F6A8} [DEBUG WORKING] Animation object:`, { animatedElementIds, hasScrollTimeline: !!scrollTimeline, scrollTimelineProps: scrollTimeline ? scrollTimeline.propertyTimelines.length : 0, slotId: animation.slot.id });
    const animatedElements = animatedElementIds.map((id) => resolveElement(id)).filter((el) => el !== null);
    console.log(`\u{1F6A8} [DEBUG WORKING] Resolved elements:`, { elementIdsCount: animatedElementIds.length, resolvedElementsCount: animatedElements.length, elementIds: animatedElementIds, elements: animatedElements.map((el) => ({ tagName: el.tagName, id: el.id, className: el.className })) });
    animatedElements.forEach((element, elementIndex) => {
      console.log(`\u{1F6A8} [DEBUG WORKING] Processing element ${elementIndex} at progress 0.0`);
      try {
        const initialValues = timelineScrollMapper.getValuesUsingOriginalInterpolationForElement(scrollTimeline, 0, elementIndex);
        console.log(`\u{1F6A8} [DEBUG WORKING] Got initial values:`, { propertyValuesSize: initialValues.size, properties: Array.from(initialValues.entries()) });
        scrollPropertyApplicator.applyTimelineValues(
          element,
          initialValues,
          0
          // Progress 0 for initial state
        );
        console.log(`\u{1F6A8} [DEBUG WORKING] Successfully applied initial values to element ${elementIndex}`);
      } catch (error) {
        console.error(`\u{1F6A8} [DEBUG WORKING] Error processing element ${elementIndex}:`, error);
      }
    });
    console.log(`\u{1F6A8} [DEBUG WORKING] applyInitialValuesForThresholdStagger completed`);
  }
  /**
  * Check initial threshold states for elements that might already be past their checkpoint
  *
  * @description
  * When setting up threshold stagger, we need to check if the current scroll progress
  * is already past some checkpoints. This handles the case where animations are set up
  * mid-scroll and some elements should already be in their animated state.
  */
  checkInitialThresholdStates(animation) {
    this.handleScrollProgress(animation.id, 0);
  }
  /**
  * Create element-specific slot for distributed properties
  *
  * @param slot - Original animation slot
  * @param elementIndex - Index of the element
  * @returns Element-specific slot with distributed values and unique ID
  */
  createElementSpecificSlot(slot, elementIndex) {
    if (elementIndex === void 0) {
      return slot;
    }
    const elementSpecificProperties = slot.properties.map((property) => {
      const hasDistributedFrom = property.distributedFromValues && property.distributedFromValues.length > elementIndex;
      const hasDistributedTo = property.distributedToValues && property.distributedToValues.length > elementIndex;
      if (hasDistributedFrom || hasDistributedTo) {
        return {
          ...property,
          from: hasDistributedFrom ? property.distributedFromValues[elementIndex] : property.from,
          to: hasDistributedTo ? property.distributedToValues[elementIndex] : property.to,
          // Remove distributed arrays to avoid confusion
          distributedFromValues: void 0,
          distributedToValues: void 0
        };
      }
      return property;
    });
    const elementSpecificSlotId = `${slot.id}-element-${elementIndex}`;
    const hasDistributedProperties = elementSpecificProperties.some((prop) => slot.properties.find((originalProp) => originalProp.property === prop.property && (originalProp.distributedFromValues || originalProp.distributedToValues)));
    let elementSpecificMasterTimeline = slot.masterTimeline;
    if (hasDistributedProperties) {
      console.log(`\u{1F527} [ScrollAnimationCoordinator] Getting cached timeline for element ${elementIndex} distributed properties`);
      elementSpecificMasterTimeline = timelineCache.getOrCreateTimeline(elementSpecificProperties, () => {
        console.log(`\u{1F527} [ScrollAnimationCoordinator] Creating new element timeline for slot ${slot.id}, element ${elementIndex} (cache miss)`);
        const builder = new MasterTimelineBuilder();
        return builder.buildMasterTimeline(elementSpecificProperties);
      }, `${slot.id}-element-${elementIndex}`);
      console.log(`\u{1F527} [ScrollAnimationCoordinator] Using cached element timeline for element ${elementIndex}:`, { propertyCount: elementSpecificProperties.length, totalDuration: elementSpecificMasterTimeline.totalDuration, cacheMetrics: timelineCache.getMetrics() });
    }
    return { ...slot, id: elementSpecificSlotId, properties: elementSpecificProperties, masterTimeline: elementSpecificMasterTimeline };
  }
  /**
  * Calculate element progress for scrubbed stagger
  */
  calculateElementProgress(globalProgress, elementStartProgress, scrubWindow) {
    const windowSize = scrubWindow / 100;
    const elementEndProgress = elementStartProgress + windowSize;
    if (globalProgress < elementStartProgress) {
      return 0;
    } else if (globalProgress > elementEndProgress) {
      return 1;
    } else {
      const windowProgress = (globalProgress - elementStartProgress) / windowSize;
      return Math.max(0, Math.min(1, windowProgress));
    }
  }
  /**
  * Stop scrubbed scroll animation
  */
  stopScrollAnimation(animationId) {
    const animation = this.activeAnimations.get(animationId);
    if (!animation)
      return;
    animation.progressCleanup();
    animation.animatedElementIds.forEach((elementId) => {
      const element = document.getElementById(elementId);
      if (element) {
        scrollPropertyApplicator.cleanup(element);
      } else {
        console.warn(`\u{1F6A8} [ScrollAnimationCoordinator] Element with ID ${elementId} not found for cleanup.`);
      }
    });
    if (animation.thresholdStates) {
      animation.thresholdStates.forEach((state) => {
        animationStateManager.cleanup(state.elementSlotId);
      });
    }
    this.activeAnimations.delete(animationId);
  }
  /**
  * Get all active scroll animations
  */
  getActiveAnimations() {
    return Array.from(this.activeAnimations.keys());
  }
  /**
  * Check if animation is active
  */
  isAnimationActive(animationId) {
    return this.activeAnimations.has(animationId);
  }
  /**
  * Get animation info for debugging
  */
  getAnimationInfo(animationId) {
    const animation = this.activeAnimations.get(animationId);
    if (!animation)
      return null;
    return { id: animation.id, slotId: animation.slot.id, triggerElement: animation.triggerElementId, animatedElementsCount: animation.animatedElementIds.length, boundaries: animation.boundaries, staggerConfig: animation.staggerConfig, scrollTimeline: timelineScrollMapper.getDebugInfo(animation.scrollTimeline) };
  }
  /**
  * Stop all active animations
  */
  stopAllAnimations() {
    const animationIds = Array.from(this.activeAnimations.keys());
    animationIds.forEach((id) => this.stopScrollAnimation(id));
  }
  /**
  * Clean up all resources
  */
  destroy() {
    this.stopAllAnimations();
    scrollPropertyApplicator.destroy();
  }
  /**
  * 🚀 CROSS-UNIT FIX: Extract unit from CSS value (borrowed from TimedAnimator approach)
  */
  extractUnit(value) {
    if (typeof value !== "string")
      return null;
    const match = value.match(/([a-zA-Z%]+)$/);
    return match ? match[1] : null;
  }
  /**
  * Debug method to diagnose multiple animation conflicts
  * 🔍 DIAGNOSTIC: Shows all active animations and their states
  */
  debugMultipleAnimations() {
    console.log(`\u{1F50D} [ScrollAnimationCoordinator] DIAGNOSTIC: Total active animations: ${this.activeAnimations.size}`);
    if (this.activeAnimations.size === 0) {
      console.log(`\u{1F50D} [ScrollAnimationCoordinator] No active animations found`);
      return;
    }
    this.activeAnimations.forEach((animation, animationId) => {
      console.log(`\u{1F50D} [ScrollAnimationCoordinator] Animation: ${animationId}`);
      console.log(`  \u251C\u2500 Slot ID: ${animation.slot.id}`);
      console.log(`  \u251C\u2500 Trigger Element ID: ${animation.triggerElementId}`);
      console.log(`  \u251C\u2500 Animated Elements: ${animation.animatedElementIds.length}`);
      console.log(`  \u251C\u2500 Properties: ${animation.slot.properties.map((p) => p.property).join(", ")}`);
      console.log(`  \u251C\u2500 Stagger Mode: ${animation.staggerConfig?.mode || "disabled"}`);
      console.log(`  \u2514\u2500 Boundaries: ${JSON.stringify(animation.boundaries)}`);
    });
    console.log(`\u{1F50D} [ScrollAnimationCoordinator] Checking UnifiedScrollManager for conflicts...`);
  }
  /**
      * Get diagnostic information about multiple animations
      * 🔍 DIAGNOSTIC: Returns diagnostic data for debugging
      */
  getDiagnosticInfo() {
    const animationIds = Array.from(this.activeAnimations.keys());
    const slotIds = Array.from(this.activeAnimations.values()).map((a) => a.slot.id);
    const duplicateSlots = slotIds.filter((id, index, arr) => arr.indexOf(id) !== index);
    return { totalAnimations: this.activeAnimations.size, animationIds, slotIds, conflicts: duplicateSlots };
  }
  constructor() {
    _define_property24(this, "activeAnimations", /* @__PURE__ */ new Map());
    _define_property24(this, "animationCounter", 0);
    _define_property24(this, "masterTimelinePlayer", void 0);
    _define_property24(this, "isCanvasMode", void 0);
    console.log("\u{1F3AA} [ScrollAnimationCoordinator] Initialized");
    this.masterTimelinePlayer = new MasterTimelinePlayer();
    this.isCanvasMode = EnvironmentDetector.isCanvas();
    if (this.isCanvasMode) {
      console.log("\u{1F3A8} [ScrollAnimationCoordinator] Canvas mode detected - scrubbed animations disabled");
    }
  }
};
var scrollAnimationCoordinator = new ScrollAnimationCoordinator();

// http-url:https://framerusercontent.com/modules/13tYXkdVbMUg7EA8ZK7A/6EIH3Tde92rZqe8wyJoZ/TimedAnimator.js
function _define_property25(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var TimedAnimator = class {
  /**
  * Execute a time-based animation with directional control
  * @param slot - Animation configuration
  * @param animatedElement - Element to animate
  * @param startProgress - Starting progress (0.0 to 1.0)
  * @param endProgress - Ending progress (0.0 to 1.0)
  * @param progressCallback - Callback to update external state with progress
  * @param behaviorDecision - Behavior decision for automatic completion handling
  * @param stateManager - State manager reference for automatic continuation
  * @returns Cleanup function
  */
  animate(slot, animatedElement, startProgress, endProgress, progressCallback, behaviorDecision, stateManager) {
    const elementId = ensureElementId(animatedElement);
    console.log(`\u{1F50D} [TIMED-ANIMATOR-DEBUG] animate() called:`, { slotId: slot.id, elementId, element: { tagName: animatedElement.tagName, className: animatedElement.className, textContent: animatedElement.textContent, isConnected: animatedElement.isConnected, boundingRect: animatedElement.getBoundingClientRect() }, startProgress, endProgress, duration: slot.timing?.duration || 1e3, delay: slot.timing?.delay || 0, propertiesCount: slot.properties?.length || 0 });
    if (Math.abs(startProgress - endProgress) < 1e-3) {
      console.log(`\u{1F50D} [TIMED-ANIMATOR-DEBUG] Skipping animation - start and end progress are the same`);
      return () => {
      };
    }
    const animationId = `animation_${++this.animationCounter}_${Date.now()}`;
    console.log(`\u{1F50D} [TIMED-ANIMATOR-DEBUG] Created animation with ID: ${animationId}, elementId: ${elementId}`);
    const duration = slot.timing?.duration || 1e3;
    const delay = slot.timing?.delay || 0;
    const initialStyles = /* @__PURE__ */ new Map();
    const animation = { id: animationId, elementId, slot, startTime: performance.now(), duration, isActive: true, startProgress, endProgress, progressCallback, behaviorDecision, stateManager };
    this.runningAnimations.set(animationId, animation);
    this.startAnimationLoop(animation, initialStyles);
    return () => {
      this.stopAnimation(animationId);
    };
  }
  /**
  * Start the animation loop (supports start/end progress and directional animation)
  */
  startAnimationLoop(animation, initialStyles) {
    const animate = (currentTime) => {
      if (!animation.isActive)
        return;
      const currentElement = resolveElement(animation.elementId);
      if (!currentElement) {
        console.warn(`\u{1F50D} [TIMED-ANIMATOR-DEBUG] \u274C Element not found for ID: ${animation.elementId}, stopping animation`);
        this.stopAnimation(animation.id);
        return;
      }
      let allPropertiesComplete = true;
      animation.slot.properties.forEach((prop) => {
        const propDuration = prop.duration !== void 0 ? prop.duration * 1e3 : animation.slot.timing?.duration || 1e3;
        const propDelay = prop.delay !== void 0 ? prop.delay * 1e3 : 0;
        const adjustedTimestamp = currentTime - propDelay;
        if (adjustedTimestamp < animation.startTime) {
          allPropertiesComplete = false;
          return;
        }
        const elapsed = adjustedTimestamp - animation.startTime;
        let timeProgress = Math.min(elapsed / propDuration, 1);
        const progressRange = animation.endProgress - animation.startProgress;
        const currentProgress = animation.startProgress + progressRange * timeProgress;
        const clampedTimeProgress = Math.max(0, Math.min(1, timeProgress));
        if (clampedTimeProgress < 1) {
          allPropertiesComplete = false;
        }
        const isReverse = animation.endProgress < animation.startProgress;
        const fromValue = prop.from !== void 0 ? prop.from : initialStyles.get(prop.property) || 0;
        const toValue = prop.to;
        const easingType = prop.easing || animation.slot.timing?.easing || "cubic.inout";
        const springConfig = this.extractSpringConfigForProperty(prop, animation.slot, easingType);
        const easedTimeProgress = applyEasing(clampedTimeProgress, easingType, springConfig);
        const easedCurrentProgress = animation.startProgress + progressRange * easedTimeProgress;
        const currentValue = interpolateProperty(fromValue, toValue, easedCurrentProgress, prop.property);
        applyProperty(currentElement, prop.property, currentValue, prop.unit);
        if (animation.progressCallback) {
          animation.progressCallback(easedCurrentProgress);
        }
      });
      if (!allPropertiesComplete) {
      } else {
        this.removeFromAnimationQueue(animation.id);
        this.completeAnimation(animation.id);
      }
    };
    this.addToAnimationQueue(animation.id, animate, "high");
  }
  /**
  * Stop a specific animation
  */
  stopAnimation(animationId) {
    const animation = this.runningAnimations.get(animationId);
    if (animation) {
      animation.isActive = false;
      if (animation.rafId) {
        cancelAnimationFrame(animation.rafId);
      }
      this.runningAnimations.delete(animationId);
      this.removeFromAnimationQueue(animationId);
    }
  }
  /**
  * Complete a specific animation with automatic behavior handling
  */
  completeAnimation(animationId) {
    const animation = this.runningAnimations.get(animationId);
    if (!animation)
      return;
    animation.isActive = false;
    this.runningAnimations.delete(animationId);
    const completedAnimation = animation;
    if (completedAnimation.behaviorDecision && completedAnimation.stateManager) {
      const decision = completedAnimation.behaviorDecision;
      const stateManager = completedAnimation.stateManager;
      if (decision.shouldResetAfterCompletion && !decision.isLoopIteration) {
        const resetProgress = completedAnimation.endProgress === 1 ? 0 : 1;
        const resetElement = resolveElement(completedAnimation.elementId);
        if (resetElement) {
          completedAnimation.slot.properties.forEach((prop) => {
            const resetValue = resetProgress === 0 ? prop.from !== void 0 ? prop.from : 0 : prop.to;
            applyProperty(resetElement, prop.property, resetValue, prop.unit);
          });
        } else {
          console.warn(`\u{1F50D} [TIMED-ANIMATOR-DEBUG] \u274C Reset element not found for ID: ${completedAnimation.elementId}`);
        }
        stateManager.updateProgress(completedAnimation.slot.id, resetProgress);
        stateManager.updateTarget(completedAnimation.slot.id, resetProgress);
        return;
      } else if (decision.isLoopIteration) {
        console.log(`\u{1F504} [TimedAnimator] Reverse behavior Phase 1 completed - EventAnimationCoordinator will handle Phase 2`);
        return;
      }
    }
    if (completedAnimation.stateManager && completedAnimation.endProgress !== void 0) {
      const finalProgress = completedAnimation.endProgress;
      completedAnimation.stateManager.updateProgress(completedAnimation.slot.id, finalProgress);
      completedAnimation.stateManager.updateTarget(completedAnimation.slot.id, finalProgress);
    }
  }
  /**
  * Trigger an existing animation by ID
  * @param animationId - Animation to trigger
  * @param reverse - Whether to reverse
  */
  triggerAnimation(animationId, reverse = false) {
  }
  /**
      * Reset an animation to initial state
      * @param animationId - Animation to reset
      */
  resetAnimation(animationId) {
  }
  /**
      * Get animation by ID
      * @param animationId - Animation ID
      * @returns Animation object or null
      */
  getAnimation(animationId) {
    return this.runningAnimations.get(animationId) || null;
  }
  /**
  * Clean up all animations
  */
  cleanup() {
    console.log(`\u{1F680} [TimedAnimator] Cleaning up ${this.runningAnimations.size} high-performance animations`);
    this.runningAnimations.forEach((animation, id) => {
      this.stopAnimation(id);
    });
    this.runningAnimations.clear();
    this.animationQueue.length = 0;
    this.isProcessingQueue = false;
    this.performanceMetrics = { frameTime: 0, lastFrameTimestamp: 0, averageFrameTime: 16.67, droppedFrames: 0, totalFrames: 0, isPerformanceOptimal: true };
  }
  /**
  * 🌱 CRITICAL FIX: Extract spring configuration for a property from multiple sources
  * Priority order: 1. Property config, 2. Timeline config, 3. Slot timing config
  * @param prop - Animation property
  * @param slot - Animation slot
  * @param easingType - Easing type to check if spring config is needed
  * @returns Spring configuration or undefined
  */
  extractSpringConfigForProperty(prop, slot, easingType) {
    if (!easingType.includes("spring")) {
      return void 0;
    }
    if (prop.springConfig) {
      return prop.springConfig;
    }
    if (slot.masterTimeline && slot.masterTimeline.propertyTimelines) {
      const propertyTimeline = slot.masterTimeline.propertyTimelines.find((timeline) => timeline.property === prop.property);
      if (propertyTimeline && propertyTimeline.springConfig) {
        return propertyTimeline.springConfig;
      }
    }
    if (slot.timing?.springConfig) {
      return slot.timing.springConfig;
    }
    return void 0;
  }
  /**
  * Get performance statistics for debugging spring animations
  */
  getPerformanceStats() {
    const currentFPS = this.performanceMetrics.totalFrames > 0 ? Math.round(1e3 / this.performanceMetrics.averageFrameTime) : 0;
    return { targetFPS: this.performanceConfig.targetFPS, currentFPS, averageFrameTime: this.performanceMetrics.averageFrameTime, droppedFrames: this.performanceMetrics.droppedFrames, totalFrames: this.performanceMetrics.totalFrames, isPerformanceOptimal: this.performanceMetrics.isPerformanceOptimal, activeAnimations: this.runningAnimations.size, queueSize: this.animationQueue.length, frameBudget: this.performanceConfig.maxFrameTime + "ms" };
  }
  /**
  * Update performance metrics with frame timing - Essential for 60fps monitoring
  */
  updatePerformanceMetrics(frameTime) {
    const { performanceMetrics } = this;
    performanceMetrics.frameTime = frameTime;
    performanceMetrics.totalFrames++;
    const alpha = 0.1;
    performanceMetrics.averageFrameTime = performanceMetrics.averageFrameTime * (1 - alpha) + frameTime * alpha;
    if (frameTime > 33.33) {
      performanceMetrics.droppedFrames++;
      if (this.performanceConfig.debugPerformance) {
        console.warn(`\u{1F6A8} [TimedAnimator] Frame drop detected: ${frameTime.toFixed(2)}ms (>33ms = <30fps)`);
      }
    }
    performanceMetrics.isPerformanceOptimal = performanceMetrics.averageFrameTime <= 1e3 / this.performanceConfig.targetFPS * 1.2;
    if (this.performanceConfig.debugPerformance && performanceMetrics.totalFrames % 60 === 0) {
      const currentFPS = Math.round(1e3 / performanceMetrics.averageFrameTime);
      console.log(`\u{1F4CA} [TimedAnimator] Performance - FPS: ${currentFPS}/${this.performanceConfig.targetFPS}, Drops: ${performanceMetrics.droppedFrames}`);
    }
  }
  /**
  * Add animation to high-performance queue
  */
  addToAnimationQueue(animationId, callback, priority = "medium") {
    this.animationQueue = this.animationQueue.filter((frame) => frame.animationId !== animationId);
    this.animationQueue.push({ animationId, callback, priority, lastExecutionTime: 0 });
    if (!this.isProcessingQueue) {
      this.startAnimationQueue();
    }
  }
  /**
  * Remove animation from queue
  */
  removeFromAnimationQueue(animationId) {
    const initialLength = this.animationQueue.length;
    this.animationQueue = this.animationQueue.filter((frame) => frame.animationId !== animationId);
    const removed = initialLength > this.animationQueue.length;
    if (this.animationQueue.length === 0) {
      this.isProcessingQueue = false;
    }
  }
  /**
  * Start high-performance animation queue processing - CRITICAL for 60fps springs!
  */
  startAnimationQueue() {
    if (this.isProcessingQueue)
      return;
    this.isProcessingQueue = true;
    const processQueue = (timestamp) => {
      this.currentFrameStart = timestamp;
      const frameTime = timestamp - this.performanceMetrics.lastFrameTimestamp;
      this.updatePerformanceMetrics(frameTime);
      this.performanceMetrics.lastFrameTimestamp = timestamp;
      const sortedQueue = [...this.animationQueue].sort((a, b) => {
        const priorityOrder = { high: 3, medium: 2, low: 1 };
        return priorityOrder[b.priority] - priorityOrder[a.priority];
      });
      let processedCount = 0;
      const maxProcessTime = this.performanceConfig.enableFrameBudgeting ? this.performanceConfig.maxFrameTime : Infinity;
      for (let i = 0; i < sortedQueue.length && performance.now() - this.currentFrameStart < maxProcessTime; i++) {
        const frame = sortedQueue[i];
        try {
          frame.callback(timestamp);
          frame.lastExecutionTime = timestamp;
          processedCount++;
        } catch (error) {
          this.removeFromAnimationQueue(frame.animationId);
        }
      }
      const frameProcessTime = performance.now() - this.currentFrameStart;
      if (this.performanceConfig.debugPerformance && frameProcessTime > this.performanceConfig.maxFrameTime) {
        console.warn(`\u23F1\uFE0F [TimedAnimator] Frame budget exceeded: ${frameProcessTime.toFixed(2)}ms (budget: ${this.performanceConfig.maxFrameTime}ms) - May affect spring smoothness!`);
      }
      if (this.animationQueue.length > 0) {
        requestAnimationFrame(processQueue);
      } else {
        this.isProcessingQueue = false;
      }
    };
    requestAnimationFrame(processQueue);
  }
  constructor() {
    _define_property25(this, "runningAnimations", /* @__PURE__ */ new Map());
    _define_property25(this, "animationCounter", 0);
    _define_property25(this, "performanceConfig", { targetFPS: 60, enableFrameBudgeting: true, maxFrameTime: 8, debugPerformance: false });
    _define_property25(this, "performanceMetrics", { frameTime: 0, lastFrameTimestamp: 0, averageFrameTime: 16.67, droppedFrames: 0, totalFrames: 0, isPerformanceOptimal: true });
    _define_property25(this, "animationQueue", []);
    _define_property25(this, "isProcessingQueue", false);
    _define_property25(this, "currentFrameStart", 0);
    this.performanceConfig.debugPerformance = false;
  }
};

// http-url:https://framerusercontent.com/modules/dOjYZJqu4ovJqwWL6Ifg/R1CsF5kN7yFssDhxMDCR/AnimationOrchestrator.js
function _define_property26(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var ENABLE_TIMELINE_ORCHESTRATOR = true;
var AnimationOrchestrator = class {
  /**
  * Main entry point - execute an animation slot
  * @param slot - Clean animation configuration
  * @param parentElement - Container element for finding trigger/animated elements
  * @param showInitialValuesInCanvas - Whether to show initial values in Canvas mode
  * @param textElementCallbacks - React ref management callbacks for text elements
  * @returns Cleanup function for this animation
  * 🎨 FEATURE 2B: Made async to support text processing integration
  */
  async executeSlot(slot, parentElement, showInitialValuesInCanvas = false, textElementCallbacks) {
    console.log(`\u{1F3AD} [AnimationOrchestrator] Executing slot: ${slot.id}`);
    console.log(`\u{1F3AD} [AnimationOrchestrator] Animation mode: ${slot.animationMode}`);
    console.log(`\u{1F3AD} [AnimationOrchestrator] Triggers count: ${slot.triggers.length}`);
    console.log(`\u{1F3AD} [AnimationOrchestrator] Properties count: ${slot.properties.length}`);
    try {
      const elementId = this.generateElementId(slot, parentElement);
      animationStateManager.initializeState(slot.id, elementId);
      if (slot.animationMode === AnimationMode.SCRUBBED) {
        return await this.handleScrollAnimation(slot, parentElement, showInitialValuesInCanvas, textElementCallbacks);
      } else {
        return await this.handleEventAnimation(slot, parentElement, showInitialValuesInCanvas, textElementCallbacks);
      }
    } catch (error) {
      console.error(`\u{1F3AD} [AnimationOrchestrator] Failed to execute slot ${slot.id}:`, error);
      return () => {
      };
    }
  }
  /**
    * Generate a unique element identifier for state tracking
    */
  generateElementId(slot, parentElement) {
    const parentId = parentElement.id || "anonymous";
    return `${this.componentId}-${slot.id}-${parentId}`;
  }
  /**
  * Handle scroll-based animations
  * Route to ScrollAnimationCoordinator for scrubbed scroll animations
  */
  async handleScrollAnimation(slot, parentElement, showInitialValuesInCanvas, textElementCallbacks) {
    try {
      if (!slot.scrollConfig) {
        return () => {
        };
      }
      if (slot.scrollConfig.mode !== "scrubbed") {
        console.error(`\u{1F3AD} [SCRUBBED_ANIMATOR_DEBUG] \u274C ScrollConfig mode is not scrubbed: ${slot.scrollConfig.mode}`);
        return () => {
        };
      }
      console.log(`\u{1F3AD} [SCRUBBED_ANIMATOR_DEBUG] \u2705 Scrubbed scroll config found:`, slot.scrollConfig.scrubbedConfig);
      const triggerElementSelection = slot.scrollConfig.scrubbedConfig.triggerElement;
      console.log(`\u{1F3AD} [SCRUBBED_ANIMATOR_DEBUG] Trigger element selection:`, triggerElementSelection);
      const boundaries = slot.scrollConfig.scrubbedConfig.boundaries;
      console.log(`\u{1F3AD} [SCRUBBED_ANIMATOR_DEBUG] Scroll boundaries:`, boundaries);
      console.log("\u{1F6A8} [BOUNDARY_DEBUG] AnimationOrchestrator extracted boundaries:", { startElement: boundaries.start.element.value, startViewport: boundaries.start.viewport.value, endElement: boundaries.end.element.value, endViewport: boundaries.end.viewport.value, fullBoundaries: JSON.stringify(boundaries, null, 2) });
      const staggerConfig = slot.scrollConfig.scrubbedConfig.stagger;
      console.log(`\u{1F3AD} [SCRUBBED_ANIMATOR_DEBUG] Stagger config:`, staggerConfig);
      const triggerElements = findTriggerElementsWithCriteria(parentElement, triggerElementSelection);
      if (triggerElements.length === 0) {
        console.error(`\u{1F3AD} [SCRUBBED_ANIMATOR_DEBUG] \u274C Trigger element not found`);
        return () => {
        };
      }
      const triggerElement = triggerElements[0];
      console.log(`\u{1F3AD} [SCRUBBED_ANIMATOR_DEBUG] \u2705 Trigger element found:`, triggerElement);
      const allAnimatedElements = [];
      slot.animatedElements.forEach((animatedElement, index) => {
        const elements = findAnimatedElementsWithCriteria(parentElement, animatedElement.selection, false);
        if (elements.length > 0) {
          allAnimatedElements.push(...elements);
          console.log(`\u{1F3AD} [SCRUBBED_ANIMATOR_DEBUG] Found animated element ${index}:`, elements[0].textContent?.substring(0, 20));
        } else {
          console.warn(`\u{1F3AD} [SCRUBBED_ANIMATOR_DEBUG] \u26A0\uFE0F Animated element ${index} not found`);
        }
      });
      if (allAnimatedElements.length === 0) {
        console.error(`\u{1F3AD} [SCRUBBED_ANIMATOR_DEBUG] \u274C No animated elements found`);
        return () => {
        };
      }
      console.log(`\u{1F3AD} [SCRUBBED_ANIMATOR_DEBUG] \u2705 Found ${allAnimatedElements.length} animated elements`);
      console.log(`\u{1F3AD} [SCRUBBED_ANIMATOR_DEBUG] \u{1F680} Starting scrubbed scroll animation...`);
      const boundariesToPass = { start: boundaries.start, end: boundaries.end };
      console.log("\u{1F6A8} [BOUNDARY_DEBUG] AnimationOrchestrator passing boundaries to ScrollAnimationCoordinator:", { boundariesToPass, startElement: boundariesToPass.start.element.value, startViewport: boundariesToPass.start.viewport.value, endElement: boundariesToPass.end.element.value, endViewport: boundariesToPass.end.viewport.value, fullBoundaries: JSON.stringify(boundariesToPass, null, 2) });
      const cleanup2 = await this.scrollAnimationCoordinator.startScrollAnimation(
        slot,
        triggerElement,
        allAnimatedElements,
        boundariesToPass,
        staggerConfig,
        parentElement,
        textElementCallbacks
        // Pass text element callbacks for React integration
      );
      console.log(`\u{1F3AD} [SCRUBBED_ANIMATOR_DEBUG] \u2705 Scrubbed scroll animation started successfully`);
      return cleanup2;
    } catch (error) {
      console.error(`\u{1F3AD} [SCRUBBED_ANIMATOR_DEBUG] Error setting up scrubbed scroll animation:`, error);
      return () => {
        console.log(`\u{1F3AD} [SCRUBBED_ANIMATOR_DEBUG] Cleaning up scroll animation: ${slot.id}`);
        animationStateManager.cleanup(slot.id);
      };
    }
  }
  /**
  * Handle event-driven animations with behavior support
  * Coordinate between AnimationStateManager and TimedAnimator
  * 🎨 FEATURE 2B: Made async to support text processing integration
  */
  async handleEventAnimation(slot, parentElement, showInitialValuesInCanvas, textElementCallbacks) {
    console.log(`\u{1F3AD} [AnimationOrchestrator] Setting up behavior-aware event animation for slot: ${slot.id}`);
    const cleanupFunctions = [];
    try {
      console.log(`\u{1F527} [AnimationOrchestrator] Delegating to coordinators for complete event animation setup`);
      const eventCleanup = await this.eventCoordinator.executeEventAnimation(slot, parentElement, showInitialValuesInCanvas, textElementCallbacks);
      cleanupFunctions.push(eventCleanup);
      return () => {
        console.log(`\u{1F3AD} [AnimationOrchestrator] Cleaning up behavior-aware event animation: ${slot.id}`);
        cleanupFunctions.forEach((cleanup2) => cleanup2());
        animationStateManager.cleanup(slot.id);
      };
    } catch (error) {
      console.error(`\u{1F3AD} [AnimationOrchestrator] Error setting up behavior-aware event animation:`, error);
      return () => {
      };
    }
  }
  // 🔧 REFACTOR R3.2: executeWithTimelineArchitecture moved to EventAnimationCoordinator
  // Timeline execution is now handled by EventAnimationCoordinator.executeTimelineForElement()
  // 🔧 REFACTOR R3.1: findAnimatedElements moved to EventAnimationCoordinator
  // 🔧 REFACTOR R1.4: findTriggerElements removed - now handled by EventAnimationCoordinator
  /**
       * Clean up all animations for this orchestrator instance
       */
  cleanup() {
    console.log(`\u{1F3AD} [AnimationOrchestrator] Cleaning up orchestrator for component: ${this.componentId}`);
    this.cleanupFunctions.forEach((cleanup2) => {
      try {
        cleanup2();
      } catch (error) {
        console.error(`\u{1F3AD} [AnimationOrchestrator] Error during cleanup:`, error);
      }
    });
    this.cleanupFunctions = [];
    this.timedAnimator.cleanup();
    this.masterTimelinePlayer.stopAll();
  }
  /**
      * Convert property controls format to internal AnimationSlot format
      * This bridges the Framer property controls UI to our clean internal API
      *
      * @param propertyControlsSlot - Raw animation slot from property controls
      * @returns Converted AnimationSlot in internal format
      */
  convertPropertyControlsSlot(propertyControlsSlot) {
    try {
      return toInternalFormat(propertyControlsSlot, this.componentId);
    } catch (error) {
      console.error(`\u{1F3AD} [AnimationOrchestrator] Failed to convert property controls slot:`, error);
      throw new Error(`Animation slot conversion failed: ${error}`);
    }
  }
  constructor(componentId) {
    _define_property26(this, "timedAnimator", void 0);
    _define_property26(
      this,
      "masterTimelinePlayer",
      void 0
      // 🎬 NEW: Timeline player
    );
    _define_property26(
      this,
      "eventCoordinator",
      void 0
      // 🔧 REFACTOR R1.3: Event coordinator
    );
    _define_property26(
      this,
      "scrollAnimationCoordinator",
      void 0
      // 🚀 NEW: Scrubbed scroll coordinator
    );
    _define_property26(this, "cleanupFunctions", []);
    _define_property26(this, "componentId", void 0);
    this.componentId = componentId;
    this.timedAnimator = new TimedAnimator();
    this.masterTimelinePlayer = new MasterTimelinePlayer();
    this.eventCoordinator = new EventAnimationCoordinator();
    this.scrollAnimationCoordinator = new ScrollAnimationCoordinator();
    console.log(`\u{1F3AD} [AnimationOrchestrator] Initialized for component: ${componentId}`);
    console.log(`\u{1F3AC} [AnimationOrchestrator] Timeline architecture: ${ENABLE_TIMELINE_ORCHESTRATOR ? "ENABLED" : "DISABLED"}`);
  }
};

// http-url:https://framerusercontent.com/modules/oR0PyReOuiRjhG7L6N24/GEr8IhEo8vqPa2UDng64/StyleCoordinator.js
function _define_property27(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var StyleCoordinator = class {
  /**
  * Apply StyleSlots to elements with canvas-aware toggle functionality
  *
  * @param styleSlots - Array of StyleSlots to apply
  * @param componentElement - Root component element for element finding
  * @param showStyleSlotsInCanvas - User preference for showing styles in canvas mode
  */
  applyStyleSlots(styleSlots, componentElement, showStyleSlotsInCanvas = false) {
    console.log(`\u{1F3A8} [StyleCoordinator] Processing ${styleSlots.length} style slots`);
    try {
      const isCanvasMode = this.handleCanvasMode();
      const shouldApplyStyles = this.shouldApplyStyles(isCanvasMode, showStyleSlotsInCanvas);
      if (shouldApplyStyles) {
        console.log(`\u{1F3A8} [StyleCoordinator] Applying style slots`);
        styleSlots.forEach((slot, index) => {
          console.log(`\u{1F3A8} [StyleCoordinator] Processing style slot ${index + 1}/${styleSlots.length}: ${slot.name}`);
          this.applyStyleSlot(slot, componentElement);
        });
        console.log(`\u{1F3A8} [StyleCoordinator] \u2705 All style slots applied successfully`);
      } else {
        console.log(`\u{1F3A8} [StyleCoordinator] Style slots disabled in Canvas mode - storing original values and restoring`);
        this.ensureOriginalValuesStored(styleSlots, componentElement);
        this.restoreOriginalStyles(componentElement);
      }
    } catch (error) {
      console.error(`\u{1F3A8} [StyleCoordinator] Error applying style slots:`, error);
    }
  }
  /**
  * Handle Canvas mode detection
  *
  * COPIED FROM: InitialValueCoordinator Canvas mode logic
  */
  handleCanvasMode() {
    const isCanvasMode = EnvironmentDetector.isCanvas();
    console.log(`\u{1F3A8} [StyleCoordinator] Canvas mode detected: ${isCanvasMode}`);
    return isCanvasMode;
  }
  /**
  * Determine if styles should be applied based on canvas mode and user preference
  *
  * COPIED FROM: InitialValueCoordinator shouldApplyInitialValues logic
  *
  * LOGIC:
  * - In preview/published mode: Always apply styles
  * - In Canvas mode: Respect user preference for design workflow flexibility
  */
  shouldApplyStyles(isCanvasMode, showStyleSlotsInCanvas) {
    if (!isCanvasMode) {
      console.log(`\u{1F3A8} [StyleCoordinator] Non-Canvas mode: applying styles`);
      return true;
    }
    const shouldApply = showStyleSlotsInCanvas;
    console.log(`\u{1F3A8} [StyleCoordinator] Canvas mode: user setting = ${showStyleSlotsInCanvas}, applying = ${shouldApply}`);
    return shouldApply;
  }
  /**
  * Ensure original values are stored for all target elements in style slots
  * This is needed when toggling OFF to restore original values
  */
  ensureOriginalValuesStored(styleSlots, componentElement) {
    console.log(`\u{1F3A8} [StyleCoordinator] Ensuring original values are stored for ${styleSlots.length} style slots`);
    styleSlots.forEach((slot) => {
      const allTargetElements = [];
      slot.targetElements.forEach((targetConfig) => {
        const foundElements = findAnimatedElementsWithCriteria(
          componentElement,
          targetConfig.selection,
          false
          // debug off for this operation
        );
        allTargetElements.push(...foundElements);
      });
      const uniqueTargetElements = Array.from(new Set(allTargetElements));
      uniqueTargetElements.forEach((element) => {
        slot.styleProperties.forEach((styleProperty) => {
          this.storeOriginalValue(element, styleProperty.property, slot.id);
        });
      });
    });
    console.log(`\u{1F3A8} [StyleCoordinator] Original values storage ensured`);
  }
  /**
  * Store original CSS value before applying style slot value
  */
  storeOriginalValue(element, property, slotId) {
    const computedStyle = __dai_window.getComputedStyle(element);
    const originalValue = computedStyle.getPropertyValue(property) || "";
    if (!this.originalValues.has(slotId)) {
      this.originalValues.set(slotId, []);
    }
    const values = this.originalValues.get(slotId);
    const existing = values.find((v) => v.element === element && v.property === property);
    if (!existing) {
      values.push({ element, property, value: originalValue, timestamp: Date.now() });
      console.log(`\u{1F3A8} [StyleCoordinator] \u{1F4E6} Stored original ${property}: "${originalValue}" for element ${element.tagName}`);
    }
  }
  /**
  * Restore original styles for all stored values
  */
  restoreOriginalStyles(componentElement) {
    console.log(`\u{1F3A8} [StyleCoordinator] \u{1F504} Restoring original styles`);
    let restoredCount = 0;
    this.originalValues.forEach((values, slotId) => {
      values.forEach(({ element, property, value }) => {
        try {
          if (componentElement.contains(element)) {
            if (value) {
              element.style.setProperty(property, value);
            } else {
              element.style.removeProperty(property);
            }
            restoredCount++;
            console.log(`\u{1F3A8} [StyleCoordinator] \u2705 Restored ${property}: "${value}" on ${element.tagName}`);
          }
        } catch (error) {
          console.warn(`\u{1F3A8} [StyleCoordinator] Failed to restore ${property} on element:`, error);
        }
      });
    });
    if (restoredCount > 0) {
      console.log(`\u{1F3A8} [StyleCoordinator] \u{1F389} Restored ${restoredCount} original styles`);
    }
  }
  /**
  * Apply a single StyleSlot to its target elements
  */
  applyStyleSlot(styleSlot, componentElement) {
    if (styleSlot.validationErrors && styleSlot.validationErrors.length > 0) {
      console.warn(`\u{1F3A8} [StyleCoordinator] StyleSlot "${styleSlot.name}" has validation errors:`, styleSlot.validationErrors);
    }
    const allTargetElements = [];
    styleSlot.targetElements.forEach((targetConfig, configIndex) => {
      console.log(`\u{1F3A8} [StyleCoordinator] Finding elements for target config ${configIndex + 1}:`, { scope: targetConfig.selection.scope, criteria: targetConfig.selection.criteria });
      const foundElements = findAnimatedElementsWithCriteria(
        componentElement,
        targetConfig.selection,
        true
        // debug
      );
      console.log(`\u{1F3A8} [StyleCoordinator] Found ${foundElements.length} elements for target config ${configIndex + 1}`);
      allTargetElements.push(...foundElements);
    });
    const uniqueTargetElements = Array.from(new Set(allTargetElements));
    console.log(`\u{1F3A8} [StyleCoordinator] Total unique target elements: ${uniqueTargetElements.length}`);
    if (uniqueTargetElements.length === 0) {
      console.warn(`\u{1F3A8} [StyleCoordinator] No target elements found for StyleSlot "${styleSlot.name}"`);
      return;
    }
    uniqueTargetElements.forEach((element, elementIndex) => {
      console.log(`\u{1F3A8} [StyleCoordinator] Applying ${styleSlot.styleProperties.length} properties to element ${elementIndex + 1}`);
      styleSlot.styleProperties.forEach((styleProperty) => {
        this.storeOriginalValue(element, styleProperty.property, styleSlot.id);
        this.applyStyleProperty(element, styleProperty, styleSlot.name);
      });
    });
  }
  /**
  * Apply a single style property to an element
  */
  applyStyleProperty(element, styleProperty, slotName) {
    if (styleProperty.isValid === false) {
      console.warn(`\u{1F3A8} [StyleCoordinator] Skipping invalid property in "${slotName}": ${styleProperty.property}="${styleProperty.value}" - ${styleProperty.validationError}`);
      return;
    }
    try {
      applyProperty(element, styleProperty.property, styleProperty.value, styleProperty.unit);
      console.log(`\u{1F3A8} [StyleCoordinator] \u2705 Applied: ${styleProperty.property}=${styleProperty.value}${styleProperty.unit || ""}`);
    } catch (error) {
      console.error(`\u{1F3A8} [StyleCoordinator] Error applying property ${styleProperty.property}:`, error);
      console.error(`\u{1F3A8} [StyleCoordinator] Failed CSS application: ${styleProperty.property}="${styleProperty.value}" - Please check CSS syntax`);
    }
  }
  /**
  * Cleanup and restore all original styles
  */
  cleanup(componentElement) {
    console.log(`\u{1F3A8} [StyleCoordinator] Cleanup: restoring all original styles`);
    this.restoreOriginalStyles(componentElement);
    this.originalValues.clear();
  }
  constructor() {
    _define_property27(this, "originalValues", /* @__PURE__ */ new Map());
    console.log(`\u{1F3A8} [StyleCoordinator] Initialized with canvas detection`);
  }
};

// http-url:https://framerusercontent.com/modules/KjTxzBqGADIE7NL89Y2Q/bRlWwxtjsDzrWfCaM5A8/StyleSlotAdapter.js
function toInternalFormat2(propertyControlsSlot) {
  const id = `style-slot-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  const name = propertyControlsSlot.name || "Unnamed Style";
  const targetElements = convertTargetElements(propertyControlsSlot.targetElements || []);
  const { styleProperties, validationErrors } = convertStyleProperties(propertyControlsSlot.activeProperties || [], propertyControlsSlot);
  if (validationErrors.length > 0) {
    console.warn(`\u{1F3A8} [StyleSlot] Validation errors for "${name}":`, validationErrors);
    validationErrors.forEach((error) => {
      console.warn(`\u{1F3A8} [StyleSlot] Invalid CSS: ${error.property}="${error.value}" - ${error.error}`);
    });
  }
  return { id, name, targetElements, styleProperties, validationErrors: validationErrors.length > 0 ? validationErrors : void 0 };
}
function convertTargetElements(targetElementsData) {
  if (!Array.isArray(targetElementsData)) {
    return [{ selection: { scope: ElementScope.SELF, criteria: [] } }];
  }
  return targetElementsData.map((targetData) => {
    const scope = targetData.scope || ElementScope.SELF;
    const depth = targetData.depth || ScopeDepth.DIRECT;
    const criteria = [];
    if (targetData.criteriaType1 && targetData.criteriaType1 !== "none" && targetData.criteriaValue1) {
      criteria.push({ type: targetData.criteriaType1, value: targetData.criteriaValue1 });
    }
    if (targetData.criteriaType2 && targetData.criteriaType2 !== "none" && targetData.criteriaValue2) {
      criteria.push({ type: targetData.criteriaType2, value: targetData.criteriaValue2 });
    }
    if (targetData.criteriaType3 && targetData.criteriaType3 !== "none" && targetData.criteriaValue3) {
      criteria.push({ type: targetData.criteriaType3, value: targetData.criteriaValue3 });
    }
    return { selection: { scope, criteria, depth } };
  });
}
function convertStyleProperties(activeProperties, propertyControlsData) {
  const styleProperties = [];
  const validationErrors = [];
  activeProperties.forEach((propertyName) => {
    const propertyData = propertyControlsData[propertyName];
    if (!propertyData) {
      console.warn(`\u{1F3A8} [StyleSlot] No data found for property: ${propertyName}`);
      return;
    }
    let value = propertyData.value || "";
    if (typeof value === "number") {
      value = value.toString();
    } else if (typeof value === "boolean") {
      value = value ? "true" : "false";
    }
    if (!value || value.trim() === "") {
      console.warn(`\u{1F3A8} [StyleSlot] Empty value for property: ${propertyName}`);
      return;
    }
    const validation = validateCSSProperty(propertyName, value);
    const styleProperty = { property: propertyName, value: value.toString(), unit: propertyData.unit || void 0, isValid: validation.isValid, validationError: validation.error };
    styleProperties.push(styleProperty);
    if (!validation.isValid) {
      validationErrors.push({ property: propertyName, value: value.toString(), error: validation.error || "Unknown validation error", timestamp: Date.now() });
    }
  });
  return { styleProperties, validationErrors };
}
function convertSlotArray2(propertyControlsSlots) {
  if (!Array.isArray(propertyControlsSlots)) {
    console.warn("\u{1F3A8} [StyleSlotAdapter] Invalid input: expected array");
    return [];
  }
  return propertyControlsSlots.map((slot) => toInternalFormat2(slot));
}

// http-url:https://framerusercontent.com/modules/XV1k3IlJGX2ACShrojce/5GjKf3jZmsGinkxlzake/useAnimatedTextElements.js
import { useState, useCallback, useRef, useEffect, useMemo } from "react";
function useAnimatedTextElements() {
  const [elementRefs, setElementRefs] = useState([]);
  const [refsVersion, setRefsVersion] = useState(0);
  const registeredElementsRef = useRef(/* @__PURE__ */ new Set());
  const retargetCallbacksRef = useRef(/* @__PURE__ */ new Set());
  const updateElementRefs = useCallback((elements, splitType) => {
    const newManagedRefs = elements.map((element, index) => {
      const ref = { current: element };
      let elementId = element.getAttribute("data-fame-element-id");
      if (!elementId) {
        elementId = `fame-text-${Date.now()}-${index}`;
        element.setAttribute("data-fame-element-id", elementId);
      }
      const splitTypeStr = element.getAttribute("data-fame-split") || (splitType ? splitType.toString() : "unknown");
      const managedRef = { ref, elementId, index, splitType: splitTypeStr, textContent: element.textContent || "", timestamp: Date.now() };
      return managedRef;
    });
    setElementRefs(newManagedRefs);
    setRefsVersion((prev) => prev + 1);
    console.log(`\u{1F504} [useAnimatedTextElements] Updated ${newManagedRefs.length} element refs`);
    retargetAnimations();
  }, [refsVersion]);
  const getConnectedElements = useCallback(() => {
    const connectedElements = [];
    elementRefs.forEach((managedRef, index) => {
      const element = managedRef.ref.current;
      if (element && element.isConnected) {
        connectedElements.push(element);
      } else {
        console.warn(`\u{1F504} [useAnimatedTextElements] Ref ${index} (${managedRef.elementId}) is not connected`);
      }
    });
    console.log(`\u{1F504} [useAnimatedTextElements] getConnectedElements: ${connectedElements.length}/${elementRefs.length} connected`);
    return connectedElements;
  }, [elementRefs]);
  const registerForSplitCallbacks = useCallback((elementId) => {
    const textSplitter = TextSplitter.getInstance();
    const callback = (elements, splitType) => {
      console.log(`\u{1F504} [useAnimatedTextElements] Split complete callback for ${elementId}:`, { elementCount: elements.length, splitType });
      updateElementRefs(elements, splitType);
    };
    textSplitter.registerSplitCompleteCallback(elementId, callback);
    registeredElementsRef.current.add(elementId);
    console.log(`\u{1F504} [useAnimatedTextElements] Registered split callback for: ${elementId}`);
  }, [updateElementRefs]);
  const cleanupSplitCallbacks = useCallback((elementId) => {
    const textSplitter = TextSplitter.getInstance();
    textSplitter.unregisterSplitCompleteCallback(elementId);
    registeredElementsRef.current.delete(elementId);
    console.log(`\u{1F504} [useAnimatedTextElements] Cleaned up split callback for: ${elementId}`);
  }, []);
  const retargetAnimations = useCallback(() => {
    console.log(`\u{1F504} [useAnimatedTextElements] Triggering animation re-targeting for ${retargetCallbacksRef.current.size} callbacks`);
    retargetCallbacksRef.current.forEach((callback) => {
      try {
        callback();
      } catch (error) {
        console.error(`\u{1F504} [useAnimatedTextElements] Error in retarget callback:`, error);
      }
    });
  }, []);
  const addRetargetCallback = useCallback((callback) => {
    retargetCallbacksRef.current.add(callback);
    return () => retargetCallbacksRef.current.delete(callback);
  }, []);
  useEffect(() => {
    return () => {
      const textSplitter = TextSplitter.getInstance();
      registeredElementsRef.current.forEach((elementId) => {
        textSplitter.unregisterSplitCompleteCallback(elementId);
      });
      registeredElementsRef.current.clear();
      retargetCallbacksRef.current.clear();
      console.log(`\u{1F504} [useAnimatedTextElements] Cleaned up all callbacks on unmount`);
    };
  }, []);
  const returnValue = useMemo(() => ({ elementRefs, updateElementRefs, getConnectedElements, registerForSplitCallbacks, cleanupSplitCallbacks, refCount: elementRefs.length, refsVersion, retargetAnimations, addRetargetCallback }), [elementRefs, updateElementRefs, getConnectedElements, registerForSplitCallbacks, cleanupSplitCallbacks, refsVersion, retargetAnimations, addRetargetCallback]);
  return returnValue;
}

// http-url:https://framerusercontent.com/modules/Gc9s25qXFN0l0ldt5h4D/m5oWn3aKCW0b2HpVxg5Q/useFramerBreakpointPersistence.js
import { useState as useState2, useEffect as useEffect2, useRef as useRef2, useCallback as useCallback2 } from "react";
function _define_property28(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var FramerBreakpointStateManager = class _FramerBreakpointStateManager {
  static getInstance() {
    if (!this.instance) {
      this.instance = new _FramerBreakpointStateManager();
    }
    return this.instance;
  }
  /**
  * Save animation state for a component
  */
  saveState(componentId, state) {
    console.log(`\u{1F4BE} [BreakpointPersistence] Saving state for component: ${componentId}`, state);
    this.animationStates.set(componentId, { ...state, timestamp: Date.now() });
  }
  /**
  * Restore animation state for a component
  */
  restoreState(componentId) {
    const state = this.animationStates.get(componentId);
    if (state) {
      console.log(`\u{1F504} [BreakpointPersistence] Restoring state for component: ${componentId}`, state);
      return state;
    }
    return null;
  }
  /**
  * Register a component as active
  */
  registerComponent(componentId) {
    console.log(`\u{1F4DD} [BreakpointPersistence] Registering component: ${componentId}`);
    this.activeComponents.add(componentId);
  }
  /**
  * Unregister a component
  */
  unregisterComponent(componentId) {
    console.log(`\u{1F5D1}\uFE0F [BreakpointPersistence] Unregistering component: ${componentId}`);
    this.activeComponents.delete(componentId);
    this.animationStates.delete(componentId);
    const observer = this.observers.get(componentId);
    if (observer) {
      observer.disconnect();
      this.observers.delete(componentId);
    }
  }
  /**
  * Setup DOM mutation observer for a component
  */
  setupDOMObserver(componentId, onVariantChange) {
    const framerContainer = document.querySelector("#main[data-framer-hydrate-v2]") || document.querySelector("[data-framer-hydrate-v2]") || document.body;
    if (!framerContainer) {
      console.warn(`\u26A0\uFE0F [BreakpointPersistence] Could not find Framer container for DOM observation`);
      return () => {
      };
    }
    console.log(`\u{1F440} [BreakpointPersistence] Setting up DOM observer for component: ${componentId}`);
    const observer = new MutationObserver((mutations) => {
      const hasStructuralChanges = mutations.some((mutation) => mutation.type === "childList" && (mutation.addedNodes.length > 0 || mutation.removedNodes.length > 0));
      if (hasStructuralChanges) {
        console.log(`\u{1F504} [BreakpointPersistence] DOM structure change detected, triggering variant change callback`);
        onVariantChange();
      }
    });
    observer.observe(framerContainer, { childList: true, subtree: true });
    this.observers.set(componentId, observer);
    return () => {
      observer.disconnect();
      this.observers.delete(componentId);
    };
  }
  constructor() {
    _define_property28(this, "animationStates", /* @__PURE__ */ new Map());
    _define_property28(this, "activeComponents", /* @__PURE__ */ new Set());
    _define_property28(this, "observers", /* @__PURE__ */ new Map());
  }
};
_define_property28(FramerBreakpointStateManager, "instance", void 0);
var FRAMER_BREAKPOINTS = { desktop: 1200, tablet: 810, phone: 0 };
function getCurrentBreakpoint() {
  if (typeof __dai_window === "undefined")
    return "desktop";
  const width = __dai_window.innerWidth;
  if (width >= FRAMER_BREAKPOINTS.desktop)
    return "desktop";
  if (width >= FRAMER_BREAKPOINTS.tablet)
    return "tablet";
  return "phone";
}
function useFramerBreakpointPersistence(componentId, onVariantChange, getCurrentState) {
  const stateManager = FramerBreakpointStateManager.getInstance();
  const [currentBreakpoint, setCurrentBreakpoint] = useState2(getCurrentBreakpoint);
  const resizeTimerRef = useRef2(null);
  const lastSaveTimeRef = useRef2(0);
  const isInitializedRef = useRef2(false);
  const saveCurrentState = useCallback2(() => {
    const now = Date.now();
    if (now - lastSaveTimeRef.current < 100)
      return;
    const currentState = getCurrentState();
    stateManager.saveState(componentId, currentState);
    lastSaveTimeRef.current = now;
  }, [componentId, getCurrentState]);
  const handleVariantChange = useCallback2(() => {
    console.log(`\u{1F504} [BreakpointPersistence] Variant change detected for component: ${componentId}`);
    saveCurrentState();
    const forceTextReSplitting = () => {
      try {
        const responsiveManager = ResponsiveTextManager.getInstance();
        if (responsiveManager) {
          console.log(`\u{1F504} [BreakpointPersistence] \u{1F6A8} FORCING text re-split for breakpoint change`);
          responsiveManager.forceResizeAll().then(() => {
            console.log(`\u{1F504} [BreakpointPersistence] \u2705 Text re-split complete for breakpoint change`);
          }).catch((error) => {
            console.warn(`\u{1F504} [BreakpointPersistence] Text re-split failed:`, error);
          });
        } else {
          console.warn(`\u{1F504} [BreakpointPersistence] ResponsiveTextManager not available for text re-split`);
        }
      } catch (error) {
        console.warn(`\u{1F504} [BreakpointPersistence] Could not force text re-splitting:`, error);
      }
    };
    setTimeout(() => {
      const restoredState = stateManager.restoreState(componentId);
      onVariantChange(restoredState);
      setTimeout(forceTextReSplitting, 100);
    }, 50);
  }, [componentId, saveCurrentState, onVariantChange]);
  useEffect2(() => {
    const handleResize = () => {
      if (resizeTimerRef.current) {
        clearTimeout(resizeTimerRef.current);
      }
      resizeTimerRef.current = __dai_window.setTimeout(() => {
        const newBreakpoint = getCurrentBreakpoint();
        if (newBreakpoint !== currentBreakpoint) {
          console.log(`\u{1F4F1} [BreakpointPersistence] Breakpoint change: ${currentBreakpoint} \u2192 ${newBreakpoint}`);
          setCurrentBreakpoint(newBreakpoint);
          handleVariantChange();
        }
      }, 200);
    };
    __dai_window.addEventListener("resize", handleResize);
    return () => {
      __dai_window.removeEventListener("resize", handleResize);
      if (resizeTimerRef.current) {
        clearTimeout(resizeTimerRef.current);
      }
    };
  }, [currentBreakpoint, handleVariantChange]);
  useEffect2(() => {
    stateManager.registerComponent(componentId);
    const cleanupObserver = stateManager.setupDOMObserver(componentId, handleVariantChange);
    if (!isInitializedRef.current) {
      const restoredState = stateManager.restoreState(componentId);
      if (restoredState) {
        console.log(`\u{1F504} [BreakpointPersistence] Initial state restoration for component: ${componentId}`);
        onVariantChange(restoredState);
      }
      isInitializedRef.current = true;
    }
    return () => {
      saveCurrentState();
      cleanupObserver();
      stateManager.unregisterComponent(componentId);
    };
  }, [componentId, handleVariantChange, onVariantChange, saveCurrentState]);
  useEffect2(() => {
    const interval = setInterval(() => {
      if (isInitializedRef.current) {
        saveCurrentState();
      }
    }, 1e3);
    return () => clearInterval(interval);
  }, [saveCurrentState]);
  return { currentBreakpoint, saveCurrentState, restoreState: () => stateManager.restoreState(componentId), isBreakpointTransition: false };
}
function isFramerEnvironment() {
  return typeof __dai_window !== "undefined" && __dai_window.__FRAMER_FEATURES__ !== void 0;
}

// http-url:https://framerusercontent.com/modules/NIqDivtDhSWJb6gLoWAq/MtPBndW6qSAUifFEZWPO/ImmediateStyleApplicator.js
function clearStyleCache2() {
  console.log("\u{1F680} [ImmediateStyleApplicator] Style cache clear delegated to PrecomputedStyleCache");
}
function applyImmediateInitialStyles(animationSlots, parentElement, showInitialValuesInCanvas) {
  const startTime = performance.now();
  try {
    console.log(`\u{1F680} [ImmediateStyleApplicator] Starting immediate style application for ${animationSlots.length} slots`);
    if (!animationSlots || animationSlots.length === 0) {
      return true;
    }
    const isCanvasMode = detectCanvasMode();
    const shouldApply = !isCanvasMode || showInitialValuesInCanvas;
    if (!shouldApply) {
      console.log("\u{1F680} [ImmediateStyleApplicator] Skipping style application in Canvas mode");
      return true;
    }
    let totalElementsProcessed = 0;
    let totalPropertiesApplied = 0;
    animationSlots.forEach((rawSlot, slotIndex) => {
      try {
        const properties = extractAnimationProperties(rawSlot);
        if (properties.length === 0)
          return;
        const elements = findTargetElementsSync(rawSlot, parentElement);
        if (elements.length === 0)
          return;
        elements.forEach((element, elementIndex) => {
          const appliedCount = applyInitialStylesToElement(element, properties);
          totalPropertiesApplied += appliedCount;
        });
        totalElementsProcessed += elements.length;
      } catch (error) {
        console.warn(`\u{1F680} [ImmediateStyleApplicator] Error processing slot ${slotIndex}:`, error);
      }
    });
    const executionTime = performance.now() - startTime;
    if (executionTime > 5) {
      console.warn(`\u{1F680} [ImmediateStyleApplicator] \u26A0\uFE0F Slow execution: ${executionTime.toFixed(2)}ms (target: <5ms for useLayoutEffect)`);
    }
    console.log(`\u{1F680} [ImmediateStyleApplicator] \u2705 Completed in ${executionTime.toFixed(2)}ms:`, { slotsProcessed: animationSlots.length, elementsProcessed: totalElementsProcessed, propertiesApplied: totalPropertiesApplied, avgTimePerElement: totalElementsProcessed > 0 ? (executionTime / totalElementsProcessed).toFixed(2) + "ms" : "0ms", withinTargetTime: executionTime <= 5 });
    return true;
  } catch (error) {
    const executionTime = performance.now() - startTime;
    console.error(`\u{1F680} [ImmediateStyleApplicator] \u274C Failed after ${executionTime.toFixed(2)}ms:`, error);
    return false;
  }
}
function extractAnimationProperties(rawSlot) {
  const properties = [];
  try {
    const activeProperties = rawSlot.activeProperties || [];
    const processedPropertyKeys = /* @__PURE__ */ new Set();
    activeProperties.forEach((propertyName) => {
      const propertyConfig = rawSlot[propertyName];
      if (propertyConfig && typeof propertyConfig === "object") {
        processedPropertyKeys.add(propertyName);
      }
    });
    Object.keys(rawSlot).forEach((key) => {
      const match = key.match(/^(.+)_(\d+)$/);
      if (match) {
        const basePropertyName = match[1];
        if (activeProperties.includes(basePropertyName)) {
          const propertyConfig = rawSlot[key];
          if (propertyConfig && typeof propertyConfig === "object") {
            processedPropertyKeys.add(key);
          }
        }
      }
    });
    Array.from(processedPropertyKeys).forEach((propertyKey) => {
      const rawProp = rawSlot[propertyKey];
      const actualPropertyName = propertyKey.replace(/_\d+$/, "");
      const hasDistributedConfig = rawProp[`useDistributed${actualPropertyName}Values`] === true;
      if (hasDistributedConfig) {
        console.log(`\u26A0\uFE0F [ImmediateStyleApplicator] Skipping distributed property '${actualPropertyName}' - will be handled after expansion`);
        return;
      }
      if (actualPropertyName === "rotateY") {
        console.log(`\u{1F6A8} [ImmediateStyleApplicator] Processing rotateY - Key: ${propertyKey}, From: ${rawProp.from}, To: ${rawProp.to}`);
      }
      if (actualPropertyName === "translateX") {
        console.log(`\u{1F6A8} [ImmediateStyleApplicator] Processing translateX - Key: ${propertyKey}, From: ${rawProp.from}, Distributed: ${hasDistributedConfig}`);
      }
      if (rawProp.from !== void 0 && rawProp.from !== null && rawProp.from !== "") {
        const processedProperty = {
          property: actualPropertyName,
          from: rawProp.from,
          to: rawProp.to,
          unit: rawProp.unit || "",
          // These aren't needed for immediate application
          duration: 0,
          delay: 0,
          easing: "linear"
        };
        properties.push(processedProperty);
        if (actualPropertyName === "rotateY") {
          console.log(`\u2705 [ImmediateStyleApplicator] rotateY property added successfully with from value: ${rawProp.from}`);
        }
        if (actualPropertyName === "translateX") {
          console.log(`\u2705 [ImmediateStyleApplicator] translateX property added successfully with from value: ${rawProp.from}`);
        }
      } else {
        if (actualPropertyName === "rotateY") {
          console.log(`\u274C [ImmediateStyleApplicator] rotateY property REJECTED - from value: ${rawProp.from} (type: ${typeof rawProp.from})`);
        }
        if (actualPropertyName === "translateX") {
          console.log(`\u274C [ImmediateStyleApplicator] translateX property REJECTED - from value: ${rawProp.from} (type: ${typeof rawProp.from})`);
        }
      }
    });
    console.log(`\u{1F680} [ImmediateStyleApplicator] Extracted ${properties.length} non-distributed properties for immediate application`);
  } catch (error) {
    console.warn("\u{1F680} [ImmediateStyleApplicator] Error extracting properties:", error);
  }
  return properties;
}
function findTargetElementsSync(rawSlot, parentElement) {
  const elements = [];
  try {
    const animatedElements = rawSlot.animatedElements || [];
    animatedElements.forEach((animatedElement) => {
      const selection = animatedElement.selection || {};
      const scope = selection.scope || "children";
      const selector = selection.selector || "*";
      if (scope === "children" || scope === "descendants") {
        const method = scope === "children" ? "children" : "querySelectorAll";
        const found = scope === "children" ? Array.from(parentElement.children).filter((el) => el.matches(selector)) : Array.from(parentElement.querySelectorAll(selector));
        elements.push(...found);
      }
    });
  } catch (error) {
    console.warn("\u{1F680} [ImmediateStyleApplicator] Error finding elements:", error);
  }
  return elements;
}
function applyInitialStylesToElement(element, properties) {
  let appliedCount = 0;
  try {
    const stylesToApply = {};
    const hasTransforms = properties.some((p) => p.property.includes("transform") || p.property.includes("translate") || p.property.includes("rotate") || p.property.includes("scale"));
    const hasOpacity = properties.some((p) => p.property === "opacity");
    if (hasTransforms || hasOpacity) {
      stylesToApply["will-change"] = "transform, opacity";
      stylesToApply["transform-origin"] = "center center";
    }
    const transformProperties = [];
    const nonTransformProperties = [];
    properties.forEach((property) => {
      const initialValue = resolveInitialValue2(element, property);
      if (initialValue !== void 0 && initialValue !== null) {
        const valueWithUnit = `${initialValue}${property.unit || ""}`;
        const isTransformProperty3 = ["translateX", "translateY", "translateZ", "rotateX", "rotateY", "rotateZ", "rotate", "scaleX", "scaleY", "scaleZ", "scale", "skewX", "skewY"].includes(property.property);
        if (isTransformProperty3) {
          transformProperties.push({ property: property.property, value: initialValue, unit: property.unit || "" });
        } else {
          const cssProperty = getCSSPropertyName(property.property);
          stylesToApply[cssProperty] = valueWithUnit;
        }
        appliedCount++;
      }
    });
    if (Object.keys(stylesToApply).length > 0) {
      Object.assign(element.style, stylesToApply);
    }
    transformProperties.forEach(({ property, value, unit }) => {
      const valueWithUnit = `${value}${unit}`;
      applyTransform(element, property, valueWithUnit);
    });
  } catch (error) {
    console.warn("\u{1F680} [ImmediateStyleApplicator] Error applying styles to element:", error);
  }
  return appliedCount;
}
function resolveInitialValue2(element, property) {
  if (property.property === "rotateY") {
    console.log(`\u{1F6A8} [ImmediateStyleApplicator] Resolving rotateY initial value: ${property.from} (type: ${typeof property.from})`);
  }
  if (property.from !== void 0 && property.from !== null) {
    if (property.property === "rotateY") {
      console.log(`\u2705 [ImmediateStyleApplicator] Using rotateY from value: ${property.from}`);
    }
    return property.from;
  }
  try {
    const cssProperty = getCSSPropertyName(property.property);
    const cachedStyles = getCachedComputedStyles(element, [cssProperty]);
    const currentValue = cachedStyles.get(cssProperty);
    if (currentValue && currentValue !== "auto" && currentValue !== "initial") {
      return currentValue;
    }
  } catch (error) {
    console.warn(`\u{1F680} [ImmediateStyleApplicator] Could not get computed value for ${property.property}:`, error);
  }
  const defaultValue = getDefaultValue2(property.property);
  if (property.property === "rotateY") {
    console.log(`\u26A0\uFE0F [ImmediateStyleApplicator] rotateY using default value: ${defaultValue} (this indicates from value was invalid)`);
  }
  return defaultValue;
}
function getCSSPropertyName(animationProperty) {
  const propertyMap = { translateX: "transform", translateY: "transform", translateZ: "transform", rotateX: "transform", rotateY: "transform", rotateZ: "transform", rotate: "transform", scaleX: "transform", scaleY: "transform", scaleZ: "transform", scale: "transform", perspectiveOrigin: "perspective-origin", transformStyle: "transform-style", backfaceVisibility: "backface-visibility", pointerEvents: "pointer-events" };
  return propertyMap[animationProperty] || animationProperty;
}
function getDefaultValue2(property) {
  const defaults = { opacity: 1, translateX: 0, translateY: 0, translateZ: 0, rotateX: 0, rotateY: 0, rotateZ: 0, rotate: 0, scaleX: 1, scaleY: 1, scaleZ: 1, scale: 1, width: "auto", height: "auto", "background-color": "transparent", color: "inherit", perspective: "1000px", perspectiveOrigin: "50% 50%", transformStyle: "flat", backfaceVisibility: "visible", pointerEvents: "auto" };
  return defaults[property] || 0;
}
function detectCanvasMode() {
  try {
    return !!// Check for common Framer Canvas indicators
    (__dai_window.location.pathname.includes("/canvas") || document.body.getAttribute("data-framer-canvas") === "true" || __dai_window.__FRAMER_CANVAS_MODE__ === true || // Check URL patterns
    __dai_window.location.href.includes("framer.com/canvas") || __dai_window.location.href.includes("/editing"));
  } catch (error) {
    return false;
  }
}

// http-url:https://framerusercontent.com/modules/zfWQtz2su5muN4Min5GO/Wc13UFJYkCXf8Hm2FNZ5/BatchDOMOperations.js
function _define_property29(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var DOMOperationMonitor = class {
  /**
  * Record a batch operation result
  */
  recordOperation(result) {
    this.operations.push(result);
    if (this.operations.length > 100) {
      this.operations.shift();
    }
  }
  /**
  * Get performance metrics for recent operations
  */
  getMetrics() {
    if (this.operations.length === 0) {
      return { totalOperations: 0, averageTime: 0, totalElements: 0, averageElementsPerMs: 0, layoutInvalidationRate: 0 };
    }
    const totalTime = this.operations.reduce((sum, op) => sum + op.timeElapsed, 0);
    const totalElements = this.operations.reduce((sum, op) => sum + op.elementsProcessed, 0);
    const totalInvalidations = this.operations.reduce((sum, op) => sum + op.layoutInvalidations, 0);
    return { totalOperations: this.operations.length, averageTime: totalTime / this.operations.length, totalElements, averageElementsPerMs: totalElements / totalTime, layoutInvalidationRate: totalInvalidations / this.operations.length };
  }
  /**
  * Clear recorded operations
  */
  clear() {
    this.operations.length = 0;
  }
  constructor() {
    _define_property29(this, "operations", []);
  }
};
var domOperationMonitor = new DOMOperationMonitor();

// http-url:https://framerusercontent.com/modules/NdJsr7eXX49zmBW785UV/AmWJmyBQVZ4cSa0YHHvR/PerformanceTextSplitter.js
var textProcessingCache = /* @__PURE__ */ new Map();
function clearPerformanceCache() {
  textProcessingCache.clear();
  console.log("\u{1F680} [PerformanceTextSplitter] Cache cleared");
}

// http-url:https://framerusercontent.com/modules/WtDl4ohr1yUcrCOwh8Qv/cPCV6brR7je3sKRwRVw7/ConsoleDebugFilter.js
var globalConsole = console;
if (!globalConsole.__fameDebugPatched) {
  globalConsole.__fameOriginalLog = globalConsole.log.bind(globalConsole);
  globalConsole.__fameOriginalInfo = globalConsole.info.bind(globalConsole);
  globalConsole.__fameOriginalDebug = globalConsole.debug.bind(globalConsole);
  const createFiltered = (original) => {
    return (...args) => {
      if (globalConsole.__fameDebugEnabled) {
        original(...args);
      }
    };
  };
  globalConsole.log = createFiltered(globalConsole.__fameOriginalLog);
  globalConsole.info = createFiltered(globalConsole.__fameOriginalInfo);
  globalConsole.debug = createFiltered(globalConsole.__fameOriginalDebug);
  globalConsole.__fameDebugEnabled = true;
  globalConsole.__fameDebugPatched = true;
}
function setDebugLogging(enabled) {
  console.__fameDebugEnabled = enabled;
}

// http-url:https://framerusercontent.com/modules/B6f4pN4w5zhqxeRfgbGm/c8MNyXjoOWbjoHb7O9ot/FAME.js
function FAME_Beta(props) {
  const { animationSlots = [], styleSlots = [], debug = false, disabled = false, showInitialValuesInCanvas = false, showStyleSlotsInCanvas = false, showFameElement = false, debugConfig, children } = props;
  const elementRef = useRef3(null);
  const componentIdRef = useRef3(`fame-component-${Date.now()}-${Math.floor(Math.random() * 1e3)}`);
  const orchestratorRef = useRef3(null);
  const styleCoordinatorRef = useRef3(null);
  const isInitializingRef = useRef3(false);
  const lastInitPropsRef = useRef3("");
  const { elementRefs, updateElementRefs, getConnectedElements, registerForSplitCallbacks, retargetAnimations, addRetargetCallback, refsVersion } = useAnimatedTextElements();
  const getCurrentAnimationState = () => {
    const serializedStates = animationStateManager.serializeAllStates();
    const currentStates = /* @__PURE__ */ new Map();
    for (const [slotId, stateData] of Object.entries(serializedStates)) {
      currentStates.set(slotId, stateData);
    }
    return { currentStates, isAnimating: animationStateManager.hasRunningAnimations(), lastTriggerStates: /* @__PURE__ */ new Map(), breakpoint: "desktop" };
  };
  const handleVariantChange = (restoredState) => {
    isInitializingRef.current = true;
    setTimeout(() => {
      initializeWithState(restoredState);
      isInitializingRef.current = false;
    }, 100);
  };
  const breakpointPersistence = isFramerEnvironment() ? useFramerBreakpointPersistence(componentIdRef.current, handleVariantChange, getCurrentAnimationState) : null;
  useEffect3(() => {
    setDebugLogging(debug);
    if (debug) {
      unifiedScrollManager.setDebugLogging(true);
    } else {
      unifiedScrollManager.setDebugLogging(false);
    }
  }, [debug]);
  const initializeWithState = async (restoredState, skipImmediateStyles = false) => {
    if (isInitializingRef.current) {
      return;
    }
    const propsSignature = JSON.stringify({ animationSlots: animationSlots.map((slot) => ({ id: slot.id, ...slot })), styleSlots: styleSlots.map((slot) => ({ id: slot.id, ...slot })), disabled, showInitialValuesInCanvas, showStyleSlotsInCanvas });
    if (propsSignature === lastInitPropsRef.current && !restoredState) {
      return;
    }
    lastInitPropsRef.current = propsSignature;
    if (disabled) {
      console.log("\u{1F3AD} [FAME] Animation system disabled");
      return;
    }
    const componentElement = elementRef.current;
    if (!componentElement) {
      console.warn("\u{1F3AD} [FAME] No component element found");
      return;
    }
    try {
      if (!skipImmediateStyles) {
        initializeStyleCache();
        const immediateStyleSuccess = applyImmediateInitialStyles(animationSlots, componentElement, showInitialValuesInCanvas);
        if (immediateStyleSuccess) {
          console.log("\u{1F680} [FAME] \u2705 Immediate styles applied - no flash will occur");
        } else {
          console.warn("\u{1F680} [FAME] \u26A0\uFE0F Immediate style application failed - may see flash");
        }
      }
      console.log("\u{1F510} [FAME] License system removed - full access enabled on all domains");
      if (orchestratorRef.current) {
        orchestratorRef.current.cleanup();
      }
      if (styleCoordinatorRef.current) {
        styleCoordinatorRef.current.cleanup(componentElement);
      }
      orchestratorRef.current = new AnimationOrchestrator(componentIdRef.current);
      styleCoordinatorRef.current = new StyleCoordinator();
      if (restoredState && restoredState.currentStates.size > 0) {
        console.log("\u{1F504} [FAME] Restoring animation states from breakpoint transition");
        const stateObject = {};
        for (const [slotId, stateData] of restoredState.currentStates) {
          stateObject[slotId] = stateData;
        }
        animationStateManager.restoreSerializedStates(stateObject);
      }
      const initializeAnimations = async () => {
        if (animationSlots.length > 0) {
          console.log("\u{1F3AD} [FAME] Step 1: Converting property controls to internal format");
          const internalSlots = convertSlotArray(animationSlots);
          console.log(`\u{1F3AD} [FAME] Successfully converted ${internalSlots.length} animation slots`);
          console.log("\u{1F3AD} [FAME] Step 2: Routing slots through AnimationOrchestrator");
          console.log(`\u{1F680} [FAME] Starting non-blocking slot processing for ${internalSlots.length} slots`);
          for (let index = 0; index < internalSlots.length; index++) {
            const slot = internalSlots[index];
            try {
              console.log(`\u{1F3AD} [FAME] Processing slot ${index + 1}/${internalSlots.length}:`, { id: slot.id, mode: slot.animationMode, triggers: slot.triggers.length, properties: slot.properties.length, animatedElementsCount: slot.animatedElements.length, animatedElementsScopes: slot.animatedElements.map((ae) => ae.selection.scope) });
              const cleanup2 = await orchestratorRef.current?.executeSlot(slot, componentElement, showInitialValuesInCanvas, { updateElementRefs, registerForSplitCallbacks, retargetAnimations, addRetargetCallback });
              if (cleanup2) {
              }
              if ((index + 1) % 2 === 0 && index < internalSlots.length - 1) {
                await new Promise((resolve) => setTimeout(resolve, 0));
              }
            } catch (slotError) {
              console.error(`\u{1F3AD} [FAME] Error processing slot ${index}:`, slotError);
            }
          }
          console.log("\u{1F3AD} [FAME] \u2705 Animation data flow pipeline completed successfully!");
          console.log("\u{1F3AD} [FAME] Data flow: Property Controls \u2192 Adapter \u2192 Orchestrator \u2192 TimedAnimator");
        } else {
          console.log("\u{1F3AD} [FAME] No animation slots to process");
        }
      };
      await initializeAnimations();
      if (styleSlots.length > 0) {
        console.log("\u{1F3AD} [FAME] Step 1: Converting style property controls to internal format");
        const internalStyleSlots = convertSlotArray2(styleSlots);
        console.log(`\u{1F3AD} [FAME] Successfully converted ${internalStyleSlots.length} style slots`);
        console.log("\u{1F3AD} [FAME] Step 2: Applying styles via StyleCoordinator");
        if (styleCoordinatorRef.current) {
          styleCoordinatorRef.current.applyStyleSlots(internalStyleSlots, componentElement, showStyleSlotsInCanvas);
          console.log("\u{1F3AD} [FAME] \u2705 Style application pipeline completed successfully!");
          console.log("\u{1F3AD} [FAME] Style flow: Property Controls \u2192 Adapter \u2192 StyleCoordinator \u2192 CSS Applied");
        }
      } else {
        console.log("\u{1F3AD} [FAME] No style slots to process");
      }
      if (breakpointPersistence) {
        breakpointPersistence.saveCurrentState();
      }
    } catch (error) {
      console.error("\u{1F3AD} [FAME] Error in animation data flow pipeline:", error);
    }
  };
  useLayoutEffect(() => {
    if (disabled)
      return;
    const componentElement = elementRef.current;
    if (!componentElement)
      return;
    initializeStyleCache();
    applyImmediateInitialStyles(animationSlots, componentElement, showInitialValuesInCanvas);
    const deferredInit = () => initializeWithState(void 0, true);
    if (typeof __dai_window.requestIdleCallback === "function") {
      __dai_window.requestIdleCallback(deferredInit);
    } else {
      setTimeout(deferredInit, 0);
    }
  }, [animationSlots, styleSlots, disabled, showInitialValuesInCanvas, showStyleSlotsInCanvas, refsVersion]);
  useEffect3(() => {
    return () => {
      if (breakpointPersistence && !isInitializingRef.current) {
        breakpointPersistence.saveCurrentState();
      }
      if (orchestratorRef.current) {
        orchestratorRef.current.cleanup();
        orchestratorRef.current = null;
      }
      if (styleCoordinatorRef.current) {
        const componentElement = elementRef.current;
        if (componentElement) {
          styleCoordinatorRef.current.cleanup(componentElement);
        }
        styleCoordinatorRef.current = null;
      }
      clearStyleCache2();
      clearPerformanceCache();
      cleanup();
    };
  }, []);
  return /* @__PURE__ */ _jsx("div", { ref: elementRef, style: { position: "absolute", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "100%", height: "100%", backgroundColor: showFameElement ? "rgba(0, 102, 255, 0.3)" : "transparent", border: showFameElement ? "1px dashed rgb(0, 102, 255, 1)" : "none", cursor: "pointer", borderRadius: 16, padding: 4 }, "data-fame-animator": "true", "data-component-id": componentIdRef.current, "data-fame-fresh-init": "true", "data-breakpoint": breakpointPersistence?.currentBreakpoint || "unknown" });
}
FAME_Beta.defaultProps = { animationSlots: [], styleSlots: [], debug: false, disabled: false, showInitialValuesInCanvas: false, showStyleSlotsInCanvas: false };
addPropertyControls(FAME_Beta, {
  // Debug controls (DISABLED)
  // debug: CreateDebugControls().debug,
  // Debug configuration controls (only shown when debug is enabled)
  // debugConfig: {
  //     type: ControlType.Object,
  //     title: "Debug Configuration",
  //     hidden: (props: any) => !props.debug,
  //     controls: CreateDebugConfigControls() as any,
  // },
  showFameElement: { type: ControlType9.Boolean, title: "Show FAME", defaultValue: false },
  // disabled: {
  //     type: ControlType.Boolean,
  //     title: "Disable Animations",
  //     defaultValue: false,
  // },
  // showInitialValuesInCanvas: {
  //     type: ControlType.Boolean,
  //     title: "Show Initial Values in Canvas",
  //     description:
  //         "Apply starting animation values in Framer Canvas (useful for visibility while designing)",
  //     defaultValue: false,
  // },
  // hideFromCanvas: {
  //     type: ControlType.Boolean,
  //     title: "Hide from canvas",
  //     defaultValue: false,
  // },
  // showStyleSlotsInCanvas: {
  //     type: ControlType.Boolean,
  //     title: "Show Style Slots in Canvas",
  //     description: "Toggle style slots preview in Framer Canvas",
  //     defaultValue: false,
  // },
  // Main animation slots - using our clean property controls
  animationSlots: CreateAnimationSlotsObject().animationSlots
});
FAME_Beta.displayName = "FAME v1.0";

// http-url:https://framerusercontent.com/modules/BJYo61AZHdzItsdcFcw1/1F54aeTawTYUXT1sfz1n/AC22lxZCv.js
import { fontStore } from "./_framer-runtime.js";
fontStore.loadFonts(["Inter-Bold", "Inter-Black", "Inter-BlackItalic", "Inter-BoldItalic"]);
var fonts = [{ explicitInter: true, fonts: [{ cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/DpPBYI0sL4fYLgAkX8KXOPVt7c.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/4RAEQdEOrcnDkhHiiCbJOw92Lk.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/1K3W8DizY3v4emK8Mb08YHxTbs.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/tUSCtfYVM1I1IchuyCwz9gDdQ.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/VgYFWiwsAC5OYxAycRXXvhze58.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/syRNPWzAMIrcJ3wIlPIP43KjQs.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/GIryZETIX4IFypco5pYZONKhJIo.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/mkY5Sgyq51ik0AMrSBwhm9DJg.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/X5hj6qzcHUYv7h1390c8Rhm6550.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/gQhNpS3tN86g8RcVKYUUaKt2oMQ.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/cugnVhSraaRyANCaUtI5FV17wk.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/5HcVoGak8k5agFJSaKa4floXVu0.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/rZ5DdENNqIdFTIyQQiP5isO7M.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/P2Bw01CtL0b9wqygO0sSVogWbo.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/05KsVHGDmqXSBXM4yRZ65P8i0s.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/ky8ovPukK4dJ1Pxq74qGhOqCYI.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/vvNSqIj42qeQ2bvCRBIWKHscrc.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/3ZmXbBKToJifDV9gwcifVd1tEY.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/FNfhX3dt4ChuLJq2PwdlxHO7PU.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/gcnfba68tfm7qAyrWRCf9r34jg.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/efTfQcBJ53kM2pB1hezSZ3RDUFs.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/H89BbHkbHDzlxZzxi8uPzTsp90.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/u6gJwDuwB143kpNK1T1MDKDWkMc.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/43sJ6MfOPh1LCJt46OvyDuSbA6o.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/wccHG0r4gBDAIRhfHiOlq6oEkqw.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/WZ367JPwf9bRW6LdTHN8rXgSjw.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/ia3uin3hQWqDrVloC1zEtYHWw.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/2A4Xx7CngadFGlVV4xrO06OBHY.woff2", weight: "700" }] }];
var css = [`.framer-cQqdD .framer-styles-preset-184nb30:not(.rich-text-wrapper), .framer-cQqdD .framer-styles-preset-184nb30.rich-text-wrapper p { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", sans-serif; --framer-font-family-bold-italic: "Inter", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on; --framer-font-size: 26px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 700; --framer-font-weight-bold: 900; --framer-font-weight-bold-italic: 900; --framer-font-weight-italic: 700; --framer-letter-spacing: -0.02em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-1ef6a900-97f9-46fa-be58-94c0c8233534, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`, `@media (max-width: 1199px) and (min-width: 810px) { .framer-cQqdD .framer-styles-preset-184nb30:not(.rich-text-wrapper), .framer-cQqdD .framer-styles-preset-184nb30.rich-text-wrapper p { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", sans-serif; --framer-font-family-bold-italic: "Inter", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on; --framer-font-size: 23px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 700; --framer-font-weight-bold: 900; --framer-font-weight-bold-italic: 900; --framer-font-weight-italic: 700; --framer-letter-spacing: -0.02em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-1ef6a900-97f9-46fa-be58-94c0c8233534, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`, `@media (max-width: 809px) and (min-width: 0px) { .framer-cQqdD .framer-styles-preset-184nb30:not(.rich-text-wrapper), .framer-cQqdD .framer-styles-preset-184nb30.rich-text-wrapper p { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", sans-serif; --framer-font-family-bold-italic: "Inter", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on; --framer-font-size: 22px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 700; --framer-font-weight-bold: 900; --framer-font-weight-bold-italic: 900; --framer-font-weight-italic: 700; --framer-letter-spacing: -0.02em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-1ef6a900-97f9-46fa-be58-94c0c8233534, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`];
var className = "framer-cQqdD";

// http-url:https://framerusercontent.com/modules/tZaHOsBBqYBOm7FlCAkC/uqe47JAIXVtSjEZW9mzS/Bf3ONXiqf.js
import { fontStore as fontStore2 } from "./_framer-runtime.js";
fontStore2.loadFonts(["Inter-SemiBold", "Inter-Bold", "Inter-BoldItalic", "Inter-SemiBoldItalic"]);
var fonts2 = [{ explicitInter: true, fonts: [{ cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/hyOgCu0Xnghbimh0pE8QTvtt2AU.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/NeGmSOXrPBfEFIy5YZeHq17LEDA.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/oYaAX5himiTPYuN8vLWnqBbfD2s.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/lEJLP4R0yuCaMCjSXYHtJw72M.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/cRJyLNuTJR5jbyKzGi33wU9cqIQ.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/yDtI2UI8XcEg1W2je9XPN3Noo.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/A0Wcc7NgXMjUuFdquHDrIZpzZw0.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/DpPBYI0sL4fYLgAkX8KXOPVt7c.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/4RAEQdEOrcnDkhHiiCbJOw92Lk.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/1K3W8DizY3v4emK8Mb08YHxTbs.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/tUSCtfYVM1I1IchuyCwz9gDdQ.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/VgYFWiwsAC5OYxAycRXXvhze58.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/syRNPWzAMIrcJ3wIlPIP43KjQs.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/GIryZETIX4IFypco5pYZONKhJIo.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/H89BbHkbHDzlxZzxi8uPzTsp90.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/u6gJwDuwB143kpNK1T1MDKDWkMc.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/43sJ6MfOPh1LCJt46OvyDuSbA6o.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/wccHG0r4gBDAIRhfHiOlq6oEkqw.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/WZ367JPwf9bRW6LdTHN8rXgSjw.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/ia3uin3hQWqDrVloC1zEtYHWw.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/2A4Xx7CngadFGlVV4xrO06OBHY.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/vxBnBhH8768IFAXAb4Qf6wQHKs.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/zSsEuoJdh8mcFVk976C05ZfQr8.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/b8ezwLrN7h2AUoPEENcsTMVJ0.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/mvNEIBLyHbscgHtwfsByjXUz3XY.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/6FI2EneKzM3qBy5foOZXey7coCA.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/fuyXZpVvOjq8NesCOfgirHCWyg.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/NHHeAKJVP0ZWHk5YZnQQChIsBM.woff2", weight: "600" }] }];
var css2 = ['.framer-jjH2Z .framer-styles-preset-1tbvl3k:not(.rich-text-wrapper), .framer-jjH2Z .framer-styles-preset-1tbvl3k.rich-text-wrapper h1 { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 144px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 600; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 600; --framer-letter-spacing: -0.06em; --framer-line-height: 1.1em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-background-corner-shape: superellipse(1); --framer-text-background-corner-shape-fallback: 1; --framer-text-background-radius: calc(0px*var(--one-if-corner-shape-supported,var(--framer-text-background-corner-shape-fallback,1))); --framer-text-color: var(--token-1ef6a900-97f9-46fa-be58-94c0c8233534, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; --framer-text-wrap: balance; }', '@media (max-width: 1199px) and (min-width: 810px) { .framer-jjH2Z .framer-styles-preset-1tbvl3k:not(.rich-text-wrapper), .framer-jjH2Z .framer-styles-preset-1tbvl3k.rich-text-wrapper h1 { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 99px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 600; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 600; --framer-letter-spacing: -0.06em; --framer-line-height: 1.1em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-background-corner-shape: superellipse(1); --framer-text-background-corner-shape-fallback: 1; --framer-text-background-radius: calc(0px*var(--one-if-corner-shape-supported,var(--framer-text-background-corner-shape-fallback,1))); --framer-text-color: var(--token-1ef6a900-97f9-46fa-be58-94c0c8233534, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; --framer-text-wrap: balance; } }', '@media (max-width: 809px) and (min-width: 0px) { .framer-jjH2Z .framer-styles-preset-1tbvl3k:not(.rich-text-wrapper), .framer-jjH2Z .framer-styles-preset-1tbvl3k.rich-text-wrapper h1 { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 60px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 600; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 600; --framer-letter-spacing: -0.06em; --framer-line-height: 1.1em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-background-corner-shape: superellipse(1); --framer-text-background-corner-shape-fallback: 1; --framer-text-background-radius: calc(0px*var(--one-if-corner-shape-supported,var(--framer-text-background-corner-shape-fallback,1))); --framer-text-color: var(--token-1ef6a900-97f9-46fa-be58-94c0c8233534, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; --framer-text-wrap: balance; } }'];
var className2 = "framer-jjH2Z";

// http-url:https://framerusercontent.com/modules/qW2Pz0ks4fOVLVS5TrI5/NXz6AVX8bJ8r06293pX2/kKrcS48gC.js
import { fontStore as fontStore3 } from "./_framer-runtime.js";
fontStore3.loadFonts(["Inter-Medium", "Inter-Bold", "Inter-BoldItalic", "Inter-MediumItalic"]);
var fonts3 = [{ explicitInter: true, fonts: [{ cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/5A3Ce6C9YYmCjpQx9M4inSaKU.woff2", weight: "500" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/Qx95Xyt0Ka3SGhinnbXIGpEIyP4.woff2", weight: "500" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/6mJuEAguuIuMog10gGvH5d3cl8.woff2", weight: "500" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/xYYWaj7wCU5zSQH0eXvSaS19wo.woff2", weight: "500" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/otTaNuNpVK4RbdlT7zDDdKvQBA.woff2", weight: "500" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/UjlFhCnUjxhNfep4oYBPqnEssyo.woff2", weight: "500" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/DolVirEGb34pEXEp8t8FQBSK4.woff2", weight: "500" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/DpPBYI0sL4fYLgAkX8KXOPVt7c.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/4RAEQdEOrcnDkhHiiCbJOw92Lk.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/1K3W8DizY3v4emK8Mb08YHxTbs.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/tUSCtfYVM1I1IchuyCwz9gDdQ.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/VgYFWiwsAC5OYxAycRXXvhze58.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/syRNPWzAMIrcJ3wIlPIP43KjQs.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/GIryZETIX4IFypco5pYZONKhJIo.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/H89BbHkbHDzlxZzxi8uPzTsp90.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/u6gJwDuwB143kpNK1T1MDKDWkMc.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/43sJ6MfOPh1LCJt46OvyDuSbA6o.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/wccHG0r4gBDAIRhfHiOlq6oEkqw.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/WZ367JPwf9bRW6LdTHN8rXgSjw.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/ia3uin3hQWqDrVloC1zEtYHWw.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/2A4Xx7CngadFGlVV4xrO06OBHY.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/khkJkwSL66WFg8SX6Wa726c.woff2", weight: "500" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/0E7IMbDzcGABpBwwqNEt60wU0w.woff2", weight: "500" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/NTJ0nQgIF0gcDelS14zQ9NR9Q.woff2", weight: "500" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/QrcNhgEPfRl0LS8qz5Ln8olanl8.woff2", weight: "500" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/JEXmejW8mXOYMtt0hyRg811kHac.woff2", weight: "500" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/Bo5CNzBv77CafbxOtKIkpw9egw.woff2", weight: "500" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/uy9s0iWuxiNnVt8EpTI3gzohpwo.woff2", weight: "500" }] }];
var css3 = [`.framer-PBk34 .framer-styles-preset-1sx21c1:not(.rich-text-wrapper), .framer-PBk34 .framer-styles-preset-1sx21c1.rich-text-wrapper p { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on; --framer-font-size: 18px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: -0.02em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-1ef6a900-97f9-46fa-be58-94c0c8233534, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`];
var className3 = "framer-PBk34";

// http-url:https://framerusercontent.com/modules/mURrrG6SzQI3UiiEoH2d/9v2ozrCHJxeDc76rNuln/p9ZXoH3vk.js
var FAMEV10Fonts = getFonts(FAME_Beta);
var serializationHash = "framer-CzKku";
var variantClassNames = { O7cHJpTsk: "framer-v-hav10n" };
var transition1 = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" };
var Transition = ({ value, children }) => {
  const config = React.useContext(MotionConfigContext);
  const transition = value ?? config.transition;
  const contextValue = React.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx2(MotionConfigContext.Provider, { value: contextValue, children });
};
var Variants = motion.create(React.Fragment);
var getProps = ({ height, id, width, ...props }) => {
  return { ...props };
};
var createLayoutDependency = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component = /* @__PURE__ */ React.forwardRef(function(props, ref) {
  const fallbackRef = useRef4(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React.useId();
  const { activeLocale, setLocale } = useLocaleInfo();
  const componentViewport = useComponentViewport();
  const { style, className: className4, layoutId, variant, ...restProps } = getProps(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState({ defaultVariant: "O7cHJpTsk", ref: refBinding, variant, variantClassNames });
  const layoutDependency = createLayoutDependency(props, variants);
  const sharedStyleClassNames = [className3, className, className2];
  const scopingClassNames = cx(serializationHash, ...sharedStyleClassNames);
  return /* @__PURE__ */ _jsx2(LayoutGroup, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx2(Variants, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx2(Transition, { value: transition1, children: /* @__PURE__ */ _jsx2(motion.section, { ...restProps, ...gestureHandlers, className: cx(scopingClassNames, "framer-hav10n", className4, classNames), "data-framer-name": "Variant 1", layoutDependency, layoutId: "Service__O7cHJpTsk", ref: refBinding, style: { ...style }, children: /* @__PURE__ */ _jsx2(motion.div, { className: "framer-128em5j", "data-framer-name": "Cards Tall Container", layoutDependency, layoutId: "Service__VUDXVtAXj", style: { backgroundColor: "var(--token-7e7f72de-b42b-44cb-b318-42bed5ea0287, rgb(15, 128, 84))", borderBottomLeftRadius: 30, borderBottomRightRadius: 30, borderTopLeftRadius: 30, borderTopRightRadius: 30 }, children: /* @__PURE__ */ _jsxs(motion.div, { className: "framer-ar3qsq", "data-framer-name": "Card sticky", layoutDependency, layoutId: "Service__iXCIXJKkb", style: { transformPerspective: 1200 }, children: [/* @__PURE__ */ _jsxs(motion.div, { className: "framer-16wy631", "data-framer-name": "Cards container", layoutDependency, layoutId: "Service__qptmDVaEk", style: { transformPerspective: 1200 }, children: [/* @__PURE__ */ _jsxs(motion.div, { className: "framer-jkz2zf", "data-framer-name": "Card", layoutDependency, layoutId: "Service__LN2G05CKG", style: { backgroundColor: "var(--token-5a162143-67c5-4226-a46e-87df1a71b300, rgb(20, 20, 20))", borderBottomLeftRadius: 15, borderBottomRightRadius: 15, borderTopLeftRadius: 15, borderTopRightRadius: 15, transformPerspective: 1200 }, children: [/* @__PURE__ */ _jsx2(RichText, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx2(React.Fragment, { children: /* @__PURE__ */ _jsx2(motion.p, { className: "framer-styles-preset-1sx21c1", "data-styles-preset": "kKrcS48gC", dir: "auto", style: { "--framer-text-color": "var(--extracted-r6o4lv, var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(251, 188, 0)))" }, children: "01" }) }), className: "framer-1ettpof", fonts: ["Inter"], layoutDependency, layoutId: "Service__dS7Ju4kq2", style: { "--extracted-r6o4lv": "var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(251, 188, 0))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline" }, verticalAlignment: "top", withExternalLayout: true }), /* @__PURE__ */ _jsx2(RichText, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx2(React.Fragment, { children: /* @__PURE__ */ _jsx2(motion.p, { dir: "auto", style: { "--font-selector": "Qkk7WVVOR0EvRGlzcGxheS92MA==", "--framer-font-family": '"YUNGA", sans-serif', "--framer-font-size": "184px", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-1ef6a900-97f9-46fa-be58-94c0c8233534, rgb(255, 255, 255)))" }, children: "w" }) }), className: "framer-1a4t8st", fonts: ["BI;YUNGA/Display/v0"], layoutDependency, layoutId: "Service__ERPvxxA_W", style: { "--extracted-r6o4lv": "var(--token-1ef6a900-97f9-46fa-be58-94c0c8233534, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline" }, verticalAlignment: "top", withExternalLayout: true }), /* @__PURE__ */ _jsx2(RichText, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx2(React.Fragment, { children: /* @__PURE__ */ _jsx2(motion.p, { className: "framer-styles-preset-184nb30", "data-styles-preset": "AC22lxZCv", dir: "auto", children: "Web Design" }) }), className: "framer-go9guq", fonts: ["Inter"], layoutDependency, layoutId: "Service__e5EGcMUcq", style: { "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline" }, verticalAlignment: "top", withExternalLayout: true })] }), /* @__PURE__ */ _jsxs(motion.div, { className: "framer-sze9fb", "data-framer-name": "Card", layoutDependency, layoutId: "Service__lgCmYuFG5", style: { backgroundColor: "var(--token-5a162143-67c5-4226-a46e-87df1a71b300, rgb(20, 20, 20))", borderBottomLeftRadius: 15, borderBottomRightRadius: 15, borderTopLeftRadius: 15, borderTopRightRadius: 15, transformPerspective: 1200 }, children: [/* @__PURE__ */ _jsx2(RichText, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx2(React.Fragment, { children: /* @__PURE__ */ _jsx2(motion.p, { className: "framer-styles-preset-1sx21c1", "data-styles-preset": "kKrcS48gC", dir: "auto", style: { "--framer-text-color": "var(--extracted-r6o4lv, var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(251, 188, 0)))" }, children: "02" }) }), className: "framer-j8lso7", fonts: ["Inter"], layoutDependency, layoutId: "Service__XwbBKA0WS", style: { "--extracted-r6o4lv": "var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(251, 188, 0))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline" }, verticalAlignment: "top", withExternalLayout: true }), /* @__PURE__ */ _jsx2(RichText, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx2(React.Fragment, { children: /* @__PURE__ */ _jsx2(motion.p, { dir: "auto", style: { "--font-selector": "R0Y7WmVuIFRva3lvIFpvby1yZWd1bGFy", "--framer-font-family": '"Zen Tokyo Zoo", sans-serif', "--framer-font-size": "184px", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-1ef6a900-97f9-46fa-be58-94c0c8233534, rgb(255, 255, 255)))" }, children: "D" }) }), className: "framer-18q0zk9", fonts: ["GF;Zen Tokyo Zoo-regular"], layoutDependency, layoutId: "Service__bPtzFFGFL", style: { "--extracted-r6o4lv": "var(--token-1ef6a900-97f9-46fa-be58-94c0c8233534, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline" }, verticalAlignment: "top", withExternalLayout: true }), /* @__PURE__ */ _jsx2(RichText, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx2(React.Fragment, { children: /* @__PURE__ */ _jsx2(motion.p, { className: "framer-styles-preset-184nb30", "data-styles-preset": "AC22lxZCv", dir: "auto", children: " Development" }) }), className: "framer-skj7ht", fonts: ["Inter"], layoutDependency, layoutId: "Service__raruqe5an", style: { "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline" }, verticalAlignment: "top", withExternalLayout: true })] }), /* @__PURE__ */ _jsxs(motion.div, { className: "framer-1ezqsuq", "data-framer-name": "Card", layoutDependency, layoutId: "Service__QaUEzRbe8", style: { backgroundColor: "var(--token-5a162143-67c5-4226-a46e-87df1a71b300, rgb(20, 20, 20))", borderBottomLeftRadius: 15, borderBottomRightRadius: 15, borderTopLeftRadius: 15, borderTopRightRadius: 15, transformPerspective: 1200 }, children: [/* @__PURE__ */ _jsx2(RichText, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx2(React.Fragment, { children: /* @__PURE__ */ _jsx2(motion.p, { className: "framer-styles-preset-1sx21c1", "data-styles-preset": "kKrcS48gC", dir: "auto", style: { "--framer-text-color": "var(--extracted-r6o4lv, var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(251, 188, 0)))" }, children: "03" }) }), className: "framer-dp0ord", fonts: ["Inter"], layoutDependency, layoutId: "Service__f0Qqc3XEE", style: { "--extracted-r6o4lv": "var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(251, 188, 0))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline" }, verticalAlignment: "top", withExternalLayout: true }), /* @__PURE__ */ _jsx2(RichText, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx2(React.Fragment, { children: /* @__PURE__ */ _jsx2(motion.p, { dir: "auto", style: { "--font-selector": "Qkk7UmVjaHRlY2svUmVndWxhci92MA==", "--framer-font-family": '"Rechteck", sans-serif', "--framer-font-size": "184px", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-1ef6a900-97f9-46fa-be58-94c0c8233534, rgb(255, 255, 255)))" }, children: "UI" }) }), className: "framer-13xqh37", fonts: ["BI;Rechteck/Regular/v0"], layoutDependency, layoutId: "Service__A1nFukvy7", style: { "--extracted-r6o4lv": "var(--token-1ef6a900-97f9-46fa-be58-94c0c8233534, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline" }, verticalAlignment: "top", withExternalLayout: true }), /* @__PURE__ */ _jsx2(RichText, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx2(React.Fragment, { children: /* @__PURE__ */ _jsx2(motion.p, { className: "framer-styles-preset-184nb30", "data-styles-preset": "AC22lxZCv", dir: "auto", children: "UI/UX Design" }) }), className: "framer-8apmy6", fonts: ["Inter"], layoutDependency, layoutId: "Service__XRQrX3o86", style: { "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline" }, verticalAlignment: "top", withExternalLayout: true })] }), /* @__PURE__ */ _jsxs(motion.div, { className: "framer-f9853i", "data-framer-name": "Card", layoutDependency, layoutId: "Service__N4K8lzXkZ", style: { backgroundColor: "var(--token-5a162143-67c5-4226-a46e-87df1a71b300, rgb(20, 20, 20))", borderBottomLeftRadius: 15, borderBottomRightRadius: 15, borderTopLeftRadius: 15, borderTopRightRadius: 15, transformPerspective: 1200 }, children: [/* @__PURE__ */ _jsx2(RichText, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx2(React.Fragment, { children: /* @__PURE__ */ _jsx2(motion.p, { className: "framer-styles-preset-1sx21c1", "data-styles-preset": "kKrcS48gC", dir: "auto", style: { "--framer-text-color": "var(--extracted-r6o4lv, var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(251, 188, 0)))" }, children: "04" }) }), className: "framer-1yhhtjw", fonts: ["Inter"], layoutDependency, layoutId: "Service__SvAmqH6cz", style: { "--extracted-r6o4lv": "var(--token-9811e40b-3ed8-4237-98e5-61535bb22d2f, rgb(251, 188, 0))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline" }, verticalAlignment: "top", withExternalLayout: true }), /* @__PURE__ */ _jsx2(RichText, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx2(React.Fragment, { children: /* @__PURE__ */ _jsx2(motion.p, { dir: "auto", style: { "--font-selector": "Qkk7QVJLLUVTL0RlbnNlIE1lZGl1bS92MA==", "--framer-font-family": '"ARK-ES", sans-serif', "--framer-font-size": "184px", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-1ef6a900-97f9-46fa-be58-94c0c8233534, rgb(255, 255, 255)))" }, children: "S" }) }), className: "framer-56zm1t", fonts: ["BI;ARK-ES/Dense Medium/v0"], layoutDependency, layoutId: "Service__Q4PQ1soCf", style: { "--extracted-r6o4lv": "var(--token-1ef6a900-97f9-46fa-be58-94c0c8233534, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline" }, verticalAlignment: "top", withExternalLayout: true }), /* @__PURE__ */ _jsx2(RichText, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx2(React.Fragment, { children: /* @__PURE__ */ _jsx2(motion.p, { className: "framer-styles-preset-184nb30", "data-styles-preset": "AC22lxZCv", dir: "auto", children: "SEO" }) }), className: "framer-19lbco6", fonts: ["Inter"], layoutDependency, layoutId: "Service__lrpvNsGck", style: { "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline" }, verticalAlignment: "top", withExternalLayout: true })] })] }), /* @__PURE__ */ _jsx2(motion.div, { className: "framer-rzeihv", "data-framer-name": "Heading", layoutDependency, layoutId: "Service__P2XDTIiWB", children: /* @__PURE__ */ _jsx2(RichText, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx2(React.Fragment, { children: /* @__PURE__ */ _jsx2(motion.h1, { className: "framer-styles-preset-1tbvl3k", "data-styles-preset": "Bf3ONXiqf", dir: "auto", style: { "--framer-text-alignment": "center" }, children: "Services." }) }), className: "framer-6okpcp", "data-framer-name": "Services.", fonts: ["Inter"], layoutDependency, layoutId: "Service__EeGtbaNch", style: { "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline" }, verticalAlignment: "top", withExternalLayout: true }) }), /* @__PURE__ */ _jsx2(ComponentViewportProvider, { children: /* @__PURE__ */ _jsx2(SmartComponentScopedContainer, { className: "framer-1juyjwe-container", isAuthoredByUser: true, isModuleExternal: true, layoutDependency, layoutId: "Service__LNs3KbNu3-container", nodeId: "LNs3KbNu3", rendersWithMotion: true, scopeId: "p9ZXoH3vk", children: /* @__PURE__ */ _jsx2(FAME_Beta, { animationSlots: [{ animatedElements: [{ criteriaType1: "framerName", criteriaType2: "none", criteriaType3: "none", criteriaValue1: "Card", criteriaValue2: "", criteriaValue3: "", depth: "direct", scope: "children", textProcessingConfig: { animateBy: "characters", maskLines: false }, textProcessingEnabled: false }], animateProperties: [{ delay: 0, distributedFromConfig: { maxValue: "-40vw", minValue: "-30vw", pattern: "linear-range", progression: "linear", values: "" }, distributedToConfig: { maxValue: "30vw", minValue: "40vw", pattern: "linear-range", progression: "linear", values: "" }, duration: 0.6, easing: "cubic.inout", from: "-40vw", property: "translateX", springConfig: { amplitude: 1, period: 0.3 }, to: "40vw", useDistributedValues: true, useGlobalSettings: true }, { delay: 0, distributedFromConfig: { maxValue: "100px", minValue: "0px", pattern: "comma-separated", progression: "linear", values: "" }, distributedToConfig: { maxValue: "500px", minValue: "100px", pattern: "comma-separated", progression: "linear", values: "" }, duration: 0.6, easing: "cubic.inout", from: "80deg", property: "rotateY", springConfig: { amplitude: 1, period: 0.3 }, to: "-80deg", useDistributedValues: false, useGlobalSettings: true }, { delay: 0, distributedFromConfig: { maxValue: "100px", minValue: "0px", pattern: "comma-separated", progression: "linear", values: "" }, distributedToConfig: { maxValue: "500px", minValue: "100px", pattern: "comma-separated", progression: "linear", values: "" }, duration: 0.6, easing: "cubic.inout", from: "20vh", property: "translateY", springConfig: { amplitude: 1, period: 0.3 }, to: "-20vh", useDistributedValues: false, useGlobalSettings: true }], animationParadigm: "scroll-based", globalTimelineConfig: { delay: 0, duration: 1.8, easing: "linear", springConfig: { amplitude: 1.3, period: 0.6 } }, globalTimelineEnabled: false, id: "Translating cards", interruptBehavior: "queueLatest", scrollScrubbedConfig: { boundaries: { end: { element: 100, viewport: 100 }, start: { element: 0, viewport: 0 } }, triggerElement: { criteriaType1: "framerName", criteriaValue1: "Cards Tall Container", depth: "direct", scope: "document" } }, scrollStaggerConfig: { gridAutoDetect: true, gridColumnDirection: "left-to-right", gridColumns: 3, gridDistanceMetric: "euclidean", gridMode: "point-based", gridOrigin: "center", gridReverseMode: "latest-elements", gridRowDirection: "top-to-bottom", gridRows: 3, mode: "scrubbed", order: "first-to-last", scrubWindow: 70, strategy: "linear" }, staggerConfig: { backwardOrder: "last-to-first", delay: 0.15, forwardOrder: "first-to-last", gridAutoDetect: true, gridColumnDirection: "left-to-right", gridColumns: 3, gridDistanceMetric: "euclidean", gridMode: "point-based", gridOrigin: "center-left", gridReverseMode: "latest-elements", gridRowDirection: "edges-in-rows", gridRows: 3, orderMode: "directional", simpleOrder: "first-to-last", strategy: "linear" }, staggerEnabled: true, triggers: [{ behavior: "toggle", delayedTriggerConfig: { behavior: "playForward", mode: "simple", pattern: "0,0,1", skipCount: 3 }, event: "click", loopConfig: { behavior: "playForward", delay: 0.5, iterations: 3 }, overrideState: false, pingPongConfig: { cycles: 3, delay: 0.5, reverseMode: "easingPreservation" }, reverseMode: "easingPreservation", scrollThresholds: { elementStart: 0, thresholdCrossedBackward: "none", viewportThreshold: 80 }, targetElement: { criteriaType1: "elementId", criteriaType2: "none", criteriaType3: "none", criteriaValue1: "toggle-cards", criteriaValue2: "", criteriaValue3: "", depth: "direct", scope: "document" } }] }, { animatedElements: [{ criteriaType1: "framerName", criteriaType2: "none", criteriaType3: "none", criteriaValue1: "Card", criteriaValue2: "", criteriaValue3: "", depth: "deep", scope: "children", textProcessingConfig: { animateBy: "characters", maskLines: false }, textProcessingEnabled: false }], animateProperties: [{ delay: 0, distributedFromConfig: { maxValue: "100px", minValue: "0px", pattern: "comma-separated", progression: "linear", values: "" }, distributedToConfig: { maxValue: "500px", minValue: "100px", pattern: "comma-separated", progression: "linear", values: "" }, duration: 0.6, easing: "smooth.out", from: "60vh", property: "translateY", springConfig: { amplitude: 1, period: 0.3 }, to: "20vh", useDistributedValues: false, useGlobalSettings: false }], animationParadigm: "time-based", globalTimelineConfig: { delay: 0, duration: 0.6, easing: "cubic.inout", springConfig: { amplitude: 1, period: 0.3 } }, globalTimelineEnabled: false, id: "Load cards", interruptBehavior: "immediate", scrollScrubbedConfig: { boundaries: { end: { element: 100, viewport: 0 }, start: { element: 0, viewport: 100 } }, triggerElement: { criteriaType1: "none", criteriaValue1: "", depth: "direct", scope: "self" } }, scrollStaggerConfig: { gridAutoDetect: true, gridColumnDirection: "left-to-right", gridColumns: 3, gridDistanceMetric: "euclidean", gridMode: "point-based", gridOrigin: "center", gridReverseMode: "latest-elements", gridRowDirection: "top-to-bottom", gridRows: 3, mode: "scrubbed", order: "first-to-last", scrubWindow: 50, strategy: "linear" }, staggerConfig: { backwardOrder: "last-to-first", delay: 0.1, forwardOrder: "first-to-last", gridAutoDetect: true, gridColumnDirection: "left-to-right", gridColumns: 3, gridDistanceMetric: "euclidean", gridMode: "point-based", gridOrigin: "center", gridReverseMode: "latest-elements", gridRowDirection: "top-to-bottom", gridRows: 3, orderMode: "simple", simpleOrder: "first-to-last", strategy: "linear" }, staggerEnabled: true, triggers: [{ behavior: "playForward", delayedTriggerConfig: { behavior: "playForward", mode: "simple", pattern: "0,0,1", skipCount: 3 }, event: "load", loopConfig: { behavior: "playForward", delay: 0.5, iterations: 3 }, overrideState: false, pingPongConfig: { cycles: 3, delay: 0.5, reverseMode: "easingPreservation" }, reverseMode: "easingPreservation", scrollThresholds: { elementStart: 0, thresholdCrossedBackward: "none", viewportThreshold: 80 }, targetElement: { criteriaType1: "none", criteriaType2: "none", criteriaType3: "none", criteriaValue1: "", criteriaValue2: "", criteriaValue3: "", depth: "direct", scope: "self" } }] }, { animatedElements: [{ criteriaType1: "cssSelector", criteriaType2: "none", criteriaType3: "none", criteriaValue1: '[data-framer-name="Load Text"] h3', criteriaValue2: "", criteriaValue3: "", depth: "deep", scope: "children", textProcessingConfig: { animateBy: "lines", maskLines: true }, textProcessingEnabled: true }], animateProperties: [{ delay: 0.6, distributedFromConfig: { maxValue: "100px", minValue: "0px", pattern: "comma-separated", progression: "linear", values: "" }, distributedToConfig: { maxValue: "500px", minValue: "100px", pattern: "comma-separated", progression: "linear", values: "" }, duration: 0.7, easing: "smooth.out", from: "100%", property: "translateY", springConfig: { amplitude: 1, period: 0.3 }, to: "0%", useDistributedValues: false, useGlobalSettings: false }], animationParadigm: "time-based", globalTimelineConfig: { delay: 0, duration: 0.6, easing: "cubic.inout", springConfig: { amplitude: 1, period: 0.3 } }, globalTimelineEnabled: false, id: "Load text", interruptBehavior: "immediate", scrollScrubbedConfig: { boundaries: { end: { element: 100, viewport: 0 }, start: { element: 0, viewport: 100 } }, triggerElement: { criteriaType1: "none", criteriaValue1: "", depth: "direct", scope: "self" } }, scrollStaggerConfig: { gridAutoDetect: true, gridColumnDirection: "left-to-right", gridColumns: 3, gridDistanceMetric: "euclidean", gridMode: "point-based", gridOrigin: "center", gridReverseMode: "latest-elements", gridRowDirection: "top-to-bottom", gridRows: 3, mode: "scrubbed", order: "first-to-last", scrubWindow: 50, strategy: "linear" }, staggerConfig: { backwardOrder: "last-to-first", delay: 0.1, forwardOrder: "first-to-last", gridAutoDetect: true, gridColumnDirection: "left-to-right", gridColumns: 3, gridDistanceMetric: "euclidean", gridMode: "point-based", gridOrigin: "center", gridReverseMode: "latest-elements", gridRowDirection: "top-to-bottom", gridRows: 3, orderMode: "simple", simpleOrder: "first-to-last", strategy: "linear" }, staggerEnabled: true, triggers: [{ behavior: "playForward", delayedTriggerConfig: { behavior: "playForward", mode: "simple", pattern: "0,0,1", skipCount: 3 }, event: "load", loopConfig: { behavior: "playForward", delay: 0.5, iterations: 3 }, overrideState: false, pingPongConfig: { cycles: 3, delay: 0.5, reverseMode: "easingPreservation" }, reverseMode: "easingPreservation", scrollThresholds: { elementStart: 0, thresholdCrossedBackward: "none", viewportThreshold: 80 }, targetElement: { criteriaType1: "none", criteriaType2: "none", criteriaType3: "none", criteriaValue1: "", criteriaValue2: "", criteriaValue3: "", depth: "direct", scope: "self" } }] }], height: "100%", id: "LNs3KbNu3", layoutId: "Service__LNs3KbNu3", showFameElement: false, style: { height: "100%", width: "100%" }, width: "100%" }) }) })] }) }) }) }) }) });
});
var css4 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-CzKku.framer-n0t5um, .framer-CzKku .framer-n0t5um { display: block; }", ".framer-CzKku.framer-hav10n { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 100px 24px 100px 24px; position: relative; width: 100%; }", ".framer-CzKku .framer-128em5j { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 300vh; justify-content: center; overflow: visible; padding: 0px; position: sticky; width: 100%; }", ".framer-CzKku .framer-ar3qsq { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 100vh; justify-content: center; overflow: visible; padding: 0px; position: sticky; top: 0px; width: 1px; z-index: 1; }", ".framer-CzKku .framer-16wy631 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; min-height: 330px; overflow: visible; padding: 0px; position: relative; transform-style: preserve-3d; width: 1px; z-index: 3; }", ".framer-CzKku .framer-jkz2zf { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 329px; justify-content: center; left: calc(50.00000000000002% - 259px / 2); overflow: visible; padding: 0px; position: absolute; top: calc(50.00000000000002% - 329px / 2); transform-style: preserve-3d; width: 259px; z-index: 10; }", ".framer-CzKku .framer-1ettpof, .framer-CzKku .framer-j8lso7, .framer-CzKku .framer-dp0ord, .framer-CzKku .framer-1yhhtjw { flex: none; height: auto; position: absolute; right: 10px; top: 10px; white-space: pre; width: auto; z-index: 1; }", ".framer-CzKku .framer-1a4t8st, .framer-CzKku .framer-go9guq, .framer-CzKku .framer-18q0zk9, .framer-CzKku .framer-skj7ht, .framer-CzKku .framer-13xqh37, .framer-CzKku .framer-8apmy6, .framer-CzKku .framer-56zm1t, .framer-CzKku .framer-19lbco6 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", ".framer-CzKku .framer-sze9fb { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 329px; justify-content: center; left: calc(50.00000000000002% - 259px / 2); overflow: visible; padding: 0px; position: absolute; top: calc(50.00000000000002% - 329px / 2); transform-style: preserve-3d; width: 259px; z-index: 9; }", ".framer-CzKku .framer-1ezqsuq { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 329px; justify-content: center; left: calc(50.00000000000002% - 259px / 2); overflow: visible; padding: 0px; position: absolute; top: calc(50.00000000000002% - 329px / 2); transform-style: preserve-3d; width: 259px; z-index: 8; }", ".framer-CzKku .framer-f9853i { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 329px; justify-content: center; left: calc(50.00000000000002% - 259px / 2); overflow: visible; padding: 0px; position: absolute; top: calc(50.00000000000002% - 329px / 2); transform-style: preserve-3d; width: 259px; z-index: 7; }", ".framer-CzKku .framer-rzeihv { align-content: center; align-items: center; bottom: 0px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 64px; justify-content: center; left: 0px; overflow: hidden; padding: 0px; position: absolute; right: 0px; top: 0px; z-index: 1; }", ".framer-CzKku .framer-6okpcp { flex: none; height: auto; max-width: 800px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", ".framer-CzKku .framer-1juyjwe-container { -webkit-user-select: none; flex: none; height: 119px; left: 0px; pointer-events: none; position: absolute; top: 0px; user-select: none; width: 130px; z-index: 1; }", ...css3, ...css, ...css2];
var Framerp9ZXoH3vk = withCSS(Component, css4, "framer-CzKku");
var p9ZXoH3vk_default = Framerp9ZXoH3vk;
Framerp9ZXoH3vk.displayName = "Service";
Framerp9ZXoH3vk.defaultProps = { height: 2600, width: 1184 };
addFonts(Framerp9ZXoH3vk, [{ explicitInter: true, fonts: [{ cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2", weight: "400" }, { cssFamilyName: "YUNGA", source: "builtIn", style: "normal", uiFamilyName: "YUNGA", url: "https://framerusercontent.com/assets/aDeQobZ9UTfVc4GZ84JWFQFBkwc.woff2" }, { cssFamilyName: "Zen Tokyo Zoo", source: "google", style: "normal", uiFamilyName: "Zen Tokyo Zoo", url: "https://fonts.gstatic.com/s/zentokyozoo/v8/NGSyv5ffC0J_BK6aFNtr6sRv8ahuRWe9amg.woff2", weight: "400" }, { cssFamilyName: "Rechteck", source: "builtIn", style: "normal", uiFamilyName: "Rechteck", url: "https://framerusercontent.com/assets/Ji98XFBVNhYlEuU23qQlOYcsn1Q.woff2", weight: "400" }, { cssFamilyName: "ARK-ES", source: "builtIn", style: "normal", uiFamilyName: "ARK-ES", url: "https://framerusercontent.com/assets/DLcoXUwNtNAUHS0aUZ1IjwvW90.woff", weight: "400" }] }, ...FAMEV10Fonts, ...getFontsFromSharedStyle(fonts3), ...getFontsFromSharedStyle(fonts), ...getFontsFromSharedStyle(fonts2)], { supportsExplicitInterCodegen: true });
var __FramerMetadata__6 = { "exports": { "default": { "type": "reactComponent", "name": "Framerp9ZXoH3vk", "slots": [], "annotations": { "framerContractVersion": "1", "framerColorSyntax": "true", "framerAutoSizeImages": "true", "framerIntrinsicHeight": "2600", "framerDisplayContentsDiv": "false", "framerComponentViewportWidth": "true", "framerCanvasComponentVariantDetails": '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]}}}', "framerIntrinsicWidth": "1184", "framerImmutableVariables": "true" } }, "Props": { "type": "tsType", "annotations": { "framerContractVersion": "1" } }, "__FramerMetadata__": { "type": "variable" } } };
export {
  __FramerMetadata__6 as __FramerMetadata__,
  p9ZXoH3vk_default as default
};
