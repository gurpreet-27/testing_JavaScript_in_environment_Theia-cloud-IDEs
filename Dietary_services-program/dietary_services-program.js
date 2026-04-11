let role = "Enrolled Member";

if (role === "Employee" || role === "Enrolled Member") {
    
    if (role === "Employee") {
        console.log("Access granted: Dietary Services available.");
    } else {
        console.log("Access granted: Dietary Services + Dietician consultation available.");
    }

} else {
    
    if (role === "Subscriber") {
        console.log("Partial access to Dietary Services.");
    } else if (role === "Non-Subscriber") {
        console.log("Access denied: Please enroll or subscribe first.");
    } else {
        console.log("Invalid role.");
    }

}