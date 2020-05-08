using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Models
{
    public class Student
    {
        [Key]
        public string Id{ get; set; }
        public string  Name { get; set; }
        public  string Address { get; set; }
        public  int Age{ get; set; }
        public int  M1 { get; set; }
        public int M2 { get; set; }
      


    }
}
