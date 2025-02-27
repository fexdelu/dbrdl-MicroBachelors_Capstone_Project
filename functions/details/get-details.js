var Cloudant = require('@cloudant/cloudant');

/**
  *
  * main() will be run when you invoke this action
  *
  * @param Cloud Functions actions accept a single parameter, which must be a JSON object.
  *
  * @return The output of this action, which must be a JSON object.
  *
  */

 if (require.main === module) {
  var params = {
    CLOUDANT_URL: "https://c1814c9d-49ff-488e-8be9-21eaa9214c7c-bluemix.cloudantnosqldb.appdomain.cloud",
    CLOUDANT_APIKEY: "IukMHXbwqVIr_OEbs5xGIiXBiTYwdg2lVOodqpjzVLHn",
    type: "reviews",
    date: "04/05/20",
    dealerId: 13,
  };

  main(params);
}

// Invoke with parameters at IBM
// {
//   "CLOUDANT_URL":"https://c1814c9d-49ff-488e-8be9-21eaa9214c7c-bluemix.cloudantnosqldb.appdomain.cloud",
//   "CLOUDANT_APIKEY":"IukMHXbwqVIr_OEbs5xGIiXBiTYwdg2lVOodqpjzVLHn",
//   "type":"timeslots",
//   "date":"04/05/20",
//   "dealerId":13
// }

function main(params) {
  return new Promise((resolve, reject) => {
    if (params && params.type === "reviews") {
      getReviews(params).then(reviews => {
        console.log(reviews.docs)
        resolve({"reviews":reviews.docs})
      });
    } else if (params && params.type === "timeslots") {
      if (params.date) {
        resolve(getTimeSlots(params.date));
      } else {
        resolve(getTimeSlots(new Date()));
      }
    }
  })
}

function getReviews(params) {
  console.log(params.CLOUDANT_URL);
  console.log(params.CLOUDANT_APIKEY);
  let reviews = [];
  const cloudant = Cloudant({ url: params.CLOUDANT_URL, plugins: { iamauth: { iamApiKey: params.CLOUDANT_APIKEY } } });
  const db = cloudant.db.use('reviews')

  if(params.dealerId) {
    result =  db.find({ selector: { dealership: parseInt(params.dealerId) }}) ;
  }
  else {
    result =  db.find({ selector: { dealership: 1 }}) ;
  }
  return result;
}


function getTimeSlots(date) {

  // ideally the code would look this up in the database, but due to limited time, this function returns some hardcoded values at this time
  const d = new Date(date);

  let result = {
    "arr": [
      {
        "title": `Available time slots for ${date}`,
        "options": [
        ],
        "description": "",
        "response_type": "option"
      }
    ]
  }

  switch (d.getDay()) {
    case 0:
      // Sunday
      // result.day = "Sunday";
      getSlots(result);
      break;
    case 1:
      // Monday
      getSlots(result);
      break;
    case 2:
      // Tue
      getSlots(result);
      break;
    case 3:
      // Wed
      getSlots(result);
      break;
    case 4:
      // Thu
      getSlots(result);
      break;
    case 5:
      // Fri
      getSlots(result);
      break;
    case 6:
      // Sat
      getSlots(result);
      break;
    default:
      result = {
        error: "Something went wrong!"
      }
      break;
  }
  console.log(result.arr[0].title);
  return result;
}



function getWeekend(result) {
 //Implement it if you want to challenge yourself.
}

function getSlots(result) {
  result.arr[0].options.push(
    {
      "label": "8:00am - 9:00am",
      "value": {
        "input": {
          "text": "8:00am - 9:00am"
        }
      }
    });

  result.arr[0].options.push({
    "label": "11:00am - 1:00pm",
    "value": {
      "input": {
        "text": "11:00am - 1:00pm"
      }
    }
  });

  return result;
}

exports.main = main;

