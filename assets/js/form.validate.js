$(document).ready(function () {
    ;(function () {
        [].slice.call( document.querySelectorAll('form') ).forEach(function (form) {
            form.addEventListener('submit', function (e) {
                e.preventDefault();
                var submit = true;

                var requiredInputArr = [].slice.call(this.querySelectorAll('[required]'));
                var checkboxGroupArr = [].slice.call(this.querySelectorAll('.checkbox-group'));
                var radioGroupArr = [].slice.call(this.querySelectorAll('.radio-group'));
                var email = this.querySelector('input[required][type="email"]');
                var pass = this.querySelector('input[name="password"][required]');
                var passConf = this.querySelector('input[name="confirmPassword"][required]');

                // Method add & remove errors
                var generateError = function (text) {
                    var error = document.createElement('div');
                    error.className = 'error';
                    error.innerHTML = text;
                    return error;
                };
                var removeValidate = function( form ) {
                    var errors = [].slice.call(form.querySelectorAll('.error'));
                    errors.forEach( error => error.remove() );
                };
                var showValidateError = function ( html, text ) {
                    submit = false;
                    html.classList.add('invalid');
                    var error = generateError( text );
                    html.parentElement.appendChild(error);
                };

                // Methods

                var inputs ={
                    length: function (input) {
                        input.parentElement.classList.remove('invalid');
                        input.classList.remove('invalid');
                        if ( !input.value.length ) {
                            showValidateError(input,'Required field');
                        }
                    },
                    email: function (input) {
                        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                        if ( !re.test(String(input.value).toLowerCase()) ) {
                            showValidateError(input,'test@test.com');
                        }
                    },
                    password: function () {
                        pass.value !== passConf.value ? showValidateError( passConf, 'Passwords does not match' ) : '';
                    },
                    checkboxRadio: function ( boxGroupArr ) {
                        var key;
                        boxGroupArr.forEach( function (boxGroup) {
                            var boxArr = [].slice.call( boxGroup.querySelectorAll('[required]') );
                            key = boxArr.length ? false : true;
                            boxArr.forEach(box => box.checked ? key = true : '');

                            !key ? showValidateError( boxGroup, 'Required field' ) : '';
                        } );
                    }
                };

                // Delete validate

                removeValidate( form );

                // Length

                requiredInputArr.forEach( function (input) {
                    inputs.length(input);
                } );

                // Email

                inputs.email(email);

                // Password

                if ( pass != null ) inputs.password();

                // Checkbox

                inputs.checkboxRadio( checkboxGroupArr );

                // Radio

                inputs.checkboxRadio( radioGroupArr );

                // Submit

                submit ? form.submit() : '';
            });

            form.addEventListener('reset', function (e) {
                var removeValidate = function( form ) {
                    var invalid = [].slice.call(form.querySelectorAll('.invalid'));
                    var errors = [].slice.call(form.querySelectorAll('.error'));
                    errors.forEach( error => error.remove() );
                    invalid.forEach( invalid => invalid.classList.remove('invalid') );
                };

                removeValidate( form );
            })
        });
    })();

});