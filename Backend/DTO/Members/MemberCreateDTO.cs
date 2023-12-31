﻿namespace Backend.DTO.Members
{
    public class MemberCreateDTO
    {
        public DateTime dob { get; set; }
        public string gender { get; set; }
        public string nationality { get; set; }
        public string? Nation { get; set; }
        public string? TemporaryAddress { get; set; }
        public string residenceAddress { get; set; }
        public string IdentityCardNumber { get; set; }
        public DateTime cardProvidedDate { get; set; }
        public string cardProvidedLocation { get; set; }
        public bool? isPaid { get; set; }
        public string CourseId { get; set; }
        public int UserId { get; set; }

        //User
        public string? FullName { get; set; }
        public string? Phone { get; set; }
        public string? Email { get; set; }
    }
}
