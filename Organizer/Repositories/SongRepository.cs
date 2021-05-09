using Organizer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
namespace Organizer.Repositories
{
    public class SongRepository : IRepository<Song>
    {
        private readonly organizerContext db = new organizerContext();
        public void Add(Song entity)
        {
            db.Songs.Add(entity);
        }
        public void Delete(Song entity)
        {
            db.Songs.Remove(entity);
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