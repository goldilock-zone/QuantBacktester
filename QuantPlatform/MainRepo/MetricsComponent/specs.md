- Defines a list of indicators from the TA - Lib Library
- Tests for each of the indicator library. Include test data base to work with - list of csvs
- Work with input dict of data frames and, output data frames 
- Include parents classes that have utility functions 
- List of utility functions - 
  1. Parameters meta data (verbose documentation on type of input, indicator unique ID, type of output)
  2. Average output time etc.
  3. Signal processing functions 
  4. Live signals 
  5. Parameter tuning functions 
  6. Graphing functions
  7. Training functions (quick backtesters)
  8. Signal scaling (take in another metric function and scale the signals based on that metric)
  9. Inverter function (to invert the trading logic)
  10. Data length based validation
  11. Data condenser, to take the dict of dataframes from model manager and condense it down to the relevant data structure
- Each indicator should have verbose documentation for the following:
  1. Use case
  2. Nature of the models
  3. Formula
  4. 