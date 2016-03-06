#pragma strict

import System.IO;

var readFile : String;
var speaker : UnityEngine.UI.Text;
var dialogue : UnityEngine.UI.Text;

function Start () {

}

function Update () {
	if(Input.GetKeyDown(KeyCode.Space)){
	readText();
	}
}

function readText() { 
	var sr = new File.OpenText(readFile);
	var input = "";
	input = sr.ReadLine();
	Debug.Log("line="+input);
	sr.Close();
	}