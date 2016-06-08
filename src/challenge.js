let data = require('../data/crm.json')
exports.companies = function(data) {
  let companies = data.companies.map((company) => {
    let result = {};
    result.name = company.name
    result.employees = [];
    data.people.forEach(function(person) {
      person.employments.forEach(function(employment) {
        if (company.id === employment.company_id) {
          result.employees.push({
            "id": person.id,
            "first_name": person.first_name,
            "last_name": person.last_name,
            "title": employment.title
          })
        }
      })
    })
    return result;
  })
  return companies;
}



exports.employments = function(data) {
  let result = [];
  data.companies.map((company) => {
    data.people.map((person) => {
      person.employments.map((employment) => {
        if (company.id === employment.company_id) {
          result.push({
            "company_id": company.id,
            "company_name": company.name,
            "person_first_name": person.first_name,
            "person_id": person.id,
            "person_last_name": person.last_name,
            "title": employment.title
          })
        }
      })
    })
  })
  return result;
}


exports.peopleWithoutEmployments = function(data) {
  let result = [];
    data.people.map((person) => {
        if (!person.employments.length) {
          result.push({
            "id": person.id,
            "first_name": person.first_name,
            "last_name": person.last_name,
          })
        }
    })
  return result;
}
