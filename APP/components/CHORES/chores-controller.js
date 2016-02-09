app.controller('choresController',function($scope){
    $scope.test = "This is a test";
    
    $scope.Chores=[{
        task:'Write Thank You Notes',
        dueDate: Date.now(),
        responsibleParty:'Vina',
        estTime: 45
    }, 
    {
        task:'Make Bed',
        dueDate: Date.now(),
        responsibleParty:'Vina',
        estTime: 2
    }, 
        {
        task:'Fold laundry',
        dueDate: Date.now(),
        responsibleParty:'Vina',
        estTime: 20
    }, 
        {
        task:'Set meeting agenda',
        dueDate: Date.now(),
        responsibleParty:'Kevin',
        estTime: 30
    }, 
        {
        task:'Unload dishwasher',
        dueDate: Date.now(),
        responsibleParty:'Vina',
        estTime: 10
    }, 
    ]
    
    $scope.addNewChore = function(){
        $scope.Chores.push($scope.newTask);
        $scope.newTask = "";
    }
    
    $scope.deleteChore = function(i){
        $scope.Chores.splice(i,1)
    }
})