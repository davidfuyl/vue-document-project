// export class User{
//     // 构造函数
//     constructor(username, email, password) {
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     // 定义静态方法
//     static countUsers() {
//         console.log(`there are 30 users`);
//     }

//     // 定义方法
//     register() {
//         console.log(`this ${this.username} is now registerd`);
//     }
// }

// let mike = new User('mike', 'mike@eamil.com', '123');
// mike.register();


//  // 类Member 继承了 User类
// export class Member extends User{
//     constructor(username, email, password, mermberAddress){
//         super(username, email, password); //必须调用父类的super()方法
//         this.mermberAddress = mermberAddress;
//     }

//     getMemberAddress() {
//         console.log(`${this.username} is get the ${this.mermberAddress}`);
//     }
// }

// let bob = new Member('bob', 'bob@emai.com', '123', 'somewhere');

// bob.getMemberAddress();
// bob.register(); // 子类成员调用父类的方法


// class Stack{
    
// }