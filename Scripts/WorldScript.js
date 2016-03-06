#pragma strict

var resourcelist : GameObject[];
var scratch : int;
var totalWorkers : int;
var remainingWorkers : int;

function Start () {
	resourcelist = GameObject.FindGameObjectsWithTag("ResourceObjects");
}

function Update () {

}