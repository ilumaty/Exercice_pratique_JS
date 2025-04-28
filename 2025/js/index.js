		/* j'ai commenté l'ancienne function JQuery remove
		// Animer l'affichage du contenu de la section About
		function showmore() {
           let $var1 = document.getElementById('aboutText');
         if ($var1.style.height === 220) {
           $var1.toggle({
             "height": "60px"
           });
           this.innerText('+'); // correction en innerText
         } else {
           $var1.toggle({
             "height": "auto"
           });
           this.innerText('-'); // correction en innerText
         }
       }*/
		// relis l'id about aboutButton au click showMore
		document.getElementById('aboutButton').addEventListener('click', showMore);

		// function qui exécute quand click + ou -
		function showMore(event) {
			// add variable qui reprend le txt
			let aboutText = document.getElementById('aboutText');
			// add variable qui reprends le button que l'user click
			let button = event.target;

			// si height est bien 220px
			if (aboutText.style.height === '220px') {
				// si oui reduction à 60px
				aboutText.style.height = '60px';
				// change le txt en button +
				button.innerText = '+';
			} else {
				// s'il grandit + que 220px n'affiche plus de txt
				aboutText.style.height = '220px';
				// change txt en button -
				button.innerText = '-';
			}
		}


		/* V1 supprimer
	// Afficher la lightbox avec l'image ciblée
	function lightbox(){
		
	    document.getElementById('lightbox').style.display = 'block';

		//document.style.overflow = 'hidden';
		document.body.style.overflow = 'hidden';
	}
	*/

		// add quand clicker sur le button avec les img
		function lightbox(button) {
			let lightbox = document.getElementById('lightbox');
			let lightboxImg = document.getElementById('lightbox-img');

			let img = button.nextElementSibling; // img après le button

			lightboxImg.src = img.src; // reprend la src img
			lightbox.style.display = 'block';
		}

		// Fermer la lightbox en cliquant dessus
		document.getElementById('lightbox').addEventListener('click', function () {
			this.style.display = 'none';
		});

		/*
        // Fermer la lightbox lorsque l'on clique dessus
        document.getElementById('lightbox').addEventListener('click', function() {
        });
        */

// Liste des expressions régulières nécessaires
		let nom = /^[A-Za-z]+$/, // add variable en let au lieu de var
			prenom = /^[A-Za-z]*$/,
			age = /^[0-9]+$/,
			mail = /^[a-z0-9][a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;// correction Regex . add @, \, 2,4



		// add variable input
		let inputs = document.getElementsByTagName('input');

		// correction en boucle + variable input intégrée
		for (let input of inputs) {
			input.addEventListener('blur', function (e) {
				if (!this.value) {
					this.style.border = 'red 1px solid';
				} else {
					this.style.border = 'lightgreen 1px solid';
				}
			})
		}

		/* j'ai commenté l'ancienne function
        // Test la validité d'un champ une fois que l'on change le focus sur un autre élément
        document.getElementsByTagName('input').add('blur', function() {
          if (!value) {
            this.style.border = 'red 1px solid';
          } else {
            this.style.border = 'lightgreen 1px solid';
          }
        });
        */


		// function de validation de form.
		function formValidation() {
			let nomForm = document.getElementById('nom').value.trim();
			let prenomForm = document.getElementById('prenom').value.trim();
			let ageForm = document.getElementById('age').value.trim();
			let emailForm = document.getElementById('email').value.trim();

			// condition si pas rempli retour faux et msg erreur
			if (!nomForm || !prenomForm || !ageForm || !emailForm) {
				alert('Veuillez les champs SVP'); // en alert log
				return false;
			}

			// add mail si pas bon format
			let emailReg = /^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i;
			if (!emailReg.test(emailForm)) {
				alert('Email invalide'); // en alert log
				return false;
			}

			// condition si bien rempli retour vrai et msg success
			alert('Formulaire bien envoyé'); // en alert log
			return true; // Autorise l'envoi
		}
