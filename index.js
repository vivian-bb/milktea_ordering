    const formData = new FormData(document.getElementById('orderForm'));
    const type = formData.get('type');
    const num = formData.get('num');
    const size = formData.get('size');
    const suger = formData.get('suger');
    const snakeFree = formData.get('snake-free');
    const snake = formData.get('snake');
    const ice = formData.get('ice');
    const address = formData.get('address');
    const phone = formData.get('phone');
    const time = formData.get('time');
    const notes = formData.get('notes');
    const payType = formData.get('pay-type');

    // const formJson = JSON.stringify(Object.fromEntries(formData.entries()));
    console.log('Milktea Flaver: ' + type );
    console.log('Quantity: ' + num );
    console.log('Size: ' + size );
    console.log('Suger: ' + suger)
    console.log('Topping: ' + snakeFree );
    console.log('Additional Options: ' + snake );
    console.log('Ice: ' + ice );
    console.log('Delivery address: ' + address );
    console.log('Expected Delivery time: ' + phone );
    console.log('Notes: ' + phone );
    console.log('Payment method: ' + phone );
