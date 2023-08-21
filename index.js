
const form = document.getElementById('orderForm');
const btnOrder = document.getElementById('button1')
const scrollToTopBtn =document.querySelector(".scroll-to-top");
const getOrderDetails = (formDetails) => {
    const text = `
        [Your order had been sent]
        --------------------------------
        Flavour: ${formDetails.type}
        Amount: ${formDetails.num}
        Size: ${formDetails.size}
        Suger lever: ${formDetails.suger}
        Topping: ${formDetails["snake-free"] ? formDetails["snake-free"] : "-"}
        Additional Option: ${formDetails["additional"] ? formDetails["additional"] : "-"}
        Ice level: ${formDetails.ice}
        Address: ${formDetails.address}
        Phone Number: ${formDetails.phone}
        Expected Delivery Time: ${formDetails.time}
        Notes: ${formDetails.notes}
        Payment Method: ${formDetails["pay-type"]}

    
    `;
    return text;
}

const onSubmit =(e)=>{
    e.preventDefault();

    const formData = new FormData(form);
    const formVals ={};
    for (var pair of formData.entries()){
        const propName = pair[0];
        const propValue = pair[1];

        if(formVals[propName]) {
            formVals[propName] = [propValue].concat(formVals[propName]);
        } else {
            formVals[propName] = propValue;
        }
    }
console.log(formVals)
alert(getOrderDetails(formVals));
};


form.addEventListener('submit', onSubmit);
scrollToTopBtn.addEventListener('click', ()=>{
    document.documentElement.scrollTop = 0;
})