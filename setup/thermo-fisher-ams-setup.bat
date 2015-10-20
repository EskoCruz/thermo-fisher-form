REM First set up the tables
REM azure mobile table list thermo-fisher

call azure mobile table create thermo-fisher users
call azure mobile table create thermo-fisher default


REM Now populate tables with data

node thermo-fisher-ams-seed-data.js
