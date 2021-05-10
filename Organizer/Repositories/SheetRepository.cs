using Organizer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
namespace Organizer.Repositories
{
    public class SheetRepository : IRepository<Sheet>
    {
        private readonly organizerContext db = new organizerContext();
        public void Add(Sheet entity)
        {
            db.Sheets.Add(entity);
            db.SaveChanges();
        }
        public void Delete(Sheet entity)
        {
            db.Sheets.Remove(entity);
        }

        public IEnumerable<Sheet> GetAll()
        {
            return db.Sheets.ToList();

        }
        //public Song GetDetail(Func<Song, bool> predicate)
        //{
        //    return db.Songs.FirstOrDefault(predicate);
        //}
        //public IEnumerable<Song> GetOverview(Func<Song, bool> predicate = null)
        //{
        //    if (predicate != null)
        //        return db.Songs.Where(predicate);
        //    return db.Songs;
        //}
        //internal void SaveChanges()
        //{
        //    db.SaveChanges();
        //}
    }
}