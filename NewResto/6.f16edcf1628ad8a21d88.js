(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"7UCR":function(e,r,o){"use strict";o.r(r),o.d(r,"UserModule",(function(){return c}));var t=o("ofXK"),s=o("tyNb"),i=o("fXoL");let n=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=i.Bb({type:e,selectors:[["app-dashboard"]],decls:2,vars:0,template:function(e,r){1&e&&(i.Kb(0,"p"),i.dc(1,"dashboard works!"),i.Jb())},styles:[""]}),e})();var a=o("3Pt+"),b=o("sQRL");let l=(()=>{class e{constructor(e,r){this.userService=e,this.router=r,this.loginForm=new a.d({email:new a.b("",[a.i.required]),password:new a.b("",[a.i.required])})}ngOnInit(){}userLogin(){this.loginForm.valid&&this.userService.login(this.loginForm.value).subscribe(e=>{console.log(e),localStorage.setItem("token",e.token),this.loginForm.reset(),this.router.navigate(["/restos"])},e=>{console.log(e)})}}return e.\u0275fac=function(r){return new(r||e)(i.Hb(b.a),i.Hb(s.b))},e.\u0275cmp=i.Bb({type:e,selectors:[["app-login"]],decls:18,vars:2,consts:[[1,"form-wrrap"],[3,"formGroup","ngSubmit"],[1,"form-group"],["for","email"],["type","email","name","email","placeholder","Enter your Email","formControlName","email"],["for","password"],["type","password","name","password","placeholder","Enter your password","formControlName","password"],["type","submit","value","Login",3,"disabled"]],template:function(e,r){1&e&&(i.Ib(0,"br"),i.Ib(1,"br"),i.Ib(2,"br"),i.Kb(3,"div",0),i.Kb(4,"h3"),i.dc(5,"User Login"),i.Jb(),i.Kb(6,"form",1),i.Rb("ngSubmit",(function(){return r.userLogin()})),i.Kb(7,"div",2),i.Kb(8,"label",3),i.dc(9,"Email address:"),i.Jb(),i.Ib(10,"br"),i.Ib(11,"input",4),i.Jb(),i.Kb(12,"div",2),i.Kb(13,"label",5),i.dc(14,"Password:"),i.Jb(),i.Ib(15,"br"),i.Ib(16,"input",6),i.Jb(),i.Ib(17,"input",7),i.Jb(),i.Jb()),2&e&&(i.xb(6),i.Wb("formGroup",r.loginForm),i.xb(11),i.Wb("disabled",!r.loginForm.valid))},directives:[a.j,a.g,a.e,a.a,a.f,a.c],styles:[""]}),e})();const u=[{path:"",component:n},{path:"register",component:(()=>{class e{constructor(e,r){this.userService=e,this.router=r,this.registerForm=new a.d({name:new a.b("",[a.i.required]),email:new a.b("",[a.i.required]),password:new a.b("",[a.i.required])})}ngOnInit(){}userRegister(){this.registerForm.valid&&this.userService.register(this.registerForm.value).subscribe(e=>{this.registerForm.reset(),this.router.navigate(["user/login"])})}}return e.\u0275fac=function(r){return new(r||e)(i.Hb(b.a),i.Hb(s.b))},e.\u0275cmp=i.Bb({type:e,selectors:[["app-register"]],decls:20,vars:2,consts:[[1,"form-wrrap"],[3,"formGroup","ngSubmit"],[1,"form-group"],["for","name"],["type","text","name","name","placeholder","Enter your name","formControlName","name",1,"formContol"],["for","email"],["type","email","name","email","placeholder","Enter your Email","formControlName","email"],["for","password"],["type","password","name","password","placeholder","Enter your password","formControlName","password"],["type","submit","value","Register",3,"disabled"]],template:function(e,r){1&e&&(i.Ib(0,"br"),i.Ib(1,"br"),i.Ib(2,"br"),i.Kb(3,"div",0),i.Kb(4,"h3"),i.dc(5,"User Register"),i.Jb(),i.Kb(6,"form",1),i.Rb("ngSubmit",(function(){return r.userRegister()})),i.Kb(7,"div",2),i.Kb(8,"label",3),i.dc(9,"Name"),i.Jb(),i.Ib(10,"input",4),i.Jb(),i.Kb(11,"div",2),i.Kb(12,"label",5),i.dc(13,"Email address"),i.Jb(),i.Ib(14,"input",6),i.Jb(),i.Kb(15,"div",2),i.Kb(16,"label",7),i.dc(17,"Password"),i.Jb(),i.Ib(18,"input",8),i.Jb(),i.Ib(19,"input",9),i.Jb(),i.Jb()),2&e&&(i.xb(6),i.Wb("formGroup",r.registerForm),i.xb(13),i.Wb("disabled",!r.registerForm.valid))},directives:[a.j,a.g,a.e,a.a,a.f,a.c],styles:[""]}),e})()},{path:"login",component:l}];let m=(()=>{class e{}return e.\u0275mod=i.Fb({type:e}),e.\u0275inj=i.Eb({factory:function(r){return new(r||e)},imports:[[s.e.forChild(u)],s.e]}),e})(),c=(()=>{class e{}return e.\u0275mod=i.Fb({type:e}),e.\u0275inj=i.Eb({factory:function(r){return new(r||e)},imports:[[t.c,m,a.h]]}),e})()}}]);