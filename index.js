const form = document.querySelector('#order-form');
const formData = new FormData(form);

// 获取表单数据中的 name 和 age 字段
const type = formData.get('type');
const num = formData.get('num');
const size = formData.get('size');
const snake-free = formData.get('snake-free');
const snake = formData.get('snake');
const ice = formData.get('ice');
const address = formData.get('address');
const phone = formData.get('phone');
const time = formData.get('time');
const notes = formData.get('notes');
const pay-type = formData.get('pay-type');


// 将表单数据转换为 JSON 字符串
const formJson = JSON.stringify(Object.fromEntries(formData.entries()));
