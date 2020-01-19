using System.ComponentModel.DataAnnotations;

namespace DatingApp.API.Dtos
{
    public class UserDto
    {
        [Required]
        public string UserName { get; set; }
        [Required]
        [StringLength(200, MinimumLength = 4, ErrorMessage = "Password should be minimum 4 chars")]
        public string Password { get; set; }

    }
}