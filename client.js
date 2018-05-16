const atticus = { name: 'Atticus', employeeNumber: '2405', annualSalary: '47000', reviewRating: 3 };
const jem = { name: 'Jem', employeeNumber: '62347', annualSalary: '63500', reviewRating: 4 };
const scout = { name: 'Scout', employeeNumber: '6243', annualSalary: '74750', reviewRating: 5 };
const robert = { name: 'Robert', employeeNumber: '26835', annualSalary: '66000', reviewRating: 1 };
const mayella = { name: 'Mayella', employeeNumber: '89068', annualSalary: '35000', reviewRating: 2 };

const employees = [ atticus, jem, scout, robert, mayella ];

class Employee{
  constructor( name, employeeNumber, annualSalary, reviewRating ){
    this.name = name;
    this.employeeNumber = employeeNumber;
    this.annualSalary = annualSalary;
    this.reviewRating = reviewRating;
  } // end constructor
} // end Employee class

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

$(document).ready(function() {
  $('#buttonGo').on( 'click', function() {
    for (let i = 0; i < newEmployees.length; i++) {
    $('#listDiv').append( '<h2>'  + newEmployees[i].name + '</h2>' );
    $('#listDiv').append( '<li>Bonus Percent: ' + newEmployees[i].bonusPercentage*100 + '%</li>' );
    $('#listDiv').append( '<li>Total Compensation: ' + newEmployees[i].totalCompensation + '</li>' );
    $('#listDiv').append( '<li>Total Bonus: ' + newEmployees[i].totalBonus + '</li>' );
    }
    $('#buttonGo').remove();
  });
});

console.log( employees );

let newEmployees = [];

function bonusCalc( employee ){
    let bonusAmount = 0;

    if ( employee.reviewRating <= 2 ) {
    return 0;
    }
    else if ( employee.reviewRating == 3 ) {
    bonusAmount= 0.04;
    }
    else if ( employee.reviewRating == 4 ) {
    bonusAmount= 0.06;
    }
    else {
    bonusAmount= 0.1;
    }

    if ( employee.employeeNumber.length == 4 ) {
    bonusAmount+= 0.05;
    }

    if ( employee.annualSalary > 65000 ) {
      bonusAmount -= 0.01;
    }

    if ( bonusAmount > 0.13) {
      bonusAmount = 0.13;
    }

    return bonusAmount;

  }

  for ( i=0; i < employees.length; i++ ) {
    let myEmployee = {
      name: employees[i].name,
      bonusPercentage : bonusCalc( employees[i] ),
      totalCompensation: parseInt( employees[i].annualSalary ) + employees[i].annualSalary*bonusCalc( employees[i] ),
      totalBonus: employees[i].annualSalary*bonusCalc(employees[i])
    };
    newEmployees.push(myEmployee);
    console.log( myEmployee );
  }

console.log(newEmployees);
