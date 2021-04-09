# Geo-location using Angular 
An Angular 11 Sample Project to Implement google map to show  five district with marker.

###### Before Running this Project
 1. Install npm packages using 'npm install' command.
 2. You neeed to provide a Google Maps API key to be able to see a Map. Get an API key [here](https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en#key). 

## Demo

Visit: https://geolocation-web.herokuapp.com/


## Installation

### What's included

Within the download you'll find the following directories and files, logically grouping common assets and providing both compiled and minified variations.

### Usage

``` bash
# clone the repo
$ git clone https://github.com/Istiaq-Hossain-Shawon/geolocation-web.git

# go into app's directory
$ cd geolocation-angular

# install dependencies
npm install

# serve with hot reload at localhost:4200
ng serve

# build for production with minification
ng build
```
### Port number 4200 is already in use. Type below command in cmd:
``` bash
Step 1: Find the connection’s PID
> netstat -ano | findstr :yourPortNumber
Then locate the PID (something like 10764)
Step 2: Kill the process using it’s PID
> tskill yourPID
Step 3: Restart your server
```
