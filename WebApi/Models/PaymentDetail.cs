using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Models
{
    public class PaymentDetail
    {
        [Key]
        public int PMId { get; set; }
       // [Required]
       // [Column(TypeName="nvarchar(100)")]
        public string CardOwnerName { get; set; }
       // [Required]
        //[Column(TypeName = "varchar(15)")]
        public string CardNumber { get; set; }
       // [Required]
       // [Column(TypeName = "varchar(10)")]
        public string ExpirationDate { get; set; }
       // [Required]
       // [Column(TypeName = "varchar(5)")]
        public string CVV { get; set; }

    }
}
