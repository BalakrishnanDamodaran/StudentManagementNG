using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Models
{
    public class Course
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public int Fees { get; set; }
        public string Duration  { get; set; }
        public string Tutor { get; set; }
    }
}
