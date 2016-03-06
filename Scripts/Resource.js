#pragma strict

var name : String;
var quantityOwned : int;
var playerPrice : int;
var marketPrice : int; 
var demand : int;
var gatherRate : int;
var numWorkers : int;

function Start () {
	numWorkers = 0;
	quantityOwned = 0;
}

function Update () {

}

function addWorker () {
	if(GetComponentInParent(WorldScript).remainingWorkers > 0){
	numWorkers++;
	GetComponentInParent(WorldScript).remainingWorkers--;
	}
}

function gather() {
 quantityOwned += numWorkers * gatherRate;
 }

 function sell(){
 var sold : int = demand - (playerPrice - marketPrice);
 if(sold > quantityOwned){
 sold = quantityOwned;
 }

 quantityOwned -= sold;
 //return sold * playerPrice;
 }