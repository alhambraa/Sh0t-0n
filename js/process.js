var app = new function() {
    this.el = document.getElementById('comments');
    this.comments = ['Aliquam principes deterruisset cum et, vel an eius equidem. Id quando legimus inermis eum, cibo consul democritum cum te, cu cum suas laudem graeci. Bonorum gloriatur signiferumque an pro.',
                    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
                    ];
    this.Count = function(data) {
        var el = document.getElementById('counter');
        var name = 'comments';
        if (data) {
            if (data > 1) {
                name = 'comment';
            }
            el.innerHTML = data + ' ' + name;
        } else {
            el.innerHTML = 'No ' + name;
        }
    };
    this.FetchAll = function() {
        var data = '';

        if (this.comments.length > 0) {
            for (i = 0; i < this.comments.length; i++) {
                data += '<tr>';
                data += '<td>' + (i + 1) + '</td>';
                data += '<td>' + this.comments[i] + '</td>';
                data += '</tr>';
            }
        }
        this.Count(this.comments.length);
        return this.el.innerHTML = data;
    };
    this.Add = function() {
        el = document.getElementById('komentar');
        var comment = el.value;
        if (comment) {
            this.comments.push(comment.trim());
            el.value = '';
            this.FetchAll();
            Swal.fire(
            'Good job!',
            'Your Message has been Saved',
            'success'
            );
        }
    };
}
app.FetchAll();