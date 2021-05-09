using System.Collections.Generic;

namespace Organizer.models
{
    public partial class Song
    {
        public Song()
        {
            Sheets = new HashSet<Sheet>();
        }

        public int Id { get; set; }
        public string Name { get; set; }

        public virtual ICollection<Sheet> Sheets { get; set; }
    }
}
