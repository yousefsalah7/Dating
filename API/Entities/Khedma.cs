using System.ComponentModel.DataAnnotations;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace API.Entities
{
    public class Khedma
    {
        [Key] 
        [DatabaseGenerated(System.ComponentModel.DataAnnotations.Schema.DatabaseGeneratedOption.Identity)] 
        public int Id { get; set; }
        public string firstName { get; set; }
        public string lastName { get; set; }
        public string email { get; set; }
        public string mobile { get; set; }
        public string nationalId { get; set; }
        public string address { get; set; }
        public string address2 { get; set; }
        public string type { get; set; }
        public string countryID { get; set; }
        public Boolean receiveNewsLetters { get; set; }
    }
}