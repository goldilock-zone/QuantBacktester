- Define Backtest query class - define the fields required and meta data definitions (tickers, latency, start date, end date, adjustments, API name to get data from, and feature names (such as high, low, close, volume, typical price))

- Define download query class - similar to backtest query class, and should be able to query the api with sufficient flexibility

- Individual API interfaces - that talk to different apis. Should have the ability to send test requests before sending heavy loads, estimated time to load data functionality

- Data cleaning functionality, and data frame friendliness are important criterion

- stocks Db, with ticker name and latency in the table name - Open, High Low, Close, Volume and other columns. 

- Migrations manager - that allows additional features to be added to the schema, and define which tickers and latency values

- Checking for overlap using some secondary db that defines - start - date / end-date

  

