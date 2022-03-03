1. Define Object Relational Mapping Libraries that are useful to run the project. (consider the differences between SQL and mongo type of databases)
   - Potential libraries: peewee, mongokit
   - Has good filtration and has the ability to connect and disconnect fairly easily. 
   - Has easy portability to web app platforms - Django and Flask
2. Build download query class - along with meta data
3. Build CLI using query class
4. Build download interface, that can talk to API and return data on CLI
5. Build meta data tables for the loaded data - should have timestamp checking and feature checks (OHLC, Typical Price etc). This is dependent on the decision to use MongoDB or RDBMS
6. Build overlap_test module 
7. Build Backtest Query class that can call overlap_test module, and calls logic implicitly for download query class
8. Build migrations manager to update the database, and update the feature set
9. Test graphing libraries,, possible web interface to visual the stocks after download. 