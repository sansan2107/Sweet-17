document.getElementById('nameForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    console.log('Form submitted'); // Debugging log

    // Get the entered name and trim any extra spaces
    const name = document.getElementById('nameInput').value.trim();
    console.log('Entered name:', name); // Debugging log

    // List of acceptable names (case insensitive)
    const acceptedNames = ['Geca', 'Lie', 'Agatha', 'Hana', 'Ketrin', 'Wawa', 'Kheren', 'Isna', 'Andrio'];

    // Check if the entered name is in the accepted list
    if (acceptedNames.map(n => n.toLowerCase()).includes(name.toLowerCase())) {
        console.log('Name accepted'); // Debugging log
        switch (name.toLowerCase()) {
            case 'geca':
                window.location.href = 'file:///C:/Users/USER/OneDrive/Desktop/coding/html%202.0/images/envelope/envelope%20Ema/envelope-Ema.html';
                break;
            case 'lie':
                window.location.href = 'file:///C:/Users/USER/OneDrive/Desktop/coding/html%202.0/images/envelope/envelope%20Lie/envelope-Lie.html';
                break;
            case 'agatha':
                window.location.href = 'file:///C:/Users/USER/OneDrive/Desktop/coding/html%202.0/images/envelope/envelope%20Agatha/envelope-Agatha.html';
                break;
            case 'hana':
                window.location.href = 'file:///C:/Users/USER/OneDrive/Desktop/coding/html%202.0/images/envelope/envelope%20Hana/envelope-Hana.html';
                break;
            case 'ketrin':
                window.location.href = 'file:///C:/Users/USER/OneDrive/Desktop/coding/html%202.0/images/envelope/envelope%20Ketrin/envelope-Ketrin.html';
                break;
            case 'wawa':
                window.location.href = 'file:///C:/Users/USER/OneDrive/Desktop/coding/html%202.0/images/envelope/envelope%20Wawa/envelope-Wawa.html';
                break;
            case 'kheren':
                window.location.href = 'file:///C:/Users/USER/OneDrive/Desktop/coding/html%202.0/images/envelope/envelope%20Kheren/envelope-Kheren.html';
                break;
            case 'isna':
                window.location.href = 'file:///C:/Users/USER/OneDrive/Desktop/coding/html%202.0/images/envelope/envelope%20Isna/envelope-Isna.html';
                break;
            case 'andrio':
                window.location.href = 'file:///C:/Users/USER/OneDrive/Desktop/coding/html%202.0/images/envelope/envelope%20ka%20Andrio/envelope-Ka%20A.html';
                break;
            default:
                console.error('Unexpected case'); // Debugging log
                alert('Error 404.');
                break;
        }
    } else {
        console.error('Name not recognized'); // Debugging log
        alert('Who are you?');
    }
});
