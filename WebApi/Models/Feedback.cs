using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Models
{
    public class Feedback
    {
        [Key]
        public string Id { get; set; }
        public string Name { get; set; }
        public string  Msg { get; set; }
        public string Email { get; set; }
    }
}
