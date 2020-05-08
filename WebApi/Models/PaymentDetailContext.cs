using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApi.Models;

namespace WebApi.Models
{
    public class PaymentDetailContext : DbContext
    {
        public PaymentDetailContext(DbContextOptions<PaymentDetailContext> options) : base(options)
        { }

        public DbSet<PaymentDetail> PaymentDetails { get; set; }

        public DbSet<WebApi.Models.Employee> Employee { get; set; }

        public DbSet<WebApi.Models.Feedback> Feedback { get; set; }

        public DbSet<WebApi.Models.Student> Student { get; set; }

        public DbSet<WebApi.Models.Course> Course { get; set; }
    }

}
