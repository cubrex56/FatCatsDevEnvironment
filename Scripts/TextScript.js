#pragma strict

var content : String;
var num : int;
var resour : Resource;

function Start () {
	//num = 0;
	GetComponent.<UnityEngine.UI.Text>().text = content + ": " + num;
}

function Update () {


}

function updateText() {
	GetComponent.<UnityEngine.UI.Text>().text = content + ": " + resour.numWorkers;
}

function increment() {
num++;
GetComponent.<UnityEngine.UI.Text>().text = content + ": " + num;
}

function decrement(){
if(num > 0){
	num--;
	GetComponent.<UnityEngine.UI.Text>().text = content + ": " + num;
	}
}

function setNum(number : int){
num = number;
	GetComponent.<UnityEngine.UI.Text>().text = content + ": " + num;
}