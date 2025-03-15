//date today fuction

function DateToday() {
    const today = new Date().toLocaleDateString("en-PH", {
        weekday: "long", 
        year: "numeric",  
        month: "long",  
        day: "numeric"  
    });

    return <div>{today}</div>;
}

export default DateToday;
