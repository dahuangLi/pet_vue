<template>
  <div id="app">
    <router-view/>
    <!-- <bottom-view /> -->
  </div>
</template>

<script>
import bottomView from './components/Footer';
export default {
  name: 'App',
  components: { 
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
/* css 初始化 */
body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, dl, dt, dd, ul, ol, li, pre, form, fieldset, legend, button, input, textarea, th, td { margin:0; padding:0; }  
body, button, input, select, textarea { font:12px/1.5tahoma, arial, \5b8b\4f53;}  
h1, h2, h3, h4, h5, h6{ font-size:100%; }  
address, cite, dfn, em, var { font-style:normal; }  
code, kbd, pre, samp { font-family:couriernew, courier, monospace; }  
small{ font-size:12px; }  
ul, ol { list-style:none; }  
a { text-decoration:none; }  
a:hover { text-decoration:underline; }  
sup { vertical-align:text-top; }  
sub{ vertical-align:text-bottom; }  
legend { color:#000; }  
fieldset, img { border:0; }  
button, input, select, textarea { font-size:100%; }
*{
   box-sizing: border-box
}
 .bullet{
  width:6px;
  height: 6px;
  background-color: #c6dbff;
  margin-left: 4px;
  border-radius: 3px;
}
.bulletActive {
  display: block;
  width:12px;
  height: 6px;
  border-radius: 3px;
  background-color: #4189ff;
}
</style>
