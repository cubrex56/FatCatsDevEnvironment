#pragma strict

var content : String;
var num : int;
var field : UI.InputField;
function Start () {
	//num = 0;
	GetComponent.<UnityEngine.UI.Text>().text = content + ": " + num;
}

function Update () {


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

function setNum(){
	
	GetComponent.<UnityEngine.UI.Text>().text = content + ": " + field.text;
}