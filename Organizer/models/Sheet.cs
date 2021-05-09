using System;
using System.Collections.Generic;

#nullable disable

namespace Organizer.models
{
    public partial class Sheet
    {
        public int Id { get; set; }
        public int SongId { get; set; }
        public int InstrumentId { get; set; }
        public int Page { get; set; }
        public string Path { get; set; }

        public virtual Instrument Instrument { get; set; }
        public virtual Song Song { get; set; }
    }
}
