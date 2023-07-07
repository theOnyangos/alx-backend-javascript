/// <reference path="./Teacher.ts" />
/// <reference path="./Subject.ts" />
/// <reference path="./Cpp.ts" />
/// <reference path="./React.ts" />

namespace Subjects {
  export interface Teacher {
    experienceTeachingJava?: number
  }

  export class Java extends Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for Java';
    }

    getAvailableTeacher() {
      return !!this.teacher.experienceTeachingJava ? `Available Teacher: ${this.teacher.firstName}` : 'No available teacher';
    }
  }
}