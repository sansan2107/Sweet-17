document.getElementById('nameForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    console.log('Form submitted'); // Debugging log

    // Get the entered name and trim any extra spaces
    const name = document.getElementById('nameInput').value.trim();
    console.log('Entered name:', name); // Debugging log

    // List of acceptable names (case insensitive)
    const acceptedNames = ['Geca', 'Ema', 'Lie', 'Agatha', 'Hana', 'Ketrin', 'Wawa', 'Kheren', 'Isna', 'Andrio', 'Tyo'];

    // Check if the entered name is in the accepted list
    if (acceptedNames.map(n => n.toLowerCase()).includes(name.toLowerCase())) {
        console.log('Name accepted'); // Debugging log
        switch (name.toLowerCase()) {
            case 'geca':
            case 'ema':
                window.location.href = 'https://sansan2107.github.io/Sweet-17/images/envelope/envelope Ema/envelope-Ema.html';
                break;
            case 'lie':
                window.location.href = 'https://sansan2107.github.io/Sweet-17/images/envelope/envelope Lie/envelope-Lie.html';
                break;
            case 'agatha':
                window.location.href = 'https://sansan2107.github.io/Sweet-17/images/envelope/envelope Agatha/envelope-Agatha.html';
                break;
            case 'hana':
                window.location.href = 'https://sansan2107.github.io/Sweet-17/images/envelope/envelope Hana/envelope-Hana.html';
                break;
            case 'ketrin':
                window.location.href = 'https://sansan2107.github.io/Sweet-17/images/envelope/envelope Ketrin/envelope-Ketrin.html';
                break;
            case 'wawa':
                window.location.href = 'https://sansan2107.github.io/Sweet-17/images/envelope/envelope Wawa/envelope-Wawa.html';
                break;
            case 'kheren':
                window.location.href = 'https://sansan2107.github.io/Sweet-17/images/envelope/envelope Kheren/envelope-Kheren.html';
                break;
            case 'isna':
                window.location.href = 'https://sansan2107.github.io/Sweet-17/images/envelope/envelope Isna/envelope-Isna.html';
                break;
            case 'andrio':
                window.location.href = 'https://sansan2107.github.io/Sweet-17/images/envelope/envelope ka Andrio/envelope-Ka A.html';
                break;
            case 'tyo':
                window.location.href = 'https://sansan2107.github.io/Sweet-17/images/envelope/envelope Tyo/envelope-Tyo.html';
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
