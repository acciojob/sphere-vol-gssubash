function volume_sphere(e) {
    //Write your code here
	const form = document.getElementById('MyForm');
	
	const rad = Number(MyForm.radius.value);
	const ans = (Math.PI*4*(rad**3))/3;
	form.volume.value = ans.toFixed(4);
  return false;
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
