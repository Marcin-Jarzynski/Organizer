using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace Organizer.Models
{
    public partial class organizerContext : DbContext
    {
        public organizerContext()
        {
        }

        public organizerContext(DbContextOptions<organizerContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Instrument> Instruments { get; set; }
        public virtual DbSet<Sheet> Sheets { get; set; }
        public virtual DbSet<Song> Songs { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseMySQL("server=127.0.0.1;uid=root;database=organizer");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Instrument>(entity =>
            {
                entity.ToTable("instrument");

                entity.Property(e => e.Id).HasColumnType("int(11)");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(256);
            });

            modelBuilder.Entity<Sheet>(entity =>
            {
                entity.ToTable("sheet");

                entity.HasIndex(e => e.InstrumentId, "instrumentId");

                entity.HasIndex(e => e.SongId, "songId");

                entity.Property(e => e.Id).HasColumnType("int(11)");

                entity.Property(e => e.InstrumentId)
                    .HasColumnType("int(11)")
                    .HasColumnName("instrumentId");

                entity.Property(e => e.Page)
                    .HasColumnType("int(2)")
                    .HasColumnName("page");

                entity.Property(e => e.Path)
                    .IsRequired()
                    .HasMaxLength(256)
                    .HasColumnName("path");

                entity.Property(e => e.SongId)
                    .HasColumnType("int(11)")
                    .HasColumnName("songId");

                entity.HasOne(d => d.Instrument)
                    .WithMany(p => p.Sheets)
                    .HasForeignKey(d => d.InstrumentId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("sheet_ibfk_1");

                entity.HasOne(d => d.Song)
                    .WithMany(p => p.Sheets)
                    .HasForeignKey(d => d.SongId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("sheet_ibfk_2");
            });

            modelBuilder.Entity<Song>(entity =>
            {
                entity.ToTable("song");

                entity.Property(e => e.Id).HasColumnType("int(11)");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(256);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
