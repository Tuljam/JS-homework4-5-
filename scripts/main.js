
'use strict '
// #### Task 1 💻

// Создать любой обьект с двумя ключами и любыми значениями в них, 
// а затем удалить ключи из обьекта.

const personOne = {
    name: 'Lucia',
    age: 25,
    nationality: 'belarus',
}
const city = {
    name: 'Gdanjsk',
    age: 2025,
    country: 'Poland',
}
console.log(personOne);
console.log(city);

delete city.age ;
console.log(city);

// #### Task 2 🖥

// Создать любой обьект с двумя ключами и 
// любыми значениями в них, а затем проверить есть ли 
// в обьекте определенный ключ и если есть вывести в консоль **true**

const flat= {
    square: 60,
    floor: 8, 
}
if('floor' in flat) {
    console.log(true)
}
else{console.log(false)};

if('city' in flat){ 
    console.log(true)}
else{console.log(false)};

// #### Task 3 🖥

// Дан обьект:

// ```javascript
//     const student = {
//         name: 'John',
//         age: 19,
//         isHappy: true
//     }
// ```

// C помощью цикла **for in** вывести в консоль сначала все ключи, 
// потом значения ключей обьекта.

    const student = {
        name: 'John',
        age: 19,
        isHappy: true
    }
    for(const key in student) {
        console.log(key);
        console.log(student[key])
    };


//     #### Task 4 🖥
//     Дан обьект:

// ```javascript
// const colors = {
//     'ru pum pu ru rum': {
//         red: 'красный',
//         green: 'зеленый',
//         blue: 'синий'
//     },
// };
// ```

// Вывести в консоль слово красный и синий

const colors = {
    subject: 'circle',
    'ru pum pu ru rum': {
        red: 'красный',
        green: 'зеленый',
        blue: 'синий'
    }
};
console.log(colors['ru pum pu ru rum'].red);
console.log(colors['ru pum pu ru rum'].green);
console.log(colors['ru pum pu ru rum']);
console.log(`${this.subject}`);// не работает, почему?
console.log(colors.subject);


// #### Task 5 🖥

// Дан обьект:

// ```javascript
//     let salaries = {
//         andrey: 500,
//         sveta: 413,
//         anton: 987,
//         andrey: 664,
//         alexandra: 199
//     }
// ```
// Вычислите среднюю зарплату сотрудников и результат поместите в 
// соответствующую переменную

  
let salaries = {
            'andrey': 500,
            'sveta': 413,
            'anton': 987,
            andreyy: 664,
            'alexandra': 199,
        }
let sumWorkers = Object.keys(salaries).length;
        console.log(sumWorkers);

            function totalSalary() {
            let summ = 0;
            for( let salary of Object.values(salaries)) {
            summ +=salary;
        } 
            return summ/sumWorkers; 
    }

   console.log(totalSalary());
 
  // #### Task 6 🖥

// Создать валидатор, запросить у пользователя логин и пароль для 
// регистрации. Затем данные записать в обьект. 
// Потом попросить пользователя подтвердить данные. Если верно введен 
// логин и пароль, вывести сообщение **Добро пожалоВать**. 

let userLogin = prompt (`Enter is your login?`);

let userPassword = prompt (`Enter is your password for registration?`);

let userForm = {
    [userLogin]:'',
    [userPassword]:'',
}
let userLoginCheck = prompt (`Confirm  your login?`);

let userPasswordCheck = prompt (`Confirm your password?`);

let userFormCheck = {
    [userLoginCheck]:'',
    [userPasswordCheck]:'',
}
    if(JSON.stringify(userForm)===JSON.stringify(userFormCheck)) {
    console.log (`You are welcome!`)
    }
    else (console.log (`You are wrong!`));


    

    // const validateValue = function(value) {
    //     return value.length > 3 && value.length <= 10;
    // }
    
    // const createUser = function() {
    //     const user = {
    //         login: '',
    //         password: ''
    //     }
    
    //     let isValid = false;
    //     while (!isValid) {
    //         user.login = prompt('login');
    //         isValid = validateValue(user.login);
    //     }
    
    //     isValid = false;
    //     while (!isValid) {
    //         user.password = prompt('password');
    //         isValid = validateValue(user.password);
    //     }
    
    //     return user;
    // }
    
    // const user1 = createUser();
    // const user2 = createUser();
    
    
    // if(user1.login === user2.login && user1.password === user2.password) {
    //     console.log('Welcome');
    // }




// ### ADVANCED level

// #### Task 1 👨‍🏫

// Мы на футбольном матче, счет забитых голов одной команды не может превышать 9 мячей.
// Жаль что нам присылают результат матча в формате '2:5', ведь нам надо это вывести в консоль словами. 
//Давайте напишем программу которая будет за нас переводить формат и выводить результат в консоль. 

// #### Task 2 🖥

// Даны два одинаковых обьекта. Сравните их так чтобы они были равны

    let student1 = {
        name: 'Polina',
        age: 27,
    }

    let student2 = {
        name: 'Polina',
        age: 27,
    }

if (student2 === student1){
    console.log(true);
}
else{console.log(false);}

// Решение:

    let students = JSON.stringify(student1)===JSON.stringify(student2);
    
    console.log(students);

    
// #### Task 3 🖥

// У нас есть обьект с животными. Наша задача узнать имя птицы и вывести его в консоль. 
//Но произошла ошибка и в этом обьекте нету птицы. Если попробуем узнать имя мы получим **ОШИБКУ**. 
// Задача придумать как обратиться к несуществующему обьекту и не получить ошибку чтобы наша программа работала дальше.


const animals = {
   cat: {
      name: 'Енчик',
      age: 3,
   },
   dog: {
      name: 'Орео',
      age: 2,
   }
}

if('bird' in animals) {
    console.log(animals.bird);
}
else{console.log(`there is not bird`)}