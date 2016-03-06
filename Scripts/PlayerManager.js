#pragma strict

var bod : Rigidbody2D;
var anim : Animator;

function Start () {
//	gravScale = gameObject.GetComponent.<Rigidbody2D>().gravityScale;
bod = gameObject.GetComponent.<Rigidbody2D>();
anim = gameObject.GetComponent.<Animator>();
}

function Update () {
	if(Input.GetKeyDown(KeyCode.Space)){

//	gravScale = gravScale * -1;
	bod.gravityScale *= -1;
	//gameObject.GetComponent.<Rigidbody2D>().gravityScale = gameObject.GetComponent.<Rigidbody2D>().gravityScale * -1;
	}
	if(Input.GetKey(KeyCode.D)){
	bod.AddForce(new Vector2(10,0));
	}
	if(Input.GetKey(KeyCode.A)){
	bod.AddForce(new Vector2(-10,0));
	}
}