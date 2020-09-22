const c = console.log;
const companyNameInpt = document.querySelector('#company-name');
const textInpt = document.querySelectorAll('input[type=text]');
const dateInpt = document.querySelector('#date');
const checkInpt = document.querySelector('#today-check');
const cIFInpt = document.querySelector('#cif');
const addressInpt = document.querySelector('#adress');
const conceptInpt = document.querySelector('#concept');
const baseInpt = document.querySelector('#base');
const iRPFInpt = document.querySelector('#irpf');
const iVAInpt = document.querySelector('#iva');
const errorMssg = document.querySelectorAll('.error-mssg');
const createBudgetBtn = document.querySelector('#crear');
const dateOutput = document.querySelector('.budget__fecha');
const companyNameOutput = document.querySelector('.budget__company-name');
const cIFOutput = document.querySelector('.budget__cif');
const addressOutput = document.querySelector('.budget__address');
const conceptOutput = document.querySelector('.budget__concept');
const baseOutput = document.querySelector('.budget__base');
const iRPFOutput = document.querySelector('.budget__irpf');
const iVAOutput = document.querySelector('.budget__iva');
const totalOutput = document.querySelector('.budget__total');
const budgetNodo  = document.querySelector('#budget');
let budgetsArray = [];
let budgetObj;
const percent = '%'
const eur = '€'

//Handlers
createBudgetBtn.addEventListener('click', validateForm);
checkInpt.addEventListener('click', changeDate)


function changeDate(){
    checkInpt.checked != checkInpt.checked;
    if(checkInpt.checked){
        printDate(getDate())
    }else{
        dateInpt.value = ''
    }
};

const setMonth = function(month){
    if(month < 10){
        return '0'+month;
    }
};
const getDate = function(){
    const getFecha = new Date();
    const getDay = getFecha.getDate();
    const getMonth =  getFecha.getMonth();
    const getYear = getFecha.getFullYear();
    const fecha = `${getDay}/${setMonth(getMonth)}/${getYear}`;
    return fecha;
};
const printDate = function(date){
    dateInpt.value = date
}



function validateForm(e){
    e.preventDefault();
    let error = [];
    if(dateInpt.value == ''){
        error.push('La fechas está vacía');
    }
    if(cIFInpt.value == ''){
        error.push('El CIF está vacío');
    }
    if(companyNameInpt.value == ''){
        error.push('El Nombre de la Compañía está vacio');
    }
    if(addressInpt.value == ''){
        error.push('La dirección está vacía');
    }
    if(baseInpt.value == ''){
        error.push('La Base Imponible está vacía');
    }
    if(iRPFInpt.value == ''){
        error.push('El IRPF está vacío');
    }
    if(iVAInpt.value == ''){
        error.push('El IVA está vacío');
    }
    if(error.length == 0){
        submit(e)
    }
    c(error)
};

const getInptValue = function(inpt){
    return inpt.value
};

const cleanInptValue = function(){
    companyNameInpt.value = '';
    cIFInpt.value = '';
    addressInpt.value = '';
    conceptInpt.value = '';
    baseInpt.value = '';
    iRPFInpt.value = '';
    iVAInpt.value = '';

}

const generateBudget = function(){
    budgetObj = {
        date: getDate(),
        CompanyName: getInptValue(companyNameInpt),
        cif: getInptValue(cIFInpt),
        address: getInptValue(addressInpt),
        concept: getInptValue(conceptInpt),
        baseImp: Number(getInptValue(baseInpt)),
        irpf: Number(getInptValue(iRPFInpt)),
        iva: Number(getInptValue(iVAInpt)),
        total: ''
    };
    cleanInptValue();
    return budgetsArray.push(budgetObj);
}

const calcTotal = function(base){
    const totalIva = (base * 21) / 100;
    const totalIRPF = (base * 7) / 100;
    const total = (base + totalIva) - totalIRPF
    return total;
};

const printBudget = function(budget){
    budget = JSON.stringify(budget);
    dateOutput.innerHTML = budgetObj.date;
    companyNameOutput.innerHTML = budgetObj.CompanyName;
    cIFOutput.innerHTML = budgetObj.cif;
    addressOutput.innerHTML = budgetObj.address;
    conceptOutput.innerHTML = budgetObj.concept;
    baseOutput.innerHTML = budgetObj.baseImp + eur;
    iRPFOutput.innerHTML = budgetObj.irpf + percent;
    iVAOutput.innerHTML = budgetObj.iva + percent;;
    totalOutput.innerHTML = calcTotal(budgetObj.baseImp) + eur;
    

}
const showBudgetSection = function(){
    budgetNodo.classList.add('section__budget');
    budgetNodo.classList.remove('hide');
};


function submit(evt){
    evt.preventDefault();
    c('Budget creado');
    generateBudget();
    printBudget(budgetObj);
    showBudgetSection();
    //window.print();
}