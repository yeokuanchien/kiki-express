# Kiki Express
> This is a command line application that help Kiki, a first-time entrepreneur from the city of Koriko to handle a small distance courier service to deliver packages.


## Table of Contents
* [General Info](#general-information)
* [Technologies Used](#technologies-used)
* [Screenshots](#screenshots)
* [Setup](#setup)
* [Usage](#usage)
<!-- * [License](#license) -->


## General Information
This is a command line application 
- To estimate the total delivery cost of each package with an offer code (if applicable).
- To calculate the estimated delivery time for every package by maximizing no. of packages in every shipment

## Technologies Used
- NodeJs - v16.15.1


## Screenshots
![image](https://user-images.githubusercontent.com/62272282/201977043-286b703d-23cd-4302-a308-879f9d80ab9a.png)


## Setup
```
npm install
```

## Usage
Step 1 - start the cli application
```
npm start
```
Step 2 - Enter base delivery cost, example: 
```
100
```
Step 3 - Enter number of packages, example:
```
5
```
Step 4 - Enter package details in this format (ID, weight, distance, offer code), example:
```
PKG1 50 30 OFR001 
```
Step 5 - Enter number of available vehicle for delivery, example:
```
2
```
Step 6 - Enter vehicle maximum speed
```
70
```
Step 7 - Enter maximum weight vehicle can carry
```
200
```



