document.getElementById('noteForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const noteText = document.getElementById('noteText').value;
    const photoUpload = document.getElementById('photoUpload').files[0];
    const date = new Date();
    const formattedDate = date.toLocaleString();

    const noteContainer = document.createElement('div');
    noteContainer.className = 'note';

    const noteContent = document.createElement('p');
    noteContent.textContent = noteText;

    const noteDate = document.createElement('small');
    noteDate.textContent = `Date: ${formattedDate}`;

    noteContainer.appendChild(noteContent);
    noteContainer.appendChild(noteDate);

    if (photoUpload) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const noteImage = document.createElement('img');
            noteImage.src = e.target.result;
            noteContainer.appendChild(noteImage);
        }
        reader.readAsDataURL(photoUpload);
    }

    document.getElementById('notesContainer').appendChild(noteContainer);

    // Reset form
    document.getElementById('noteForm').reset();
});
