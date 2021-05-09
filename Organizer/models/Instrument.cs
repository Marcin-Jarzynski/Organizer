using System;
using System.Collections.Generic;

#nullable disable

namespace Organizer.Models
{
    public partial class Instrument
    {
        public Instrument()
        {
            Sheets = new HashSet<Sheet>();
        }

        public int Id { get; set; }
        public string Name { get; set; }

        public virtual ICollection<Sheet> Sheets { get; set; }
    }
}
