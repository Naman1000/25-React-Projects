
const dummyApiResponse = {
    showLightAndDarkMode : true,
     showRandomColorGeneratotr : true,
    showAccordian : true,
    showTreeView : true,

}

function featureFlagsDataServiceCall(){
    
    return new Promise((resolve,reject)=> {
        if(dummyApiResponse) setTimeout(resolve(dummyApiResponse), 500);
        else reject("some error occured ! Please try again")
    })
}

export default featureFlagsDataServiceCall;