



        function validateForm(){
            let name = document.getElementById("nameinp").value;
            let email = document.getElementById("emailinp").value;
            let subject = document.getElementById("subjectinp").value;
            let message = document.getElementById("messageinp").value;
            if(name==""||name==null || name.length<4 )
            {
              alert("name must be filled out");
              return false;
            }
            else if(email==""||email==null)
            {
              alert("email must be filled out");
              return false;
            }
            else if(subject==""||subject==null)
            {
              alert("subject must be filled out");
              return false;
            }
            else if(message==""||message==null)
            {
              alert("message must be filled out");
              return false;
            }
      }
   