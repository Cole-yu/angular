import { Component, OnInit } from '@angular/core';
import * as THREE from '../../assets/three.js'
import {Observable} from 'rxjs';  // 在所需的组件中引入第三方模块

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    // let particle_no = 25;
    //
    // let canvas = document.getElementsByTagName("canvas")[0];
    // let ctx = canvas.getContext("2d");
    //
    // let counter = 0;
    // let particles = [];
    // let w = document.getElementsByClassName("bg")[0].clientWidth;
    // let h=document.getElementsByClassName("bg")[0].clientHeight
    // canvas.width = w;
    // canvas.height = h;
    //
    // //初始化背景
    // function reset(){
    //   //canvas背景
    //   ctx.fillStyle = "#272822";
    //   ctx.fillRect(0,0,w,h);
    //
    //   //processBar背景
    //   ctx.fillStyle = "#171814";
    //   ctx.fillRect(25,80,350,25);
    // }
    //
    // function progressbar(){//构造器方法创建类
    //   this.widths = 0;//进度条长度
    //   this.hue = 0;//控制颜色
    //
    //   this.draw = function(){//绘制当前进度的函数,进度条颜色渐变
    //     ctx.fillStyle = 'hsla('+this.hue+', 100%, 40%, 1)';
    //     ctx.fillRect(25,80,this.widths,25);
    //     let grad = ctx.createLinearGradient(0,0,0,130);//设置线性渐变
    //     grad.addColorStop(0,"transparent");
    //     grad.addColorStop(1,"rgba(0,0,0,0.5)");
    //     ctx.fillStyle = grad;
    //     ctx.fillRect(25,80,this.widths,25);
    //   }
    // }
    //
    // //初始化每个离散点的属性
    // function particle(){
    //   this.x = 23 + bar.widths;//控制喷发点的x坐标,每个离散点根据时间变化离开时的x坐标
    //   this.y = 82; //控制喷发点的Y坐标,每个离散点离开时的y坐标
    //
    //   this.vx = 0.8 + Math.random()*1;
    //   this.v = Math.random()*5;
    //   this.g = 1 + Math.random()*3;
    //   this.down = false;//离散点垂直方向的标记,当变为0后,down=true,g(+向上)=>g(变为0)=>g(+向下)
    //
    //   this.draw = function(){
    //     ctx.fillStyle = 'hsla('+(bar.hue+0.3)+', 100%, 40%, 1)';;
    //     let size = Math.random()*2;
    //     ctx.fillRect(this.x, this.y, size, size);
    //   }
    // }
    //
    // let bar = new progressbar();
    //
    // function draw(){
    //   reset();
    //   counter++
    //
    //   bar.hue += 0.8;
    //
    //   bar.widths += 2;
    //
    //   if(bar.widths > 350){//进度条满时重置，循环播放
    //     if(counter > 215){
    //       reset();//重置下列参数
    //       bar.hue = 0;
    //       bar.widths = 0;
    //       counter = 0;
    //       particles = [];
    //     }
    //     else{
    //       bar.hue = 126;
    //       bar.widths = 351;
    //       bar.draw();//绘制当前进度条长度
    //     }
    //   }
    //   else{
    //     bar.draw();//每次载入进度未满时，绘制进度条动画
    //     for(let i=0;i<particle_no;i+=10){//i用于控制离散点的多少,i越小离散点越密集
    //       particles.push(new particle());//把离散点添加进数组中
    //     }
    //   }
    //   update();
    // }
    //
    // //离散点的运动效果,particles中存储离散点的样式
    // function update(){
    //   for(let i=0;i<particles.length;i++){
    //     let p = particles[i];
    //     p.x -= p.vx;
    //     if(p.down == true){
    //       p.g += 0.1;
    //       p.y += p.g;
    //     }
    //     else{
    //       if(p.g<0){
    //         p.down = true;
    //         p.g += 0.1;
    //         p.y += p.g;
    //       }
    //       else{
    //         p.y -= p.g;
    //         p.g -= 0.1;
    //       }
    //     }
    //     p.draw();
    //   }
    // }
    //
    // let id;
    //
    // //可通过添加判断条件使用cancelAnimationFrame(id)停止动画
    // function animloop() {//无限循环动画,
    //   if(true){
    //     draw();
    //     id= window.requestAnimationFrame(animloop);
    //   }
    //   else{
    //     //cancelAnimationFrame(id);
    //     //todo
    //   }
    //
    // }
    //
    // animloop();




    //---------------------------------------------------------------------------------------------------------------------------------------------
    let camera, scene, renderer;

    let isUserInteracting = false,//动画运行标记，true时停止，false时运行
      onMouseDownMouseX = 0,
      onMouseDownMouseY = 0,
      lon = 0,
      onMouseDownLon = 0,
      lat = 0,
      onMouseDownLat = 0,
      phi = 0,
      theta = 0;

    init();
    animate();

    function init() {

      let container, mesh;

      container = document.getElementsByClassName('bg')[0];
      //创建照相机
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1100);
      camera.target = new THREE.Vector3(0, 0, 0);
      //创建场景
      scene = new THREE.Scene();
      //创建形状
      let geometry:any = new THREE.SphereBufferGeometry(500, 60, 40);
      // invert the geometry on the x-axis so that all of the faces point inward
      geometry.scale(-1, 1, 1);

      let loader:any=new THREE.TextureLoader();
      //创建材质
      let material = new THREE.MeshBasicMaterial({
        map:loader.load('../../assets/room.jpg')
      });

      mesh = new THREE.Mesh(geometry, material);

      scene.add(mesh);
      //创建渲染器
      renderer = new THREE.WebGLRenderer();
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      container.appendChild(renderer.domElement);

      container.addEventListener('mousedown', onDocumentMouseDown, false);      // 只需要container监听鼠标按下事件

      document.addEventListener('mousemove', onDocumentMouseMove, false);
      document.addEventListener('mouseup', onDocumentMouseUp, false);
      document.addEventListener('wheel', onDocumentMouseWheel, false);

      document.addEventListener('dragover', function(event) {

        event.preventDefault();
        event.dataTransfer.dropEffect = 'copy';

      }, false);

      document.addEventListener('dragenter', function(event) {

        document.body.style.opacity = '0.5';

      }, false);

      document.addEventListener('dragleave', function(event) {

        document.body.style.opacity = '1';

      }, false);

      document.addEventListener('drop', function(event) {

        event.preventDefault();

        let reader = new FileReader();
        reader.addEventListener('load', function(event) {
          console.log("ok");
          console.log(event.target);
         // material.map.image.src = event.target.result;     //设置图片源
          material.map.needsUpdate = true;

        }, false);
        reader.readAsDataURL(event.dataTransfer.files[0]);

        document.body.style.opacity = '1';

      }, false);

      window.addEventListener('resize', onWindowResize, false);

    }


    function onWindowResize() {

      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    function onDocumentMouseDown(event) {

      event.preventDefault();

      isUserInteracting = true;

      onMouseDownMouseX = event.clientX;
      onMouseDownMouseY = event.clientY;

      onMouseDownLon = lon;
      onMouseDownLat = lat;

    }

    function onDocumentMouseMove(event) {

      if (isUserInteracting === true) {

        lon = (onMouseDownMouseX - event.clientX) * 0.1 + onMouseDownLon;
        lat = (event.clientY - onMouseDownMouseY) * 0.1 + onMouseDownLat;

      }

    }

    function onDocumentMouseUp(event) {

      isUserInteracting = false;

    }

    function onDocumentMouseWheel(event) {

      let fov = camera.fov + event.deltaY * 0.05;

      camera.fov = THREE.Math.clamp(fov, 10, 75);

      camera.updateProjectionMatrix();

    }

    function animate() {

      requestAnimationFrame(animate);
      update();

    }

    function update() {//不断改变观察房间的视角

      if (isUserInteracting === false) {

        lon += 0.1;

      }

      lat = Math.max(-85, Math.min(85, lat));
      phi = THREE.Math.degToRad(90 - lat);
      theta = THREE.Math.degToRad(lon);

      camera.target.x = 500 * Math.sin(phi) * Math.cos(theta);
      camera.target.y = 500 * Math.cos(phi);
      camera.target.z = 500 * Math.sin(phi) * Math.sin(theta);

      camera.lookAt(camera.target);

      /*
      // distortion
      camera.position.copy( camera.target ).negate();
      */

      renderer.render(scene, camera);

    }

  }

}
